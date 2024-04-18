import NewCategoryForm from "@/components/NewCategoryForm";
import Navbar from "@/components/navbar";

export default async function AddEquipment() {
    return (
        <>
            <Navbar />

            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='pt-7 font-medium text-xl'>
                    Create a new category
                </h2>

                <section className='grid grid-cols-2 gap-5 pt-5'>
                    <NewCategoryForm />
                </section>
            </div>
        </>
    );
}
