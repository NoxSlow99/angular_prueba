export interface Documents {
  id: number;
  ure: number;
  denomina: string;
  anio: number;
  secuencia: number;
  clasifica: number;
  fecha: Date;
  tipo: number;
  valor: number;
  tramite: number;
  concentrado: number;
  ubica: string;
  archivo: string;
  status: number;
  descripcion: string;
  hojas: number;
  observaValores: string;
}

export interface DocumentResult {
  documents: Documents[];
}
