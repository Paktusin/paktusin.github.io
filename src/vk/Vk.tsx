import React from 'react';
import {Outlet} from 'react-router-dom';
import {MainNav} from './components/MainNav/MainNav';

export const Vk = () => {
    return (
        <>
            <MainNav/>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-2 d-none d-md-block pl-0">
                        <MainNav side={true}/>
                    </div>
                    <div className="col-12 col-md-10">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}
