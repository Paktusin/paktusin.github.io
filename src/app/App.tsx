import React, {useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import './App.scss';

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(location);
        const path = localStorage.getItem('paktusin_path') || 'vk';
        if (location.pathname === '/') {
            navigate(`/${path}`);
        }
    }, [navigate, location])

    return (<Outlet/>);
}

export default App;
