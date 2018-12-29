import { menusRef } from './Menus_cmpt';
export default class Control {
    static async getUsername() {
        const result = await menusRef.getUsername();
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                menusRef.setUsername(data.data);
            } else {
                menusRef.interfaceError(data.msg);
            }
        } else {
            menusRef.networkError(result);

        }
    }
}