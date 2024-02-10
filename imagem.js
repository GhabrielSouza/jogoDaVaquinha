let imagemdaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let sonDaTrila;
let sonDaColisao;
let sonDoPonto;

function preload(){
  imagemDaEstrada = loadImage("assets/estrada.png");
  imagemDoAtor = loadImage("assets/ator-1.png");
  imagemDoCarro = loadImage("assets/carro-1.png");
  imagemDoCarro2 = loadImage("assets/carro-2.png");
  imagemDoCarro3 = loadImage("assets/carro-3.png");
  imagemDosCarros = [imagemDoCarro, imagemDoCarro2,imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
}