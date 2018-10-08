const fs = require('fs');
const actionstr = fs.readFileSync('./babel/action.crr', 'utf8');
const actionJsonstr = fs.readFileSync('./babel/actionJson.crr', 'utf8');
const Bablestr = fs.readFileSync('./babel/Bable.crr', 'utf8');
const BableProTypesJson = fs.readFileSync('./babel/BableProTypesJson.crr', 'utf8');
const mapDispatchToPropsstr = fs.readFileSync('./babel/mapDispatchToProps.crr', 'utf8');
const mapDispatchToPropsJson = fs.readFileSync('./babel/mapDispatchToPropsJson.crr', 'utf8');
const mapStateToPropsstr = fs.readFileSync('./babel/mapStateToProps.crr', 'utf8');
const mapStateToPropsJson = fs.readFileSync('./babel/mapStateToPropsJson.crr', 'utf8');
const stateBable = fs.readFileSync('./babel/stateBable.crr', 'utf8');
const store = fs.readFileSync('./babel/store.crr', 'utf8');
const reducer = fs.readFileSync('./babel/reducer.crr', 'utf8');
const reducerTypeSwitch = fs.readFileSync('./babel/reducerTypeSwitch.crr', 'utf8');
const reducerFuncCase = fs.readFileSync('./babel/reducerFuncCase.crr', 'utf8');
const entry = fs.readFileSync('./babel/entry.crr', 'utf8');
const entryImports = fs.readFileSync('./babel/entryImports.crr', 'utf8');
const cmd = process.argv[2];
// 开始创建
try {
    fs.mkdirSync('./src');
} catch (error) {
    // console.log(error)
}

