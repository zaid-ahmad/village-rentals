"use client";

import React, { createContext, useContext, useState } from "react";

type isAdminContextType = {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminContext = createContext<isAdminContextType | undefined>(undefined);

export const useAdminContext = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error(
            "useAdminContext must be used within a AdminContextProvider"
        );
    }
    return context;
};

export const AdminContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    return (
        <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};
