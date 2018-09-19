
const action = {
    setChildrenList: (childrenList) => {
        return { type: 'Setting', func: 'setChildrenList', childrenList: childrenList };
    },
    setBalance: (balance) => {
        return { type: 'Setting', func: 'setBalance', balance: balance };
    },

};
export default action;