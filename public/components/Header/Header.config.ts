import * as RoutesMap from '../../constants/RoutesMap/RoutesMap';

export const HOME = 'To do List';
export const NEWS = 'Новости';
export const PROFILE = 'Профиль';
export const SIGN_IN = 'Войти';
export const SIGN_OUT = 'Выйти';

export const buttons = [
    {
        text: HOME,
        type: 'button',
        pathTo: RoutesMap.HOME
    },
    {
        text: NEWS,
        type: 'button',
        pathTo: RoutesMap.NEWS
    },
    {
        text: PROFILE,
        type: 'button',
        pathTo: RoutesMap.PROFILE
    },
    {
        text: SIGN_IN,
        type: 'button',
        pathTo: RoutesMap.LOGIN
    }
];
