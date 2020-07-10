let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//Função para criar o espaço do jogo
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

//Função para criar o elemento cobra
function criarCobra(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

//Função para rodar o jogo
function iniciarJogo(){
    criarBG();
    criarCobra();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    switch(direction){
        case "right":
            snakeX += box;
            break;
        case "left":
            snakeY -= box;
            break;
        case "up":
            snakeY -= box;
            break;
        case "down":
            snakeY += box;
            break;
    }

    snake.pop();

    let novaCabeca = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(novaCabeca);
}

//Define a atualização do jogo a cada 100ms
let jogo = setInterval(iniciarJogo, 100);