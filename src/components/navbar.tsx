"use client";

import { useAdminContext } from "@/app/context/context-provider";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { MdAccountCircle, MdConstruction } from "react-icons/md";

const Navbar = () => {
    const { isAdmin, setIsAdmin } = useAdminContext();

    function changeAdminStatus() {
        setIsAdmin(!isAdmin);
    }

    return (
        <header className='flex items-center justify-around p-3 bg-slate-800 text-slate-200'>
            <h1 className='text-xl font-medium'>Village Rental System</h1>

            <div className='flex items-center gap-7'>
                {isAdmin ? (
                    <>
                        <Link
                            className='flex flex-col items-center gap-1 transition hover:text-white'
                            href='/'
                        >
                            <div className='text-2xl'>
                                <MdConstruction />
                            </div>
                            <span className='text-xs'>All Equipments</span>
                        </Link>
                        <Link
                            className='flex flex-col items-center gap-1 transition hover:text-white'
                            href='/customers'
                        >
                            <div className='text-2xl'>
                                <MdAccountCircle />
                            </div>

                            <span className='text-xs'>View Customers</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            className='flex flex-col items-center gap-1 transition hover:text-white'
                            href='/'
                        >
                            <div className='text-2xl'>
                                <MdConstruction />
                            </div>
                            <span className='text-xs'>
                                Available Equipments
                            </span>
                        </Link>

                        <Link
                            className='flex flex-col items-center gap-1 transition hover:text-white'
                            href='/your-rentals'
                        >
                            <div className='text-2xl'>
                                <FaBagShopping />
                            </div>
                            <span className='text-xs'>Your Rentals</span>
                        </Link>

                        <Link
                            className='flex flex-col items-center gap-1 transition hover:text-white'
                            href='/account'
                        >
                            <div className='text-2xl'>
                                <MdAccountCircle />
                            </div>

                            <span className='text-xs'>Account</span>
                        </Link>
                    </>
                )}

                <div className='w-[2px] h-8 bg-slate-300 rounded-full'></div>
                {isAdmin ? (
                    <div className='flex flex-col items-center gap-1 cursor-pointer'>
                        <span className='text-xs' onClick={changeAdminStatus}>
                            Switch to user
                        </span>
                    </div>
                ) : (
                    <div className='flex flex-col items-center gap-1 cursor-pointer'>
                        <span className='text-xs' onClick={changeAdminStatus}>
                            Switch to admin
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
