export default function ({ getState, dispatch }) {
    return (next) => (action) => {
        console.log('pre state', getState());
        // 调用 middleware 链中下一个 middleware 的 dispatch。
        next(action);
        console.log('after dispatch', getState());
    }
}