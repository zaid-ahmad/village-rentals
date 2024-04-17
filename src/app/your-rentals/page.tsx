import RentalCard from "@/components/RentalCard";
import Navbar from "@/components/navbar";

export default function YourRentals() {
    return (
        <>
            <Navbar />
            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='pt-7 font-medium text-xl'>Your rentals</h2>

                <section className='grid grid-cols-4 gap-5 pt-5'>
                    <RentalCard
                        name='Cordless Drill'
                        category='Power Tools'
                        description='High-powered cordless drill with 20V lithium-ion battery and keyless chuck.'
                        price={15}
                        rentedOn={new Date()}
                        returnDate={new Date()}
                    />
                </section>
            </div>
        </>
    );
}
