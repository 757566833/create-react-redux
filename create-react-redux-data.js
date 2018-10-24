module.exports = {
    'app': {
        'components': {
            'Header': {
                'state': [{
                    'name': 'defaultChild',
                    'type': 'object',
                    'default': { userName: '',currency:'BCH' }
                },{
                    'name': 'aaa',
                    'type': 'object',
                    'default': { a: '',b:'BCH' }
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
            },
            'testView':{
                'components': [],
                'state': [{
                    'name': 'defaultChild',
                    'type': 'object',
                    'default': { userName: '',currency:'BCH' }
                }],
                'func': [{
                    'method': 'setDefaultChild',
                    'parameter': 'defaultChild'
                }]
            }
        }
    }

}
