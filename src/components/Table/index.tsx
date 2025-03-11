import React, { useLayoutEffect, useState } from 'react';
import { formatValue } from '@/utils/utility';

type Header = {
  title: string;
  key: string;
  sorter?: boolean;
  align: any;
  data_type?: string;
};

interface TableProps<T> {
  data: T[],
  columns: Header[]
}

const Table = <T extends Record<string, any>>({ data, columns }: TableProps<T>) => {

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra table-auto">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            {
              columns.map((col, index) => (
                <th key={index}>{col.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td></td>
              {columns.map((col) => (
                <td align={col.align} key={col.key as string} >
                  {formatValue(col.data_type, row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
