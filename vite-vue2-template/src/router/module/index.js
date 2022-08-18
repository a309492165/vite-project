// /src/router/module/index.js
import { home } from './home'

export const module = [
    {
        path: '/',
        redirect: '/home'
    }, ...home]
