const cuadrados = document.querySelectorAll('.cuadrado');
let jugadorActual = 'X';
let sumaJugadorX = 0
let sumaJugadorO = 0
const jugadores = ['X', 'O'];
cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener('click', () => {
        if (cuadrado.textContent === '') {
            cuadrado.textContent = jugadorActual;
            cuadrado.setAttribute('jugador-data', jugadorActual);
            validarGanador();
            jugadorActual = jugadorActual === jugadores[0] ? jugadores[1] : jugadores[0];
        }
    }
    );
}
);

const botonReseteo = document.querySelector('#reinicio-btn');
botonReseteo.addEventListener('click', () =>{
    reseteoJuego()
});

function validarGanador(){
    const combianacionGandores = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i<combianacionGandores.length; i++){
        const [a, b, c] = combianacionGandores[i]
        const cuadradoA = cuadrados[a];
        const cuadradoB = cuadrados[b];
        const cuadradoC = cuadrados[c];

        if (
            cuadradoA.textContent === jugadorActual &&
            cuadradoB.textContent === jugadorActual &&
            cuadradoC.textContent === jugadorActual 
            ){
                const etiquetaGanador = document.querySelector("#etiqueta-gandor");
                etiquetaGanador.textContent = `El ganador fue ${jugadorActual}! Felcitaciones`
                setTimeout(() =>{
                    reseteoJuego();
                },3000
                );
                
                return;
            }
    }

}

function reseteoJuego() {
    cuadrados.forEach(cuadrado => { 
        cuadrado.textContent = '';
        cuadrado.removeAttribute('jugador-data');
    });
    jugadorActual = 'X'
    const etiquetaGanador = document.querySelector("#etiqueta-gandor");
    etiquetaGanador.textContent =  "No ha ganado nadie hasta el momento"
} 
