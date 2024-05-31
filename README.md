# Jogo-testez1


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Jogo HTML</title>
    <style>
        /* Estilos CSS podem ser adicionados aqui */
        .character {
            width: 100px;
            height: 100px;
            background-color: blue; /* Cor do personagem principal */
        }

        .enemy {
            width: 50px;
            height: 50px;
            background-color: red; /* Cor dos inimigos */
        }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="player" class="character"></div> <!-- Personagem principal -->
        <div id="enemy" class="enemy"></div> <!-- Inimigo -->
    </div>

    <script>
        // JavaScript para funcionalidades do jogo
        const player = document.getElementById('player');
        const enemy = document.getElementById('enemy');

        // Posicionamento inicial dos personagens
        player.style.top = '50px';
        player.style.left = '50px';
        enemy.style.top = '200px';
        enemy.style.left = '200px';

        // Função para mover o jogador
        function movePlayer(direction) {
            // Lógica para mover o jogador aqui
        }

        // Função para iniciar o jogo
        function startGame() {
            // Lógica para começar o jogo aqui
        }

        // Chamada para iniciar o jogo
        startGame();
    </script>
</body>
</html>