const jsonstr = fs.readFileSync('./create-react-redux.json', 'utf8');
const json = JSON.parse(jsonstr);
for (const key in json) {
    if (json.hasOwnProperty(key)) {
        let components = json[key];

        try {
            fs.mkdirSync('./src/' + key);
        } catch (error) {
            // console.log(error)
        }
        //app或者login下的 模块s
        try {
            fs.mkdirSync('./src/' + key.replace(/Component/g, 'Redux'));
        } catch (error) {
            // console.log(error)
        }



        //这里事整体store
        //state
        let keyarr = []
        let valuearr = []
        for (const componentsKey in components) {
            if (components.hasOwnProperty(componentsKey)) {
                let stateArr = components[componentsKey].state;
                let length = stateArr.length
                for (let index = 0; index < length; index++) {
                    if(!stateArr[index].name){
                        console.error(`${key}.${componentsKey}.state[${index}] must be has name`);
                        return
                    }
                    if(!stateArr[index].default){
                        console.error(`${key}.${componentsKey}.state[${index}] must be has default`);
                        return
                    }
                    keyarr.push(stateArr[index].name)
                    valuearr.push(stateArr[index].default.replace(/"/g, ''))
                }

            }
        }
        let stateJson = {};
        for (let index = 0; index < keyarr.length; index++) {
            stateJson[keyarr[index]] = valuearr[index]
        }
        let statestr = stateBable.replace(/{{json}}/g, JSON.stringify(stateJson).replace(/"/g, ''))
        fs.writeFileSync(`./src/${key.replace(/Component/g, 'Redux')}/state.jsx`, statestr)

        //store
        fs.writeFileSync(`./src/${key.replace(/Component/g, 'Redux')}/store.jsx`, store)

        // reducer
        let typeSwitch = '';
        for (const componentsKey in components) {
            if (components.hasOwnProperty(componentsKey)) {
                let reducerTypeSwitchStr = reducerTypeSwitch.replace(/{{component}}/g, componentsKey)
                let caseArr = components[componentsKey].func.map((item) => {
                    return reducerFuncCase.replace(/{{method}}/g, item.method).replace(/{{parameter}}/g, item.parameter);
                })
                reducerTypeSwitchStr = reducerTypeSwitchStr.replace(/{{case}}/g, caseArr.toString().replace(/;,/g, ';\n' + '                '))
                typeSwitch += reducerTypeSwitchStr + '\n' + '        '
            }
        }
        let reducerFile = reducer.replace(/{{typeSwitch}}/g, typeSwitch)
        fs.writeFileSync(`./src/${key.replace(/Component/g, 'Redux')}/reducer.jsx`, reducerFile)



        //这里事局部组件
        // 遍历模块
        for (const componentsKey in components) {
            if (components.hasOwnProperty(componentsKey)) {
                try {
                    fs.mkdirSync('./src/' + key + '/' + componentsKey);
                } catch (error) {
                    // console.log(error)
                }
                let funcArr = components[componentsKey].func;
                
                let stateArr = components[componentsKey].state;
                if(!Array.isArray(funcArr)){
                    console.error(`${key}.${components}.${componentsKey}.func must be Array`);
                    return
                }
                if(!Array.isArray(stateArr)){
                    console.error(`${key}.${componentsKey}.state must be Array`);
                    return
                }
                let funcArrLenght = funcArr.length;
                let stateArrLenght = stateArr.length;
                

                // action mapDispatchToProps
                let actionJSON = '';
                let mapDispatchToPropsJSON = '';
                for (let index = 0; index < funcArrLenght; index++) {
                    if(!funcArr[index].method){
                        console.error(`${key}.${componentsKey}.func[${index}] must be has method`);
                        return
                    }
                    if(!funcArr[index].parameter){
                        console.error(`${key}.${componentsKey}.func[${index}] must be has parameter`);
                        return
                    }
                    
                    let actionjsonstr = actionJsonstr.replace(/{{type}}/g, componentsKey)
                    actionjsonstr = actionjsonstr.replace(/{{func}}/g, funcArr[index].method.replace(/"/g, ''))
                    actionjsonstr = actionjsonstr.replace(/{{parameter}}/g, funcArr[index].parameter.replace(/"/g, ''))
                    actionJSON += `${actionjsonstr}` + '\n'

                    let mapDispatchToPropsjsonstr = mapDispatchToPropsJson.replace(/{{method}}/g, funcArr[index].method.replace(/"/g, ''))
                    mapDispatchToPropsjsonstr = mapDispatchToPropsjsonstr.replace(/{{parameter}}/g, funcArr[index].parameter.replace(/"/g, ''))
                    mapDispatchToPropsJSON += `${mapDispatchToPropsjsonstr}` + '\n'
                }
                let actionstrFile = actionstr.replace(/{{json}}/g, actionJSON)
                fs.writeFileSync(`./src/${key}/${componentsKey}/action.jsx`, actionstrFile)
                let mapDispatchToPropsFile = mapDispatchToPropsstr
                //这里为什么替换失败
                console.log(mapDispatchToPropsFile);
                if(funcArrLenght!=0){
                    mapDispatchToPropsFile = mapDispatchToPropsstr.replace(/{{import}}/g, "import action from './action.jsx';")
                }else{
                    mapDispatchToPropsFile = mapDispatchToPropsstr.replace(/{{import}}/g, '').replace(/dispatch/g, '')
                }
                mapDispatchToPropsFile = mapDispatchToPropsFile.replace(/{{json}}/g, mapDispatchToPropsJSON)
                console.log(mapDispatchToPropsFile);
                fs.writeFileSync(`./src/${key}/${componentsKey}/mapDispatchToProps.jsx`, mapDispatchToPropsFile)

                //mapStateToProps
                let mapStateToPropsJSON = '';
                for (let index = 0; index < stateArrLenght; index++) {
                    if(!stateArr[index].name){
                        console.error(`${key}.${componentsKey}.state[${index}] must be has name`);
                        return
                    }
                    let jsonstr = mapStateToPropsJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                    mapStateToPropsJSON += `${jsonstr}` + '\n'
                }
                let mapStateToPropsFile = mapStateToPropsstr.replace(/{{json}}/g, mapStateToPropsJSON);
                if(stateArrLenght!=0){

                }else{
                    mapStateToPropsFile = mapStateToPropsFile.replace(/\(state\)/g, '()')
                    console.log(mapDispatchToPropsFile);
                }
                fs.writeFileSync(`./src/${key}/${componentsKey}/mapStateToProps.jsx`, mapStateToPropsFile)


                //component
                if (cmd == 'create') {

                    //入口文件
                    let imports = []
                    for (const componentsKey in components) {
                        if (components.hasOwnProperty(componentsKey)) {
                            imports.push(entryImports.replace(/{{componentsKey}}/g, componentsKey).replace(/{{key}}/g, key))
                        }
                    }
                    fs.writeFileSync(`./src/${key.replace(/Component/g, '')}.jsx`, entry.replace(/{{imports}}/g, imports.toString().replace(/,/g, '\n')).replace(/{{componentRedux}}/g, key.replace(/Component/g, 'Redux')))


                    let componentJSON = '';

                    for (let index = 0; index < stateArrLenght; index++) {
                        if(!stateArr[index].type){
                            console.error(`${key}.${componentsKey}.state[${index}] must be has type`);
                            return
                        }
                        let jsonstr = BableProTypesJson.replace(/{{name}}/g, stateArr[index].name.replace(/"/g, ''))
                        jsonstr = jsonstr.replace(/{{type}}/g, stateArr[index].type.replace(/"/g, ''))
                        componentJSON += `${jsonstr}` + '\n'
                    }
                    for (let index = 0; index < funcArrLenght; index++) {
                        let jsonstr = BableProTypesJson.replace(/{{name}}/g, funcArr[index].method.replace(/"/g, ''))
                        jsonstr = jsonstr.replace(/{{type}}/g, 'func')
                        componentJSON += `${jsonstr}` + '\n'
                    }
                    //还差最后一个
                    
                    let componentFile = Bablestr.replace(/{{Key}}/g, componentsKey);
                    componentFile = componentFile.replace(/{{json}}/g, componentJSON);
                    if(stateArrLenght==0&&funcArrLenght==0){
                        componentFile = componentFile.replace(/import PropTypes/g, '\/\/ import PropTypes');
                    }
                    fs.writeFileSync(`./src/${key}/${componentsKey}/${componentsKey}.jsx`, componentFile)
                }




            }
        }
    }
}
