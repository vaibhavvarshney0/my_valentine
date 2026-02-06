// Proposal page functionality

// Configuration
const PHOTO_FOLDER = "memories"; // Folder name for your photos

// Photo files will be loaded dynamically from photos.json
let photoFiles = [];

const photoCaptions = [
    "Remember this moment, Buddhu? 💕",
    "Look how happy we are together! 🥰",
    "We're perfect together! 💖",
    "How can you say no to us? 😢",
    "Our love story is so beautiful! 💝",
    "You really want to miss more moments like this? 🥺",
    "We belong together, Tanisha! 💑",
    "Say yes and make more memories with me! 📸",
    "This smile... I love making you smile 😊",
    "Every moment with you is precious 💗",
    "Can't imagine life without you 🥹",
    "Look at us being so cute! 😘",
    "These memories are just the beginning 💫",
    "Remember how perfect this day was? ✨",
    "I fall for you more every day 💕",
    "You + Me = Forever 💖",
    "My favorite person in the world 🌎",
    "How lucky am I to have you? 🍀",
    "Please say yes, Buddhu! 🥺💕",
    "We have so many more memories to make! 📷"
];

const funnyTexts = [
    "No 😢",
    "Are you sure? 🥺",
    "Think again, Buddhu! 💕",
    "Pretty please? 🙏",
    "I'll be sad 😢",
    "One more chance? 💖",
    "You can't catch me! 😜",
    "Look at our photos! 📸",
    "Don't break my heart! 💔",
    "Reconsider? 🥹"
];

let photoClickCount = 0;
let availablePhotos = []; // Pool of available photos

// Load photos dynamically from JSON file
async function loadPhotoFiles() {
    try {
        const response = await fetch(`${PHOTO_FOLDER}/photos.json`);
        photoFiles = await response.json();
        console.log(`Loaded ${photoFiles.length} photos dynamically`);
        return photoFiles;
    } catch (error) {
        console.error('Error loading photos:', error);
        // Fallback to empty array
        photoFiles = [];
        return photoFiles;
    }
}

// Initialize photo pool
function initializePhotoPool() {
    // Clone the photoFiles array and shuffle
    availablePhotos = [...photoFiles];
    shuffleArray(availablePhotos);
}

// Shuffle array helper
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get next random photo filename
function getNextPhoto() {
    // If we've used all photos, reset the pool
    if (availablePhotos.length === 0) {
        initializePhotoPool();
    }

    // Get and remove the next photo from available pool
    return availablePhotos.pop();
}

// Create floating hearts for proposal page
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;
    
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '🌹'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (4 + Math.random() * 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.fontSize = (15 + Math.random() * 20) + 'px';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 10000);
        }, i * 500);
    }
}

// Yes button celebration
function sayYes() {
    document.getElementById('celebration').classList.add('active');
    createConfetti();
    
    // Create lots of confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 100);
    }
    
    // Close any popup
    closePhotoPopup();
    
    // Show calendar invite button after a delay
    setTimeout(() => {
        showCalendarInvite();
    }, 2500);
}

// Show calendar invite option
function showCalendarInvite() {
    const celebration = document.getElementById('celebration');
    
    // Check if already added
    if (document.getElementById('calendarSection')) return;
    
    const calendarSection = document.createElement('div');
    calendarSection.id = 'calendarSection';
    calendarSection.className = 'calendar-section';
    calendarSection.innerHTML = `
        <p class="calendar-text">Let's make it official! 📅</p>
        <button class="calendar-btn" onclick="addToCalendar()">
            Save Our Date 💕
        </button>
    `;
    
    celebration.appendChild(calendarSection);
}

