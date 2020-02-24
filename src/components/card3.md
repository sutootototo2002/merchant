<div class="card" style='margin:0;width:300px;text-align:left'>
  <div class="van-doc-intro">
    <img class="van-doc-intro__logo" style="width: 120px; height: 120px;" src="https://img.yzcdn.cn/vant/logo.png">
    
  </div>
</div>

#### Vant 企业端常用组件
##### card3 弹出框 组件
```
<template>
      <div>
        <demo-block title='商品审核'>
          <van-button type="primary" block @click='show_shenhe = true'>商品审核（向上弹出）</van-button>
          <van-popup
            v-model="show_shenhe"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '80%' }">
              <div style="padding:20px 0 60px 0">
              <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
               商品审核
              </van-divider>
              <van-cell title="适用机柜" value="称重柜" />
              <van-checkbox-group v-model="result_machine">
                  <van-cell-group>
                    <van-cell
                      v-for="(item,index) in machine_list"
                      clickable
                      :key="index"
                      :title='item'
                    >
                      <van-checkbox
                        :name="item"
                        ref="checkboxes"
                        slot="right-icon"
                      />
                    </van-cell>
                  </van-cell-group>
                </van-checkbox-group>
                 <van-cell is-link title="商品分类" @click="value_down1 = true" :value='cellValue' />
                 <van-cell is-link title="商品重量" @click="value_down1 = true" :value='cellValue1' />
                <van-action-sheet v-model="value_down1" :actions="option1" @select="onSelect" />
                <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
              </div>
          </van-popup>
        </demo-block>
         <div style="height:20px;"></div>
         <demo-block title="创建工单">
          <van-button type="primary" block @click='show_worksheet = true'>创建工单（向上弹出）</van-button>
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
                  <van-button type="default" @click='show_worksheet=false'>取消</van-button>
                  <van-button type="primary">确定</van-button>
                </div>
              </div>
          </van-popup>
          <!-- 创建工单 -->
        </demo-block>
        <div style="height:20px;"></div>
         <demo-block title="客服工单">
          <van-button type="primary" block @click='show_worksheet_kf = true'>客服工单（向上弹出）</van-button>
          <!-- 创建工单 -->
          <van-popup
            v-model="show_worksheet_kf"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '60%' }">
              <div style="padding:20px 0 60px 0">
              <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
              客服工单处理
              </van-divider>
                <van-collapse v-model="activeNames_type">
                  <van-collapse-item name="1">
                     <div slot="title">处理方案<span class="detitle">{{orderArr[radio].desc}}</span></div>
                      <!-- 单选 -->
                      <van-radio-group v-model="radio">
                        <van-cell-group>
                          <van-cell v-for='(item,index) in orderArr' :key='index' :title="item.desc" clickable @click="clickFn(index)">
                            <van-radio slot="right-icon"  :name="index" />
                          </van-cell>
                        </van-cell-group>
                      </van-radio-group>
                      <!-- 单选 -->
                  </van-collapse-item>
                </van-collapse>
                <van-cell :value="orderArr[radio].intro" />
                <div class="w_footer">
                  <van-button type="default" @click='show_worksheet_kf=false'>取消</van-button>
                  <van-button type="primary" @click='setpFn()'>下一步</van-button>
                </div>
              </div>
          </van-popup>
          <!-- 创建工单 -->
        </demo-block>
        <div style="height:20px;"></div>
         <demo-block title="商品调整">
          <van-button type="primary" block @click='treatplanid_16 = true'>商品调整（向上弹出）</van-button>
          <!-- 创建工单 -->
          <van-popup
            v-model="treatplanid_16"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '80%' }">
              <div style="padding:20px 0 60px 0">
                 <div>
                 <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
                  客服工单处理(商品调整)
                 </van-divider>
                 </div>
                 
                 <div style="float:right;padding:10px 10px"><van-button type="primary" size="small" @click='addGoods'>添加商品</van-button></div>
                 <div style="clear:both"></div>
                 <div>
                  <van-card :thumb="imageURL">
                    <div slot="title">
                          <div class="remove">删除</div>
                          <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                            <ul class="goodInfo">
                              <li><span>售价：</span><span>￥20.0</span></li>
                              <li><span>小计：</span><span>10件</span></li>
                              <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                            </ul>
                    </div>
                  </van-card>
                  <van-card :thumb="imageURL">
                    <div slot="title">
                          <div class="remove">删除</div>
                          <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                            <ul class="goodInfo">
                              <li><span>售价：</span><span>￥20.0</span></li>
                              <li><span>小计：</span><span>10件</span></li>
                              <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                            </ul>
                    </div>
                  </van-card>
                  <van-card :thumb="imageURL">
                    <div slot="title">
                          <div class="remove">删除</div>
                          <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                            <ul class="goodInfo">
                              <li><span>售价：</span><span>￥20.0</span></li>
                              <li><span>小计：</span><span>10件</span></li>
                              <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                            </ul>
                    </div>
                  </van-card>
                  <van-card :thumb="imageURL">
                    <div slot="title">
                          <div class="remove">删除</div>
                          <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                            <ul class="goodInfo">
                              <li><span>售价：</span><span>￥20.0</span></li>
                              <li><span>小计：</span><span>10件</span></li>
                              <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                            </ul>
                    </div>
                  </van-card>
                  <van-card :thumb="imageURL">
                    <div slot="title">
                          <div class="remove">删除</div>
                          <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                            <ul class="goodInfo">
                              <li><span>售价：</span><span>￥20.0</span></li>
                              <li><span>小计：</span><span>10件</span></li>
                              <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                            </ul>
                    </div>
                  </van-card>
                  <van-card :thumb="imageURL">
                    <div slot="title">
                          <div class="remove">删除</div>
                          <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                            <ul class="goodInfo">
                              <li><span>售价：</span><span>￥20.0</span></li>
                              <li><span>小计：</span><span>10件</span></li>
                              <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                            </ul>
                    </div>
                  </van-card>
                 </div>
                 <div class='countDiv'>
                   <div class='countInfo'>原商品数量：2.00，原订单总金额：￥10.00</div>
                    <div class="w_footer">
                      <van-button type="default">上一步</van-button>
                      <van-button type="primary" @click="addGoodsBoolean_s = true">下一步</van-button>
                    </div>
                 </div>
              </div>
          </van-popup>
         </demo-block>
         <div style="height:20px;"></div>
         <demo-block>
          <van-popup
            v-model="addGoodsBoolean"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ width:'100%',height: '80%' }">
              <div style="padding:30px 0 60px 0">
                 <div>
                 <van-search
                      v-model="searchGoods"
                      placeholder="请输入搜索关键词"
                      input-align="center"
                    />
                 </div>
                 <van-tabs v-model="active">
                    <van-tab title="当前已规划商品">
                        <div>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                        </div>
                    </van-tab>
                    <van-tab title="商户商品库商品">
                        <div>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">添加</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">添加</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">添加</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">添加</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class="remove">删除</div>
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                        </div>
                    </van-tab>
                  </van-tabs>
                 <div class='countDiv_s'>
                    <div class="w_footer_s">
                      <van-button type="primary">返回</van-button>
                    </div>
                 </div>
              </div>
          </van-popup>

         </demo-block>
         <div style="height:20px;"></div>
          <demo-block>
          <van-popup
            v-model="addGoodsBoolean_s"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ width:'100%',height: '100%' }">
              <div style="padding:30px 0 60px 0">
                 <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
                  客服工单处理(商品调整)
                 </van-divider>
                 <van-divider content-position="left">商品调整确认</van-divider>
                 <div>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                          <van-card :thumb="imageURL">
                            <div slot="title">
                                  
                                  <div class='new_detail_goods'><span>百事可乐</span><span>(200kg/盒)</span></div>
                                    <ul class="goodInfo">
                                      <li><span>售价：</span><span>￥20.0</span></li>
                                      <li><span>小计：</span><span>10件</span></li>
                                      <li style="margin-top:5px"><span style="float:left">实际数量：</span><span style="float:left"><van-stepper v-model="realValue" disabled-input/></span></li>
                                    </ul>
                            </div>
                          </van-card>
                        </div>
                 <div class='countDiv_s' style="height:220px">
                   <div class='countInfo_goods'>原订单金额¥212，调整后订单金额¥239。 顾客已支付人民¥0。</div>
                   <div class='countInfo_goods'>点击“确定”按钮，将生成商品调整单且订单状态将变更为“已欠费”。是否继续？</div>
                   <van-field
                      v-model="message_goods"
                      rows="2"
                      autosize
                      label="留言"
                      type="textarea"
                      maxlength="50"
                      placeholder="请输入留言"
                      show-word-limit
                    />
                    <div class="w_footer">
                        <van-button type="default">上一步</van-button>
                        <van-button type="primary" @click="finishFn()">确定</van-button>
                    </div>
                 </div>
              </div>
          </van-popup>
         </demo-block>
         <!-- 退款 -->
           <van-popup
            v-model="treatplanid_15"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '80%' }">
              <div style="padding:20px 0 60px 0">
                 <div>
                    <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
                      客服工单处理(退款)
                    </van-divider>
                    <van-divider content-position="left">工单处理方案：发起退款</van-divider>
                      <!-- 允许输入数字，调起全键盘 -->
                      <van-cell-group>
                        <van-field v-model="tk_number" type="number" label="退款金额" placeholder="请输入退款金额"  />
                      </van-cell-group>
                      <div class='validDiv'>（最多可退¥200，通过此工单已退¥0）</div>
                      <van-field
                          v-model="message_tk"
                          rows="2"
                          autosize
                          label="解决备注"
                          type="textarea"
                          maxlength="50"
                          placeholder="请输入备注"
                          show-word-limit
                        />
                      <van-divider />
                      <div class="w_footer">
                        <van-button type="default">上一步</van-button>
                        <van-button type="primary" @click="show_tk = true">确定</van-button>
                    </div>
                 </div>
              </div>
           </van-popup>
         <!-- 退款提示框 -->
          <van-dialog v-model="show_tk" title="提示">
            <div class='tk_Info'>应退款金额¥100，已退款成功¥50，
            稍候请通过此工单继续发起退款！</div>
          </van-dialog>
        <!-- 追缴 -->
         <van-popup
            v-model="treatplanid_12"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '80%' }">
              <div style="padding:20px 0 60px 0">
                 <div>
                    <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
                      客服工单处理(追缴)
                    </van-divider>
                    <van-divider content-position="left">工单处理方案：发起追缴</van-divider>
                    <div class='validDiv11'>订单金额¥200，已支付金额¥50。</div>
                      <!-- 允许输入数字，调起全键盘 -->
                      <van-cell-group>
                        <van-field v-model="tk_number" type="number" label="补交金额：" placeholder="请确认补缴金额"  />
                      </van-cell-group>
                      <div class='validDiv'>（通过此工单已追缴¥0）</div>
                      <van-field
                          v-model="message_tk"
                          rows="2"
                          autosize
                          label="解决备注"
                          type="textarea"
                          maxlength="50"
                          placeholder="请输入备注"
                          show-word-limit
                        />
                      <van-divider />
                      <div class="w_footer">
                        <van-button type="default">上一步</van-button>
                        <van-button type="primary" @click="show_tk = true">确定</van-button>
                    </div>
                 </div>
              </div>
           </van-popup>
        <!-- 工单关闭 -->
         <van-popup
            v-model="treatplanid_18"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '80%' }">
              <div style="padding:20px 0 60px 0">
                 <div>
                    <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
                      客服工单处理(关闭工单)
                    </van-divider>
                    <van-divider content-position="left">工单处理方案：关闭工单</van-divider>
                    <div class='validDiv_yc'>点击“确定”按钮，订单状态将变更为“已完成”。</div>
                    <div class='validDiv_yc'>是否继续？</div>
                      <van-field
                          v-model="message_tk"
                          rows="2"
                          autosize
                          label="解决备注"
                          type="textarea"
                          maxlength="50"
                          placeholder="请输入备注"
                          show-word-limit
                        />
                      <van-divider />
                      <div class="w_footer">
                        <van-button type="default">上一步</van-button>
                        <van-button type="primary" @click="show_tk = true">确定</van-button>
                    </div>
                 </div>
              </div>
           </van-popup>
        <!-- 购物流程已结束 -->
          <van-popup
            v-model="treatplanid_17"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '80%' }">
              <div style="padding:20px 0 60px 0">
                 <div>
                    <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
                      客服工单处理(购物流程已结束)
                    </van-divider>
                    <van-divider content-position="left">工单处理方案：购物流程已结束</van-divider>
                    <div class='validDiv_yc'>点击“确定”按钮，订单状态将变更为“已完成”。</div>
                    <div class='validDiv_yc'>是否继续？</div>
                      <van-field
                          v-model="message_tk"
                          rows="2"
                          autosize
                          label="解决备注"
                          type="textarea"
                          maxlength="50"
                          placeholder="请输入备注"
                          show-word-limit
                        />
                      <van-divider />
                      <div class="w_footer">
                        <van-button type="default">上一步</van-button>
                        <van-button type="primary" @click="show_tk = true">确定</van-button>
                    </div>
                 </div>
              </div>
           </van-popup>
      
      
        <!-- 异常订单放弃处理 -->
        <van-popup
            v-model="treatplanid_14"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '80%' }">
              <div style="padding:20px 0 60px 0">
                 <div>
                    <van-divider :style="{ borderColor: 'gray', padding: '0 16px',fontSize:'16px',color:'#000' }">
                      客服工单处理(异常订单放弃处理)
                    </van-divider>
                    <van-divider content-position="left">工单处理方案：异常订单放弃处理</van-divider>
                    <div class='validDiv_yc'>原订单金额¥100，顾客已支付¥0。</div>
                    <div class='validDiv_yc'>点击“确定”按钮，订单状态将变更为“已欠费”。</div>
                    <div class='validDiv_yc'>是否继续？</div>
                      
                      <van-field
                          v-model="message_tk"
                          rows="2"
                          autosize
                          label="解决备注"
                          type="textarea"
                          maxlength="50"
                          placeholder="请输入备注"
                          show-word-limit
                        />
                      <van-divider />
                      <div class="w_footer">
                        <van-button type="default">上一步</van-button>
                        <van-button type="primary" @click="show_tk = true">确定</van-button>
                    </div>
                 </div>
              </div>
           </van-popup>
      
      </div>
</template>

```
<template>
        <div class='main'>
      <div class='cardDiv'>
        <el-scrollbar style="height:100%">
           <iframe src="http://localhost:8080/card3" height='700px' width='360px' frameborder="0" ></iframe>
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
      cellValue:'',
      value_down1: false,
      option1: [
        { name: '选项1' },
        { name: '选项2' },
        { name: '选项3', subname: '描述信息' }
      ],
      result_machine:["重力柜",'视觉柜','RFID柜','重力视觉柜'],
      machine_list:["重力柜",'视觉柜','RFID柜','重力视觉柜'],
      show_shenhe:false,
      show_tk:false,
      message_tk:'',
      tk_number:'',
      message_goods:'',
      list:[],
      finished:false,
      loading:false,
      active:0,
      active_goods:0,
      searchGoods:'',
      addGoodsBoolean:false,
      addGoodsBoolean_s:false,
      realValue:0,
      imageURL: 'https://img.yzcdn.cn/vant/ipad.jpeg',
      show_worksheet:false,
      show_worksheet_kf:false,
      activeNames_type:['0'],
      radio:0,
      message:'',
      fileList:[],
      orderArr:[
        {
        "treatplanid": "16",
        "desc": "调整订单商品信息",
        "intro": "在人工通过购物视频或其他方式确认顾客所拿商品与订单中商品不一致的情况下，可对订单商品明细进行调整，调整后会根据结果修改订单金额及订单状态。"
        },
        {
        "treatplanid": "15",
        "desc": "发起退款",
        "intro": "发起退款发起退款发起退款发起退款"
        },
        {
        "treatplanid": "12",
        "desc": "发起追缴",
        "intro": "发起追缴：对订单进行追缴，根据支付方式优先级进行扣费，追缴失败或部分成功不修改订单状态，追缴全部成功将修改订单状态为\"已付款\"。"
        },
         {
        "treatplanid": "14",
        "desc": "异常订单放弃处理",
        "intro": "异常订单放弃处理异常订单放弃处理异常订单放弃处理异常订单放弃处理异常订单放弃处理异常订单放弃处理异常订单放弃处理"
        },
         {
        "treatplanid": "17",
        "desc": "购物流程已结束",
        "intro": "购物流程已结束购物流程已结束购物流程已结束购物流程已结束购物流程已结束购物流程已结束购物流程已结束购物流程已结束"
        },
         {
        "treatplanid": "18",
        "desc": "关闭工单",
        "intro": "关闭工单关闭工单关闭工单关闭工单关闭工单关闭工单"
        }
         
      ],
      treatplanid_16:false,
      treatplanid_15:false,
      treatplanid_12:false,
      treatplanid_14:false,
      treatplanid_17:false,
      treatplanid_18:false,
    };
  },

  methods: {
    onSelect(item){
      this.value_down1 = false;
      this.cellValue = item.name;
      this.$toast(item.name);
    },
    finishFn15(){
      this.$toast('退款成功');
    },
    finishFn(){
      this.$toast('订单已欠费，已自动生成追缴工单');
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  
    addGoods(){
       this.addGoodsBoolean = true;
    },
    setpFn(){
      //alert(this.orderArr[this.radio].treatplanid)
      let treatplanid = this.orderArr[this.radio].treatplanid;
      if(treatplanid == 16){
        this.treatplanid_16 = true;
        return
      }
       if(treatplanid == 15){
        this.treatplanid_15 = true;
        return
      }
      if(treatplanid == 12){
        this.treatplanid_12 = true;
        return
      }
      if(treatplanid == 14){
        this.treatplanid_14 = true;
        return
      }
       if(treatplanid == 17){
        this.treatplanid_17 = true;
        return
      }
      if(treatplanid == 18){
        this.treatplanid_18 = true;
        return
      }

    },
    clickFn(index){
      var that = this;
      this.radio = index;
      setTimeout(function(){
        that.activeNames_type = ['0']
      },150)
      
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
// 创建工单
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
.w_footer_s{
  position: absolute;
  width:100%;
  bottom:10px;
  text-align: center;
}
.w_footer_s button{
  width:90%;
  margin:auto;

}
.remove{
  color:red;
  margin-left:50px;
}

.countDiv{
  position:fixed;
  width:100%;
  bottom:0;
  padding:20px 0;
  background:#fff;
  height:80px;
}
.countDiv_s{
  position:fixed;
  width:100%;
  bottom:0;
  padding:20px 0;
  background:#fff;
  height:40px;
}
.countInfo{
  text-align:center;
}

.countInfo_goods{
  font-size: 14px;
  text-align: left;
  padding: 5px 20px;
}
.countInfo_goods_r{
  font-size: 14px;
  text-align: left;
  color:red;
  padding: 5px 20px;
}
.validDiv{
  color:red;
  font-size:14px;
   padding:20px;
}
.validDiv11{
  color:#000;
  font-size:14px;
  padding:20px;
}
.validDiv_yc{
  color:#000;
  font-size:14px;
  padding:5px 15px;
}

.tk_Info{
  font-size:12px;
  padding:20px;
}

</style>
