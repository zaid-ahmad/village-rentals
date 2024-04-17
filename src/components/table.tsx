import { FaBan } from "react-icons/fa";

const Table = () => {
    let status = "returned";
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
                    <tr className='bg-white border-b'>
                        <th
                            scope='row'
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                        >
                            1234
                        </th>
                        <td className='px-6 py-4'>Concrete Mixer</td>
                        <td className='px-6 py-4'>Zaid Ahmad</td>
                        <td className='px-6 py-4'>03/03/2023</td>
                        <td className='px-6 py-4'>12/02/2024</td>
                        <td className='px-6 py-4'>
                            $<span>60</span>
                        </td>
                        <td className='px-6 py-4 font-medium'>
                            {status === "returned" ? (
                                <p className='text-green-600'>Returned</p>
                            ) : status === "to be returned" ? (
                                <p className='text-yellow-600'>
                                    To be returned
                                </p>
                            ) : (
                                <p className='text-red-600'>Not returned</p>
                            )}
                        </td>
                        <td className='px-6 py-4 text-red-600'>
                            <button>
                                <FaBan />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
