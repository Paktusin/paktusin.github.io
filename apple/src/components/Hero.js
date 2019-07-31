import React from 'react';
import injectStyles from 'react-jss';

const styles = theme => ({
    Hero: {
        width: '100%',
        textAlign: 'center',
        color: theme.textColor,
        fontSize: '1.3rem',
        lineheight: 1.3,
        fontweight: 'bold',
        '& h1': {
            fontSize: '1.7rem',
            margin: 0,
            lineHeight: 1.4
        },
        '& h2': {
            lineHeight: 1.0625,
            color: theme.textColor,
            margin: 0,
            fontSize: '4rem'
        },
        '& p': {
            margin: 0
        }
    }
});

function Hero({children, classes}) {
    return (
        <div className={classes.Hero}>
            {children}
        </div>
    );
}

export default injectStyles(styles)(Hero);