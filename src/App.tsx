import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CreateAccountPage from './login/component/Auth/CreateAccountForm';
import Layout from './login/component/Layout/Layout'
import AuthPage from "./login/pages/AuthPage";

import ProfilePage from './login/pages/ProfilePage';
import AuthContext from './login/store/auth-context';

function App() {

    const authCtx = useContext(AuthContext);

    return (
        <Layout>
            <Routes>
                
                <Route path="/signup/" element={authCtx.isLoggedIn ? <Navigate to='/' /> : <CreateAccountPage />} />
                <Route path="/login/*"
                       element={authCtx.isLoggedIn ? <Navigate to='/' /> : <AuthPage />}
                />
                <Route path="/profile/" element={!authCtx.isLoggedIn ? <Navigate to='/' /> : <ProfilePage />} />
            </Routes>
        </Layout>
    );
}

export default App;