import inquirer from "inquirer";
import { GestorCartas } from "./gestor.js";
import { Carta } from "./carta.js";
import type { Rango } from "./carta.js";

const gestor = new GestorCartas();

export async function menuPrincipal() {
    let salir = false;
    while (!salir) {
        const { opcion } = await inquirer.prompt({
            type: "list",
            name: "opcion",
            message: "📌 Sistema de Cartas - Menú Principal",
            choices: [
                "📋 Lista de Cartas",
                "➕ Añadir Carta",
                "📝 Editar Carta",
                "❌ Eliminar Carta",
                "🔍 Filtrar por Rango",
                "👁 Ver Carta",
                "🚪 Salir"
            ]
        });

        switch (opcion) {
            case "📋 Lista de Cartas":
                console.table(gestor.listar());
                break;

            case "➕ Añadir Carta":
                const nueva = await inquirer.prompt([
                    { type: "input", name: "nombre", message: "Nombre:" },
                    { type: "input", name: "descripcion", message: "Descripción:" },
                    {
                        type: "list",
                        name: "rango",
                        message: "Rango:",
                        choices: ["Legendario", "Épico", "Raro", "Común"]
                    }
                ]);
                const id = gestor.generarId();
                gestor.agregar(new Carta(id, nueva.nombre, nueva.descripcion, nueva.rango as Rango));
                console.log("✅ Carta añadida.");
                break;

            case "📝 Editar Carta":
                const { idEditar } = await inquirer.prompt({ type: "input", name: "idEditar", message: "ID de la carta:" });
                const cartaEditar = gestor.obtener(idEditar);
                if (cartaEditar) {
                    const edit = await inquirer.prompt([
                        { type: "input", name: "nombre", message: "Nuevo nombre:", default: cartaEditar.nombre },
                        { type: "input", name: "descripcion", message: "Nueva descripción:", default: cartaEditar.descripcion },
                        { type: "list", name: "rango", message: "Nuevo rango:", choices: ["Legendario", "Épico", "Raro", "Común"], default: cartaEditar.rango }
                    ]);
                    gestor.editar(idEditar, edit);
                    console.log("✏️ Carta editada.");
                } else {
                    console.log("⚠️ No encontrada.");
                }
                break;

            case "❌ Eliminar Carta":
                const { idEliminar } = await inquirer.prompt({ type: "input", name: "idEliminar", message: "ID de la carta a eliminar:" });
                gestor.eliminar(idEliminar);
                console.log("🗑 Carta eliminada.");
                break;

            case "🔍 Filtrar por Rango":
                const { rango } = await inquirer.prompt({ type: "list", name: "rango", message: "Selecciona un rango:", choices: ["Legendario", "Épico", "Raro", "Común"] });
                console.table(gestor.buscarPorRango(rango as Rango));
                break;

            case "👁 Ver Carta":
                const { idVer } = await inquirer.prompt({ type: "input", name: "idVer", message: "ID de la carta:" });
                console.log(gestor.obtener(idVer));
                break;

            case "🚪 Salir":
                salir = true;
                break;
        }
    }
}
