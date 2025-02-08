document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hearts-container');
    const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7'];
    let isEnvelopeOpen = false;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 7}s`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 300);

    $('.valentines').on('click', function() {
        if (!isEnvelopeOpen) {
            $('.card').stop().animate({
                top: '-90px'
            }, 'slow');
            isEnvelopeOpen = true;
        } else {
            $('.card').stop().animate({
                top: '0px'
            }, 'slow');
            isEnvelopeOpen = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hearts-container');
    const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7'];
    const menu = document.getElementById('menu');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const valentineCard = document.getElementById('valentineCard');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 7}s`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 300);

    yesBtn.addEventListener('click', () => {
        menu.style.display = 'none';
        valentineCard.style.display = 'block';
    });

    noBtn.addEventListener('click', () => {
        noBtn.style.display = 'none';
        yesBtn.style.width = '100%';
    });

    // Обработчик для открытия/закрытия конверта
    valentineCard.querySelector('.valentines').addEventListener('click', () => {
        valentineCard.querySelector('.card').classList.toggle('open');
        valentineCard.querySelector('.front').classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hearts-container');
    const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7'];
    const menuCard = document.getElementById('menuCard');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const valentineCard = document.getElementById('valentineCard');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 7}s`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 300);

    yesBtn.addEventListener('click', () => {
        menuCard.style.animation = 'fadeOutMove 0.5s ease-out forwards';
        setTimeout(() => {
            menuCard.style.display = 'none';
            valentineCard.style.display = 'block';
        }, 500);
    });

    noBtn.addEventListener('click', () => {
        noBtn.classList.add('fade-out');
        yesBtn.classList.add('expand');
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 500);
    });

    // Добавляем эффект перемещения кнопки "Нет" при наведении
    noBtn.addEventListener('mouseover', () => {
        if (!noBtn.classList.contains('fade-out')) {
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    });

    noBtn.addEventListener('mouseout', () => {
        if (!noBtn.classList.contains('fade-out')) {
            noBtn.style.transform = 'translate(0, 0)';
        }
    });
});