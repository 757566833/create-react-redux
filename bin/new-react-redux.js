const fs = require('fs');
const path = require('path');
const actionstr = fs.readFileSync(path.resolve(__dirname, 'babel', 'action.crr'), 'utf8');
const actionJsonstr = fs.readFileSync(path.resolve(__dirname, 'babel', 'actionJson.crr'), 'utf8');
const Bablestr = fs.readFileSync(path.resolve(__dirname, 'babel', 'Bable.crr'), 'utf8');
const BableReduxstr = fs.readFileSync(path.resolve(__dirname, 'babel', 'BableRedux.crr'), 'utf8');
const BableProTypesJson = fs.readFileSync(path.resolve(__dirname, 'babel', 'BableProTypesJson.crr'), 'utf8');
const mapDispatchToPropsstr = fs.readFileSync(path.resolve(__dirname, 'babel', 'mapDispatchToProps.crr'), 'utf8');
const mapDispatchToPropsJson = fs.readFileSync(path.resolve(__dirname, 'babel', 'mapDispatchToPropsJson.crr'), 'utf8');
const mapStateToPropsstr = fs.readFileSync(path.resolve(__dirname, 'babel', 'mapStateToProps.crr'), 'utf8');
const mapStateToPropsJson = fs.readFileSync(path.resolve(__dirname, 'babel', 'mapStateToPropsJson.crr'), 'utf8');
const stateBable = fs.readFileSync(path.resolve(__dirname, 'babel', 'stateBable.crr'), 'utf8');
const store = fs.readFileSync(path.resolve(__dirname, 'babel', 'store.crr'), 'utf8');
const reducer = fs.readFileSync(path.resolve(__dirname, 'babel', 'reducer.crr'), 'utf8');
const reducerTypeSwitch = fs.readFileSync(path.resolve(__dirname, 'babel', 'reducerTypeSwitch.crr'), 'utf8');
const reducerFuncCase = fs.readFileSync(path.resolve(__dirname, 'babel', 'reducerFuncCase.crr'), 'utf8');
const viewstr = fs.readFileSync(path.resolve(__dirname, 'babel', 'view.crr'), 'utf8');
const viewReduxstr = fs.readFileSync(path.resolve(__dirname, 'babel', 'viewRedux.crr'), 'utf8');
const viewImports = fs.readFileSync(path.resolve(__dirname, 'babel', 'viewImports.crr'), 'utf8');
const controlStr = fs.readFileSync(path.resolve(__dirname, 'babel', 'control.crr'), 'utf8');
class NewFile {
    constructor() {

    }
    createHtml(name) {
        try {
            fs.mkdirSync(path.resolve('redux-data'));
        } catch (error) {
            // console.log(error)
        }
        try {
            fs.mkdirSync(path.resolve('redux-data', 'data'));
        } catch (error) {
            // console.log(error)
        }
        try {
            fs.mkdirSync(path.resolve('redux-data', 'config'));
        } catch (error) {
            // console.log(error)
        }
        try {
            fs.mkdirSync(path.resolve('redux-data', 'data', name.toLowerCase()));
        } catch (error) {
            // console.log(error)
        }
        fs.writeFileSync(path.resolve('redux-data', 'data', name.toLowerCase(), `${name.toLowerCase()}.js`), 'module.exports = { };');
        fs.writeFileSync(path.resolve('redux-data', 'config', `${name.toLowerCase()}.js`), 'module.exports = { };');

        let entryArr = fs.readdirSync(path.resolve('redux-data', 'data'));
        let str = '';
        let exportsStr = 'module.exports = {';
        for (let index = 0; index < entryArr.length; index++) {
            str += `const ${entryArr[index]} = require('./${entryArr[index]}');
`;
            exportsStr += ` ...${entryArr[index]},`;
        }
        exportsStr += '};';
        fs.writeFileSync(path.resolve('redux-data', 'config', 'index.js'), `${str}${exportsStr}`);

        const redux_data_config_str = fs.readFileSync(path.resolve(__dirname, 'babel', 'redux-data-config.crr'), 'utf8');
        fs.writeFileSync(path.resolve('redux-data', 'config', `${name.toLowerCase()}.js`), `${redux_data_config_str.replace(/{{key}}/g,name)}`);

        try {
            fs.mkdirSync(path.resolve('src'));
        } catch (error) {
            // console.log(error)
        }
        try {
            fs.mkdirSync(path.resolve('src', 'entry'));
        } catch (error) {
            // console.log(error)
        }
        const entrystr = fs.readFileSync(path.resolve(__dirname, 'babel', 'entry.crr'), 'utf8');
        fs.writeFileSync(path.resolve('src', 'entry', `${name.toLowerCase()}.jsx`), entrystr.replace(/{{key}}/g, name.toLowerCase()).replace(/{{className}}/g, `${name.toLowerCase().slice(0, 1).toUpperCase()}${name.toLowerCase().slice(1)}`).replace(/{{imports}}/g, `import IndexView from '../${name.toLowerCase()}/view/IndexView/IndexView.jsx';`).replace(/{{routers}}/g, ''));
    }

