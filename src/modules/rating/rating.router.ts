/**
 * @Copy Right 2018 北京百刻科技有限公司
 * Created by 宋宝文 on Tue Dec 18 2018 13:14:58 GMT+0800 (CST).
 * The file name is rating.router.ts
 * platform 百刻科技后端管理平台
 * Project 认证管理系统
 * The file was last modified on Tue Dec 18 2018 13:14:58 GMT+0800 (CST)
 * PIC 宋宝文
 * author 宋宝文
 * Modifier 宋宝文
 * Functions 评价设置
 */
import * as Router from 'koa-router';
import { RatingController } from './rating.controller';
const router = new Router();
const rating = new RatingController();

router
    .post('/list', rating.list) // 列表
    .post('/create', rating.create) // 创建
    .get('/detail/:id', rating.detail) // 获取页
    .post('/update', rating.update) // 更新
    .post('/delete', rating.del) // 删除

export { router };
