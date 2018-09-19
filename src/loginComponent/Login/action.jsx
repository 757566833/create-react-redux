
const action = {
    setMobile: (mobile) => {
        return { type: 'Login', func: 'setMobile', mobile: mobile };
    },
    setPassword: (password) => {
        return { type: 'Login', func: 'setPassword', password: password };
    },
    setInfo: (info) => {
        return { type: 'Login', func: 'setInfo', info: info };
    },

};
export default action;