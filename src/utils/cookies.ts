import Cookies from 'js-cookie';

// App
const sidebarStatusKey = 'sidebar_status';
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus);

const languageKey = 'language';
export const getLanguage = () => Cookies.get(languageKey);
export const setLanguage = (language: string) => Cookies.set(languageKey, language);

const sizeKey = 'size';
export const getSize = () => Cookies.get(sizeKey);
export const setSize = (size: string) => Cookies.set(sizeKey, size);

// User
const tokenKey = 'vue_typescript_admin_access_token';
const userNameKey = 'music_cloud_userName';
const userPwdKey = 'music_cloud_password';
export const getUserName = () => Cookies.get(userNameKey);
export const setUserName = (userName: string) => Cookies.set(userNameKey, userName);
export const removeUserName = () => Cookies.remove(userNameKey);
export const getUserPwd = () => Cookies.get(userPwdKey);
export const setUserPwd = (userPwd: string) => Cookies.set(userPwdKey, userPwd);
export const removeUserPwd = () => Cookies.remove(userPwdKey);
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token: string) => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);
