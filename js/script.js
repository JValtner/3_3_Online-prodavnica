`use strict`
class Artikal{
    constructor(jedinstveniBroj, naziv, cena, dostupnost){
        this.jedinstveniBroj = jedinstveniBroj
        this.naziv = naziv
        this.cena = cena
        this.dostupnost = dostupnost
    }
}
const artMonitor = new Artikal(1,"Monitor", 165, true)
const artTv = new Artikal(2,"TV", 650, false)
const artMis = new Artikal(3,"Mis", 20, true)
const artTastatura = new Artikal(4,"Tastatura", 55,false)

const artikli = [artMonitor,artTv,artMis,artTastatura];

let tabela = document.querySelector("#artikli") 
tabela.style.borderCollapse = "collapse"
tabela.style.border = "1px solid black"
tabela.style.textAlign = "center"

for(let artikal of artikli){
    let tr = document.createElement("tr")
    

    let jedinstveniBroj= document.createElement("td") 
    let naziv= document.createElement("td") 
    let cena= document.createElement("td") 
    let dostupnost= document.createElement("td") 

    jedinstveniBroj.style.border = "1px solid black"
    jedinstveniBroj.style.borderCollapse = "collapse"
    naziv.style.border = "1px solid black"
    naziv.style.borderCollapse = "collapse"
    cena.style.border = "1px solid black"
    cena.style.borderCollapse = "collapse"
    dostupnost.style.border = "1px solid black"
    dostupnost.style.borderCollapse = "collapse"

    jedinstveniBroj.textContent = artikal.jedinstveniBroj
    naziv.textContent = artikal.naziv
    cena.textContent = artikal.cena + " eur"
    

    if (artikal.dostupnost) {
        dostupnost.textContent = "DA"
    } else {
        dostupnost.textContent = "NE"
    }
    
    if(!artikal.dostupnost){
        tr.style.backgroundColor="#f8cecc"
        tr.style.border ="1px solid red"
    }

    tr.appendChild(jedinstveniBroj)
    tr.appendChild(naziv)
    tr.appendChild(cena)
    tr.appendChild(dostupnost)
    tabela.appendChild(tr)

}
         
    
     








