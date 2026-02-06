// Quiz conversation data and logic

const quizData = {
    // Multiple question sets - one will be randomly selected OR mixed
    questionSets: [
        // Set 1: "How well do you know me" theme
        {
            id: 1,
            questions: [
                {
                    type: 'options',
                    botMessage: "First things first... Do you know who's sending you this? 😏",
                    options: [
                        { text: "My favorite person! 💕", correct: true },
                        { text: "A secret admirer? 🤔", correct: true },
                        { text: "No idea 😅", correct: false }
                    ],
                    correctResponse: "Hehe, you know it! 🥰",
                    wrongResponse: "Come on! Think harder... it's someone who loves you a lot! 💕",
                    wrongRetry: true
                },
                {
                    type: 'options',
                    botMessage: "What's our favorite thing to do together? 🌟",
                    options: [
                        { text: "Netflix & cuddle 🎬", correct: true },
                        { text: "Go on adventures 🚗", correct: true },
                        { text: "Cook together 👩‍🍳", correct: true },
                        { text: "All of the above! 💖", correct: true }
                    ],
                    correctResponse: "Every moment with you is my favorite! 🥹💕"
                },
                {
                    type: 'options',
                    botMessage: "How much do I love you? 💝",
                    options: [
                        { text: "A lot! ❤️", correct: false },
                        { text: "To the moon! 🌙", correct: false },
                        { text: "More than pizza! 🍕", correct: false },
                        { text: "Beyond infinity! ♾️", correct: true }
                    ],
                    correctResponse: "You got it! My love for you has no limits! 🚀💕",
                    wrongResponse: "Nope! Even MORE than that! Try again 😘",
                    wrongRetry: true
                },
                {
                    type: 'text',
                    botMessage: "You are my _______ 💭",
                    placeholder: "Type something sweet...",
                    anyResponse: true,
                    correctResponse: "Aww! You're my everything too! 🥺💕"
                }
            ]
        },
        // Set 2: "Our love story" theme
        {
            id: 2,
            questions: [
                {
                    type: 'options',
                    botMessage: "Do you remember the first time we met? 🥰",
                    options: [
                        { text: "How could I forget! 💕", correct: true },
                        { text: "Best day ever! ✨", correct: true },
                        { text: "Hmm, remind me? 🤔", correct: true }
                    ],
                    correctResponse: "That day changed my life forever! 💖"
                },
                {
                    type: 'options',
                    botMessage: "What made you fall for me? 😏💕",
                    options: [
                        { text: "Your smile 😊", correct: true },
                        { text: "Your humor 😂", correct: true },
                        { text: "Everything about you! 💖", correct: true },
                        { text: "Still figuring out 🤪", correct: true }
                    ],
                    correctResponse: "Well, I fell for EVERYTHING about you! 🥰"
                },
                {
                    type: 'options',
                    botMessage: "On a scale of 1-10, how much do you miss me when I'm not around? 🥺",
                    options: [
                        { text: "10! 💯", correct: false },
                        { text: "100! 🔥", correct: false },
                        { text: "Can't count that high! ♾️", correct: true },
                        { text: "Every second! ⏰", correct: true }
                    ],
                    correctResponse: "Same here! I can't stop thinking about you! 💕",
                    wrongResponse: "That's not high enough! Try again 😜",
                    wrongRetry: true
                },
                {
                    type: 'text',
                    botMessage: "What's your favorite memory of us? 📸",
                    placeholder: "Share a sweet memory...",
                    anyResponse: true,
                    correctResponse: "That's so special! I treasure every moment with you! 🥹💕"
                }
            ]
        },
        // Set 3: "Fun & playful" theme
        {
            id: 3,
            questions: [
                {
                    type: 'options',
                    botMessage: "Quick! What's my favorite thing about you? 🤔💕",
                    options: [
                        { text: "My cute face? 😊", correct: true },
                        { text: "My personality? ✨", correct: true },
                        { text: "My laugh? 😂", correct: true },
                        { text: "All of it! 💖", correct: true }
                    ],
                    correctResponse: "Trick question - I can't pick just one! 🥰"
                },
                {
                    type: 'options',
                    botMessage: "If I could spend forever with one person, who would it be? 🌅",
                    options: [
                        { text: "Hmm... your mom? 😜", correct: false },
                        { text: "Your best friend? 🤔", correct: false },
                        { text: "ME! Obviously! 💁‍♀️", correct: true },
                        { text: "Your pet? 🐕", correct: false }
                    ],
                    correctResponse: "YOU! Always and forever! 💕",
                    wrongResponse: "Really?! It's YOU silly! Try again 😘",
                    wrongRetry: true
                },
                {
                    type: 'options',
                    botMessage: "What superpower would I want? 🦸",
                    options: [
                        { text: "Flying ✈️", correct: false },
                        { text: "Invisibility 👻", correct: false },
                        { text: "Teleport to you instantly! 💨", correct: true },
                        { text: "Read minds 🧠", correct: false }
                    ],
                    correctResponse: "So I can be with you anytime! 🥰",
                    wrongResponse: "Nope! I just want to be with YOU faster! 💕",
                    wrongRetry: true
                },
                {
                    type: 'text',
                    botMessage: "Give me a cute nickname for us as a couple 💑",
                    placeholder: "Get creative...",
                    anyResponse: true,
                    correctResponse: "I love it! We're the cutest! 🥺💕"
                }
            ]
        },
        // Set 4: "Sweet & romantic" theme
        {
            id: 4,
            questions: [
                {
                    type: 'options',
                    botMessage: "What do I dream about most? 🌙✨",
                    options: [
                        { text: "Success & money 💰", correct: false },
                        { text: "Traveling the world 🌍", correct: false },
                        { text: "Our future together 💕", correct: true },
                        { text: "Pizza 🍕", correct: false }
                    ],
                    correctResponse: "A future with you is all I need! 🥰",
                    wrongResponse: "Close, but it's always about US! Try again 💕",
                    wrongRetry: true
                },
                {
                    type: 'options',
                    botMessage: "If I wrote a book about us, what would it be called? 📖",
                    options: [
                        { text: "The Perfect Match 💕", correct: true },
                        { text: "My Forever Person ♾️", correct: true },
                        { text: "How I Got So Lucky 🍀", correct: true },
                        { text: "All of these! 📚", correct: true }
                    ],
                    correctResponse: "Our love story deserves all the titles! 💖"
                },
                {
                    type: 'options',
                    botMessage: "What's the password to my heart? 🔐",
                    options: [
                        { text: "1234 🔢", correct: false },
                        { text: "Pizza 🍕", correct: false },
                        { text: "Your name 💕", correct: true },
                        { text: "ILoveYou 💖", correct: true }
                    ],
                    correctResponse: "You always had the key! 🗝️💕",
                    wrongResponse: "Hint: It's YOU! 😘",
                    wrongRetry: true
                },
                {
                    type: 'text',
                    botMessage: "Say something that'll make me smile right now 😊",
                    placeholder: "Make me smile...",
                    anyResponse: true,
                    correctResponse: "You always know how to make my heart melt! 🥹💕"
                }
            ]
        }
    ],
    
    // Final question - ALWAYS shown at the end
    finalQuestion: {
        type: 'options',
        botMessage: "Are you ready for a surprise? 🎁✨",
        options: [
            { text: "Yes, I'm excited! 🎉", correct: true },
            { text: "A little nervous 😊", correct: true },
            { text: "Show me! 💖", correct: true }
        ],
        correctResponse: "Here it comes... 💕"
    },
    
    // Multiple intro message sets - one will be randomly selected
    introMessageSets: [
        {
            id: 1,
            messages: [
                "Hey Buddhu! 💕",
                "I made something special for you...",
                "But first, let's play a little game! 🎮"
            ]
        },
        {
            id: 2,
            messages: [
                "Hey Tanisha! 😏💕",
                "I've been thinking about you all day...",
                "So I created this just for you! Ready to play? 🎯"
            ]
        },
        {
            id: 3,
            messages: [
                "Hello Buddhu! 🥰",
                "I have a surprise waiting for you...",
                "But you need to pass my little test first! 😜"
            ]
        },
        {
            id: 4,
            messages: [
                "There you are, Tanisha! 💖",
                "I was waiting for you..."
            ]
        },
        {
            id: 5,
            messages: [
                "Hey Buddhu! ✨",
                "Something special is coming your way..."
            ]
        }
    ],
    
    successMessages: [
        "💕"
    ]
};

