let agenda = {
    nome: "AgendaContatti",
    proprietario: "fillippo",
    contatti: [{ "nome": "francesco", "numero": 3334243649, }, { "nome": "gianni", "numero": 5642543229 }, { "nome": "eriberto", "numero": 373235448, }],
    
    
    visualizzaTutti: function () {
        console.log("Lista dei contatti:");
        this.contatti.forEach(function (contatto) {
            console.log(contatto.nome + ": " + contatto.numero);
        });
    },
    visualizzaContatto: function (nomeContatto) {
        var contatto = this.contatti.find(function (c) {
            return c.nome === nomeContatto;
        });

        if (contatto) {
            console.log("Contatto: " + contatto.nome + ", Numero: " + contatto.numero);
        } else {
            console.log("Contatto non trovato.");
        }
    },

    aggiungiContatto: function (nome, numero) {
        var nuovoContatto = {
            nome: nome,
            numero: numero
        };
        this.contatti.push(nuovoContatto);
        console.log("Contatto aggiunto con successo.");
    },

    EliminaContatto: function (ContattoEliminato) {
        let Contatto = this.contatti.filter(function (contatti) { return contatti.nome != ContattoEliminato })
        this.contatti = Contatto
    },
    modificaContatto: function (nomeContatto, nuovoNumero) {
        var contatto = this.contatti.find(function (c) {
            return c.nome === nomeContatto;
        });

        if (contatto) {
            contatto.numero = nuovoNumero;
            console.log("Contatto modificato con successo.");
        } else {
            console.log("Contatto non trovato.");
        }
    }
}

agenda.visualizzaTutti()