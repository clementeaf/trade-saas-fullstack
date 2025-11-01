export interface Operacion extends Record<string, unknown> {
  id: string;
  tipo: string;
  fecha: string;
  precioApertura: number;
  tp: number;
  sl: number;
}

