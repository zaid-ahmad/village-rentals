import Navbar from "@/components/navbar";

export default function YourRentals() {
    return (
        <>
            <Navbar />

            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='pt-7 font-medium text-xl'>
                    Manage your account
                </h2>

                <section className='grid grid-cols-2 gap-5 pt-5'>
                    <form action={""} className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col '>
                            <label htmlFor='cust_id' className='text-sm'>
                                Customer ID
                            </label>
                            <input
                                id='cust_id'
                                name='cust_id'
                                type='text'
                                value={"5843"}
                                readOnly
                                disabled
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='first_name' className='text-sm'>
                                First name
                            </label>
                            <input
                                id='first_name'
                                name='first_name'
                                type='text'
                                value={"Zaid"}
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='last_name' className='text-sm'>
                                Last name
                            </label>
                            <input
                                id='last_name'
                                name='last_name'
                                type='text'
                                value={"Ahmad"}
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='email' className='text-sm'>
                                Email
                            </label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                value={"zaidd250@gmail.com"}
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='phone' className='text-sm'>
                                Phone number
                            </label>
                            <input
                                id='phone'
                                name='phone'
                                type='tel'
                                value={"8257341243"}
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <button className='py-1 px-4 bg-slate-500 rounded text-slate-100 transition hover:bg-slate-600'>
                            Save
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
}
