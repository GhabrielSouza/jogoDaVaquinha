
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraator();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  VoltaPosiçãoInicalDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

