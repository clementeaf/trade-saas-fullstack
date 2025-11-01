import type { CellContext, ColumnDef } from '@tanstack/react-table';
import type { Operacion } from '../../types/operacion';
import Button from '../common/Button';

interface OperacionesColumnsProps {
  onVer: (id: string) => void;
  onEditar: (id: string) => void;
  onBorrar: (id: string) => void;
}

export function createOperacionesColumns({
  onVer,
  onEditar,
  onBorrar,
}: OperacionesColumnsProps): ColumnDef<Operacion>[] {
  return [
    {
      id: 'select',
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllRowsSelected()}
          onChange={(e) => table.toggleAllRowsSelected(e.target.checked)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'tipo',
      header: 'Tipo',
    },
    {
      accessorKey: 'fecha',
      header: 'Fecha',
    },
    {
      accessorKey: 'precioApertura',
      header: 'Precio Apertura',
      cell: ({ row }: CellContext<Operacion, unknown>): string => {
        return `$${row.original.precioApertura.toLocaleString()}`;
      },
    },
    {
      accessorKey: 'tp',
      header: 'TP',
      cell: ({ row }: CellContext<Operacion, unknown>): string => {
        return `$${row.original.tp.toLocaleString()}`;
      },
    },
    {
      accessorKey: 'sl',
      header: 'SL',
      cell: ({ row }: CellContext<Operacion, unknown>): string => {
        return `$${row.original.sl.toLocaleString()}`;
      },
    },
    {
      id: 'acciones',
      header: 'Acciones',
      cell: ({ row }: CellContext<Operacion, unknown>): React.JSX.Element => {
        return (
          <div className="flex gap-2">
            <Button
              onClick={() => onVer(row.original.id)}
              variant="secondary"
              className="text-xs px-2 py-1"
            >
              Ver
            </Button>
            <Button
              onClick={() => onEditar(row.original.id)}
              variant="primary"
              className="text-xs px-2 py-1"
            >
              Editar
            </Button>
            <Button
              onClick={() => onBorrar(row.original.id)}
              variant="danger"
              className="text-xs px-2 py-1"
            >
              Borrar
            </Button>
          </div>
        );
      },
    },
  ];
}

