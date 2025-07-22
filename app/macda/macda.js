import { useEffect } from 'react';

const useMacda = () => {
    useEffect(() => {
        const pupil = document.getElementById('macda-pupil');
        const bubble = document.getElementById('macda-speech');
        const macdaContainer = document.getElementById('macda-container');
        const eye = document.getElementById('macda-eye');
        const chatbotWidget = document.getElementById('chatbot-widget');

        let idleTimeout = null;
        let lastMouseX = 0;
        let lastMouseY = 0;
        let isIdle = false;

        const showBubble = (text, clickable = false) => {
            bubble.innerHTML = text;
            bubble.classList.add('show');
            bubble.classList.toggle('clickable', clickable);
        };

        const hideBubble = () => {
            bubble.classList.remove('show', 'clickable');
        };

        const handleMouseMove = (e) => {
            const chatbotOpen = chatbotWidget && chatbotWidget.classList.contains('open');

            if (chatbotOpen) {
                pupil.style.transform = 'translate(0px, 0px)';
                hideBubble();
                clearTimeout(idleTimeout);
                return;
            }

            isIdle = false;
            clearTimeout(idleTimeout);
            hideBubble();

            const rect = eye.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const angle = Math.atan2(dy, dx);

            const radius = 20;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            pupil.style.transform = `translate(${x}px, ${y}px)`;

            lastMouseX = e.clientX;
            lastMouseY = e.clientY;

            idleTimeout = setTimeout(() => {
                const still = Math.abs(lastMouseX - e.clientX) < 2 && Math.abs(lastMouseY - e.clientY) < 2;
                if (!chatbotOpen && still) {
                    isIdle = true;

                    const idleRadius = 35;
                    const directX = idleRadius * Math.cos(angle);
                    const directY = idleRadius * Math.sin(angle);
                    pupil.style.transform = `translate(${directX}px, ${directY}px)`;

                    showBubble("Need my help? Start chat with me 💬", true);
                }
            }, 2000);
        };

        const handleMouseLeave = () => {
            pupil.style.transform = 'translate(0px, 0px)';
            hideBubble();
            clearTimeout(idleTimeout);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
};

export default useMacda;
