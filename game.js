const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 64; // Tamanho maior para melhor visualização
const playerSize = tileSize;
const mapWidth = 10;
const mapHeight = 10;

canvas.width = mapWidth * tileSize;
canvas.height = mapHeight * tileSize;

const player = {
    x: 5 * tileSize,
    y: 5 * tileSize,
    speed: 2
};

const enemies = [
    { x: 2 * tileSize, y: 2 * tileSize, name: "distância" },
    { x: 7 * tileSize, y: 3 * tileSize, name: "distância" },
    { x: 4 * tileSize, y: 8 * tileSize, name: "distância" }
];

const keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            keys.up = true;
            break;
        case 'ArrowDown':
            keys.down = true;
            break;
        case 'ArrowLeft':
            keys.left = true;
            break;
        case 'ArrowRight':
            keys.right = true;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            keys.up = false;
            break;
        case 'ArrowDown':
            keys.down = false;
            break;
        case 'ArrowLeft':
            keys.left = false;
            break;
        case 'ArrowRight':
            keys.right = false;
            break;
    }
});

function update() {
    if (keys.up) player.y -= player.speed;
    if (keys.down) player.y += player.speed;
    if (keys.left) player.x -= player.speed;
    if (keys.right) player.x += player.speed;

    // Limitar a movimentação do jogador dentro dos limites do mapa
    if (player.x < tileSize) player.x = tileSize;
    if (player.y < tileSize) player.y = tileSize;
    if (player.x > (mapWidth - 2) * tileSize) player.x = (mapWidth - 2) * tileSize;
    if (player.y > (mapHeight - 2) * tileSize) player.y = (mapHeight - 2) * tileSize;

    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar o mapa
    for (let row = 0; row < mapHeight; row++) {
        for (let col = 0; col < mapWidth; col++) {
            if (map[row][col] === 1) {
                ctx.fillStyle = '#444';
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }
    }

    // Desenhar o jogador
    ctx.fillStyle = '#00f';
    ctx.fillRect(player.x, player.y, playerSize, playerSize);

    // Desenhar os inimigos
    enemies.forEach(enemy => {
        ctx.fillStyle = '#f00';
        ctx.fillRect(enemy.x, enemy.y, playerSize, playerSize);
        ctx.fillStyle = '#fff';
        ctx.fillText(enemy.name, enemy.x, enemy.y + playerSize + 10);
    });
}

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();