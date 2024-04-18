"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Icategories {
    id: number;
    description: string;
}

interface DropdownProps {
    categories: Icategories[];
    selected: number;
    onCategorySelect: (categoryId: number) => void;
}

function Dropdown({ categories, selected, onCategorySelect }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectedCategory = categories.find(
        (category) => category.id === selected
    );

    const handleCategorySelect = (categoryId: number) => {
        onCategorySelect(categoryId);
        setIsOpen(false);
    };

    return (
        <div className='relative inline-block text-left'>
            <div>
                <button
                    type='button'
                    className='flex items-center w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                    id='menu-button'
                    aria-expanded='true'
                    aria-haspopup='true'
                    onClick={toggleDropdown}
                >
                    {selectedCategory?.description || "Select Category"}
                    <div>
                        <FaChevronDown />
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href='#'
                                className={`block px-4 py-2 text-sm ${
                                    category.id === selected
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                                onClick={() =>
                                    handleCategorySelect(category.id)
                                }
                            >
                                {category.description}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
