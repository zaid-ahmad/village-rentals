import Navbar from "@/components/navbar";
import Table from "@/components/table";
import { fetchAllCustomers } from "@/lib/data";

export default async function Customers() {
    const customers = await fetchAllCustomers();

    return (
        <>
            <Navbar />
            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='py-7 font-medium text-xl'>All Customers</h2>

                <Table customers={customers} />
            </div>
        </>
    );
}
