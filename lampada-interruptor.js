function descobrirLamps() {
    const lamps = {
        A: { estado: 'desligada', quente: false },
        B: { estado: 'desligada', quente: false },
        C: { estado: 'desligada', quente: false },
    };

    // 1. Liga o interruptor A
    lamps.A.estado = 'ligada';
    lamps.A.quente = true;

    //Desliga o interruptor A e liga o B
    lamps.A.estado = 'desligada';
    lamps.A.quente = true; // continua quente
    lamps.B.estado = 'ligada';
    lamps.B.quente = true; //quente enquanto ligada

    // A partir da lógica, aqui está a identificação:
    for (const lamp in lamps) {
        if (lamps[lamp].estado === 'ligada') {
            console.log(`A lâmpada ${lamp} é controlada pelo interruptor B.`);
        } else if (lamps[lamp].quente) {
            console.log(`A lâmpada ${lamp} é controlada pelo interruptor A.`);
        } else {
            console.log(`A lâmpada ${lamp} é controlada pelo interruptor C.`);
        }
    }
}
descobrirLamps();
