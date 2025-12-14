// Знаходимо кнопку і покемона
const btn = document.getElementById('toggle-btn');
const pokemon = document.querySelector('.pokemon');
const clouds = document.querySelectorAll('.cloud');
const sky = document.querySelector('.sky');

let isRunning = true; // Стан анімації

btn.addEventListener('click', () => {
    if (isRunning) {
        // ЯКЩО ПРАЦЮЄ -> ЗУПИНИТИ

        // Зупиняємо анімацію покемона (ставимо на паузу)
        pokemon.style.animationPlayState = 'paused';
        sky.style.animationPlayState = 'paused';

        // Зупиняємо кожну хмару
        clouds.forEach(cloud => {
            cloud.style.animationPlayState = 'paused';
        });

        btn.textContent = 'Start';
        isRunning = false;
    } else {
        // ЯКЩО СТОЇТЬ -> ЗАПУСТИТИ

        pokemon.style.animationPlayState = 'running';
        sky.style.animationPlayState = 'running';

        clouds.forEach(cloud => {
            cloud.style.animationPlayState = 'running';
        });

        btn.textContent = 'Stop';
        isRunning = true;
    }
});