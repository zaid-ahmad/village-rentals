"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEquipments() {
    const data = await prisma.equipment.findMany({
        include: {
            category: {
                select: {
                    description: true,
                },
            },
        },
    });
    return data;
}
