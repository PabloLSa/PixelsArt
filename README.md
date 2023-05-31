# PixelsArt

Esse foi meu projeto mais desafiador do módulo Fundamentos!! Consegui com muita vontade os 100 por cento de aprovação!!

Pixel Art Maker
Esse é um projeto desenvolvido para o curso de Desenvolvimento Web da Trybe, que tem como objetivo criar uma ferramenta de pintura online, onde o usuário pode escolher o tamanho do quadro, as cores da paleta e pintar os pixels do quadro.

Como usar
1. Acessando a ferramenta
Para acessar a ferramenta, basta abrir o arquivo index.html no seu navegador.

2. Criando o quadro
Ao abrir a ferramenta, você deve informar o tamanho do quadro desejado (entre 5 e 50) e clicar no botão "VQV".

3. Selecionando a cor
Para selecionar a cor que será usada para pintar os pixels, basta clicar em uma das cores da paleta.

4. Pintando os pixels
Para pintar os pixels, basta clicar em um dos quadrados do quadro.

5. Limpando o quadro
Para limpar o quadro, basta clicar no botão "Limpar".

6. Gerando cores aleatórias
Para gerar cores aleatórias para a paleta, basta clicar no botão "Cores aleatórias".

Funcionamento do código
O código foi desenvolvido em JavaScript e utiliza HTML e CSS para a estrutura e estilização da ferramenta de pintura.

Variáveis
- botaoCores: botão utilizado para gerar cores aleatórias para a paleta;

- botaoLimpeza: botão utilizado para limpar o quadro;

- pixelBoard: div que representa o quadro de pixels;

- color: array que representa as cores da paleta;

vqv: botão utilizado para criar o quadro com o tamanho informado pelo usuário;
colorBlack: primeira cor da paleta, que é a cor preta.

Funções

- pixelLInha: cria a linha de pixels do quadro;

- criarPaleta: cria as cores da paleta;

- quadroPixels: cria o quadro de pixels;

- createColor: gera cores aleatórias para a paleta;

- pintandoPaleta: pinta as cores da paleta;

- atribuindoClasse: atribui a classe "selected" à cor selecionada da paleta;

- pintarQuadrado: pinta o quadrado selecionado do quadro com a cor selecionada;

- salvandoCores: salva as cores da paleta no LocalStorage;

- recuperarCores: recupera as cores da paleta salvas no LocalStorage;

- salvandoPixel: salva as cores dos pixels do quadro no LocalStorage;

- recuperandoPixel: recupera as cores dos pixels do quadro salvas no LocalStorage;

- verify: verifica as condições informadas pelo usuário para criar o quadro.

O código implementa um quadro de pixels interativo no navegador, onde o usuário pode selecionar cores de uma paleta, pintar os pixels e limpar a área do quadro. As informações são armazenadas no localStorage do navegador, permitindo que o usuário retorne à tela e continue a interagir com o quadro de onde parou.

O fluxo de dados começa com a criação do quadro de pixels e da paleta de cores. Em seguida, são definidas funções para pintar os pixels e para pintar a paleta de cores, utilizando valores aleatórios. A classe "selected" é atribuída ao botão de cor selecionado, indicando qual é a cor que será aplicada ao clicar nos pixels. As informações de cores das paletas e pixels são salvas e recuperadas do localStorage.

O usuário também pode alterar o tamanho do quadro e apagar todo o conteúdo, o que remove as informações armazenadas no localStorage.
