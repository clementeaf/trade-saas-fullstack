import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import Table from '../components/common/Table';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import FormRegistrarOperacion from '../components/operaciones/FormRegistrarOperacion';
import mockOperaciones from '../data/mockOperaciones.json';

interface Operacion extends Record<string, unknown> {
  id: string;
  tipo: string;
  fecha: string;
  monto: number;
  estado: string;
}

function Operaciones(): React.JSX.Element {
  const [selectedRows, setSelectedRows] = useState<Operacion[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleRegistrarOperacion = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const handleSubmitForm = (formData: {
    tipo: string;
    fecha: string;
    precioApertura: number;
    tp: number;
    sl: number;
  }): void => {
    console.log('Datos del formulario:', formData);
    setIsModalOpen(false);
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

  const handleRowSelectionChange = (selectedRowsData: Operacion[]): void => {
    setSelectedRows(selectedRowsData);
    console.log('Filas seleccionadas:', selectedRowsData);
  };

  const handleEliminarSeleccionadas = (): void => {
    console.log('Eliminar operaciones seleccionadas:', selectedRows);
  };

  const columns: ColumnDef<Operacion>[] = [
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

  const data: Operacion[] = mockOperaciones as Operacion[];

  const selectedCount = selectedRows.length;
  const hasSelection = selectedCount > 0;

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Operaciones</h1>
        <div className="flex gap-2 items-center">
          {hasSelection && (
            <Button
              onClick={handleEliminarSeleccionadas}
              variant="danger"
            >
              Eliminar ({selectedCount} {selectedCount === 1 ? 'operación' : 'operaciones'} seleccionada{selectedCount === 1 ? '' : 's'})
            </Button>
          )}
          <Button onClick={handleRegistrarOperacion} variant="primary">
            Registrar operacion
          </Button>
        </div>
      </div>
      <Table
        data={data}
        columns={columns}
        enableRowSelection={true}
        onRowSelectionChange={handleRowSelectionChange}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Registrar Operación"
        size="md"
      >
        <FormRegistrarOperacion
          onSubmit={handleSubmitForm}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}

export default Operaciones;

