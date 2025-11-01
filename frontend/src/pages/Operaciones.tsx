import { useState } from 'react';
import Table from '../components/common/Table';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import FormRegistrarOperacion from '../components/operaciones/FormRegistrarOperacion';
import { createOperacionesColumns } from '../components/operaciones/operacionesColumns';
import type { Operacion } from '../types/operacion';
import mockOperaciones from '../data/mockOperaciones.json';

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

  const columns = createOperacionesColumns({
    onVer: handleVer,
    onEditar: handleEditar,
    onBorrar: handleBorrar,
  });

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

