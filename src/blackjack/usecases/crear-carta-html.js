/**
 * 
 * @param {String} carta 
 * @returns {HTMLElement} imagen 
 */
export const crearCartaHTML = (carta)=>{
    if (!carta) throw new Error ('la carta és un element obligatori');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}