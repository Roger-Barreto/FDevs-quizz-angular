import { Alternativa } from "./alternativa";

export type Pergunta = {
   codigo: number,
   titulo: string,
   resposta?: {
     codigoAlternativa: number
   },
   alternativas: Alternativa[],
 }