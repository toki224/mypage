// Animation functionality
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupSkillBars();
        this.setupProjectHovers();
        this.setupButtonEffects();
    }

    // Scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Add animation classes to elements
        document.addEventListener('DOMContentLoaded', () => {
            const animateElements = document.querySelectorAll('.skill-item, .project-card, .stat-item, .about-text');
            animateElements.forEach(el => {
                el.classList.add('animate-on-scroll');
                observer.observe(el);
            });
            
            // Individual animation classes
            const slideLeftElements = document.querySelectorAll('.slide-in-left');
            slideLeftElements.forEach(el => observer.observe(el));
            
            const slideRightElements = document.querySelectorAll('.slide-in-right');
            slideRightElements.forEach(el => observer.observe(el));
            
            const fadeScaleElements = document.querySelectorAll('.fade-in-scale');
            fadeScaleElements.forEach(el => observer.observe(el));
            
            const bounceElements = document.querySelectorAll('.bounce-in');
            bounceElements.forEach(el => observer.observe(el));
        });
    }

    // Skill bars animation
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.style.width;
                    skillBar.style.width = '0%';
                    setTimeout(() => {
                        skillBar.style.width = width;
                    }, 200);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // Project card hover effects
    setupProjectHovers() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Button ripple effects
    setupButtonEffects() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple effect CSS
        const style = document.createElement('style');
        style.textContent = `
            .btn {
                position: relative;
                overflow: hidden;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .nav-link.active {
                color: #4F46E5;
            }
            
            .nav-link.active::after {
                width: 100%;
            }
        `;
        document.head.appendChild(style);
    }

    // Typing animation for hero title
    typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing animation when page loads
    initTypingAnimation() {
        document.addEventListener('DOMContentLoaded', () => {
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                const originalText = heroTitle.textContent;
                setTimeout(() => {
                    this.typeWriter(heroTitle, originalText, 80);
                }, 500);
            }
        });
    }

    // Parallax effect for hero section
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
});

