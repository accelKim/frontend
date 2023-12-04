import { GET, POST }  from "./FetchData";

const createTokenHeader = (token:string) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

const calculateRemainingTime = (expirationTime: number): number => {
    const currentTimestamp = new Date().getTime();
    const expirationTimestamp = new Date(Number(expirationTime)).getTime();
    const remainingDuration = expirationTimestamp - currentTimestamp;
    return Math.max(0, remainingDuration);
};

export const loginTokenHandler = (token:string, expirationTime:number) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', String(expirationTime));

    const remainingTime = calculateRemainingTime(expirationTime);
    return remainingTime;
}

export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime') || '0';

    const remainingTime = calculateRemainingTime(+ storedExpirationDate);

    if(remainingTime <= 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null
    }

    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const signupActionHandler = (email: string, password: string, nickname: string, phone:string) => {
    const URL = '/api/v1/auth/register'
    const signupObject = { email, password, nickname, phone};

    const response = POST(URL, signupObject, {});
    return response;
};

export const loginActionHandler = (email:string, password: string) => {
    const URL = '/api/v1/auth/authenticate';
    const loginObject = { email, password };
    const response = POST(URL, loginObject, {});
    return response;
};

export const logoutActionHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
};

export const getUserActionHandler = (token:string) => {
    const URL = '/api/v1/member/me';
    const response = GET(URL, createTokenHeader(token));
    return response;
}

export const changeNicknameActionHandler = ( nickname:string, token: string) => {
    const URL = '/api/v1/member/nickname';
    const changeNicknameObj = { nickname };
    const response = POST(URL, changeNicknameObj, createTokenHeader(token));

    return response;
}

export const changePasswordActionHandler = (
    exPassword: string,
    newPassword: string,
    token: string
) => {
    const URL = '/api/v1/member/password';
    const changePasswordObj = { exPassword, newPassword }
    const response = POST(URL, changePasswordObj, createTokenHeader(token));
    return response;
}