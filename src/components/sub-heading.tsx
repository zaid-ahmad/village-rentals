"use client";

import { useAdminContext } from "@/app/context/context-provider";
import { FaPlus } from "react-icons/fa6";

const SubHeading = ({ equipmentsCount }: { equipmentsCount: number }) => {
    const { isAdmin } = useAdminContext();

    return (
        <div className='flex items-center gap-5 py-7'>
            <h2 className='font-medium text-xl'>
                Showing {equipmentsCount} available equipments
            </h2>
            {isAdmin && (
                <button className='flex items-center justify-between gap-1 border-2 border-slate-800 rounded py-2 px-5 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'>
                    <FaPlus />
                    <p className='pl-3 font-medium'>Add new equipment</p>
                </button>
            )}
        </div>
    );
};

export default SubHeading;
