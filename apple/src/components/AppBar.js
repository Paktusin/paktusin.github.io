import React from 'react';
import classes from './AppBar.module.scss'

export function AppBar() {

    function scrollHandler(event) {
        setBg(window.scrollY > ref.current.offsetHeight ? 'rgb(51, 51, 51)' : 'transparent');
    }

    React.useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const [backgroundColor, setBg] = React.useState('transparent');
    const ref = React.useRef(null);

    return (
        <div ref={ref} className={classes.appBar} style={{backgroundColor}}>123</div>
    );
}