// Get random intro messages
function getRandomIntroMessages() {
    const randomIndex = Math.floor(Math.random() * quizData.introMessageSets.length);
    return quizData.introMessageSets[randomIndex].messages;
}

// Get questions - either full set or mixed
function getRandomQuestions() {
    const useMixedMode = Math.random() > 0.5; // 50% chance of mixed mode
    
    if (useMixedMode) {
        // Mixed mode: pick random questions from different sets
        const allQuestions = quizData.questionSets.flatMap(set => set.questions);
        const shuffled = allQuestions.sort(() => Math.random() - 0.5);
        const selectedQuestions = shuffled.slice(0, 4); // Pick 4 random questions
        return [...selectedQuestions, quizData.finalQuestion];
    } else {
        // Full set mode: pick one complete set
        const randomSetIndex = Math.floor(Math.random() * quizData.questionSets.length);
        const selectedSet = quizData.questionSets[randomSetIndex].questions;
        return [...selectedSet, quizData.finalQuestion];
    }
}

class QuizController {
    constructor() {
        this.currentQuestion = 0;
        this.chatContainer = document.getElementById('chatContainer');
        this.inputArea = document.getElementById('inputArea');
        this.introIndex = 0;
        this.questions = getRandomQuestions(); // Get random questions on init
        this.responses = []; // Store all user responses
    }
    
