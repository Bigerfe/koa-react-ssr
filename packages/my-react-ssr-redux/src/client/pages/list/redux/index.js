import tempData from '../data';

//action type
export const ACTION_TYPE={
  changeList:'list/changelist'
}

//更新数据
const changeList = list => ({
  type: ACTION_TYPE.changeList,
  list
});

//异步获得数据 【副作用】
export const getInitialData = (props) => {
  return (dispatch, getState) => {
    return new Promise(resolve=>{
      setTimeout(() => {
        const data = {
          fetchData: {
            code: 0,
            data: tempData
          },
          page: {
            tdk: {
              title: '列表页 - koa-react-ssr',
              keywords: '关键词 koa-react-ssr',
              description: '描述 koa-react-ssr'
            }
          }
        }
        resolve(data);
        dispatch(changeList(data));
      }, 500);
    })
  };
};


//默认数据
const defaultState = {
  fetchData:{},
  page:{}
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPE.changeList:
      return {
        ...state,
        ...action.list
      };
    default:
      return state;
  }
}

