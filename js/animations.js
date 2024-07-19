document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');

    gsap.registerPlugin(ScrollTrigger);

    // Animacja nagłówka
    const header = document.querySelector('.header__nav');
    gsap.set(header, { opacity: 0, y: -30 });
    gsap.to(header, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power4.out'
    });

    // Animacja sekcji hero
    const heroTitle = document.querySelector('.hero__title');
    const heroDescription = document.querySelector('.hero__description');
    const heroCTA = document.querySelector('.hero__cta');
    const heroVideo = document.querySelector('.hero__video');

    gsap.set([heroTitle, heroDescription, heroCTA, heroVideo], { opacity: 0, y: 30 });

    const tl = gsap.timeline();

    tl.to(heroTitle, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power4.out'
    })
        .to(heroDescription, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'power4.out'
        }, "-=0.8")
        .to(heroCTA, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'power4.out'
        }, "-=0.8")
        .to(heroVideo, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'power4.out'
        }, "-=0.8");

    // Funkcja do tworzenia animacji przewijania
    function createScrollAnimation(triggerElement, elements, start = "top 70%", delayIncrement = 0.2) {
        gsap.set(elements, { opacity: 0, y: 30 });

        ScrollTrigger.create({
            trigger: triggerElement,
            start: start,
            onEnter: () => {
                elements.forEach((element, index) => {
                    gsap.to(element, {
                        duration: 1,
                        opacity: 1,
                        y: 0,
                        ease: 'power4.out',
                        delay: index * delayIncrement
                    });
                });
            }
        });
    }

    // Animacja sekcji portfolio
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    portfolioItems.forEach((item, index) => {
        gsap.set(item, { opacity: 0, y: 30 });

        ScrollTrigger.create({
            trigger: item,
            start: "top 70%",
            onEnter: () => {
                gsap.to(item, {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'power4.out',
                    delay: index * 0.2,
                    onComplete: function () {
                        const video = item.querySelector('video');
                        if (video) {
                            video.play().catch(error => {
                                console.error('Autoplay was prevented:', error);
                            });
                        }
                    }
                });
            }
        });
    });

    // Animacja sekcji about
    const aboutSection = document.querySelector('#about');
    const aboutElements = aboutSection.querySelectorAll('.about_content > *, video');
    createScrollAnimation(aboutSection, aboutElements);

    // Animacja sekcji prices
    const pricesSection = document.querySelector('#prices');
    const pricesHeader = pricesSection.querySelector('.prices__header');
    const priceItems = pricesSection.querySelectorAll('.prices__item');

    gsap.set(pricesHeader, { opacity: 0, y: 30 });
    gsap.set(priceItems, { opacity: 0, y: 30 });

    ScrollTrigger.create({
        trigger: pricesSection,
        start: "top 70%",
        onEnter: () => {
            gsap.to(pricesHeader, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: 'power4.out'
            });

            priceItems.forEach((item, index) => {
                gsap.to(item, {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    ease: 'power4.out',
                    delay: index * 0.3
                });
            });
        }
    });

    // Animacja sekcji FAQ
    const faqSection = document.querySelector('#faq');
    const faqHeader = faqSection.querySelector('.faq__header');
    const faqItems = faqSection.querySelectorAll('.faq__item');
    createScrollAnimation(faqSection, [faqHeader, ...faqItems]);

    // Animacja sekcji kontaktowej
    const contactSection = document.querySelector('#contact');
    const contactElements = [
        contactSection.querySelector('video'),
        contactSection.querySelector('.contact__header'),
        contactSection.querySelector('.contact__description'),
        ...contactSection.querySelectorAll('.contact__detail')
    ];
    createScrollAnimation(contactSection, contactElements);

    // Animacja footer
    const footer = document.querySelector('.footer__content');
    gsap.set(footer, { opacity: 0, y: 30 });

    ScrollTrigger.create({
        trigger: footer,
        start: "top 95%",
        onEnter: () => {
            gsap.to(footer, {
                duration: 2,
                opacity: 1,
                y: 0,
                ease: 'power4.out'
            });
        }
    });
});
