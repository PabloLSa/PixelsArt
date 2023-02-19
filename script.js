const botaoCores = document.getElementById('button-random-color');
const botaoLimpeza = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');
const color = document.getElementsByClassName('color');
const vqv = document.getElementById('generate-board');
const colorBlack = document.getElementsByClassName('color')[0];
colorBlack.style.backgroundColor = 'black';
// criando pixel
const pixelLInha = () => {
  const linhaPixel = document.createElement('div');
  linhaPixel.className = 'pixel-linha';
  return linhaPixel;
};
// criando paleta de cores
function criarPaleta() {
  const divColorPallete = document.getElementById('pixel-board');

  const divs = document.createElement('div');
  divColorPallete.appendChild(divs);
  divs.className = 'pixel';
  divs.style.border = '1px solid black';
  divs.style.width = '40px';
  divs.style.height = '40px';
  divs.style.backgroundColor = 'white';
  return divs;
}

// criando quadro
function quadroPixels(tamanho) {
  for (let index = 1; index <= tamanho; index += 1) {
    const linha = pixelLInha();
    for (let pixel = 1; pixel <= tamanho; pixel += 1) {
      linha.appendChild(criarPaleta());
    }
    pixelBoard.appendChild(linha);
  }
}

// gerando cores
function createColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// 1º pitando paletas
const pintandoPaleta = () => {
  const getColor = document.getElementsByClassName('color');
  for (let index = 1; index < getColor.length; index += 1) {
    getColor[index].style.backgroundColor = createColor();
    // eslint-disable-next-line no-use-before-define
  }

  return getColor;
};
pintandoPaleta();

function atribuindoClasse() {
  for (let index = 0; index < 4; index += 1) {
    color[index].addEventListener('click', (event) => {
      for (let index = 0; index < 4; index += 1) {
        color[index].className = 'color';
      }
      event.target.className = 'color selected';
    });
  }
}

atribuindoClasse();

// 2º - piantar pixel selecionado do quadrado
function pintarQuadrado() {
  pixelBoard.addEventListener('click', (e) => {
    const cores = window.getComputedStyle(document.querySelector('.selected')).backgroundColor;
    e.target.style.backgroundColor = cores;
    salvandoPixel();
  });
}
pintarQuadrado();
// 3º apagando as cores do pintadas no quadro
botaoLimpeza.addEventListener('click', () => {
  pixelBoard.innerHTML = '';
  quadroPixels(5);
});
botaoCores.addEventListener('click', () => { pintandoPaleta(), salvandoCores(); });
pintandoPaleta();
// 4º salvando cores das paletas
const corDasPaletas = color;
function salvandoCores() {
  const paleta = [];

  for (let index = 0; index < 4; index += 1) {
    paleta[index] = corDasPaletas[index].style.backgroundColor;
  }

  localStorage.setItem('colorPalette', JSON.stringify(paleta));
}
// 5º recuperando cores das paletas
const recuperarCores = () => {
  const coresSalvas = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < 4; index += 1) {
    corDasPaletas[index].style.backgroundColor = coresSalvas[index];
  }
};

if (localStorage.getItem('colorPalette') === null) {
  pintandoPaleta();
} else {
  recuperarCores();
}

// função criar quadro
quadroPixels(5);

// 6º salvando cores dos pixels
const pixel = document.getElementsByClassName('pixel');
const pixelboard = pixel;

const salvandoPixel = () => {
  const pixels = [];

  for (let index = 0; index < pixelboard.length; index += 1) {
    pixels[index] = pixelboard[index].style.backgroundColor;
  }

  localStorage.setItem('pixelBoard', JSON.stringify(pixels));
};
// 7º recuperando cores salvas dos pixels
const recuperandoPixel = () => {
  const pixelSalvo = JSON.parse(localStorage.getItem('pixelBoard'));

  if (pixelSalvo !== null) {
    for (let index = 0; index < pixelSalvo.length; index += 1) {
      pixelboard[index].style.backgroundColor = pixelSalvo[index];
    }
  }
};
// recuperandoPixel();
// verificando condioções para fazer o quadro

const verify = () => {
  const numbers = document.getElementById('board-size').value;

  if (numbers <= 0 || numbers === undefined) {
    alert('Board inválido!');
  } else if (numbers > 30) {
    pixelBoard.innerHTML = ' ';
    localStorage.clear();
    quadroPixels(50);
  } else if (numbers < 5) {
    pixelBoard.innerHTML = ' ';
    localStorage.clear();
    quadroPixels(5);
  } else {
    pixelBoard.innerHTML = ' ';
    localStorage.clear();
    quadroPixels(numbers);
  }
  // numbers <= 0 || numbers === undefined ? alert('Board inválido!') : pixelBoard.innerHTML = " ", localStorage.clear(), quadroPixels(numbers);
  // recuperandoPixel();
  localStorage.setItem('boardSize', JSON.stringify(numbers));
  // quadroPixels(tamanho);
};

window.onload = () => {
  const tamanho = JSON.parse(localStorage.getItem('boardSize'));
  if (tamanho !== null) {
    pixelBoard.innerHTML = '';
    quadroPixels(tamanho);
  }
  recuperandoPixel();
};

vqv.addEventListener('click', verify);
