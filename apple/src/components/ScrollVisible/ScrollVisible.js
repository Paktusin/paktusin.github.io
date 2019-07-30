import React from 'react';
import classes from './ScrollVisible.module.scss'

export function ScrollVisible({children, delay = 150}) {

    function scrollHandler() {
        const visible = window.scrollY + window.innerHeight - 200;
        if (ref.current.offsetTop < visible) {
            window.removeEventListener('scroll', scrollHandler);
            showContent();
        }
    }

    function showContent() {

        (async () => {
            for (let el of ref.current.querySelectorAll('[data-scroll]')) {
                await new Promise(resolve => setTimeout(() => resolve(), delay));
                el.style.setProperty('opacity', 1);
                el.style.setProperty('transform', 'translateY(0px)');
            }
        })();
    }

    const ref = React.useRef(null);

    React.useEffect(() => {
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return <section className={classes.ScrollVisible} ref={ref}>{children}</section>
}