    async start() {
        // Show intro messages first
        await this.showIntroMessages();
        // Then start questions
        await this.showQuestion();
    }
    
    async showIntroMessages() {
        const introMessages = getRandomIntroMessages();
        for (const message of introMessages) {
            await this.showTypingIndicator();
            await this.delay(1000);
            this.removeTypingIndicator();
            this.addBotMessage(message);
            await this.delay(800);
        }
        await this.delay(500);
    }
    
    async showQuestion() {
        const question = this.questions[this.currentQuestion];
        
        await this.showTypingIndicator();
        await this.delay(1200);
        this.removeTypingIndicator();
        this.addBotMessage(question.botMessage);
        
        await this.delay(400);
        this.showInputOptions(question);
        this.updateProgress();
    }
    
    showInputOptions(question) {
        this.inputArea.innerHTML = '';
        
        if (question.type === 'options') {
            const container = document.createElement('div');
            container.className = 'options-container';
            
            question.options.forEach((option, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = option.text;
                btn.onclick = () => this.handleOptionClick(option, question);
                container.appendChild(btn);
            });
            
            this.inputArea.appendChild(container);
        } else if (question.type === 'text') {
            const container = document.createElement('div');
            container.className = 'text-input-container';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'text-input';
            input.placeholder = question.placeholder || 'Type your answer...';
            input.id = 'textAnswer';
            
            const sendBtn = document.createElement('button');
            sendBtn.className = 'send-btn';
            sendBtn.textContent = '💕';
            sendBtn.onclick = () => this.handleTextSubmit(question);
            
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleTextSubmit(question);
            });
            
            container.appendChild(input);
            container.appendChild(sendBtn);
            this.inputArea.appendChild(container);
            
