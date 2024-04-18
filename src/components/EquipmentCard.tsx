"use client";

import { useAdminContext } from "@/app/context/context-provider";
import { createRental, deleteEquipment } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";

interface IEquipmentCard {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    rented: boolean;
}

const EquipmentCard: React.FC<IEquipmentCard> = ({
    id,
    name,
    category,
    description,
    price,
    rented,
}: IEquipmentCard) => {
    const { isAdmin } = useAdminContext();

    const handleRent = async () => {
        try {
            await createRental(id, price);
            alert("Equipment rented!");
        } catch (error) {
            alert("You are banned from renting equipment.");
            console.error("Error creating rental:", error);
        }
    };

    return (
        <div className='max-w-sm shadow p-5 rounded flex flex-col h-full gap-5'>
            <div>
                <h2 className='text-lg font-semibold'>{name}</h2>
                <p className='text-xs'>{category}</p>
            </div>

            <p className='flex-grow'>{description}</p>

            <div
                className={`mt-auto flex items-center justify-between ${
                    !rented ? "gap-5" : ""
                }`}
            >
                <div className='flex flex-col gap-1'>
                    <p className='text-xs font-medium text-slate-800'>
                        Daily rate
                    </p>
                    <div className='flex font-bold text-xl'>
                        <span>$</span>
                        <h3>{price}</h3>
                    </div>
                </div>

                {isAdmin ? (
                    <div className='flex items-center gap-2 '>
                        <Link
                            href={`/equipment/${id}`}
                            className='flex items-center justify-between gap-1 border-2 text-sm border-slate-800 rounded py-1 px-3 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'
                        >
                            <MdEdit />
                            <p className='font-medium'>Edit</p>
                        </Link>
                        <button
                            onClick={() => deleteEquipment(id)}
                            className='flex items-center justify-between gap-1 border-2 text-sm border-slate-800 rounded py-1 px-3 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'
                        >
                            <MdDelete />
                            <p className='font-medium'>Delete</p>
                        </button>
                    </div>
                ) : !rented ? (
                    <button
                        onClick={handleRent}
                        className='flex items-center justify-between gap-1 border-2 border-slate-800 rounded py-2 px-5 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'
                    >
                        <FaPlus />
                        <p className='pl-3 font-medium'>Rent</p>
                    </button>
                ) : (
                    <p className='text-sm w-1/2 text-center'>
                        You have rented this equipment.
                    </p>
                )}
            </div>
        </div>
    );
};

export default EquipmentCard;
