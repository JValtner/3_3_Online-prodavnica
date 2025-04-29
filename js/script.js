`use strict`
class Artikal{
    construktor(jedinstveniBroj, naziv, cena, dostupnost){
        this.jedinstveniBroj = jedinstveniBroj
        this.naziv = naziv
        this.cena = cena
        this.dostupnost = dostupnost
    }
}
let artMonitor = new Artikal("Monitor", 165, true)
let artTv = new Artikal("TV", 650, false)
let artMis = new Artikal("Mis", 20, true)
let artTastatura = new Artikal("Tastatura", 55,false)
const artikli =[artMonitor,artTv,artMis,artTastatura]