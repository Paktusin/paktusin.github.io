import React from 'react';
import clsx from 'clsx'
import classes from './AppBar.module.scss'
import {ThemeButton} from "../ThemeButton/ThemeButton";
import {Link} from 'react-router-dom';
import siteData from '../../../siteData.json';
import {SiteData} from '../../../SiteData';

function AppBar() {
    const modules = (siteData as SiteData).modules;

    function scrollHandler() {
        if (ref.current) {
            setStick(window.scrollY > ref.current.offsetHeight / 2);
        }
    }

    React.useEffect(() => {
        scrollHandler();
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const [stick, setStick] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <div data-height={true} ref={ref} className={clsx(classes.AppBar, stick && classes.stick)}>
            <div className={clsx('container', classes.content)}>
                <h3 className={'d-none d-md-flex'}>Web Developer</h3>
                <div className={clsx(classes.links, stick && classes.show)}>
                    {modules.map((module, index) => <Link to={`/apple/${module.url}`}>{module.name}</Link>)}
                    <Link to={'/#/vk'}>VK theme</Link>
                </div>
                <ThemeButton/>
            </div>
        </div>
    );
}

export default AppBar;
