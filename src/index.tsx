import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Apple from './apple/Apple';
import {Vk} from './vk/Vk';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="apple" element={<Apple/>}/>
                    <Route path="vk" element={<Vk/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);
