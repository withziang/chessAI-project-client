import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


//----------------------------    Import Pages   ----------------------------------------------------------------

const HomePage = React.lazy(() => import('../pages/board-pages/homePage'));

const ErrorPage = React.lazy(() => import('../pages/utility-pages/errorPage'));
const LoadingPage = React.lazy(() => import('../pages/utility-pages/loadingPage'));
//----------------------------    Routes  ----------------------------------------------------------------

const RouteList = () => (
    <>
        <Suspense fallback={<LoadingPage/>}>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    </>
);

export default RouteList;
