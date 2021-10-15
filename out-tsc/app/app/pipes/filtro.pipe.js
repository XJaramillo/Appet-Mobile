import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FiltroPipe = class FiltroPipe {
    transform(arreglo, texto, columna) {
        if (texto === '') {
            return arreglo;
        }
        texto = texto.toLowerCase();
        return arreglo.filter(item => {
            return item[columna].toLowerCase().includes(texto);
        });
    }
};
FiltroPipe = __decorate([
    Pipe({
        name: 'filtro'
    })
], FiltroPipe);
export { FiltroPipe };
//# sourceMappingURL=filtro.pipe.js.map