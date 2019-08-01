import React from 'react';
import clsx from 'clsx'
import classes from './AppBar.module.scss'
import {ThemeButton} from "../ThemeButton/ThemeButton";

function AppBar() {

    function scrollHandler() {
        setStick(window.scrollY > ref.current.offsetHeight / 2);
    }

    React.useEffect(() => {
        scrollHandler();
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const [stick, setStick] = React.useState(false);
    const ref = React.useRef(null);

    return (
        <div ref={ref} className={clsx(classes.appBar, stick && classes.stick)}>
            <div className={classes.content}>
                <h3>Web Developer</h3>
                <ThemeButton/>
            </div>
        </div>
    );
}

export default AppBar;