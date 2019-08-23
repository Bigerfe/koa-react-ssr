//尚未使用
import { matchPath } from 'react-router-dom';

export default (Routes, path) => {
    console.log(Routes);
    // 根据请求的path来匹配到对应的component
    const activeRoute = Routes.find(route => matchPath(path, route)) || {}
    console.log('activeRoute', activeRoute);
    const activeComponent = activeRoute.Component
    return activeComponent
}