            input.focus();
        }
        
        // Add progress dots
        this.addProgressDots();
    }
    
    addProgressDots() {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        for (let i = 0; i < this.questions.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            if (i < this.currentQuestion) dot.classList.add('completed');
            if (i === this.currentQuestion) dot.classList.add('active');
            progressContainer.appendChild(dot);
        }
        
        this.inputArea.appendChild(progressContainer);
    }
    
    async handleOptionClick(option, question) {
        // Add user message
        this.addUserMessage(option.text);
        this.inputArea.innerHTML = '';

        // Store the response
        this.responses.push({
            question: question.botMessage,
            answer: option.text,
            timestamp: new Date().toISOString()
        });

        await this.delay(500);

        if (option.correct) {
            await this.showTypingIndicator();
            await this.delay(800);
            this.removeTypingIndicator();
            this.addBotMessage(question.correctResponse);
            await this.delay(1000);
            this.nextQuestion();
        } else {
            await this.showTypingIndicator();
            await this.delay(800);
            this.removeTypingIndicator();
            this.addBotMessage(question.wrongResponse || "Hmm, not quite! Try again 💕");

            if (question.wrongRetry) {
                await this.delay(800);
                this.showInputOptions(question);
            } else {
                await this.delay(1000);
                this.nextQuestion();
            }
        }
    }
    
    async handleTextSubmit(question) {
        const input = document.getElementById('textAnswer');
        const answer = input.value.trim();

        if (!answer) return;

        this.addUserMessage(answer);
        this.inputArea.innerHTML = '';

        // Store the response
        this.responses.push({
            question: question.botMessage,
            answer: answer,
            timestamp: new Date().toISOString()
        });

        await this.delay(500);
        await this.showTypingIndicator();
        await this.delay(1000);
        this.removeTypingIndicator();

        // Check if answer contains any keywords or accept any response
        const hasKeyword = question.keywords?.some(kw =>
            answer.toLowerCase().includes(kw.toLowerCase())
        );

        if (hasKeyword || question.anyResponse) {
            this.addBotMessage(question.correctResponse);
        } else {
            this.addBotMessage("Aww, that's sweet! 💕");
        }

        await this.delay(1000);
        this.nextQuestion();
    }
    
    async nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion >= this.questions.length) {
            await this.showSuccessAndTransition();
        } else {
            await this.showQuestion();
        }
    }
    
    async showSuccessAndTransition() {
        // Show success messages
        for (const message of quizData.successMessages) {
            await this.showTypingIndicator();
            await this.delay(1000);
            this.removeTypingIndicator();
            this.addBotMessage(message);
            await this.delay(800);
        }

        // Send responses to Google Form
        await this.sendToGoogleForm();

        await this.delay(500);

        // Show continue button
        this.inputArea.innerHTML = `
            <div class="success-message">
                <h2>💖 Ready? 💖</h2>
                <p>Click below to see your surprise!</p>
                <button class="continue-btn" onclick="goToProposal()">
                    Open My Heart 💝
                </button>
            </div>
        `;
    }

    async sendToGoogleForm() {
        // Configuration
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSemA-FlkBNG-isfP8up5W6oSjgw99Y47jotgbqz8E2Nvb6vIA/formResponse';

        // Format responses as a single string
        const responsesString = this.responses.map((r, index) => {
            return `Q${index + 1}: ${r.question}\nA: ${r.answer}\nTime: ${r.timestamp}\n`;
        }).join('\n---\n\n');

        try {
            // Create form data
            const formData = new FormData();

            // Add the responses to the form field
            formData.append('entry.1963254943', responsesString);

            // Send to Google Form
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Required for Google Forms
            });

            console.log('Responses sent to Google Form successfully!');
        } catch (error) {
            console.error('Error sending to Google Form:', error);
            // Don't block the user experience if form submission fails
        }
    }
    
    addBotMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'message bot';
        msg.textContent = text;
        this.chatContainer.appendChild(msg);
        this.scrollToBottom();
    }
    
    addUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'message user';
        msg.textContent = text;
        this.chatContainer.appendChild(msg);
        this.scrollToBottom();
    }
    
    async showTypingIndicator() {
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        this.chatContainer.appendChild(typing);
        this.scrollToBottom();
    }
    
    removeTypingIndicator() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }
    
    scrollToBottom() {
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
    
    updateProgress() {
        // Progress is shown in addProgressDots
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Create floating hearts for quiz page
function createQuizHearts() {
    const container = document.getElementById('quizHearts');
    const hearts = ['💕', '💖', '💗', '💓', '✨'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (5 + Math.random() * 5) + 's';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.fontSize = (12 + Math.random() * 15) + 'px';
            heart.style.opacity = '0.3';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 12000);
        }, i * 800);
    }
}
