let persona={
nome:"filippo",
cognome: "mariottini",
età:"29",
saluta:function(){
    console.log("ciao sono"+this.nome +this.cognome+"ed ho"+this.età+"anni");
}
};
persona.saluta();