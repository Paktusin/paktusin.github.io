import React from 'react';
import clsx from 'clsx'
import injectStyles from 'react-jss'

const styles = theme => ({
    appBar: {
        position: 'sticky',
        top: 0,
        transition: 'all .5s ease',
        color: theme.textColor,
        zIndex: 5,
        padding: '1rem'
    },
    stick: {
        backgroundColor: `rgba(${theme.bgColor}, .9)`
    }
});

function AppBar({classes}) {

    function scrollHandler(event) {
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
            <h3>Web Developer</h3>
        </div>
    );
}

export default injectStyles(styles)(AppBar);