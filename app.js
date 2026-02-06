// Main App Controller

let quizController;
let envelopeOpened = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Start with envelope intro
    initEnvelopeIntro();
    
    // Add floating hearts to envelope page
    createEnvelopeHearts();
    setInterval(createEnvelopeHearts, 10000);
});

// Initialize envelope intro
function initEnvelopeIntro() {
    const envelopeContainer = document.querySelector('.envelope-container');
    const envelope = document.getElementById('envelope');
    const flap = document.getElementById('envelopeFlap');
    const letter = document.getElementById('envelopeLetter');
    const tapHint = document.getElementById('tapHint');
    
    // Click to open envelope
    envelopeContainer.addEventListener('click', function() {
        if (envelopeOpened) return;
        envelopeOpened = true;
        
        // Hide tap hint
        tapHint.classList.add('hidden');
        
        // Open flap
        flap.classList.add('open');
        
        // Letter rises up
        setTimeout(() => {
            letter.classList.add('rise');
        }, 400);
        
        // Transition to quiz page
        setTimeout(() => {
            transitionToQuiz();
        }, 2000);
    });
}

// Create floating hearts for envelope page
function createEnvelopeHearts() {
    const intro = document.getElementById('envelope-intro');
    if (!intro || !intro.classList.contains('active')) return;
    
    const hearts = ['💕', '💖', '💗', '✨', '💌'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (6 + Math.random() * 6) + 's';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.fontSize = (12 + Math.random() * 15) + 'px';
            intro.appendChild(heart);
            
            setTimeout(() => heart.remove(), 14000);
        }, i * 600);
    }
}

// Transition from envelope to quiz
function transitionToQuiz() {
    const envelopeIntro = document.getElementById('envelope-intro');
    
    // Fade out envelope
    envelopeIntro.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    envelopeIntro.style.opacity = '0';
    envelopeIntro.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        envelopeIntro.classList.remove('active');
        
        // Show quiz page
        showPage('quiz-page');
        
        // Initialize quiz
        quizController = new QuizController();
        quizController.start();
        
        // Start quiz hearts
        createQuizHearts();
        setInterval(createQuizHearts, 10000);
    }, 800);
}

// Show a specific page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Transition to proposal page with heart animation
function goToProposal() {
    // Create heart mask transition
    const heartTransition = document.createElement('div');
    heartTransition.className = 'heart-mask-transition';
    heartTransition.innerHTML = '<div class="heart-mask-inner"></div>';
    document.body.appendChild(heartTransition);
    
    // Fade out quiz page slightly
    const quizPage = document.getElementById('quiz-page');
    quizPage.style.transition = 'opacity 0.5s ease';
    quizPage.style.opacity = '0.5';
    
    // After heart covers screen, switch pages
    setTimeout(() => {
        showPage('proposal-page');
        initProposalPage();
        
        // Hide quiz completely
        quizPage.style.opacity = '0';
        
        // Prepare proposal page
        const proposalPage = document.getElementById('proposal-page');
        proposalPage.style.opacity = '1';
    }, 1200);
    
    // Remove transition element after animation completes
    setTimeout(() => {
        heartTransition.style.transition = 'opacity 0.5s ease';
        heartTransition.style.opacity = '0';
        
        setTimeout(() => {
            heartTransition.remove();
        }, 500);
    }, 1800);
}

// Utility: Make functions globally accessible
window.goToProposal = goToProposal;
