class classe{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){
        let ataque
        switch (this.tipo){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
    console.log(`O ${this.tipo} atacou usando ${ataque}!`)
    }
}

let mago = new classe ("Lúcio", "28", "mago")
let guerreiro = new classe("João", "25", "guerreiro")
let monge = new classe("Carlos", "23", "monge")
let ninja = new classe("Felipão", "28", "ninja")

mago.ataque()
guerreiro.ataque()
monge.ataque()
ninja.ataque()