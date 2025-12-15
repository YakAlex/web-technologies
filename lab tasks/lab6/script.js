const btn = document.getElementById('toggle-btn');
const pokemon = document.querySelector('.pokemon');
const clouds = document.querySelectorAll('.cloud');
const sky = document.querySelector('.sky');

let isRunning = true;

btn.addEventListener('click', () => {
    if (isRunning) {
        pokemon.style.animationPlayState = 'paused';
        sky.style.animationPlayState = 'paused';

        clouds.forEach(cloud => {
            cloud.style.animationPlayState = 'paused';
        });

        btn.textContent = 'Start';
        isRunning = false;
    } else {

        pokemon.style.animationPlayState = 'running';
        sky.style.animationPlayState = 'running';

        clouds.forEach(cloud => {
            cloud.style.animationPlayState = 'running';
        });

        btn.textContent = 'Stop';
        isRunning = true;
    }
});