import { headerRef } from './Header_cmpt';
export default class Control {
    static async getUsername() {
        const result = await headerRef.getUsername();
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                headerRef.setUsername(data.data);
            } else {
                headerRef.interfaceError(data.msg);
            }
        } else {
            headerRef.networkError(result);

        }
    }
}