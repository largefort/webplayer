window.onload = function() {
    var gameIframe = document.getElementById('game-iframe');

    function loadGame(url) {
        gameIframe.src = url;
    }

    // Example usage: loadGame('http://lutsgames.com/games/idle-superpowers/');
};
