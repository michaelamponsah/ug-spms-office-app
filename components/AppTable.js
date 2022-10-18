import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import styles from "../styles/AppTable.module.css";
import AppGlobalFilter from "./AppGlobalFilter";

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
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <AppGlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
          {rows.map((row) => {
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
    </>
  );
};

export default AppTable;
