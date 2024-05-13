const target = document.getElementById('target');
const yes = document.getElementById('yes');
const container = document.getElementById('container');

yes.addEventListener('click', () => {
    alert("AWESOME... 😍💞");
});

function moveTarget() {
    const maxWidth = container.offsetWidth - target.offsetWidth;
    const maxHeight = container.offsetHeight - target.offsetHeight;
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    randomX = Math.max(0, randomX);
    randomY = Math.max(0, randomY);
    randomX = Math.min(maxWidth, randomX);
    randomY = Math.min(maxHeight, randomY);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

function moveTargetOnClick() {
    const maxWidth = container.offsetWidth - target.offsetWidth;
    const maxHeight = container.offsetHeight - target.offsetHeight;
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    randomX = Math.max(0, randomX);
    randomY = Math.max(0, randomY);
    randomX = Math.min(maxWidth, randomX);
    randomY = Math.min(maxHeight, randomY);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

target.addEventListener('mouseenter', moveTarget);
target.addEventListener('click', moveTargetOnClick);
