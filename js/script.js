// Loading Effect
document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    const loadingSteps = document.querySelectorAll('.loading-step');
    const progressBars = document.querySelectorAll('.progress');
    
    // Shorter loading sequence with more dynamic text
    const loadingSequence = [
        { text: 'Initializing system...', duration: 800 },
        { text: 'Loading modules...', duration: 600 },
        { text: 'Starting server...', duration: 400 },
        { text: 'Ready!', duration: 200 }
    ];
    
    // Update loading steps with typing effect
    loadingSteps.forEach((step, index) => {
        if (index < loadingSequence.length) {
            const command = step.querySelector('.command');
            const text = loadingSequence[index].text;
            let charIndex = 0;
            
            // Type out the text character by character
            const typeText = () => {
                if (charIndex < text.length) {
                    command.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeText, 50);
                } else {
                    // Start progress bar animation after text is typed
                    setTimeout(() => {
                        progressBars[index].style.width = '100%';
                    }, 200);
                }
            };
            
            // Start typing effect
            typeText();
        } else {
            step.style.display = 'none';
        }
    });
    
    // Add particle effect to the terminal
    const terminal = document.querySelector('.terminal');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ff00;
            border-radius: 50%;
            pointer-events: none;
            opacity: ${Math.random() * 0.5};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${1 + Math.random() * 2}s infinite;
        `;
        terminal.appendChild(particle);
    }
    
    // Remove loading overlay after all animations
    const totalDuration = loadingSequence.reduce((sum, step) => sum + step.duration, 0);
    setTimeout(() => {
        loadingOverlay.classList.add('fade-out');
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, totalDuration + 1000);
});

// Add particle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(10px, -10px);
        }
        50% {
            transform: translate(-10px, 10px);
        }
        75% {
            transform: translate(-10px, -10px);
        }
    }
`;
document.head.appendChild(style); 