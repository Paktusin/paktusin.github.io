import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Apple from './apple/Apple';
import {Vk} from './vk/Vk';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="apple/:module" element={<Apple/>}/>
                    <Route path="apple" element={<Apple/>}/>
                    <Route path="vk" element={<Vk/>}>
                        <Route path="me"/>
                        <Route path="skills"/>
                        <Route path="certs"/>
                        <Route path="edu"/>
                        <Route path="projects"/>
                    </Route>
                </Route>
            </Routes>
        </HashRouter>

    </React.StrictMode>,
    document.getElementById('root')
);
