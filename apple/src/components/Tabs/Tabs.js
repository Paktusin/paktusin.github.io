import React from 'react';
import cls from './Tabs.module.scss'

export const Tabs = ({children}) => {

    return <ul className={cls.Tabs}>
        {children}
    </ul>;
};