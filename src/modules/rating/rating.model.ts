/**
 * @Copy Right 2018 北京百刻科技有限公司
 * Created by 宋宝文 on Tue Dec 18 2018 13:14:58 GMT+0800 (CST).
 * The file name is rating.model.ts
 * platform 百刻科技后端管理平台
 * Project 认证管理系统
 * The file was last modified on Tue Dec 18 2018 13:14:58 GMT+0800 (CST)
 * PIC 宋宝文
 * author 宋宝文
 * Modifier 宋宝文
 * Functions 评价设置
 */
import { Schema, model, SchemaTypes } from 'mongoose';
import { IRating, IRatingDocument, IRatingModel } from './rating.interface';
import * as _ from 'lodash';

const RatingSchema = new Schema({
	
}, {
        timestamps: true
    }
);

/**
 * 评价设置
 */
export const Rating: IRatingModel = model<IRating, IRatingModel>('Rating', RatingSchema);
export default Rating;
