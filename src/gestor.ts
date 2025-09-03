import fs from "fs";
import path from "path";
import { Carta } from "./carta.js";
import type { Rango } from "./carta.js";

const dataPath = path.resolve("./src/data/cartas.json");

export class GestorCartas {
    private cartas: Carta[] = [];
    private nextId = 1;

    constructor() {
        this.cargarCartas();
    }

    private cargarCartas() {
        if (fs.existsSync(dataPath)) {
            const raw = fs.readFileSync(dataPath, "utf-8");
            this.cartas = JSON.parse(raw);
            if (this.cartas.length > 0) {
                this.nextId = Math.max(...this.cartas.map(c => parseInt(c.id))) + 1;
            }
        }
    }

    private guardarCartas() {
        fs.writeFileSync(dataPath, JSON.stringify(this.cartas, null, 2));
    }

    listar(): Carta[] {
        return this.cartas;
    }

    agregar(carta: Carta) {
        this.cartas.push(carta);
        this.guardarCartas();
    }

    eliminar(id: string) {
        this.cartas = this.cartas.filter(c => c.id !== id);
        this.guardarCartas();
    }

    editar(id: string, datos: Partial<Carta>) {
        const carta = this.cartas.find(c => c.id === id);
        if (carta) {
            Object.assign(carta, datos);
            this.guardarCartas();
        }
    }

    buscarPorRango(rango: Rango): Carta[] {
        return this.cartas.filter(c => c.rango === rango);
    }

    obtener(id: string): Carta | undefined {
        return this.cartas.find(c => c.id === id);
    }

    generarId(): string {
        const id = this.nextId.toString().padStart(2, '0');
        this.nextId++;
        return id;
    }
}
