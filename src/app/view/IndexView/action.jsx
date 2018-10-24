
const action = {
    setDefaultChild: (defaultChild) => {
        return { type: 'IndexView', func: 'setDefaultChild', defaultChild: defaultChild };
    },

};
export default action;