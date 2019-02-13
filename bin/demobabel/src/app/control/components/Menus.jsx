import { menusRef } from '../../components/Menus/Menus_cmpt';
import interfaceErrorModel from '../../model/interfaceError';
export default class Control {
    static async getUsername() {
        const result = await interfaceErrorModel();
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                // menusRef.setUsername(data.data);
            } else {
                menusRef.interfaceError(data.msg);
            }
        } else {
            menusRef.networkError(result);

        }
    }
}