import React from 'react';
import {getMenu} from '../../../data';
import {Link} from 'react-router-dom';

export const MainNav: React.FunctionComponent<{ side?: boolean }> = ({side = false}) => {
    const menu = getMenu();

    if (side) {
        return (
            <div className="btn-group-vertical side-menu">
                {menu.map((menuItem,index)=>
                    <a key={index} className="btn btn-sm btn-link">{menuItem.name}</a>
                )}
            </div>
        )
    }

    return (
        <>
            <nav id="mainNav" className="MainNav navbar navbar-expand navbar-dark bg-primary sticky-top">
                <div className="nav collapse navbar-collapse container">
                    <div className="col-2 p-0 d-none d-sm-flex">
                        <div className="navbar-brand logo" title="Yes I can draw!">
                        </div>
                    </div>
                    <div className="col-sm-10 col-12 p-0 d-inline-flex">
                        <ul className="ml-auto navbar-nav">
                            {menu.map((module, index) =>
                                <li key={index} className="nav-item">
                                    <Link to={module.url}><a className="nav-link">{module.name}</a></Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <a className="nav-link" href="/#/apple">Apple theme</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}
