module.exports = {
    'app': {
        'components': {
            'Header': {
                'state': [{
                    'name': 'defaultChild',
                    'type': 'object',
                    'default': { userName: '',currency:'BCH' }
                }],
                'func': [{
                    'method': 'setDefaultChild',
                    'parameter': 'defaultChild'
                }]
            },
            'Menus': {
                'state': [{
                    'name': 'test',
                    'type': 'string',
                    'default': ''
                }],
                'func': []
            },
            'ArticleList': {
                'state': [],
                'func': []
            },
            'SearchHeader': {
                'state': [],
                'func': []
            }
        },
        'views': {
            'IndexView': {
                'components': ['Header', 'Menus', 'ArticleList'],
                'state': [{
                    'name': 'defaultChild',
                    'type': 'object',
                    'default': { userName: '',currency:'BCH' }
                }],
                'func': [{
                    'method': 'setDefaultChild',
                    'parameter': 'defaultChild'
                }]
            },
            'SearchView': {
                'components': ['SearchHeader', 'ArticleList'],
                'state': [],
                'func': []
            },
            'AdminView': {
                'components': [],
                'state': [],
                'func': []
            }
        }
    }

}
