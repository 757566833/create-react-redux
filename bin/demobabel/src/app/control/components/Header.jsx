import { headerRef } from '../../components/Header/Header_cmpt';
import getUsernameModel from '../../model/getUsername';
export default class Control {
    static async getUsername() {
        const result = await getUsernameModel();
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