import EquipmentForm from "@/components/EquipmentForm";
import DropDown from "@/components/dropdown";
import Navbar from "@/components/navbar";
import { getAllCategories, getEquipmentById } from "@/lib/data";
import { FaPlus } from "react-icons/fa6";

export default async function IndividualEquipment({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    const categories = await getAllCategories();
    const data = await getEquipmentById(id);
    return (
        <>
            <Navbar />
            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='py-7 font-medium text-xl'>
                    Editing Equipment- &quot;{data?.name}&quot;
                </h2>

                <section className='flex flex-col gap-5 pt-5'>
                    {data && (
                        <EquipmentForm
                            initialData={data}
                            categories={categories}
                        />
                    )}
                </section>
            </div>
        </>
    );
}
