"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative inline-block text-left'>
            <div>
                <button
                    type='button'
                    className='flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                    id='menu-button'
                    aria-expanded='true'
                    aria-haspopup='true'
                    onClick={toggleDropdown}
                >
                    <p>Select Category</p>
                    <div>
                        <FaChevronDown />
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                        <a
                            href='#'
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        >
                            Account settings
                        </a>
                        <a
                            href='#'
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        >
                            Support
                        </a>
                        <a
                            href='#'
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        >
                            License
                        </a>
                        <button
                            type='submit'
                            className='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
