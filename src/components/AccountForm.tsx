"use client";

import { updateAccountInfo } from "@/lib/actions";
import { useState } from "react";

interface AccountInfo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactPhone: string;
}

interface AccountFormProps {
    initialData: AccountInfo;
}

export default function AccountForm({ initialData }: AccountFormProps) {
    const [formData, setFormData] = useState<AccountInfo>(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateAccountInfo(formData);
    };

    return (
        <section className='grid grid-cols-2 gap-5 pt-5'>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col '>
                    <label htmlFor='id' className='text-sm'>
                        Customer ID
                    </label>
                    <input
                        id='id'
                        name='id'
                        type='text'
                        value={formData.id}
                        readOnly
                        disabled
                        className={"border p-2 rounded text-slate-700"}
                    />
                </div>

                <div className='flex flex-col '>
                    <label htmlFor='firstName' className='text-sm'>
                        First name
                    </label>
                    <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={"border p-2 rounded text-slate-700"}
                    />
                </div>

                <div className='flex flex-col '>
                    <label htmlFor='lastName' className='text-sm'>
                        Last name
                    </label>
                    <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={"border p-2 rounded text-slate-700"}
                    />
                </div>

                <div className='flex flex-col '>
                    <label htmlFor='email' className='text-sm'>
                        Email
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className={"border p-2 rounded text-slate-700"}
                    />
                </div>

                <div className='flex flex-col '>
                    <label htmlFor='contactPhone' className='text-sm'>
                        Phone number
                    </label>
                    <input
                        id='contactPhone'
                        name='contactPhone'
                        type='tel'
                        value={formData.contactPhone}
                        onChange={handleInputChange}
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
