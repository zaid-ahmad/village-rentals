"use client";

import { banCustomer, unbanCustomer } from "@/lib/actions";
import { FaBan } from "react-icons/fa";

const Table = ({ customers }: { customers: any[] }) => {
    function formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${month}/${day}/${year}`;
    }

    return (
        <div className='relative overflow-x-auto shadow sm:rounded-lg'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            Customer ID
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Equipment
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Customer Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Rented On
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Return Date
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Amount
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Status
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Ban Customer
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer: any) =>
                        customer.rentals.map((rental: any, index: any) => (
                            <tr
                                key={`${customer.id}-${index}`}
                                className='bg-white border-b'
                            >
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                                >
                                    {customer.id}
                                </th>
                                <td className='px-6 py-4'>
                                    {rental.equipment.name}
                                </td>
                                <td className='px-6 py-4'>
                                    {customer.firstName} {customer.lastName}
                                </td>
                                <td className='px-6 py-4'>
                                    {rental.rentalDate &&
                                        formatDate(rental.rentalDate)}
                                </td>
                                <td className='px-6 py-4'>
                                    {(rental.returnDate &&
                                        formatDate(rental.returnDate)) ||
                                        "N/A"}
                                </td>
                                <td className='px-6 py-4'>${rental.cost}</td>
                                <td className='px-6 py-4 font-medium'>
                                    {rental.returnDate ? (
                                        <p className='text-green-600'>
                                            Returned
                                        </p>
                                    ) : (
                                        <p className='text-yellow-600'>
                                            To be returned
                                        </p>
                                    )}
                                </td>
                                <td className='px-6 py-4 text-red-600'>
                                    {customer.banned ? (
                                        <button
                                            onClick={() =>
                                                unbanCustomer(customer.id)
                                            }
                                        >
                                            Unban
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                banCustomer(customer.id)
                                            }
                                        >
                                            <FaBan />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
