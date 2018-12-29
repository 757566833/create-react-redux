const {usernameState,setUsername,mobileState,setMobile} = require('../data/login/login')
module.exports = {
    'login': {
        'components': {
            'Header': {
                'state': [usernameState,mobileState],
                'func': [setUsername,setMobile]
            },
            'Content': {
                'state': [usernameState],
                'func': [setUsername]
            },
            'Footer': {
                'state': [mobileState],
                'func': [setMobile]
            }
        },
        'views': {
            'IndexView': {
                'components': ['Header', 'Content', 'Footer'],
                'state': [usernameState],
                'func': [setUsername]
            }
        }
    }

}
