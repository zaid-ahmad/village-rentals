import AddEquipmentForm from "@/components/AddEquipmentForm";
import Navbar from "@/components/navbar";
import { getAllCategories } from "@/lib/data";

export default async function AddEquipment() {
    const categories = await getAllCategories();

    return (
        <>
            <Navbar />

            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='pt-7 font-medium text-xl'>
                    Add a new equipment
                </h2>

                <section className='grid grid-cols-2 gap-5 pt-5'>
                    <AddEquipmentForm categories={categories} />
                </section>
            </div>
        </>
    );
}
