let xBolinha = 300
let yBolinha = 200
let diametro = 15
let raio = diametro / 2

let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

let xRaquete = 5
let yRaquete = 150

let RaqueteComprimento = 10
let RaqueteAltura = 90

let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

let MeusPontos = 0
let PontosOponente = 0


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
  }

}

  function mostraRaquete(x, y) {
    rect(x, y, RaqueteComprimento, RaqueteAltura);
}

  
function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + RaqueteComprimento
      && yBolinha - raio < yRaquete + RaqueteAltura
      && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
  }

}

function verificaColisaoRaqueteOponente() {
  if(xBolinha + raio > xRaqueteOponente 
    && yBolinha + raio < yRaqueteOponente + RaqueteAltura
    && yBolinha + raio > yRaqueteOponente){
   velocidadeXBolinha *= -1;
}
}

function movimentaRaqueteOponente() {
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
}
if (keyIsDown(83)) {
    yRaqueteOponente += 10;
}
}

function incluiPlacar() {
  fill(255)
  text(MeusPontos, 278, 26)
  text(PontosOponente, 321, 26)
}

function marcaPonto() {
  if (xBolinha > 590) {
    MeusPontos += 1
  }
  if (xBolinha < 10) {
    PontosOponente += 1
  }
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
  xBolinha = 23
  }
}



