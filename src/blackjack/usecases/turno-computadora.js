
import {pedirCarta, valorCarta, crearCartaHTML} from './';
/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<string>}deck
 * @param {HTMLElement} puntosHTML elemento HTML per mostrar els punts
 * @param {HTMLElement}divCartasComputadora
 */

export const turnoComputadora = ( puntosMinimos , puntosHTML, divCartasComputadora, deck =[]) => {
    if (!puntosMinimos) throw new Error ('Puntos mínimos necesarios');
    if (!deck) throw new Error ('deck necesario');
    if (!puntosHTML) throw new Error ('puntosHTML necesario');
    let puntosComputadora = 0;
    

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        console.log (puntosHTML);
        console.log (puntosComputadora);
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML (carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}