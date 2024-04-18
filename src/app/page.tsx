import EquipmentCard from "@/components/EquipmentCard";
import Navbar from "@/components/navbar";
import SubHeading from "@/components/sub-heading";
import { getEquipments } from "@/lib/data";

export default async function Home() {
    const equipments = await getEquipments();
    return (
        <>
            <Navbar />
            <main className='px-4 md:px-8 lg:px-16'>
                <SubHeading equipmentsCount={equipments.length} />

                <section className='grid grid-cols-4 gap-5 pt-5'>
                    {equipments.map((equipment) => (
                        <EquipmentCard
                            key={equipment.id}
                            id={equipment.id}
                            name={equipment.name}
                            category={equipment.category.description}
                            description={equipment.description}
                            price={equipment.dailyRentalCost}
                            rented={equipment.rentals.some(
                                (rental) => rental.returnDate === null
                            )}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}
