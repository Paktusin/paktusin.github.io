import React from 'react';
import clsx from 'clsx'
import classes from './AppBar.module.scss'
import {ThemeButton} from "../ThemeButton/ThemeButton";
import {Link} from "../Link/Link";

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
        <div data-height={true} ref={ref} className={clsx(classes.appBar, stick && classes.stick)}>
            <div className={classes.content}>
                <h3>Web Developer</h3>
                <div className={clsx(classes.links, stick && classes.show)}>
                    <Link href={'#me'}>About Me</Link>
                    <Link href={'#skills'}>Skills</Link>
                    <Link href={'#certs'}>Certificates</Link>
                    <Link href={'#edu'}>Education</Link>
                    <Link href={'#proj'}>Projects</Link>
                </div>
                <ThemeButton/>
            </div>
        </div>
    );
}

export default AppBar;