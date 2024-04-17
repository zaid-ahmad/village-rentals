import DropDown from "@/components/dropdown";
import Navbar from "@/components/navbar";

export default function IndividualEquipment({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    return (
        <>
            <Navbar />
            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='py-7 font-medium text-xl'>
                    Editing Equipment, id: {id}
                </h2>

                <section className='flex flex-col gap-5 pt-5'>
                    <form action={""} className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col '>
                            <input
                                id='cust_id'
                                name='cust_id'
                                type='text'
                                value={"5843"}
                                readOnly
                                disabled
                                hidden
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='equipment_name' className='text-sm'>
                                Name
                            </label>
                            <input
                                id='equipment_name'
                                name='equipment_name'
                                type='text'
                                value={"Cordless Drill"}
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='last_name' className='text-sm'>
                                Category
                            </label>
                            <DropDown />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='price' className='text-sm'>
                                Price ($)
                            </label>
                            <input
                                id='price'
                                name='price'
                                type='number'
                                value={"15"}
                                className={"border p-2 rounded text-slate-700"}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor='description' className='text-sm'>
                                Description
                            </label>
                            <textarea
                                cols={80}
                                rows={0}
                                id='description'
                                name='description'
                                value={
                                    "High-powered cordless drill with 20V lithium-ion battery and keyless chuck."
                                }
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
