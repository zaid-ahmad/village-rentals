"use client";

import { createCategory } from "@/lib/data";
import { useState } from "react";

interface NewCategoryFormProps {
    description: string;
}

export default function NewCategoryForm() {
    const initialData: NewCategoryFormProps = {
        description: "",
    };

    const [formData, setFormData] = useState<NewCategoryFormProps>(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createCategory(formData);
    };

    return (
        <section className='grid grid-cols-2 gap-5 pt-5'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex flex-col '>
                    <label htmlFor='description' className='text-sm'>
                        New Category Name
                    </label>
                    <input
                        id='description'
                        name='description'
                        type='text'
                        value={formData.description}
                        onChange={handleInputChange}
                        className={"border p-2 rounded text-slate-700"}
                    />
                </div>

                <button className='py-1 px-2 bg-slate-500 rounded text-slate-100 transition hover:bg-slate-600'>
                    Create
                </button>
            </form>
        </section>
    );
}
