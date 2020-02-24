<div class="card" style='margin:0;width:300px;text-align:left'>
  <div class="van-doc-intro">
    <img class="van-doc-intro__logo" style="width: 120px; height: 120px;" src="https://img.yzcdn.cn/vant/logo.png">
    
  </div>
</div>

#### Vant 企业端常用组件
##### card组件
```<template>
      <div class='main'>
      <div class='cardDiv'>
        <el-scrollbar style="height:100%">
        <van-sticky>
          <van-card title="订单详情页">
            <div slot="title">
                <div>
                  <div class='new_order_title'>
                    <div class='new_order_orderno'><span>订单编号：</span><span>BB06836365953495</span><div class='new_order_status'>
                      <van-tag plain type="danger" style="margin-right: 5px;">
                        异常订单
                      </van-tag>
                    </div>
                    </div>
                  </div>
                  <div class='new_order_error'>
                      <span>异常原因: </span><span>201-云端识别失败</span>
                  </div>
                  <div class='new_order_mername'><span>会员昵称: </span><span>苏晓燕</span></div>
                  <div class='new_order_container'><span>联系方式: </span><span>15801030115</span></div>
                  <div class='new_order_creatime'>
                      <span>下单日期：</span><span>2019-05-01  12:12:12</span>
                  </div>
                  <div class='clear'></div>
                </div>
            </div>
          </van-card>
        </van-sticky>
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <div slot="title">订单明细<span class="detitle">共4件商品合计:</span><span class='price'>￥139</span></div>
           <van-card :thumb="imageURL">
        <div slot="title">
            <div>
              <div class='new_detail_goods'><span>商品：</span><span>百事可乐</span></div>
                <ul class="goodInfo">
                  <li><span>价格：</span><span>￥20.0</span></li>
                  <li><span>数量：</span><span>10件</span></li>
                  <li><span>原价：</span><span>￥20.0</span></li>
                </ul>
            </div>
        </div>
      </van-card>
       <van-card :thumb="imageURL">
        <div slot="title">
            <div>
              <div class='new_detail_goods'><span>商品：</span><span>百事可乐</span></div>
                <ul class="goodInfo">
                  <li><span>价格：</span><span>￥20.0</span></li>
                  <li><span>数量：</span><span>10件</span></li>
                  <li><span>原价：</span><span>￥20.0</span></li>
                </ul>
            </div>
        </div>
      </van-card>
        </van-collapse-item>
        <van-collapse-item title="支付信息" name="2" icon="shop-o">
           <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_pay_price'><span>退款金额：</span><span>￥10.00</span><div class='new_order_status'>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_mername'><span>退款单号: </span><span>cs00987934567</span></div>
                    <div class='new_order_container'><span>第三方退款单号: </span><span>ab999023904586019303595239230</span></div>
                    <div class='new_order_creatime'>
                        <span>退款时间:</span><span>2019-05-01  12:12:12</span>
                        <div class='oprater'><span>操作人：</span><span>苏晓燕</span></div>
                    </div>
                    <div class='new_order_creatime'>
                        <span>客服工单:</span><span>xxxxxxxxxxxxxxx</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
           </van-card>
           <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_pay_price'><span>退款金额：</span><span>￥10.00</span><div class='new_order_status'>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_mername'><span>退款单号: </span><span>cs00987934567</span></div>
                    <div class='new_order_container'><span>第三方退款单号: </span><span>ab999023904586019303595239230</span></div>
                    <div class='new_order_creatime'>
                        <span>退款时间:</span><span>2019-05-01  12:12:12</span>
                        <div class='oprater'><span>操作人：</span><span>苏晓燕</span></div>
                    </div>
                    <div class='new_order_creatime'>
                        <span>客服工单:</span><span>xxxxxxxxxxxxxxx</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
           </van-card>
        </van-collapse-item>
         <van-collapse-item title="机柜信息" name="3" icon="shop-o">
            <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_pay_price'><span>机柜类型：</span><span>重力柜</span></div>
                    </div>
                    <div class='new_order_mername'><span>商户名称: </span><span>动物园站知码开门xx</span></div>
                    <div class='new_order_container'><span>机柜位置: </span><span>北京市海淀区大柳树路175号</span></div>
                    <div class='new_order_creatime'>
                        <span>投放地点:</span><span>富海国际港1703B室</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
      </van-card>
        </van-collapse-item>
         <van-collapse-item name="4">
           <div slot="title">关联工单<span class="detitle">共4层</span></div>
            <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_worksheet_orderno'><span>订单编号：</span><span>BB06836365953495</span><div class='new_order_status'>
                        <van-tag plain type="danger" style="margin-right: 5px;">
                          异常订单
                        </van-tag>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>问题类型:</span><span>金额错误</span>
                              <div class='oprater'><span>反馈来源：</span><span>在线客服</span></div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>提交人:</span><span>苏晓燕</span>
                              <div class='oprater'><span>提交日期</span><span>2020-04-12</span></div>
                    </div>                 
                    <div class='new_order_creatime'>
                        <span>备注：</span><span>已经退款给商户了</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
            </van-card>
            <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_worksheet_orderno'><span>订单编号：</span><span>BB06836365953495</span><div class='new_order_status'>
                        <van-tag plain type="danger" style="margin-right: 5px;">
                          异常订单
                        </van-tag>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>问题类型:</span><span>金额错误</span>
                              <div class='oprater'><span>反馈来源：</span><span>在线客服</span></div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>提交人:</span><span>苏晓燕</span>
                              <div class='oprater'><span>提交日期</span><span>2020-04-12</span></div>
                    </div>
                    <div class='new_order_creatime'>
                        <span>备注：</span><span>已经退款给商户了</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
            </van-card>
        </van-collapse-item>
      </van-collapse>
      <div class='footer'>
        <div class='orderVedio' @click='cVideo()'><span class='span1'>订单视频</span></div>
        <div class='orderVedio1'><span class='span1'>创建工单</span></div>
         <!-- <div class='orderVedio1' @click='cWorksheet()'><span class='span1'>创建工单</span></div> -->
      </div>
      <!-- 创建工单 -->
      <van-popup
        v-model="show_worksheet"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '80%' }">
        <div style="padding:20px 0 60px 0">
          <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
            创建工单
          </van-divider>
          <div class='orderno'>订单编号：BB06829122482592</div>
          <van-collapse v-model="activeNames_type">
           <van-collapse-item title="请输入问题类型" name="1">
              <!-- 单选 -->
              <van-radio-group v-model="radio">
                <van-cell-group>
                  <van-cell title="金额错误" clickable @click="radio = '1'">
                    <van-radio slot="right-icon" name="1" />
                  </van-cell>
                  <van-cell title="识别错误" clickable @click="radio = '2'">
                    <van-radio slot="right-icon" name="2" />
                  </van-cell>
                   <van-cell title="包装问题" clickable @click="radio = '3'">
                    <van-radio slot="right-icon" name="3" />
                  </van-cell>
                 <van-cell title="过保质期" clickable @click="radio = '4'">
                    <van-radio slot="right-icon" name="4" />
                  </van-cell>
                <van-cell title="其他" clickable @click="radio = '5'">
                    <van-radio slot="right-icon" name="5" />
                  </van-cell>
                </van-cell-group>
              </van-radio-group>
              <!-- 单选 -->
           </van-collapse-item>
          </van-collapse>
          <van-field
            v-model="message"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
          />
          <van-divider>相关图片(0/{{fileList.length}})</van-divider>
          <div style="margin:0 0 0 5px">
            <van-uploader
            v-model="fileList"
            multiple
            :max-count="4"
            />
          </div>
          <div class="w_footer">
            <van-button type="default">取消</van-button>
            <van-button type="primary">确定</van-button>
          </div>
        </div>
        </van-popup>
         </el-scrollbar>
        </div>
       
   </div>
</template>
```
<template>
      <div class='main'>
      <div class='cardDiv'>
        <el-scrollbar style="height:100%">
        <van-sticky>
          <van-card title="订单详情页">
            <div slot="title">
                <div>
                  <div class='new_order_title'>
                    <div class='new_order_orderno'><span>订单编号：</span><span>BB06836365953495</span><div class='new_order_status'>
                      <van-tag plain type="danger" style="margin-right: 5px;">
                        异常订单
                      </van-tag>
                    </div>
                    </div>
                  </div>
                  <div class='new_order_error'>
                      <span>异常原因: </span><span>201-云端识别失败</span>
                  </div>
                  <div class='new_order_mername'><span>会员昵称: </span><span>苏晓燕</span></div>
                  <div class='new_order_container'><span>联系方式: </span><span>15801030115</span></div>
                  <div class='new_order_creatime'>
                      <span>下单日期：</span><span>2019-05-01  12:12:12</span>
                  </div>
                  <div class='clear'></div>
                </div>
            </div>
          </van-card>
        </van-sticky>
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <div slot="title">订单明细<span class="detitle">共4件商品合计:</span><span class='price'>￥139</span></div>
           <van-card :thumb="imageURL">
        <div slot="title">
            <div>
              <div class='new_detail_goods'><span>商品：</span><span>百事可乐</span></div>
                <ul class="goodInfo">
                  <li><span>价格：</span><span>￥20.0</span></li>
                  <li><span>数量：</span><span>10件</span></li>
                  <li><span>原价：</span><span>￥20.0</span></li>
                </ul>
            </div>
        </div>
      </van-card>
       <van-card :thumb="imageURL">
        <div slot="title">
            <div>
              <div class='new_detail_goods'><span>商品：</span><span>百事可乐</span></div>
                <ul class="goodInfo">
                  <li><span>价格：</span><span>￥20.0</span></li>
                  <li><span>数量：</span><span>10件</span></li>
                  <li><span>原价：</span><span>￥20.0</span></li>
                </ul>
            </div>
        </div>
      </van-card>
        </van-collapse-item>
        <van-collapse-item title="支付信息" name="2" icon="shop-o">
           <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_pay_price'><span>退款金额：</span><span>￥10.00</span><div class='new_order_status'>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_mername'><span>退款单号: </span><span>cs00987934567</span></div>
                    <div class='new_order_container'><span>第三方退款单号: </span><span>ab999023904586019303595239230</span></div>
                    <div class='new_order_creatime'>
                        <span>退款时间:</span><span>2019-05-01  12:12:12</span>
                        <div class='oprater'><span>操作人：</span><span>苏晓燕</span></div>
                    </div>
                    <div class='new_order_creatime'>
                        <span>客服工单:</span><span>xxxxxxxxxxxxxxx</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
           </van-card>
           <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_pay_price'><span>退款金额：</span><span>￥10.00</span><div class='new_order_status'>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_mername'><span>退款单号: </span><span>cs00987934567</span></div>
                    <div class='new_order_container'><span>第三方退款单号: </span><span>ab999023904586019303595239230</span></div>
                    <div class='new_order_creatime'>
                        <span>退款时间:</span><span>2019-05-01  12:12:12</span>
                        <div class='oprater'><span>操作人：</span><span>苏晓燕</span></div>
                    </div>
                    <div class='new_order_creatime'>
                        <span>客服工单:</span><span>xxxxxxxxxxxxxxx</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
           </van-card>
        </van-collapse-item>
         <van-collapse-item title="机柜信息" name="3" icon="shop-o">
            <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_pay_price'><span>机柜类型：</span><span>重力柜</span></div>
                    </div>
                    <div class='new_order_mername'><span>商户名称: </span><span>动物园站知码开门xx</span></div>
                    <div class='new_order_container'><span>机柜位置: </span><span>北京市海淀区大柳树路175号</span></div>
                    <div class='new_order_creatime'>
                        <span>投放地点:</span><span>富海国际港1703B室</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
      </van-card>
        </van-collapse-item>
         <van-collapse-item name="4">
           <div slot="title">关联工单<span class="detitle">共4层</span></div>
            <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_worksheet_orderno'><span>订单编号：</span><span>BB06836365953495</span><div class='new_order_status'>
                        <van-tag plain type="danger" style="margin-right: 5px;">
                          异常订单
                        </van-tag>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>问题类型:</span><span>金额错误</span>
                              <div class='oprater'><span>反馈来源：</span><span>在线客服</span></div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>提交人:</span><span>苏晓燕</span>
                              <div class='oprater'><span>提交日期</span><span>2020-04-12</span></div>
                    </div>                 
                    <div class='new_order_creatime'>
                        <span>备注：</span><span>已经退款给商户了</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
            </van-card>
            <van-card>
              <div slot="title">
                  <div>
                    <div class='new_order_title'>
                      <div class='new_worksheet_orderno'><span>订单编号：</span><span>BB06836365953495</span><div class='new_order_status'>
                        <van-tag plain type="danger" style="margin-right: 5px;">
                          异常订单
                        </van-tag>
                      </div>
                      </div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>问题类型:</span><span>金额错误</span>
                              <div class='oprater'><span>反馈来源：</span><span>在线客服</span></div>
                    </div>
                    <div class='new_order_creatime'>
                              <span>提交人:</span><span>苏晓燕</span>
                              <div class='oprater'><span>提交日期</span><span>2020-04-12</span></div>
                    </div>
                    <div class='new_order_creatime'>
                        <span>备注：</span><span>已经退款给商户了</span>
                    </div>
                    <div class='clear'></div>
                  </div>
              </div>
            </van-card>
        </van-collapse-item>
      </van-collapse>
      <div class='footer'>
        <div class='orderVedio' @click='cVideo()'><span class='span1'>订单视频</span></div>
        <div class='orderVedio1'><span class='span1'>创建工单</span></div>
         <!-- <div class='orderVedio1' @click='cWorksheet()'><span class='span1'>创建工单</span></div> -->
      </div>
      <!-- 创建工单 -->
      <van-popup
        v-model="show_worksheet"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '80%' }">
        <div style="padding:20px 0 60px 0">
          <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
            创建工单
          </van-divider>
          <div class='orderno'>订单编号：BB06829122482592</div>
          <van-collapse v-model="activeNames_type">
           <van-collapse-item title="请输入问题类型" name="1">
              <!-- 单选 -->
              <van-radio-group v-model="radio">
                <van-cell-group>
                  <van-cell title="金额错误" clickable @click="radio = '1'">
                    <van-radio slot="right-icon" name="1" />
                  </van-cell>
                  <van-cell title="识别错误" clickable @click="radio = '2'">
                    <van-radio slot="right-icon" name="2" />
                  </van-cell>
                   <van-cell title="包装问题" clickable @click="radio = '3'">
                    <van-radio slot="right-icon" name="3" />
                  </van-cell>
                 <van-cell title="过保质期" clickable @click="radio = '4'">
                    <van-radio slot="right-icon" name="4" />
                  </van-cell>
                <van-cell title="其他" clickable @click="radio = '5'">
                    <van-radio slot="right-icon" name="5" />
                  </van-cell>
                </van-cell-group>
              </van-radio-group>
              <!-- 单选 -->
           </van-collapse-item>
          </van-collapse>
          <van-field
            v-model="message"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
          />
          <van-divider>相关图片(0/{{fileList.length}})</van-divider>
          <div style="margin:0 0 0 5px">
            <van-uploader
            v-model="fileList"
            multiple
            :max-count="4"
            />
          </div>
          <div class="w_footer">
            <van-button type="default">取消</van-button>
            <van-button type="primary">确定</van-button>
          </div>
        </div>
        </van-popup>
         </el-scrollbar>
        </div>
       
   </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      errorInfo: '错误提示',
      errorText: '请求失败，点击重新加载',
      pullRefresh: '下拉刷新',
      finishedText: '没有更多了',
    },
    'en-US': {
      errorInfo: 'Error Info',
      errorText: 'Request failed. Click to reload',
      pullRefresh: 'PullRefresh',
      finishedText: 'Finished',
    },
  },

  data() {
    return {
     fileList:[],
     message:'',
     activeNames_type:['0'],
     radio:'1',
     show_worksheet:false,
     activeNames: ['1'],
     imageURL: 'https://img.yzcdn.cn/vant/ipad.jpeg'
    };
  },

  methods: {
     cVideo(){
       //alert('查看视频')
       this.$toast.loading({
        message: '加载视频中...',
        forbidClick: true
      });
     },
     cWorksheet(){
       //alert('创建工单')
       this.show_worksheet = true;
     }
  }
};
</script>

