
const action = {
    setDefaultChild: (defaultChild) => {
        return { type: 'HomePage', func: 'setDefaultChild', defaultChild: defaultChild };
    },

};
export default action;