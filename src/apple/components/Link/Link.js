import React from 'react';
import classes from './Link.module.scss'

export function Link({href, children}) {
    const isActive = () => window.location.hash === href;
    const ref = React.useRef(null);

    function popHandler() {
        const active = isActive();
        ref.current.classList.toggle('active', active);
    }

    React.useEffect(() => {
        popHandler();
        window.addEventListener('popstate', popHandler);
        return () => window.removeEventListener('popstate', popHandler);
    }, []);

    return (
        <a onClick={popHandler} className={classes.Link} ref={ref} href={href}>{children}</a>
    );
}

