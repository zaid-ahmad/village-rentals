import React from "react";
import { IoIosReturnLeft } from "react-icons/io";

interface IRentalCard {
    name: string;
    category: string;
    description: string;
    price: number;
    rentedOn: Date;
    returnDate: Date;
}

const RentalCard: React.FC<IRentalCard> = ({
    name,
    category,
    description,
    price,
    rentedOn,
    returnDate,
}: IRentalCard) => {
    function formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${month}/${day}/${year}`;
    }

    return (
        <div className='max-w-sm shadow p-5 rounded flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                    <p className='text-xs'>{category}</p>
                </div>

                <div className='flex font-bold text-xl'>
                    <span>$</span>
                    <h3>{price}</h3>
                </div>
            </div>

            <p>{description}</p>

            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs font-medium text-slate-800'>
                        Rented On
                    </p>
                    <p className='text-sm font-medium'>
                        {formatDate(rentedOn)}
                    </p>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs font-medium text-slate-800'>
                        Return Date
                    </p>
                    <p className='text-sm font-medium'>
                        {formatDate(returnDate)}
                    </p>
                </div>
            </div>

            <div>
                <button className='w-full flex items-center justify-center gap-1 border-2 border-slate-800 rounded py-2 px-5 transition hover:bg-slate-100 hover:border-slate-500 hover:text-slate-700'>
                    <p className='pl-3 font-medium'>Return</p>
                    <div className='text-2xl'>
                        <IoIosReturnLeft />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RentalCard;
