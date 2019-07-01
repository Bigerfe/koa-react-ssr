import React, {
    Component
} from 'react';

import NowTime from './components/NowTime'
import utils from '../../common/module/utils';

import './css/index.scss';

export default class Index extends Component {

    render() {
        return <div> 我是首页
        当前时间是:<NowTime></NowTime>
        </div>
    }

}
