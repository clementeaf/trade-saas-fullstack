
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import Table from '../components/common/Table';

interface Operacion extends Record<string, unknown> {
  id: string;
  tipo: string;
  fecha: string;
  monto: number;
  estado: string;
}

function Operaciones(): React.JSX.Element {
  const columns: ColumnDef<Operacion>[] = [
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
      accessorKey: 'monto',
      header: 'Monto',
      cell: ({ row }: CellContext<Operacion, unknown>): string => {
        return `$${row.original.monto.toLocaleString()}`;
      },
    },
    {
      accessorKey: 'estado',
      header: 'Estado',
    },
  ];

  const data: Operacion[] = [
    {
      id: '1',
      tipo: 'Compra',
      fecha: '2024-01-15',
      monto: 1000,
      estado: 'Completada',
    },
    {
      id: '2',
      tipo: 'Venta',
      fecha: '2024-01-16',
      monto: 2500,
      estado: 'Pendiente',
    },
    {
      id: '3',
      tipo: 'Compra',
      fecha: '2024-01-17',
      monto: 500,
      estado: 'Completada',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Operaciones</h1>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default Operaciones;

