const countdown = () => {
    const endDate = new Date('September 30, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDiff = endDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeDiff < 0) {
        clearInterval(interval);
        document.getElementById('countdown').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
        launchFireworks();
    }
};

const interval = setInterval(countdown, 1000);

const launchFireworks = () => {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.classList.remove('hidden');

    // Fireworks animation logic (simplified version)
    // You can integrate a fireworks library or write custom code here

    // Example animation using setInterval
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }, 100);
};

// Ensure canvas size matches the window size
window.addEventListener('resize', () => {
    const canvas = document.getElementById('fireworks-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize canvas size on load
window.addEventListener('load', () => {
    const canvas = document.getElementById('fireworks-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
