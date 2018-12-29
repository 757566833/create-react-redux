
const {usernameState,setUsername,mobileState,setMobile} = require('../data/app/app')
module.exports = {
    'app': {
        'components': {
            'Header': {
                'state': [usernameState,mobileState],
                'func': [setUsername,setMobile]
            },
            'Menus': {
                'state': [usernameState],
                'func': [setUsername]
            },
            'ArticleList': {
                'state': [mobileState],
                'func': [setMobile]
            },
            'SearchHeader': {
                'state': [],
                'func': []
            }
        },
        'views': {
            'IndexView': {
                'components': ['Header', 'Menus', 'ArticleList'],
                'state': [usernameState],
                'func': [setUsername]
            },
            'SearchView': {
                'components': ['SearchHeader', 'ArticleList'],
                'state': [],
                'func': []
            },
            'AdminView': {
                'components': ['ArticleList'],
                'state': [],
                'func': []
            }
        }
    }

}
