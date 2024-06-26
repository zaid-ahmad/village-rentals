import AccountForm from "@/components/AccountForm";
import Navbar from "@/components/navbar";
import { getAccountInfo } from "@/lib/data";

export default async function YourRentals() {
    const data = await getAccountInfo();
    return (
        <>
            <Navbar />

            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='pt-7 font-medium text-xl'>
                    Manage your account
                </h2>

                <section className='grid grid-cols-2 gap-5 pt-5'>
                    {data && <AccountForm initialData={data} />}
                </section>
            </div>
        </>
    );
}
