"use client"
import React, { useState } from "react";

const Header = ({ headers, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead>
            <tr>
                <th className="text-start"
                    style={{ padding: "10px 10px 10px 5px", fontWeight: "400", fontSize: '0.8rem' }} >
                    S.No.
                </th>
                {headers.map(({ name, field, sortable, classKey }) => (
                    <th
                        style={{ fontWeight: 'unset', fontSize: '0.8rem', padding: "10px 28px 10px 0" }}
                        className="text-start"
                        id="headers"
                        key={name}
                        onClick={() =>
                            sortable ? onSortingChange(field) : null
                        }
                    >
                        {name}
                    </th>
                ))}
            </tr>
        </thead >
    );
};

export default Header;
