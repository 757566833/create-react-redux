
const action = {
    setDefaultChild: (defaultChild) => {
        return { type: 'Header', func: 'setDefaultChild', defaultChild: defaultChild };
    },

};
export default action;