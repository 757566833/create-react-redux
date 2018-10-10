const getFetch = (url, parameter, callback, returnError) => {

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
    fetch(url + parameterStr, {
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

            returnError(response.status);
            return '';
        }
    }, (error) => {
        error.message;
    }).then((data) => {
        if (data) {
            callback(data);
        } else {
            console.log();
        }

    });
};
const postFetch = (url, parameter, callback, returnError) => {

    
    let startTime = new Date().getTime();
    fetch(url , {
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

            returnError(response.status);
            return '';
        }
    }, (error) => {
        error.message;
    }).then((data) => {
        if (data) {
            callback(data);
        } else {
            console.log();
        }

    });
};
export { getFetch, postFetch };