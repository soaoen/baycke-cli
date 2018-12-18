/**
 * @Copy Right 2018 北京百刻科技有限公司
 * Created by 宋宝文 on Tue Dec 18 2018 13:14:58 GMT+0800 (CST).
 * The file name is rating.controller.ts
 * platform 百刻科技后端管理平台
 * Project 认证管理系统
 * The file was last modified on Tue Dec 18 2018 13:14:58 GMT+0800 (CST)
 * PIC 宋宝文
 * author 宋宝文
 * Modifier 宋宝文
 * Functions 评价设置
 */
import { Context } from 'koa';
import { Rating } from './rating.model';
import { DbService } from '../../../services';
const ratingService = new DbService(Rating);

export class RatingController {
    /**
     * 集合
     * @Author   宋宝文
     * @DateTime 2018年11月23日 11时
     * @param    {Object}             ctx json对象
     * @return   {Object}                 返回json 数据
     */
    async list(ctx: Context): Promise<any> {
        const query = ctx.request.body;
        const ratings = await ratingService.getList(query)
        ctx.body = { ratings };
    };

    /**
     * 详情
     * @Author   宋宝文
     * @DateTime 2018年11月23日 11时
     * @param    {Object}             ctx json对象
     * @return   {Object}                 返回json 数据
     */
    async detail(ctx: Context): Promise<any> {
        const id = ctx.params.id;
        const rating = await Rating.findById(id);
        ctx.body = { rating };
    };

    /**
     * 保存
     * @Author   宋宝文
     * @DateTime 2018年11月23日 11时
     * @param    {Object}             ctx json对象
     * @return   {Object}                 返回json 数据
     */
    async create(ctx: Context): Promise<any> {
        const ratingObj = ctx.request.body.rating; // 订单信息

        const _rating = new Rating(ratingObj);
        const rating = await _rating.save();

        ctx.body = { rating };
    };

    /**
     * 更新
     * @Author   宋宝文
     * @DateTime 2018年11月23日 11时
     * @param    {Object}             ctx json对象
     * @return   {Object}                 返回json 数据
     */
    async update(ctx: Context): Promise<any> {
        const ratingObj = ctx.request.body.rating;
        const rating = await ratingService.update(ratingObj);
        ctx.body = { rating };
    };

    /**
     * 删除
     * @Author   宋宝文
     * @DateTime 2018年11月23日 11时
     * @param    {Object}             ctx json对象
     * @return   {Object}                 返回json 数据
     */
    async del(ctx: Context): Promise<any> {
        const id = ctx.request.body.id;
        const status = await Rating.findByIdAndRemove(id);
        ctx.body = { status };
    };
}
