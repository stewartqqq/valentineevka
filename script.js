document.addEventListener('DOMContentLoaded', () => {
    const menuCard = document.getElementById('menuCard');
    const valentineCard = document.getElementById('valentineCard');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        menuCard.style.display = 'none';
        valentineCard.style.display = 'block';
    });

    noBtn.addEventListener('click', () => {
        const phrases = [
            "Ты уверена?",
            "Подумай еще раз!",
            "Может быть, все-таки да?",
            "Ну пожалуйста!",
            "Я буду очень стараться!"
        ];
        noBtn.textContent = phrases[Math.floor(Math.random() * phrases.length)];
        moveButton(noBtn);
    });

    function moveButton(button) {
        const maxWidth = window.innerWidth - button.offsetWidth;
        const maxHeight = window.innerHeight - button.offsetHeight;
        
        const newX = Math.random() * maxWidth;
        const newY = Math.random() * maxHeight;
        
        button.style.position = 'fixed';
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    }

    valentineCard.querySelector('.valentines').addEventListener('click', () => {
        const card = valentineCard.querySelector('.card');
        const front = valentineCard.querySelector('.front');
        
        card.classList.toggle('open');
        front.classList.toggle('open');
    });
});