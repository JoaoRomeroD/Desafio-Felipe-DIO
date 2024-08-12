//heróis com nome e xp//
let herois = [
    {nome : "Ashe", xp: 8500},
    {nome : "Karthus", xp: 3000},
    {nome : "Jana", xp: 700 },
    {nome : "Tryndamare", xp: 15000},
    {nome : "Riven", xp: 6000}
];

//determinando o nível dos heróis com base no xp deles//
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000){
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000){
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000){
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000){
        return "Ascendente"
    } else if (xp >= 9001 && xp <=10.000){
        return "Imortal"
    } else if (xp >= 10.001){
        return "Radiante"
    }
}

// A repetição para percorrer os niveis de cada herói e verificar seus niveis//
for (let i = 0; i < herois.length; i++) {
    let heroi = herois [i];
    let nivel = determinarNivel (heroi.xp);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}