    buildViewsControl(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'view'));
                } catch (error) {
                    // console.log(error)
                }
                let views = json[key].views;
                for (const viewsKey in views) {
                    if (views.hasOwnProperty(viewsKey)) {
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'view', viewsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        fs.writeFileSync(path.resolve('src', key, 'view', viewsKey, 'control.jsx'), controlStr.replace(/{{Key}}/g, viewsKey));
                    }
                }
            }
        }
    }
    buildViewRedux(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));

                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'view'));
                } catch (error) {
                    // console.log(error)
                }
                let views = json[key].views;
                // let imports = '';
                // let routers = '';
                for (const viewsKey in views) {

                    if (views.hasOwnProperty(viewsKey)) {
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'view', viewsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        let viewstate = views[viewsKey].state;
                        let viewfunc = views[viewsKey].func;
                        if (!Array.isArray(viewstate)) {
                            console.error(`views.${viewsKey}.state must be Array`);
                            return;
                        }
                        if (!Array.isArray(viewfunc)) {
                            console.error(`views.${viewsKey}.func must be Array`);
                            return;
                        }
                        let mapStateToPropsJSON = '';

                        for (let index = 0; index < viewstate.length; index++) {
                            if (!viewstate[index].name) {
                                console.error(`views.${viewsKey}.state[${index}] must be has name`);
                                return;
                            }
                            if (!viewstate[index].default) {
                                console.error(`views.${viewsKey}.state[${index}] must be has default`);
                                return;
                            }
                            let jsonstr = mapStateToPropsJson.replace(/{{name}}/g, viewstate[index].name);
                            mapStateToPropsJSON += `${jsonstr}` + '\n';

                            if (!viewstate[index].type) {
                                console.error(`${key}.components.views.${viewsKey}.state[${index}] must be has type`);
                                return;
                            }
                            // let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                            let jsonpropTypesstr = BableProTypesJson.replace(/{{name}}/g, viewstate[index].name);
                            // jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type.replace(/"/g, ''))
                            jsonpropTypesstr = jsonpropTypesstr.replace(/{{type}}/g, viewstate[index].type);
                        }
                        let actionJSON = '';
                        let mapDispatchToPropsJSON = '';
                        for (let index = 0; index < viewfunc.length; index++) {
                            if (!viewfunc[index].method) {
                                console.error(`views.${viewsKey}.func[${index}] must be has method`);
                                return;
                            }
                            if (!viewfunc[index].parameter) {
                                console.error(`views.${viewsKey}.func[${index}] must be has parameter`);
                                return;
                            }
                            let actionjsonstr = actionJsonstr.replace(/{{type}}/g, viewsKey);
                            // actionjsonstr = actionjsonstr.replace(/{{func}}/g, viewfunc[index].method.replace(/"/g, ''))
                            actionjsonstr = actionjsonstr.replace(/{{func}}/g, viewfunc[index].method);
                            // actionjsonstr = actionjsonstr.replace(/{{parameter}}/g, viewfunc[index].parameter.replace(/"/g, ''))
                            actionjsonstr = actionjsonstr.replace(/{{parameter}}/g, viewfunc[index].parameter);
                            actionJSON += `${actionjsonstr}` + '\n';

                            // let mapDispatchToPropsjsonstr = mapDispatchToPropsJson.replace(/{{method}}/g, viewfunc[index].method.replace(/"/g, ''))
                            let mapDispatchToPropsjsonstr = mapDispatchToPropsJson.replace(/{{method}}/g, viewfunc[index].method);
                            // mapDispatchToPropsjsonstr = mapDispatchToPropsjsonstr.replace(/{{parameter}}/g, viewfunc[index].parameter.replace(/"/g, ''))
                            mapDispatchToPropsjsonstr = mapDispatchToPropsjsonstr.replace(/{{parameter}}/g, viewfunc[index].parameter);
                            mapDispatchToPropsJSON += `${mapDispatchToPropsjsonstr}` + '\n';


                            let jsonstr = BableProTypesJson.replace(/{{name}}/g, viewfunc[index].method);
                            jsonstr = jsonstr.replace(/{{type}}/g, 'func');
                        }
                        // let viewFile = viewstr.replace(/{{imports}}/g, viewImportsStr).replace(/{{name}}/g, viewsKey);
                        // viewFile = viewFile.replace(/{{json}}/g, viewpropTypesJSON);
                        // if (viewfunc.length == 0 && viewstate.length == 0) {
                        //     viewFile = viewFile.replace(/import PropTypes/g, '\/\/ import PropTypes');
                        // }
                        // fs.writeFileSync(`./src/${key}/view/${viewsKey}/${viewsKey}.jsx`, viewFile)
                        let actionstrFile = actionstr.replace(/{{json}}/g, actionJSON);
                        fs.writeFileSync(path.resolve('src', key, 'view', viewsKey, 'action.jsx'), actionstrFile);
                        let mapDispatchToPropsFile = mapDispatchToPropsstr;
                        //这里为什么替换失败
                        // console.log(mapDispatchToPropsFile);
                        if (viewfunc.length != 0) {
                            mapDispatchToPropsFile = mapDispatchToPropsstr.replace(/{{import}}/g, 'import action from \'./action.jsx\';');
                        } else {
                            mapDispatchToPropsFile = mapDispatchToPropsstr.replace(/{{import}}/g, '').replace(/dispatch/g, '');
                        }
                        mapDispatchToPropsFile = mapDispatchToPropsFile.replace(/{{json}}/g, mapDispatchToPropsJSON);
                        fs.writeFileSync(`./src/${key}/view/${viewsKey}/mapDispatchToProps.jsx`, mapDispatchToPropsFile);

                        let mapStateToPropsFile = mapStateToPropsstr.replace(/{{json}}/g, mapStateToPropsJSON);
                        if (viewstate.length == 0) {
                            mapStateToPropsFile = mapStateToPropsFile.replace(/\(state\)/g, '()');
                        }

                        fs.writeFileSync(path.resolve('src', key, 'view', viewsKey, 'mapStateToProps.jsx'), mapStateToPropsFile);
                    }
                }
            }
        }
    }
    buildviewProgram_cmpt(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'view'));
                } catch (error) {
                    // console.log(error)
                }
                let views = json[key].views;
                for (const viewsKey in views) {
                    if (views.hasOwnProperty(viewsKey)) {
                        //component
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'view', viewsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        let viewImportsStr = '';
                        for (let index = 0; index < views[viewsKey].components.length; index++) {
                            viewImportsStr += viewImports.replace(/{{componentsKey}}/g, views[viewsKey].components[index]);

                        }
                        let viewstate = views[viewsKey].state;
                        let viewfunc = views[viewsKey].func;
                        if (!Array.isArray(viewstate)) {
                            console.error(`views.${viewsKey}.state must be Array`);
                            return;
                        }
                        if (!Array.isArray(viewfunc)) {
                            console.error(`views.${viewsKey}.func must be Array`);
                            return;
                        }
                        let viewpropTypesJSON = '';
                        for (let index = 0; index < viewstate.length; index++) {
                            if (!viewstate[index].name) {
                                console.error(`views.${viewsKey}.state[${index}] must be has name`);
                                return;
                            }
                            if (!viewstate[index].default) {
                                console.error(`views.${viewsKey}.state[${index}] must be has default`);
                                return;
                            }
                            // let jsonstr = mapStateToPropsJson.replace(/{{name}}/g, viewstate[index].name.replace(/"/g, ''))

                            if (!viewstate[index].type) {
                                console.error(`${key}.components.views.${viewsKey}.state[${index}] must be has type`);
                                return;
                            }
                            // let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                            let jsonpropTypesstr = BableProTypesJson.replace(/{{name}}/g, viewstate[index].name);
                            // jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type.replace(/"/g, ''))
                            jsonpropTypesstr = jsonpropTypesstr.replace(/{{type}}/g, viewstate[index].type);
                            viewpropTypesJSON += `${jsonpropTypesstr}` + '\n';
                        }
                        let viewFile = viewstr.replace(/{{imports}}/g, viewImportsStr).replace(/{{name}}/g, viewsKey);
                        viewFile = viewFile.replace(/{{json}}/g, viewpropTypesJSON);
                        if (viewfunc.length == 0 && viewstate.length == 0) {
                            viewFile = viewFile.replace(/import PropTypes/g, '// import PropTypes');
                        }

                        fs.writeFileSync(path.resolve('src', key, 'view', viewsKey, `${viewsKey}_cmpt.jsx`), viewFile);
                    }
                }

            }
        }
    }
    buildviewProgram(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'view'));
                } catch (error) {
                    // console.log(error)
                }
                let views = json[key].views;
                for (const viewsKey in views) {
                    if (views.hasOwnProperty(viewsKey)) {
                        //component
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'view', viewsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        let viewImportsStr = '';
                        for (let index = 0; index < views[viewsKey].components.length; index++) {
                            viewImportsStr += viewImports.replace(/{{componentsKey}}/g, views[viewsKey].components[index]);

                        }
                        let viewstate = views[viewsKey].state;
                        let viewfunc = views[viewsKey].func;
                        if (!Array.isArray(viewstate)) {
                            console.error(`views.${viewsKey}.state must be Array`);
                            return;
                        }
                        if (!Array.isArray(viewfunc)) {
                            console.error(`views.${viewsKey}.func must be Array`);
                            return;
                        }
                        let viewpropTypesJSON = '';
                        for (let index = 0; index < viewstate.length; index++) {
                            if (!viewstate[index].name) {
                                console.error(`views.${viewsKey}.state[${index}] must be has name`);
                                return;
                            }
                            if (!viewstate[index].default) {
                                console.error(`views.${viewsKey}.state[${index}] must be has default`);
                                return;
                            }

                            if (!viewstate[index].type) {
                                console.error(`${key}.components.views.${viewsKey}.state[${index}] must be has type`);
                                return;
                            }
                            // let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                            let jsonpropTypesstr = BableProTypesJson.replace(/{{name}}/g, viewstate[index].name);
                            // jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type.replace(/"/g, ''))
                            jsonpropTypesstr = jsonpropTypesstr.replace(/{{type}}/g, viewstate[index].type);
                            viewpropTypesJSON += `${jsonpropTypesstr}` + '\n';
                        }
                        let viewFile = viewReduxstr.replace(/{{imports}}/g, viewImportsStr).replace(/{{name}}/g, viewsKey);
                        viewFile = viewFile.replace(/{{json}}/g, viewpropTypesJSON);
                        if (viewfunc.length == 0 && viewstate.length == 0) {
                            viewFile = viewFile.replace(/import PropTypes/g, '// import PropTypes');
                        }
                        fs.writeFileSync(path.resolve('src', key, 'view', viewsKey, `${viewsKey}.jsx`), viewFile);
                    }
                }

            }
        }
    }
    buildComponentsControl(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'components'));
                } catch (error) {
                    // console.log(error)
                }
                let components = json[key].components;
                for (const componentsKey in components) {
                    if (components.hasOwnProperty(componentsKey)) {
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'components', componentsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        fs.writeFileSync(path.resolve('src', key, 'components', componentsKey, 'control.jsx'), controlStr.replace(/{{Key}}/g, componentsKey));
                    }
                }
            }
        }
    }
    createStoreState(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));

                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'redux'));
                } catch (error) {
                    // console.log(error)
                }

                let components = json[key].components;
                let views = json[key].views;
                let keyarr = [];
                let valuearr = [];
                for (const componentsKey in components) {
                    if (components.hasOwnProperty(componentsKey)) {
                        let stateArr = components[componentsKey].state;
                        let length = stateArr.length;
                        for (let index = 0; index < length; index++) {
                            if (!stateArr[index].name) {
                                console.error(`${key}.components.${componentsKey}.state[${index}] must be has name`);
                                return;
                            }
                            if (stateArr[index].default == undefined) {
                                console.error(`${key}.components.${componentsKey}.state[${index}] must be has default`);
                                return;
                            }
                            keyarr.push(stateArr[index].name);
                            // valuearr.push(stateArr[index].default.replace(/"/g, ''))
                            valuearr.push(stateArr[index].default);
                        }

                    }
                }
                for (const viewsKey in views) {
                    if (views.hasOwnProperty(viewsKey)) {
                        let stateArr = views[viewsKey].state;
                        let length = stateArr.length;
                        for (let index = 0; index < length; index++) {
                            if (!stateArr[index].name) {
                                console.error(`${key}.views.${viewsKey}.state[${index}] must be has name`);
                                return;
                            }
                            if (stateArr[index].default == undefined) {
                                console.error(`${key}.views.${viewsKey}.state[${index}] must be has default`);
                                return;
                            }
                            keyarr.push(stateArr[index].name);
                            // valuearr.push(stateArr[index].default.replace(/"/g, ''))
                            valuearr.push(stateArr[index].default);
                        }
                    }
                }
                let stateJson = {};
                for (let index = 0; index < keyarr.length; index++) {
                    stateJson[keyarr[index]] = valuearr[index];
                }
                let statestr = stateBable.replace(/{{json}}/g, JSON.stringify(stateJson).replace(/"/g, '\''));
                // let statestr = stateBable.replace(/{{json}}/g, JSON.stringify(stateJson))

                fs.writeFileSync(path.resolve('src', key, 'redux', 'state.jsx'), statestr);
            }
        }
    }
    createStoreStore(json) {
        //store
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'redux'));
                } catch (error) {
                    // console.log(error)
                }
                fs.writeFileSync(path.resolve('src', key, 'redux', 'store.jsx'), store);
            }
        }
    }
    createStoreReducer(json) {
        // reducer
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));

                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'redux'));
                } catch (error) {
                    // console.log(error)
                }
                let components = json[key].components;
                let views = json[key].views;
                let typeSwitch = '';
                for (const componentsKey in components) {
                    if (components.hasOwnProperty(componentsKey)) {
                        let reducerTypeSwitchStr = reducerTypeSwitch.replace(/{{component}}/g, componentsKey);
                        let caseArr = components[componentsKey].func.map((item) => {
                            return reducerFuncCase.replace(/{{method}}/g, item.method).replace(/{{parameter}}/g, item.parameter);
                        });
                        reducerTypeSwitchStr = reducerTypeSwitchStr.replace(/{{case}}/g, caseArr.toString().replace(/;,/g, ';\n' + '                '));
                        typeSwitch += reducerTypeSwitchStr + '\n' + '        ';
                    }
                }
                for (const viewskey in views) {
                    if (views.hasOwnProperty(viewskey)) {
                        let reducerTypeSwitchStr = reducerTypeSwitch.replace(/{{component}}/g, viewskey);
                        let caseArr = views[viewskey].func.map((item) => {
                            return reducerFuncCase.replace(/{{method}}/g, item.method).replace(/{{parameter}}/g, item.parameter);
                        });
                        reducerTypeSwitchStr = reducerTypeSwitchStr.replace(/{{case}}/g, caseArr.toString().replace(/;,/g, ';\n' + '                '));
                        typeSwitch += reducerTypeSwitchStr + '\n' + '        ';
                    }
                }
                let reducerFile = reducer.replace(/{{typeSwitch}}/g, typeSwitch);
                fs.writeFileSync(path.resolve('src', key, 'redux', 'reducer.jsx'), reducerFile);
            }
        }
    }
    buildComponentsRedux(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'components'));
                } catch (error) {
                    // console.log(error)
                }
                let components = json[key].components;
                for (const componentsKey in components) {

                    if (components.hasOwnProperty(componentsKey)) {
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'components', componentsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        let funcArr = components[componentsKey].func;

                        let stateArr = components[componentsKey].state;
                        if (!Array.isArray(funcArr)) {
                            console.error(`${key}.components.${components}.${componentsKey}.func must be Array`);
                            return;
                        }
                        if (!Array.isArray(stateArr)) {
                            console.error(`${key}.components.${componentsKey}.state must be Array`);
                            return;
                        }
                        let funcArrLenght = funcArr.length;
                        let stateArrLenght = stateArr.length;


                        // action mapDispatchToProps
                        let actionJSON = '';
                        let mapDispatchToPropsJSON = '';
                        for (let index = 0; index < funcArrLenght; index++) {
                            if (!funcArr[index].method) {
                                console.error(`${key}.components.${componentsKey}.func[${index}] must be has method`);
                                return;
                            }
                            if (!funcArr[index].parameter) {
                                console.error(`${key}.components.${componentsKey}.func[${index}] must be has parameter`);
                                return;
                            }

                            let actionjsonstr = actionJsonstr.replace(/{{type}}/g, componentsKey);
                            // actionjsonstr = actionjsonstr.replace(/{{func}}/g, funcArr[index].method.replace(/"/g, ''))
                            actionjsonstr = actionjsonstr.replace(/{{func}}/g, funcArr[index].method);
                            // actionjsonstr = actionjsonstr.replace(/{{parameter}}/g, funcArr[index].parameter.replace(/"/g, ''))
                            actionjsonstr = actionjsonstr.replace(/{{parameter}}/g, funcArr[index].parameter);
                            actionJSON += `${actionjsonstr}` + '\n';

                            // let mapDispatchToPropsjsonstr = mapDispatchToPropsJson.replace(/{{method}}/g, funcArr[index].method.replace(/"/g, ''))
                            let mapDispatchToPropsjsonstr = mapDispatchToPropsJson.replace(/{{method}}/g, funcArr[index].method);
                            // mapDispatchToPropsjsonstr = mapDispatchToPropsjsonstr.replace(/{{parameter}}/g, funcArr[index].parameter.replace(/"/g, ''))
                            mapDispatchToPropsjsonstr = mapDispatchToPropsjsonstr.replace(/{{parameter}}/g, funcArr[index].parameter);
                            mapDispatchToPropsJSON += `${mapDispatchToPropsjsonstr}` + '\n';
                        }
                        let actionstrFile = actionstr.replace(/{{json}}/g, actionJSON);

                        fs.writeFileSync(path.resolve('src', key, 'components', componentsKey, 'action.jsx'), actionstrFile);
                        let mapDispatchToPropsFile = mapDispatchToPropsstr;
                        //这里为什么替换失败
                        // console.log(mapDispatchToPropsFile);
                        if (funcArrLenght != 0) {
                            mapDispatchToPropsFile = mapDispatchToPropsstr.replace(/{{import}}/g, 'import action from \'./action.jsx\';');
                        } else {
                            mapDispatchToPropsFile = mapDispatchToPropsstr.replace(/{{import}}/g, '').replace(/dispatch/g, '');
                        }
                        mapDispatchToPropsFile = mapDispatchToPropsFile.replace(/{{json}}/g, mapDispatchToPropsJSON);
                        // console.log(mapDispatchToPropsFile);
                        fs.writeFileSync(path.resolve('src', key, 'components', componentsKey, 'mapDispatchToProps.jsx'), mapDispatchToPropsFile);

                        //mapStateToProps
                        let mapStateToPropsJSON = '';
                        for (let index = 0; index < stateArrLenght; index++) {
                            if (!stateArr[index].name) {
                                console.error(`${key}.components.${componentsKey}.state[${index}] must be has name`);
                                return;
                            }
                            if (stateArr[index].default == undefined) {
                                console.error(`${key}.components.${componentsKey}.state[${index}] must be has default`);
                                return;
                            }
                            // let jsonstr = mapStateToPropsJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                            let jsonstr = mapStateToPropsJson.replace(/{{name}}/g, stateArr[index].name);
                            mapStateToPropsJSON += `${jsonstr}` + '\n';
                        }
                        let mapStateToPropsFile = mapStateToPropsstr.replace(/{{json}}/g, mapStateToPropsJSON);
                        if (stateArrLenght == 0) {
                            mapStateToPropsFile = mapStateToPropsFile.replace(/\(state\)/g, '()');
                        }
                        fs.writeFileSync(path.resolve('src', key, 'components', componentsKey, 'mapStateToProps.jsx'), mapStateToPropsFile);
                    }
                }
            }
        }
    }
    buildComponentsProgram_cmpt(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'components'));
                } catch (error) {
                    // console.log(error)
                }
                let components = json[key].components;
                for (const componentsKey in components) {
                    if (components.hasOwnProperty(componentsKey)) {
                        //component
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'components', componentsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        let funcArr = components[componentsKey].func;

                        let stateArr = components[componentsKey].state;
                        if (!Array.isArray(funcArr)) {
                            console.error(`${key}.${components}.${componentsKey}.func must be Array`);
                            return;
                        }
                        if (!Array.isArray(stateArr)) {
                            console.error(`${key}.components.${componentsKey}.state must be Array`);
                            return;
                        }
                        let funcArrLenght = funcArr.length;
                        let stateArrLenght = stateArr.length;

                        //每个view 和入口文件
                        let componentJSON = '';

                        for (let index = 0; index < stateArrLenght; index++) {
                            if (!stateArr[index].type) {
                                console.error(`${key}.components.${componentsKey}.state[${index}] must be has type`);
                                return;
                            }
                            // let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                            let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name);
                            // jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type.replace(/"/g, ''))
                            jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type);
                            componentJSON += `${jsonstr}` + '\n';
                        }
                        for (let index = 0; index < funcArrLenght; index++) {
                            // let jsonstr = BableProTypesJson.replace(/{{name}}/g, funcArr[index].method.replace(/"/g, ''))
                            let jsonstr = BableProTypesJson.replace(/{{name}}/g, funcArr[index].method);
                            jsonstr = jsonstr.replace(/{{type}}/g, 'func');
                            componentJSON += `${jsonstr}` + '\n';
                        }
                        //每个模块的jsx

                        let componentFile = Bablestr.replace(/{{Key}}/g, componentsKey);
                        componentFile = componentFile.replace(/{{json}}/g, componentJSON);
                        if (stateArrLenght == 0 && funcArrLenght == 0) {
                            componentFile = componentFile.replace(/import PropTypes/g, '// import PropTypes');
                        }
                        fs.writeFileSync(path.resolve('src', key, 'components', componentsKey, `${componentsKey}_cmpt.jsx`), componentFile);
                    }
                }
            }
        }
    }
    buildComponentsProgram(json) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                try {
                    fs.mkdirSync(path.resolve('src', key));
                } catch (error) {
                    // console.log(error)
                }
                try {
                    fs.mkdirSync(path.resolve('src', key, 'components'));
                } catch (error) {
                    // console.log(error)
                }
                let components = json[key].components;
                for (const componentsKey in components) {
                    if (components.hasOwnProperty(componentsKey)) {
                        //component
                        try {
                            fs.mkdirSync(path.resolve('src', key, 'components', componentsKey));
                        } catch (error) {
                            // console.log(error)
                        }
                        let funcArr = components[componentsKey].func;

                        let stateArr = components[componentsKey].state;
                        if (!Array.isArray(funcArr)) {
                            console.error(`${key}.${components}.${componentsKey}.func must be Array`);
                            return;
                        }
                        if (!Array.isArray(stateArr)) {
                            console.error(`${key}.components.${componentsKey}.state must be Array`);
                            return;
                        }
                        let funcArrLenght = funcArr.length;
                        let stateArrLenght = stateArr.length;

                        //每个view 和入口文件
                        let componentJSON = '';

                        for (let index = 0; index < stateArrLenght; index++) {
                            if (!stateArr[index].type) {
                                console.error(`${key}.components.${componentsKey}.state[${index}] must be has type`);
                                return;
                            }
                            // let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                            let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name);
                            // jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type.replace(/"/g, ''))
                            jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type);
                            componentJSON += `${jsonstr}` + '\n';
                        }
                        for (let index = 0; index < funcArrLenght; index++) {
                            // let jsonstr = BableProTypesJson.replace(/{{name}}/g, funcArr[index].method.replace(/"/g, ''))
                            let jsonstr = BableProTypesJson.replace(/{{name}}/g, funcArr[index].method);
                            jsonstr = jsonstr.replace(/{{type}}/g, 'func');
                            componentJSON += `${jsonstr}` + '\n';
                        }
                        //每个模块的jsx

                        let componentFile = BableReduxstr.replace(/{{Key}}/g, componentsKey);
                        componentFile = componentFile.replace(/{{json}}/g, componentJSON);
                        if (stateArrLenght == 0 && funcArrLenght == 0) {
                            componentFile = componentFile.replace(/import PropTypes/g, '// import PropTypes');
                        }
                        fs.writeFileSync(path.resolve('src', key, 'components', componentsKey, `${componentsKey}.jsx`), componentFile);
                    }
                }
            }
        }
    }
}
module.exports = NewFile;