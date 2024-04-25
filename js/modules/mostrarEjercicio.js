import {
    enunciados,
    analisis,
    codigosBurbuja,
    codigosBurbujaMejorado,
    codigsoQuickSort,
    codigoShellSort,
    codigosSeleccionDirecta,
    codigosInsercion,
    codigosSnaker,
    codigosMergeSort,
    codigosRadixSort,
    codigosHeapSort
} from "./codigoJava.js"

export const mostrarEjercicio = (elementoClickeado) => {
    document.querySelector(".content__code").style.display = "block"
    document.querySelector(".content__index").style.display = "none"
    document.querySelector(".div_principal_title").style.display = "block"

    let value = Number(elementoClickeado.getAttribute("value"))

    if (value != null) {
        //INSERCION CONTEXTO Y RESPUESTAS
        document.getElementById("tituloEjercicio").textContent = `Ejercicio ${value + 1}`
        document.getElementById("enunciadoEjercicio").textContent = enunciados[value]
        document.querySelector(".content__table").innerHTML = `<img src="storage/img/ejercicio${value + 1}.png">`
        document.getElementById("analisisEjercicio").textContent = analisis[value]

        //INSERCION DEL CODIGO
        document.querySelector(".burbuja__code").textContent = codigosBurbuja[value]
        document.querySelector(".burbujaMejorado__code").textContent = codigosBurbujaMejorado[value]
        document.querySelector(".quicksort__code").textContent = codigsoQuickSort[value]
        document.querySelector(".shellsort__code").textContent = codigoShellSort[value]
        document.querySelector(".seleccionDirecta__code").textContent = codigosSeleccionDirecta[value]
        document.querySelector(".insercion__code").textContent = codigosInsercion[value]
        document.querySelector(".snaker__code").textContent = codigosSnaker[value]
        document.querySelector(".mergeSort__code").textContent = codigosMergeSort[value]
        document.querySelector(".radixSort__code").textContent = codigosRadixSort[value]
        document.querySelector(".heapSort__code").textContent = codigosHeapSort[value]
    }
}
