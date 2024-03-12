"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Pagination, Search, TableHeader } from "../DataTable";
import styles from './datatable2.module.css'

const DataTable2 = ({ lists, headers, searchItems }) => {
    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const filterListLengths = [10, 25, 50, 100];


    useEffect(() => {
        setComments(lists);
    }, [lists]);

    const listData = useMemo(() => {
        let computedData = comments;

        if (search && searchItems.length > 0) {
            computedData = computedData?.filter((filteData) =>
                searchItems?.some((field) => {
                    const fieldValue = filteData[field];
                    if (typeof fieldValue === 'string') {
                        return fieldValue.toLowerCase().includes(search.toLowerCase());
                    }
                    return false;
                })
            );
        }

        setTotalItems(computedData?.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedData = computedData.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedData?.slice(
            (currentPage - 1) * itemsPerPage,
            (currentPage - 1) * itemsPerPage + itemsPerPage
        );
    }, [comments, currentPage, search, sorting, itemsPerPage, searchItems]);

    const changeItemsPerPage = (e) => {
        setItemsPerPage(e.target.value);
    }

    return (
        <>
            <div className="row w-100 "
                style={{
                    margin: "0"
                }}>
                <div className="col col-12 text-center"
                    style={{
                        width: "100%",
                        padding: "0",
                    }}>

                    <div className="row"
                        style={{
                            margin: "0",
                            justifyContent: "space-between",
                            padding: ".5rem 0"
                        }}>
                        <div className="col-md-6 d-flex"
                            style={{
                                margin: "0",
                                padding: "0",
                                width: "fit-content"
                            }}>
                            <div className="float-left">
                                <select
                                    id="list_length"
                                    name="list_length"
                                    className="form-select"
                                    onChange={changeItemsPerPage}
                                    style={{ fontSize: ".7rem" }}
                                >
                                    {filterListLengths.map((value, key) => {
                                        return <option key={++key} value={value}>{value}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className={`col-md-6 d-flex  ${styles.flexContainer}`}
                            style={{
                                margin: "0",
                                padding: "0",
                                width: "fit-content"
                            }}>
                            <Search
                                onSearch={(value) => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <div style={{
                        position: "relative",
                        width: "100%",
                        overflow: "auto"
                    }}>

                        <table className="table table-vcenter text-nowrap mb-0">
                            <TableHeader
                                headers={headers}
                                className="pl-0"
                                onSorting={(field, order) =>
                                    setSorting({ field, order })
                                }
                            />
                            <tbody>
                                {listData?.map((comment, idx) => {
                                    return (
                                        <tr id="rows" key={idx}>
                                            <td
                                                className="text-start"
                                                style={{
                                                    padding: "10px 0 10px 5px",
                                                    verticalAlign: 'middle',
                                                    fontSize: '0.7rem'
                                                }}
                                            >
                                                {idx + 1}
                                            </td>
                                            {headers.map((col, colIdx) => (
                                                <td key={`${idx}-${colIdx}`}
                                                    style={{
                                                        fontSize: '0.7rem', color: '#677b8c',
                                                        padding: '10px 28px 10px 0',
                                                        textTransform: "capitalize",
                                                        verticalAlign: 'middle',
                                                    }}
                                                    className="text-start" >
                                                    {comment[col.field]}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>

                    <div>
                        <Pagination
                            total={totalItems}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default DataTable2;
