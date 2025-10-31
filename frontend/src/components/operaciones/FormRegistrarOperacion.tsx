import { useState, useEffect } from 'react';

interface FormRegistrarOperacionProps {
  onSubmit: (data: {
    tipo: string;
    fecha: string;
    precioApertura: number;
    tp: number;
    sl: number;
  }) => void;
  onCancel: () => void;
}

function FormRegistrarOperacion({
  onSubmit,
  onCancel,
}: FormRegistrarOperacionProps): React.JSX.Element {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  const getLocalDateTimeString = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  useEffect(() => {
    const updateDateTime = (): void => {
      const localDateTime = getLocalDateTimeString();
      setCurrentDateTime(localDateTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      tipo: formData.get('tipo') as string,
      fecha: currentDateTime,
      precioApertura: Number.parseFloat(formData.get('precioApertura') as string),
      tp: Number.parseFloat(formData.get('tp') as string),
      sl: Number.parseFloat(formData.get('sl') as string),
    });
  };

  const formatDisplayDateTime = (dateTimeString: string): string => {
    if (!dateTimeString) return '';
    const [datePart, timePart] = dateTimeString.split('T');
    if (!datePart || !timePart) return '';
    
    const [year, month, day] = datePart.split('-');
    const [hours, minutes] = timePart.split(':');
    
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="tipo" className="text-sm font-medium text-gray-700">
          Tipo
        </label>
        <select
          id="tipo"
          name="tipo"
          required
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccione un tipo</option>
          <option value="Compra">Compra</option>
          <option value="Venta">Venta</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="fecha" className="text-sm font-medium text-gray-700">
          Fecha y Hora
        </label>
        <input
          type="text"
          id="fecha"
          name="fecha"
          value={formatDisplayDateTime(currentDateTime)}
          readOnly
          className="px-3 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="precioApertura" className="text-sm font-medium text-gray-700">
          Precio Apertura
        </label>
        <input
          type="number"
          id="precioApertura"
          name="precioApertura"
          required
          min="0"
          step="0.01"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="tp" className="text-sm font-medium text-gray-700">
          TP
        </label>
        <input
          type="number"
          id="tp"
          name="tp"
          required
          min="0"
          step="0.01"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="sl" className="text-sm font-medium text-gray-700">
          SL
        </label>
        <input
          type="number"
          id="sl"
          name="sl"
          required
          min="0"
          step="0.01"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3 justify-end mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

export default FormRegistrarOperacion;

