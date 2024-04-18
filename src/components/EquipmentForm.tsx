"use client";

import { updateEquipmentInfo } from "@/lib/data";
import { useState } from "react";
import Dropdown from "./dropdown";

interface EquipmentInfo {
    id: number;
    categoryId: number;
    category: {
        id: number;
        description: string;
    };
    name: string;
    dailyRentalCost: number;
    description: string;
}

interface Icategories {
    id: number;
    description: string;
}

interface EquipmentFormProps {
    initialData: EquipmentInfo;
    categories: Icategories[];
}

export default function EquipmentForm({
    initialData,
    categories,
}: EquipmentFormProps) {
    const [formData, setFormData] = useState<EquipmentInfo>(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleTextAreaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCategorySelect = (categoryId: number) => {
        setFormData((prevData) => ({
            ...prevData,
            categoryId,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateEquipmentInfo(formData);
    };

    return (
        <section className='grid grid-cols-2 gap-5 pt-5'>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col '>
                    <label htmlFor='last_name' className='text-sm'>
                        Category
                    </label>
                    <Dropdown
                        categories={categories}
                        selected={formData.categoryId}
                        onCategorySelect={handleCategorySelect}
                    />
                </div>

                <div className='flex flex-col '>
                    <label htmlFor='name' className='text-sm'>
                        Name
                    </label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        value={formData.name}
                        onChange={handleInputChange}
                        className={"border p-2 rounded text-slate-700"}
                    />
                </div>

                <div className='flex flex-col '>
                    <label htmlFor='dailyRentalCost' className='text-sm'>
                        Price
                    </label>
                    <input
                        id='dailyRentalCost'
                        name='dailyRentalCost'
                        type='text'
                        value={formData.dailyRentalCost}
                        onChange={handleInputChange}
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
                        value={formData.description}
                        onChange={handleTextAreaChange}
                        className={"border p-2 rounded text-slate-700"}
                    />
                </div>

                <button className='py-1 px-4 bg-slate-500 rounded text-slate-100 transition hover:bg-slate-600'>
                    Save
                </button>
            </form>
        </section>
    );
}
