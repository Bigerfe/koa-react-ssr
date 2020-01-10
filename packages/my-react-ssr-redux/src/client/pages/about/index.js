//src/client/pages/about/index.js
//index 组件
//关于

import React from 'react';
import {Link} from 'react-router-dom';
import css from './index.scss';
import { getInitialData} from './redux/index';

import isoConnect from '../../common/components/iso-connect';

//组件
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    static async  getInitialProps({store}) {
        return store.dispatch(getInitialData());
    }

    render() {
        //渲染数据
        const {fetchData,page} = this.props.initialData;
        const { code, data } = fetchData||{};
        
        return <div className="about-page-box">
        {data &&  <h2>{data.str}</h2>}
        </div>
    }
}


const mapStateToProps = state => ({
    initialData: state.aboutPage,
});

const mapDispatchToProps = dispatch => ({
    getInitialData() {
        console.log('dispath fetch data');
        return dispatch(getInitialData());
    }
});

export default isoConnect({
    css,
    mapStateToProps,
    mapDispatchToProps
},Index);
