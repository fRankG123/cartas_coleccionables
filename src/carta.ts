export type Rango = "Legendario" | "Épico" | "Raro" | "Común";

export class Carta {
    constructor(
        public id: string,
        public nombre: string,
        public descripcion: string,
        public rango: Rango
    ) {}
}
