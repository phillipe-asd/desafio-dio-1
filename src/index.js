// Desafio da DIO, professor Felipe Aguiar (Felipao)
// Classificador de nivel de heroi, baseado no xp 

let XP = 3419
let elo;
let texto = "O elo do seu herói é: "

if(XP <= 999){
    elo = "ferro"
}else if(XP >= 1000 && XP <= 1999){
    elo = "bronze"
} else if(XP >= 2000 && XP <= 2999){
    elo = "prata";
} else if(XP >= 3000 && XP <= 3999){
    elo = "Ouro";
} else if(XP >= 4000 && XP <= 4999){
    elo = "Platina";
} else if(XP >= 5000 && XP <= 5999){
    elo = "Ascendente";
} else if(XP >= 6000 && XP <= 9999){
    elo = "Imortal";
} else if(XP >= 10000){
    elo = "Radiante";
} else {
    elo = "Nao identificado :("
}

console.log(texto + elo)