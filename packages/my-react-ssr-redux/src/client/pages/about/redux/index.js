
//action type
export const ACTION_TYPE={
  setInitData:'about/setInitData'
}

//更新数据
const setInitData = data => ({
  type: ACTION_TYPE.setInitData,
  data
});

//异步获得数据 【副作用】
export const getInitialData = (props) => {
  return (dispatch, getState) => {
    return new Promise(resolve=>{
      setTimeout(() => {
        const data = {
          fetchData: {
            code: 0,
            data: {str:'项目技术栈 - koa2 react16 react-router5 webpack4 babel7 node'}
          },
          page: {
            tdk: {
              title: '关于 - koa-react-ssr',
              keywords: '关键词 koa-react-ssr',
              description: '描述 koa-react-ssr'
            }
          }
        }
        resolve(data);
        dispatch(setInitData(data));
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
    case ACTION_TYPE.setInitData:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}

