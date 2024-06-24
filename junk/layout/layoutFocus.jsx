import React from 'react';
import { Outlet } from 'react-router-dom';

import NavbarTab from "../navbar";




function Layout(props) {
    return (
        <div>
            <main style={{display: 'flex'}}> {/* Use flexbox */}
                <NavbarTab/>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;