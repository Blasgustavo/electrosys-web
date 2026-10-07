/**
 * Electros.web - Main JavaScript
 * Intersection Observer for reveal animations
 */

(function() {
    'use strict';

    /**
     * Initialize reveal animations using Intersection Observer
     */
    function initRevealAnimations() {
        const revealElements = document.querySelectorAll('.card, .hero, .content-card, .benefit-card, .feature-card, .screenshot-card');

        if (!revealElements.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(element => {
            element.classList.add('reveal');
            revealObserver.observe(element);
        });
    }

    /**
     * Initialize smooth scroll for anchor links
     */
    function initSmoothScroll() {
        const anchors = document.querySelectorAll('a[href^="#"]');

        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Add loading class removal on page load
     */
    function handlePageLoad() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }

    /**
     * Initialize all modules
     */
    function init() {
        initRevealAnimations();
        initSmoothScroll();
        handlePageLoad();
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
