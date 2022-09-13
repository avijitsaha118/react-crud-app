import React from 'react';
import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        { id: 1, name: 'john', profession: 'jobless', age: 28 },
        { id: 2, name: 'steve', profession: 'job', age: 26 },
        { id: 3, name: 'nick', profession: 'business', age: 29 },
    ]);

    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}