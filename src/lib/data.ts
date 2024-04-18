"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

interface AccountInfo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactPhone: string;
}

interface EquipmentInfo {
    id: number;
    categoryId: number;
    category: {
        id: number;
        description: string;
    };
    name: string;
    dailyRentalCost: number;
    description: string;
}

interface NewCategoryFormProps {
    description: string;
}

export async function getEquipments() {
    try {
        const data = await prisma.equipment.findMany({
            include: {
                category: {
                    select: {
                        description: true,
                    },
                },
                rentals: {
                    include: {
                        customer: true,
                    },
                },
            },
        });
        return data;
    } catch (error) {
        console.error("Error fetching equipments:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function createRental(equipmentId: number, cost: number) {
    const customerId = 1;

    try {
        const customer = await prisma.customer.findUnique({
            where: {
                id: customerId,
            },
        });

        if (customer?.banned) {
            throw new Error("Customer is banned and cannot rent equipment.");
        }

        const rental = await prisma.rental.create({
            data: {
                rentalDate: new Date(),
                cost: cost,
                equipmentId: equipmentId,
                customerId: customerId,
            },
        });

        return rental;
    } catch (error) {
        console.error("Error creating rental:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getRentals() {
    try {
        const data = await prisma.rental.findMany({
            include: {
                equipment: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        dailyRentalCost: true,
                        category: {
                            select: {
                                description: true,
                            },
                        },
                    },
                },
            },
        });
        return data;
    } catch (error) {
        console.error("Error fetching rentals:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function returnRental(rentalId: number): Promise<void> {
    try {
        const rental = await prisma.rental.findUnique({
            where: {
                id: rentalId,
            },
            include: {
                equipment: true,
            },
        });

        if (!rental || !rental.equipment) {
            throw new Error(
                "Rental not found or equipment not associated with rental"
            );
        }

        const rentalDuration = Math.max(
            1,
            Math.ceil(
                (new Date().getTime() - rental.rentalDate.getTime()) /
                    (1000 * 3600 * 24)
            )
        );

        const totalCost = rental.equipment.dailyRentalCost * rentalDuration;

        await prisma.rental.update({
            where: {
                id: rentalId,
            },
            data: {
                returnDate: new Date(),
                cost: totalCost,
            },
        });

        revalidatePath("/your-rentals");
    } catch (error) {
        console.error("Error returning rental:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAccountInfo() {
    try {
        const data = await prisma.customer.findUnique({
            where: {
                id: 1,
            },
        });
        return data;
    } catch (error) {
        console.error("Error fetching account info:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateAccountInfo(
    updatedAccountInfo: AccountInfo
): Promise<void> {
    try {
        await prisma.customer.update({
            where: {
                id: updatedAccountInfo.id,
            },
            data: {
                firstName: updatedAccountInfo.firstName,
                lastName: updatedAccountInfo.lastName,
                email: updatedAccountInfo.email,
                contactPhone: updatedAccountInfo.contactPhone,
            },
        });

        revalidatePath("/account");
    } catch (error) {
        console.error("Error updating account info:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getEquipmentById(id: string) {
    try {
        const equipment = await prisma.equipment.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                category: true,
            },
        });
        return equipment;
    } catch (error) {
        console.error("Error fetching equipment:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAllCategories() {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateEquipmentInfo(
    updatedEquipmentInfo: EquipmentInfo
): Promise<void> {
    try {
        await prisma.equipment.update({
            where: {
                id: updatedEquipmentInfo.id,
            },
            data: {
                categoryId: updatedEquipmentInfo.categoryId,
                name: updatedEquipmentInfo.name,
                description: updatedEquipmentInfo.description,
                dailyRentalCost: parseFloat(
                    updatedEquipmentInfo.dailyRentalCost.toString()
                ),
            },
        });

        redirect("/");
    } catch (error) {
        console.error("Error updating equipment info:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function createEquipment(
    newEquipmentInfo: EquipmentInfo
): Promise<void> {
    try {
        await prisma.equipment.create({
            data: {
                categoryId: newEquipmentInfo.categoryId,
                name: newEquipmentInfo.name,
                description: newEquipmentInfo.description,
                dailyRentalCost: parseFloat(
                    newEquipmentInfo.dailyRentalCost.toString()
                ),
            },
        });

        redirect("/");
    } catch (error) {
        console.error("Error creating equipment:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function deleteEquipment(id: number): Promise<void> {
    try {
        await prisma.equipment.delete({
            where: {
                id,
            },
        });

        revalidatePath("/");
    } catch (error) {
        console.error("Error deleting equipment:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchAllCustomers() {
    try {
        const customers = await prisma.customer.findMany({
            include: {
                rentals: {
                    include: {
                        equipment: true,
                    },
                },
            },
        });

        return customers;
    } catch (error) {
        console.error("Error fetching customers:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function banCustomer(customerId: number): Promise<void> {
    try {
        await prisma.customer.update({
            where: {
                id: customerId,
            },
            data: {
                banned: true,
            },
        });
        revalidatePath("/customers");
    } catch (error) {
        console.error("Error banning customer:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function unbanCustomer(customerId: number): Promise<void> {
    try {
        await prisma.customer.update({
            where: {
                id: customerId,
            },
            data: {
                banned: false,
            },
        });

        revalidatePath("/customers");
    } catch (error) {
        console.error("Error banning customer:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function createCategory(
    newCategoryData: NewCategoryFormProps
): Promise<void> {
    try {
        await prisma.category.create({
            data: {
                description: newCategoryData.description,
            },
        });

        redirect("/");
    } catch (error) {
        console.error("Error creating category:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
