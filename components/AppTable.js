import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import styles from "../styles/AppTable.module.css";
import AppGlobalFilter from "./AppGlobalFilter";
import SelectInput from "./SelectInput";

const AppTable = ({ tableData, tableColumns }) => {
  /**
   * It's important that we're using React.useMemo here to ensure
   * that our data isn't recreated on every render.
   * If we didn't use React.useMemo, the table would think it was receiving new
   * data on every render and attempt to recalculate a lot of logic every single time
   */
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tableData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  // Handle page selection change
  const handleChange = (selectedValue) => {
    setPageSize(Number(selectedValue));
  };

  return (
    <>
      <div className={[`${styles["search-bar-wrapper"]}`]}>
        <AppGlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <table className={[`${styles["table-wrapper"]}`]} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className={[`${styles["th"]}`]}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className={[`${styles["td"]}`]} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={[`${styles["page-index-selector-wrapper"]}`]}>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <div className={[`${styles["page-size-selector-wrapper"]}`]}>
          <SelectInput
            value={pageSize}
            options={[10, 25, 50, 100]}
            onInputChange={handleChange}
          />
        </div>
      </div>
      <div className={[`${styles["next-prev-btn-wrapper"]}`]}>
        <Button
          variant="contained"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          PREV
        </Button>
        <Button
          variant="contained"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          NEXT
        </Button>
      </div>
    </>
  );
};

export default AppTable;
