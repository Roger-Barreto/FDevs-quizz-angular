export type QuizzCadastro = {
   Titulo: string,
   Nivel: number,
   ImagemUrl: string,
   Perguntas: {
      Titulo: string,
      Alternativas: {
         Titulo: string,
         Correta: boolean
       }[]
    }[]
 }