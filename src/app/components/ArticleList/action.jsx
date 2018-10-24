
const action = {
    setDefaultChild: (defaultChild) => {
        return { type: 'ArticleList', func: 'setDefaultChild', defaultChild: defaultChild };
    },

};
export default action;