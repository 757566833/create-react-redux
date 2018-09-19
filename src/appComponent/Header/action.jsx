
const action = {
    setDefaultChild: (defaultChild) => {
        return { type: 'Header', func: 'setDefaultChild', defaultChild: defaultChild };
    },
    setPhoneNumber: (phoneNumber) => {
        return { type: 'Header', func: 'setPhoneNumber', phoneNumber: phoneNumber };
    },
    setChildrenList: (childrenList) => {
        return { type: 'Header', func: 'setChildrenList', childrenList: childrenList };
    },

};
export default action;