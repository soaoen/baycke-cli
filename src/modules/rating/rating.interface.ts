/**
 * @Copy Right 2018 北京百刻科技有限公司
 * Created by 宋宝文 on Tue Dec 18 2018 13:14:58 GMT+0800 (CST).
 * The file name is rating.interface.ts
 * platform 百刻科技后端管理平台
 * Project 认证管理系统
 * The file was last modified on Tue Dec 18 2018 13:14:58 GMT+0800 (CST)
 * PIC 宋宝文
 * author 宋宝文
 * Modifier 宋宝文
 * Functions 评价设置
 */
import { Document, Model, model } from 'mongoose';

/**
 * 订单信息文档
 */
export interface IRatingDocument extends Document {
	
}

/**
 * 订单信息
 */
export interface IRating extends IRatingDocument {

}

/**
 * 订单信息模型
 */
export interface IRatingModel extends Model<IRating> {
    
}
