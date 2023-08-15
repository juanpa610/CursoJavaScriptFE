const miModulo = (() => {
    'use strict';
    
    let deck         = [],
        tipos      = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugadores =  document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    // Esta función crea un nuevo deck
    const crearDeck = () => {
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ) {
                deck.push( i + tipo);
            }
        }

        for( let tipo of tipos ) {
            for( let esp of especiales ) {
                deck.push( esp + tipo);
            }
        }
        return _.shuffle( deck );
    }

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for( let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(0);
        }

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasJugadores[0].innerText = '';
        divCartasJugadores[1].innerText = '';

        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    }

    const pedirCarta = () => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    const acumularPuntosJugador = (carta , turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, jugador) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasJugadores[jugador].append( imgCarta );
    }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
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
        puntosJugadores = [];
    }

    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora=+ acumularPuntosJugador(carta, 1);
            crearCarta(carta, 1);
        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
        determinarGanador();
    }

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntosJugador(carta, 0);

        crearCarta(carta, 0);

        if ( puntosJugador > 21 ) {
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0] );
    });

    return {
        nuevoJuego: inicializarJuego
    }
})();