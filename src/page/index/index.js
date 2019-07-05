import React, {
    Component
} from 'react';

import NowTime from './components/NowTime'
import utils from '../../common/module/utils';
import './css/index.scss';

export default class Index extends Component {

    componentDidMount(){
        //console.log('__DEV__', __DEV__);
    }

    render() {
        return <div>111
        当前时间是:<NowTime></NowTime>
        </div>
    }

}
