"use client";

import { useAdminContext } from "@/app/context/context-provider";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";

interface IEquipmentCard {
    name: string;
    category: string;
    description: string;
    price: number;
}

const EquipmentCard: React.FC<IEquipmentCard> = ({
    name,
    category,
    description,
    price,
}: IEquipmentCard) => {
    const { isAdmin } = useAdminContext();
    return (
        <div className='max-w-sm shadow p-5 rounded flex flex-col gap-4'>
            <div>
                <h2 className='text-lg font-semibold'>{name}</h2>
                <p className='text-xs'>{category}</p>
            </div>

            <p>{description}</p>

            <div className='flex items-center justify-between'>
                <div className='flex font-bold text-xl'>
                    <span>$</span>
                    <h3>{price}</h3>
                </div>

                {isAdmin ? (
                    <>
                        <Link
                            href={`/equipment/${1}`}
                            className='flex items-center justify-between gap-1 border-2 border-slate-800 rounded py-2 px-5 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'
                        >
                            <MdEdit />
                            <p className='pl-3 font-medium'>Edit</p>
                        </Link>
                        <button className='flex items-center justify-between gap-1 border-2 border-slate-800 rounded py-2 px-5 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'>
                            <MdDelete />
                            <p className='pl-3 font-medium'>Delete</p>
                        </button>
                    </>
                ) : (
                    <button className='flex items-center justify-between gap-1 border-2 border-slate-800 rounded py-2 px-5 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'>
                        <FaPlus />
                        <p className='pl-3 font-medium'>Rent</p>
                    </button>
                )}
            </div>
        </div>
    );
};

export default EquipmentCard;
