import type { CellContext, ColumnDef } from '@tanstack/react-table';
import Table from '../components/common/Table';
import Button from '../components/common/Button';

interface Operacion extends Record<string, unknown> {
  id: string;
  tipo: string;
  fecha: string;
  monto: number;
  estado: string;
}

function Operaciones(): React.JSX.Element {
  const handleRegistrarOperacion = (): void => {
    console.log('Registrar operación');
  };

  const handleEditar = (id: string): void => {
    console.log('Editar operación:', id);
  };

  const handleBorrar = (id: string): void => {
    console.log('Borrar operación:', id);
  };

  const handleVer = (id: string): void => {
    console.log('Ver operación:', id);
  };

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
    {
      id: 'acciones',
      header: 'Acciones',
      cell: ({ row }: CellContext<Operacion, unknown>): React.JSX.Element => {
        return (
          <div className="flex gap-2">
            <Button
              onClick={() => handleVer(row.original.id)}
              variant="secondary"
              className="text-xs px-2 py-1"
            >
              Ver
            </Button>
            <Button
              onClick={() => handleEditar(row.original.id)}
              variant="primary"
              className="text-xs px-2 py-1"
            >
              Editar
            </Button>
            <Button
              onClick={() => handleBorrar(row.original.id)}
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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Operaciones</h1>
        <Button onClick={handleRegistrarOperacion} variant="primary">
          Registrar operacion
        </Button>
      </div>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default Operaciones;

