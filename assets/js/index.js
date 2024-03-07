//piedra=2 tijera=1 papel=0
// Números ingresados por el usuario
let veces = parseInt(prompt('Juego cachipún: Ingresa la cantidad de veces que quieres jugar:'))
let ganadasCompu = 0
let ganadasJugad = 0
/*Verificar la entrada del usuario
if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 2) {
    alert('El número ingresado no cumple con las reglas. Ingresa un número válido (0, 1 ó 2).')
}*/

// Comparar los dos números usando switch
for (let i = 0; i < veces; i++) {

    const numeroUsuario = parseInt(prompt('Para jugar al cachipún ingresa un número (0, 1 ó 2). Piedra es 2, tijera es 1 y papel es 0:'))
    const numeroAleatorio = Math.floor(Math.random() * 3)

    document.write('Número jugado por el computador: ', numeroAleatorio)
    document.write(' Número jugado por ti: ', numeroUsuario)

    if (numeroAleatorio === 2 && numeroUsuario === 2) {
        document.write(" El computador jugó piedra. Empate<br>")
    }
    if (numeroAleatorio === 2 && numeroUsuario === 1) {
        document.write(" El computador jugó piedra. Perdiste<br>")
        ganadasCompu++
    }

    if (numeroAleatorio === 2 && numeroUsuario === 0) {
        document.write(" El computador jugó piedra. ¡Ganaste!<br>")
        ganadasJugad++
    }

    if (numeroAleatorio === 1 && numeroUsuario === 1) {
        document.write(" El computador jugó tijera. Empate<br>")
    }

    if (numeroAleatorio === 1 && numeroUsuario === 2) {
        document.write(" El computador jugó tijera. ¡Ganaste!<br>")
        ganadasJugad++
    }

    if (numeroAleatorio === 1 && numeroUsuario === 0) {
        document.write(" El computador jugó tijera. Perdiste<br>")
        ganadasCompu++
    }

    if (numeroAleatorio === 0 && numeroUsuario === 0) {
        document.write(" El computador jugó papel. Empate<br>")
    }

    if (numeroAleatorio === 0 && numeroUsuario === 1) {
        document.write(" El computador jugó papel. ¡Ganaste!<br>")
        ganadasJugad++
    }

    if (numeroAleatorio === 0 && numeroUsuario === 2) {
        document.write(" El computador jugó papel. Perdiste<br>")
        ganadasCompu++
    }
}
document.write(`Computador: ${ganadasCompu}. Usuario: ${ganadasJugad}`)

if (ganadasCompu > ganadasJugad) {
    document.write("<br>Ganó el computador porque todos sabemos que es más inteligente que tú.")
}

else if (ganadasJugad > ganadasCompu) {
    document.write("<br>Ganaste tú porque hoy estás mucho más bacán que el computador. Veamos si esto sigue más rato")
}

else {
    document.write("<br>Empataste con el computador, porque tú y la máquina algún día serán uno")
}



