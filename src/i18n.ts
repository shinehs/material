import * as enZHTextMap from './locales/zh-CN.json';

// 注册语言表
class I18n {
    constructor(){}
    static format(path:string){
        return (enZHTextMap as any)[path];
    }
}

export default I18n;
