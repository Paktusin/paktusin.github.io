import React, {useContext} from 'react';
import clsx from 'clsx'
import classes from './AppBar.module.scss'
import {ThemeButton} from "../ThemeButton/ThemeButton";
import {Link} from '../Link/Link';
import {DataContext} from '../../Apple';

function AppBar() {
    const data = useContext(DataContext) as any;
    const modules = Object.keys(data).map(key => ({name: data[key].name, url: key}))

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
                    {modules.map((module, index) => <Link key={index} href={`#${module.url}`}>{module.name}</Link>)}
                </div>
                <ThemeButton/>
            </div>
        </div>
    );
}

export default AppBar;
