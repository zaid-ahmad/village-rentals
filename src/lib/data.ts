"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
