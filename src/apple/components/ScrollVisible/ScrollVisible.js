import React from 'react';
import './ScrollVisible.module.scss'

/**
 * @return {null}
 */
export function ScrollVisible() {

    async function scrollHandler() {
        const visible = window.scrollY + window.innerHeight;
        for (let el of document.body.querySelectorAll('[data-scroll]')) {
            if (window.scrollY < el.offsetTop + el.offsetHeight && el.offsetTop < visible && !el.style.opacity) {
                await new Promise(resolve => setTimeout(resolve, 100));
                showContent(el);
            }
        }
    }

    function showContent(el) {
        el.style.setProperty('opacity', 1);
        el.style.setProperty('transform', 'translateY(0px)');
    }


    React.useEffect(() => {
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [scrollHandler]);

    return null;
}