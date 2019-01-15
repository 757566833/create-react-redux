const username = 'username';
const usernameState = {
    'name': username,
    'type': 'string',
    'default': 'user'
};
const setUsername = {
    'method': 'setUsername',
    'parameter': username
};

const mobile = 'mobile';
const mobileState = {
    'name': mobile,
    'type': 'string',
    'default': '123456789'
};
const setMobile = {
    'method': 'setMobile',
    'parameter': mobile
};


module.exports = { usernameState, setUsername, mobileState, setMobile };