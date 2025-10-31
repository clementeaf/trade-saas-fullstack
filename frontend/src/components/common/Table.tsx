import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
  type Table as TanstackTable,
  type RowSelectionState,
} from '@tanstack/react-table';
import { useState, useEffect, useRef } from 'react';

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  enableRowSelection?: boolean;
  onRowSelectionChange?: (selectedRows: TData[]) => void;
}

function Table<TData extends Record<string, unknown>>({
  data,
  columns,
  enableRowSelection = false,
  onRowSelectionChange,
}: TableProps<TData>): React.JSX.Element {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const onRowSelectionChangeRef = useRef(onRowSelectionChange);
  const prevRowSelectionRef = useRef<RowSelectionState>({});
  
  useEffect(() => {
    onRowSelectionChangeRef.current = onRowSelectionChange;
  }, [onRowSelectionChange]);

  const table: TanstackTable<TData> = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: enableRowSelection,
    onRowSelectionChange: setRowSelection,
    getRowId: (row, index) => {
      if (typeof row === 'object' && row !== null && 'id' in row) {
        const rowWithId = row as unknown as { id: string | number };
        return String(rowWithId.id);
      }
      return String(index);
    },
    state: {
      rowSelection,
    },
  });

  useEffect(() => {
    if (onRowSelectionChangeRef.current && enableRowSelection) {
      const prevSelection = prevRowSelectionRef.current;
      const prevSelectionKeys = Object.keys(prevSelection).filter((id) => prevSelection[id]).sort().join(',');
      const currentSelectionKeys = Object.keys(rowSelection).filter((id) => rowSelection[id]).sort().join(',');
      
      if (prevSelectionKeys !== currentSelectionKeys) {
        const selectedIds = Object.keys(rowSelection).filter((id) => rowSelection[id]);
        const selectedRows = data.filter((row) => {
          const rowId = typeof row === 'object' && row !== null && 'id' in row
            ? String((row as unknown as { id: string | number }).id)
            : null;
          return rowId !== null && selectedIds.includes(rowId);
        });
        onRowSelectionChangeRef.current(selectedRows);
        prevRowSelectionRef.current = rowSelection;
      }
    }
  }, [rowSelection, enableRowSelection]);

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

