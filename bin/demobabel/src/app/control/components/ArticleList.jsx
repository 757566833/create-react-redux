import { articleListRef } from '../../components/ArticleList/ArticleList_cmpt';
import networkErrorModel from '../../model/networkError';
export default class Control {
    static async getMobile() {
        const result = await networkErrorModel();
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                articleListRef.setUsername(data.data);
            } else {
                articleListRef.interfaceError(data.msg);
            }
        } else {
            articleListRef.networkError(result);

        }
    }
}