const getFetch = (url, parameter) => {

    let parameterStr = '?';
    if (parameter) {
        for (const key in parameter) {
            if (parameter.hasOwnProperty(key)) {
                parameterStr += (key + '=' + parameter[key] + '&');
            }
        }
    }
    parameterStr = parameterStr.substr(0, parameterStr.length - 1);
    let startTime = new Date().getTime();
    return fetch(url + parameterStr, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
    }).then((response) => {
        console.log(response);
        let returnTime = new Date().getTime();
        console.log('time', url, (returnTime - startTime) / 1000, '秒');
        if (response.status == 200) {
            return response.text();
        } else {
            return response.status;
        }
    }, (error) => {
        error.message;
    })
};
const postFetch = (url, parameter) => {

    
    let startTime = new Date().getTime();
    return fetch(url , {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(parameter)
    }).then((response) => {
        console.log(response);
        let returnTime = new Date().getTime();
        console.log('time', url, (returnTime - startTime) / 1000, '秒');
        if (response.status == 200) {
            return response.text();
        } else {
            return response.status;
        }
    }, (error) => {
        error.message;
    })
};
export { getFetch, postFetch };