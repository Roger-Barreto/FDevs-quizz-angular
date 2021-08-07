import { Pergunta } from "./pergunta";

export type Quizz =  {
   codigo: number,
   titulo: string,
   nivel: string,
   imagemUrl: string,
   perguntas: Pergunta[]
 }