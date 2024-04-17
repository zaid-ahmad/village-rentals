import EquipmentCard from "@/components/EquipmentCard";
import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className='px-4 md:px-8 lg:px-16'>
                <h2 className='pt-7 font-medium text-xl'>
                    Showing 10 available equipments
                </h2>

                <section className='grid grid-cols-4 gap-5 pt-5'>
                    <EquipmentCard
                        name='Cordless Drill'
                        category='Power Tools'
                        description='High-powered cordless drill with 20V lithium-ion battery and keyless chuck.'
                        price={15}
                    />
                    <EquipmentCard
                        name='Cordless Drill'
                        category='Power Tools'
                        description='High-powered cordless drill with 20V lithium-ion battery and keyless chuck.'
                        price={15}
                    />

                    <EquipmentCard
                        name='Cordless Drill'
                        category='Power Tools'
                        description='High-powered cordless drill with 20V lithium-ion battery and keyless chuck.'
                        price={15}
                    />
                    <EquipmentCard
                        name='Cordless Drill'
                        category='Power Tools'
                        description='High-powered cordless drill with 20V lithium-ion battery and keyless chuck.'
                        price={15}
                    />
                </section>
            </main>
        </>
    );
}
