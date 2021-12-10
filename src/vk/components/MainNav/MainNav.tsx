import React from 'react';
import siteData from '../../../siteData.json';
import {SiteData} from '../../../SiteData';
import {Link} from 'react-router-dom';

export const MainNav: React.FunctionComponent<{ side?: boolean }> = ({side = false}) => {
    const modules = (siteData as SiteData).modules;

    if (side) {
        return (
            <div className="btn-group-vertical side-menu">
                <a className="btn btn-sm btn-link">
                    <i className="fa fa-lg fa-home" aria-hidden="true"></i>
                    {'About me'}</a>
                <a className="btn btn-sm btn-link" ui-sref="app.education">
                    <i className="fa fa-lg fa-graduation-cap" aria-hidden="true"></i>
                    {'Education'}</a>
                <a className="btn btn-sm btn-link" ui-sref="app.projects">
                    <i className="fa fa-lg fa-archive" aria-hidden="true"></i>
                    {'Projects'}</a>
                <a className="btn btn-sm btn-link" ui-sref="app.skills">
                    <i className="fa fa-lg fa-hand-spock-o" aria-hidden="true"></i>{'Skills'}</a>
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
                            {modules.map((module, index) =>
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
