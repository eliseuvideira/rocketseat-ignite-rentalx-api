import { createModel } from "@ev-postgres/model";

export interface CategoriaProps {
  categoria_id: number;
  nome: string;
  descricao: string;
  created_at: Date;
  updated_at: Date;
}

export const Categoria = createModel<CategoriaProps>(
  "categorias",
  ({ categoria_id }) => ({ categoria_id })
);