// Add Valentine's Day to calendar
function addToCalendar() {
    // Valentine's Day event details
    const event = {
        title: "Valentine's Day with Tanisha 💕",
        description: "The most special day with my Buddhu! 💖\\n\\nShe said YES! 🎉",
        location: "Together with my love, Tanisha ❤️",
        startDate: getValentinesDay(),
        endDate: getValentinesDay(true)
    };
    
    // Generate ICS file content
    const icsContent = generateICS(event);
    
    // Download ICS file
    downloadICS(icsContent, "valentines-day-date.ics");
}

// Get Valentine's Day date (Feb 14)
function getValentinesDay(isEnd = false) {
    const now = new Date();
    let year = now.getFullYear();
    
    // If Valentine's Day has passed this year, use next year
    const valentines = new Date(year, 1, 14); // Month is 0-indexed
    if (now > valentines) {
        year++;
    }
    
    // Create date for Feb 14
    const date = new Date(year, 1, 14);
    
    if (isEnd) {
        date.setHours(23, 59, 59);
    } else {
        date.setHours(18, 0, 0); // 6 PM
    }
    
    return date;
}

// Format date for ICS
function formatDateForICS(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

// Generate ICS file content
function generateICS(event) {
    const now = new Date();
    const uid = `valentine-${now.getTime()}@lovemail.com`;
    
    const icsLines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Valentine App//Love Letter//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `UID:${uid}`,
        `DTSTAMP:${formatDateForICS(now)}`,
        `DTSTART:${formatDateForICS(event.startDate)}`,
        `DTEND:${formatDateForICS(event.endDate)}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
        `LOCATION:${event.location}`,
        'STATUS:CONFIRMED',
        'BEGIN:VALARM',
        'TRIGGER:-P1D',
        'ACTION:DISPLAY',
        'DESCRIPTION:Valentine\'s Day Tomorrow! 💕',
        'END:VALARM',
        'BEGIN:VALARM',
        'TRIGGER:-PT2H',
        'ACTION:DISPLAY',
        'DESCRIPTION:Valentine\'s Day Date in 2 hours! 💖',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
    ];
    
    return icsLines.join('\r\n');
}

// Download ICS file
function downloadICS(content, filename) {
    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show confirmation
    setTimeout(() => {
        showCalendarConfirmation();
    }, 500);
}

// Show confirmation after calendar download
function showCalendarConfirmation() {
    const btn = document.querySelector('.calendar-btn');
    if (btn) {
        btn.textContent = 'Date Saved! 🎉';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #2E7D32)';
        btn.style.color = 'white';
        btn.disabled = true;
    }
}

// Create confetti
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8fab', '#ffc3d7', '#c44569', '#ff4d6d', '#ffb3c6'];
    
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.width = (5 + Math.random() * 10) + 'px';
        confetti.style.height = (5 + Math.random() * 10) + 'px';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Get random position for popup
function getRandomPosition(elementWidth, elementHeight) {
    const padding = 50;
    const maxX = window.innerWidth - elementWidth - padding;
    const maxY = window.innerHeight - elementHeight - padding;
    
    return {
        x: Math.max(padding, Math.random() * maxX),
        y: Math.max(padding, Math.random() * maxY)
    };
}

// Create broken heart pieces effect
function createBrokenHeartPieces(x, y) {
    const pieces = ['💔', '❤️‍🩹', '🖤', '💜', '💙'];
    for (let i = 0; i < 8; i++) {
        const piece = document.createElement('div');
        piece.className = 'broken-piece';
        piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
        piece.style.left = (x + Math.random() * 200 - 100) + 'px';
        piece.style.top = (y + Math.random() * 200 - 100) + 'px';
        document.body.appendChild(piece);
        
        setTimeout(() => piece.remove(), 1000);
    }
}

// Show photo popup at random position
function showPhotoPopup() {
    // Remove any existing popup
    const existingPopup = document.querySelector('.photo-popup');
    const existingOverlay = document.querySelector('.overlay');
    if (existingPopup) existingPopup.remove();
    if (existingOverlay) existingOverlay.remove();

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'photo-popup';

    // Get random photo filename
    const photoFilename = getNextPhoto();

    popup.innerHTML = `
        <div class="heart-wrapper">
            <div class="heart-container">
                <div class="heart-border"></div>
                <img src="${PHOTO_FOLDER}/${photoFilename}" alt="Our memory" onerror="this.src='https://placehold.co/300x280/ff6b9d/white?text=Add+${photoFilename}+💕'">
                <div class="heart-vignette"></div>
            </div>
            <div class="thought-bubble">
                <div class="thought-dot thought-dot-1"></div>
                <div class="thought-dot thought-dot-2"></div>
                <div class="caption">${photoCaptions[Math.floor(Math.random() * photoCaptions.length)]}</div>
            </div>
        </div>
        <div class="popup-buttons">
            <button class="popup-btn popup-btn-yes" onclick="sayYes()">Yes! 💖</button>
            <button class="popup-btn popup-btn-no">${funnyTexts[Math.floor(Math.random() * funnyTexts.length)]}</button>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Position popup randomly
    const pos = getRandomPosition(500, 380);
    popup.style.left = pos.x + 'px';
    popup.style.top = pos.y + 'px';
    
    // Add hover/click event to the No button
    const popupNoBtn = popup.querySelector('.popup-btn-no');
    if (popupNoBtn) {
        popupNoBtn.addEventListener('click', handlePopupNo);
        popupNoBtn.addEventListener('mouseenter', handlePopupNo);
        popupNoBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            handlePopupNo();
        });
    }

    // Also add click handler to Yes button (as backup to inline onclick)
    const popupYesBtn = popup.querySelector('.popup-btn-yes');
    if (popupYesBtn) {
        popupYesBtn.addEventListener('click', sayYes);
    }
}

