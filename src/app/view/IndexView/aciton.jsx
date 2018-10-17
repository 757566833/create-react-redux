
const action = {
    setDefaultChild: (defaultChild) => {
        return { type: 'SearchHeader', func: 'setDefaultChild', defaultChild: defaultChild };
    },

};
export default action;