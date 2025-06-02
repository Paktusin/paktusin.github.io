import React from 'react';
import cls from './Footer.module.scss'
import {Container} from "../Container/Container";

export const Footer = () => {
    return (
        <footer className={cls.Footer}>
            <Container>
                <p id={'disclaimer'}>* IT experience since 01.01.2012, Web development experience since 09.01.2015</p>
            </Container>
        </footer>
    );
};