import RentalCard from "@/components/RentalCard";
import Navbar from "@/components/navbar";
import { getRentals } from "@/lib/data";

export default async function YourRentals() {
    const rentals = await getRentals();

    return (
        <>
            <Navbar />
            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='pt-7 font-medium text-xl'>Your rentals</h2>

                <section className='grid grid-cols-4 gap-5 pt-5'>
                    {rentals.map((rental) => (
                        <RentalCard
                            key={rental.id}
                            id={rental.id}
                            name={rental.equipment.name}
                            category={rental.equipment.category.description}
                            description={rental.equipment.description}
                            price={rental.cost}
                            rentedOn={rental.rentalDate}
                            returnDate={rental.returnDate}
                        />
                    ))}
                </section>
            </div>
        </>
    );
}
