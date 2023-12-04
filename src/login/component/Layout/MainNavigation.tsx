import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import React from 'react';


const MainNavigation = () =>{

    const authCtx = useContext(AuthContext);
    const [nickname, setNickname] = useState('');
    // @ts-ignore
    let isLogin = authCtx.isLoggedIn;
    // @ts-ignore
    let isGet = authCtx.isGetSuccess;

    const callback = (str:string) => {
        setNickname(str);
    }

    useEffect(() => {
        if (isLogin) {
            console.log('start');
            // @ts-ignore
            authCtx.getUser();
        }
    }, [isLogin]);

    useEffect(() => {
        if (isGet) {
            console.log('get start');
            // @ts-ignore
            callback(authCtx.userObj.nickname);
        }
    }, [isGet]);


    const toggleLogoutHandler = () => {
        // @ts-ignore
        authCtx.logout();
    }


    return(
        <header>
            <Link to='/'><div >Home</div></Link>
            <nav>
                <ul>
                    <li>{!isLogin && <Link to='/login'>Login</Link>}</li>
                    <li>{!isLogin && <Link to='signup'>Sign-Up</Link>}</li>
                    <li>{isLogin && <Link to='/profile'>{nickname}</Link>}</li>
                    <li>{isLogin && <button onClick={toggleLogoutHandler}>Logout</button>}</li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;