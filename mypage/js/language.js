// Language management functionality
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ja';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ja' ? 'en' : 'ja';
        this.updateLanguage(this.currentLang);
        localStorage.setItem('language', this.currentLang);
    }

    updateLanguage(lang) {
        // Update all elements with data attributes
        const elements = document.querySelectorAll('[data-ja][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                // HTMLタグを正しく処理するため、innerHTMLを使用
                element.innerHTML = text;
            }
        });

        // Update language toggle button text
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'ja' ? 'EN' : 'JA';
            }
        }

        // Update document language attribute
        document.documentElement.lang = lang;
        
        // Add smooth transition effect
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '0.7';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 150);
    }
}

// Initialize language manager
const languageManager = new LanguageManager();

