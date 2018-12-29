
const action = {
    setUsername: (username) => {
        return { type: 'Footer', func: 'setUsername', username: username };
    },
    setPassword: (password) => {
        return { type: 'Footer', func: 'setPassword', password: password };
    },

};
export default action;