// Handle No button in popup
function handlePopupNo() {
    const popup = document.querySelector('.photo-popup');
    if (!popup) return;
    
    // Get popup position for broken pieces effect
    const rect = popup.getBoundingClientRect();
    createBrokenHeartPieces(rect.left + rect.width/2, rect.top + rect.height/2);
    
    // Add fade out animation
    popup.style.animation = 'none';
    popup.style.transition = 'all 0.5s ease';
    popup.style.transform = 'scale(0.8) rotate(10deg)';
    popup.style.opacity = '0';
    
    photoClickCount++;
    
    // Show new popup after animation
    setTimeout(() => {
        showPhotoPopup();
    }, 500);
}

// Close photo popup
function closePhotoPopup() {
    const popup = document.querySelector('.photo-popup');
    const overlay = document.querySelector('.overlay');
    if (popup) popup.remove();
    if (overlay) overlay.remove();
}

// Initialize proposal page
async function initProposalPage() {
    // Load photos dynamically first
    await loadPhotoFiles();

    // Initialize photo pool for random selection
    initializePhotoPool();

    createFloatingHearts();
    setInterval(createFloatingHearts, 8000);

    // Setup No button behavior
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        noBtn.addEventListener('mouseenter', function(e) {
            this.style.position = 'fixed';
            this.style.left = '-1000px';
            this.style.top = '-1000px';
            showPhotoPopup();
        });

        noBtn.addEventListener('click', function(e) {
            this.style.position = 'fixed';
            this.style.left = '-1000px';
            this.style.top = '-1000px';
            showPhotoPopup();
        });
    }
    
    // Add sparkles on mouse move
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.95) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = '✨';
            sparkle.style.left = e.pageX + 'px';
            sparkle.style.top = e.pageY + 'px';
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1500);
        }
    });
}

// Make ALL functions globally accessible (must be at the end after all functions are defined)
window.sayYes = sayYes;
window.addToCalendar = addToCalendar;
window.initProposalPage = initProposalPage;
window.showPhotoPopup = showPhotoPopup;
window.handlePopupNo = handlePopupNo;
window.closePhotoPopup = closePhotoPopup;
window.createConfetti = createConfetti;
window.createFloatingHearts = createFloatingHearts;
