import { articleListRef } from './ArticleList_cmpt';
export default class Control {
    static async getMobile() {
        const result = await articleListRef.getMobile();
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                articleListRef.setMobile(data.data);
            } else {
                articleListRef.interfaceError(data.msg);
            }
        } else {
            articleListRef.networkError(result);

        }
    }
}