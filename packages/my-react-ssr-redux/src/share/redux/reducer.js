import { reducer as listPage } from '../../client/pages/list/redux/index';
import { reducer as aboutPage } from '../../client/pages/about/redux/index';

import {combineReducers } from 'redux';

export default combineReducers({
    listPage,
    aboutPage
});

