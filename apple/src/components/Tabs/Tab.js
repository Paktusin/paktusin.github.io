import React from 'react';
import cls from './Tabs.module.scss'

export const Tab = ({img, title}) => {
    return (
        <li className={cls.Tab}>
            <div>
                <img src={img}/>
                {title}
            </div>
        </li>
    );
};