<style lang="less">
  .main{
    border:1px solid red;
    
    height:100%;
    
  
  
  }
.cardDiv{
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    width: 360px;
    min-width: 360px;
    background: #fafafa;
    border-radius: 12px;
    box-shadow: #a3a4a5 0 4px 12px;
    min-height:700px;
    right:30px;
    top:20px;
    
    
}
//订单详情
.price{
  font-size: 16px;
  font-weight: bold;
}
.detitle{
  font-size:12px;
  color:#ccc;
  margin-left:10px;
}
//商品详情
.new_order_orderno{
  font-size:14px;
}
.new_detail_goods{
  line-height: 22px;
}
.goodInfo li{
  display: inline-block;
  margin:0 2px;
}
.footer{
    width: 50px;
    position:absolute;
    bottom: 20%;
    right: 20px;
    height: 120px;
}
.footer .orderVedio{
  position:absolute;
  width:50px;
  height:50px;
  border-radius: 25px;
  background:sandybrown;
  opacity: .7;
  display: inline-block;
  text-align:center;
  line-height: 25px;
  color:#fff;
  font-size:12px;
  top:0;
  cursor: pointer;
}
.footer .orderVedio1{
  position:absolute;
  top: 70px;
  width:50px;
  height:50px;
  border-radius: 25px;
  background:sandybrown;
  opacity: .7;
  display: inline-block;
  text-align:center;
  line-height: 25px;
  color:#fff;
  font-size:12px;
  cursor: pointer;
}
.span1{
  position:absolute;
  width:30px;
  height:30px;
  top:50%;
  left:50%;
  margin-top:-15px;
  margin-left:-15px;
  display: inline-block;
  line-height:15px;
}

.w_footer{
  position:fixed;
  width:100%;
  bottom:10px;
  text-align: center;
}
.w_footer button{
  width:45%;
  margin:0 5px;

}

.orderno{
  font-size: 16px;
  font-weight: bold;
  padding:5px 0 10px 15px;
}

</style>

