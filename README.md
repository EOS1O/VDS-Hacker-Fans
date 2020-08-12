# 小白也可以开发微信小程序（入门篇）



[![img](https://mmbiz.qpic.cn/mmbiz_jpg/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9jPcJnn85QRH2yx3NJuTzvXArCwkVex8UjnOlTyAxiaYaloMjcxiafCCw/640?wx_fmt=jpeg)](https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token=506559461&type=10&appmsgid=100000279&fromview=list)



  导 读  



话不多说，小程序直接附上（↑）。点击图片即可访问，欢迎使用及收藏。本教程主要面向零基础却想拥有个人微信小程序的小伙伴，当然有WEB前端开发经验的朋友阅读起来会更加的ez



- 目标读者：零基础小白
- 预计教程时间：15mins
- 开发工具：微信开发者工具
- 开发语言：html+css+js+vue
- 参考文档：微信开放文档



本教程内容基于微信官方Weui开源代码，所以学习者仅需更改其中部分代码即可完成开发（等同于 不需要理解汽车的构造，但依旧可以驾驶至香格里拉）。即使是小白，也可以按照教程一步步按图索骥，搭建出属于自己的微信小程序



*PS：所有网站链接、本小程序的开源代码以及本人个人微信号都将附在文末，欢迎查询添加*





  *1.* 环境搭建  



工欲善其事必先利其器，步骤（简述）如下

- 下载微信开发者工具
- 申请一个微信小程序账号
- 创建一个小程序，导入Weui代码





***1.\*** 下载安装微信开发者工具

```
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
```



***1.2.\*** 注册一个微信小程序账号

```
https://mp.weixin.qq.com/wxopen/waregister?action=step1
```

注册完成后，请按照网页指示一步步完成微信小程序信息填写



***1.3.\*** 创建一个小程序，并导入已有的Weui模板

```
官网：https://weui.io/下载链接：https://github.com/Tencent/weui-wxss/
```



*1.3.1* 从github上将Weui文件下载到本地并解压

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob97KGsHaQribFDLYrpKbwk8r9LMWkUiaEibKweK8LLd9IotT7rRoPKyo1Zw/640?wx_fmt=png)



*1.3.2* 打开微信开发者工具并将Weui文件导入其中



![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9HZdx2Lmme114kD1L3EDBFDpa9B1CLZcdIQrgjFu9I7VZIX3hnaSyWA/640?wx_fmt=png)

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9sGe3lS7VibXqibvvHwicjibCTqJ3S41zdichonWPttDQRCJYFAgxdgJyqRQ/640?wx_fmt=png)





  *2.* 各文件简单讲解  



学过前端的应该对此比较熟悉了，没有学过的小白可以选择性的了解一下。如果想直接开搞，可跳过本章内容



![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9CldkKxRT0l3SVwjT1WmzrhR7Uo4kmChoY5ibhWdjTt89IoWlxRXECQQ/640?wx_fmt=png)



操作不同的文件，可改变页面的显示以及一些功能，细列如下



- index.wxml -- 更改页面里的文字内容
- index.js    -- 更改页面里的一些操作（如下拉刷新、调用api）
- app.json   -- 更改主题颜色
- app.js     -- 更改页面导航等



*PS：之所以没有涉及css，是因为Weui官方已经设置好了相应的class*

*
*



  *3.*开发一款 美女图册 



接下来就是实操了，跳过第二章的小伙伴们可以动手了



![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9pTXbd8NtDMcBYk3iaA7CSEeWleRHnLwzPFua1UjlNjGianyXwvmArLKg/640?wx_fmt=png)



3.1 修改页眉



![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9ia7YvRWwZTCGbMRbaMQ26PDJDibntwLVS5SISOCIm4wNnIrW1KGVxPdg/640?wx_fmt=png)

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob91uxyaatHuePBfpticFvY3W1ELQSMzPb4JMVe5Orxj7UyicTxQ17siaaYg/640?wx_fmt=png)



- 打开app.json文件
- ctrl+f 搜寻navigationBarTitleText
- 修改其后内容





3.2 修改标题

- 打开Examples文件夹下的index.wxml文件
- 找到图中位置，修改相应内容



![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9S3OWibAaLx7XQI2Fe65ZbmYXYiaq31ib2lBciauY40ukcQBb9ZPuJw86KA/640?wx_fmt=png)



修改之后点击保存，微信开发者工具便会自动刷新预览，如要手机预览，可以按下图示操作



![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9dIFQMJVBCUe80O3oVNYwPjmmOI5GOIQCN2MeVWicA7ibVEWSzJYqfJjA/640?wx_fmt=png)





3.3 添加美女

- 打开index.js文件
- 按图中修改相应代码，即可添加（注意保存）



![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9QC2RN4uQicXDZs0MibZP9AvGNSib4BT5jD7283odibQnVpLh6eldIfzUuA/640?wx_fmt=png)



- 打开index.wxml文件
- 修改此处代码（实现key-value调用，主要是为了解决中文名的文件无法被打开的问题）

```
<navigator url="{{page.url}}/{{page.url}}" class="weui-cell weui-cell_access">    <view class="weui-cell__bd">{{page.name}}</view>
```

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9icSff54zxiamtEIW3DfgoEIziaDwyjcLZkAekooI7ibrkepkLZIzmhKf0Q/640?wx_fmt=png)





3.4 填充下拉页面内容

- 删除掉Examples里除index开头的所有文件（先仅留一个）

- 将仅留的这个改名为 intro-tong

- 将其内的所有文件都改名为intro-tong

  

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob94Qn9L4pWKMAooJsegN6lW57xzwMFweBoQSvgBE7yunrXWMF18YOyoA/640?wx_fmt=png)



- 打开 intro-tong.wxml 文件
- 删掉全部代码，复制粘贴下列代码

```
<view class="page" data-weui-theme="{{theme}}">    <view class="page__hd">        <view class="page__title">简介</view>        <text>\n</text>        <view class="page__desc">佟丽娅，1983年8月8日出生于新疆伊犁察布查尔，中国内地影视女演员、舞者。        2006年，佟丽娅因出演情感剧《新不了情》而踏入演艺圈。2008年，她因在古装剧《母仪天下》中饰演赵飞燕而崭露头角。        2011年开始，佟丽娅凭借穿越剧《宫锁心玉》、爱情剧《北京爱情故事》获得更多关注</view>                     </view>    <view class="page__bd">        <view class="weui-article">            <view class="weui-article__section">                <view class="weui-article__section">                    <view class="weui-article__p">                        <image class="weui-article__img" show-menu-by-longpress="true" src="https://i.loli.net/2020/05/18/BJPbAiHzECNMStu.jpg" mode="aspectFit" style="height: 180px" />                    </view>                </view>            </view>        </view>    </view>    <ad unit-id="adunit-c2e61aff66e614d1" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad></view>
```

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9trwkzTtp4rlkz0T74Xm5xe9cPBBs5J3PwrggB5qeicfgjc5Oiaf1zgtg/640?wx_fmt=png)



按图示修改文字及图片，特别说明：src= 后面跟的是图片链接，图片可上传到免费云（https://sm.ms/）。更改完intro-tong文件后，复制3次intro-tong文件夹，并依次改名为img-tong、works-tong、secrets-tong，并按上述方法依次更改。至此女神佟丽娅的界面便完成了，下面就可以提交代码等待官方审核了





  *4.*提交审核 



*4.1* 提交代码

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9Q9k14ldYGiclUE6F6pxekBc3JtI96L4TyZDuqzeER8nRkux1pJibhTrg/640?wx_fmt=png)

按照图示点击上传，输入版本号



*4.2* 提交审核

当代码上传后，我们登录微信小程序账号，点击版本管理，之后提交审核

![img](https://mmbiz.qpic.cn/mmbiz_png/L129NGYPhRZl8mvZPicYDr7DnYOp6Xob9qhu2kfqA62WibEvakZcrqmR1AwuU1S8qMJq9HS1piby5XBabFCdnicmgQ/640?wx_fmt=png)



当代码通过审核后，依旧来到此页面，点击上线便可。至此我们便完成了一个非常简单静态小程序的开发，后续一些功能请关注下一篇教程



- 下拉刷新
- 页面分享
- 开通广告
- 调取API
- 页面弹窗
- 绘制曲线
- 点击文字复制
- 图片支持长摁操作
- 云函数功能





  *附 录* 



微信开发者工具

https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html



微信开放文档

https://developers.weixin.qq.com/miniprogram/dev/framework/



微信小程序注册

https://mp.weixin.qq.com/wxopen/waregister?action=step1



微信小程序登录

https://mp.weixin.qq.com/



Weui官方开源代码

https://github.com/Tencent/weui-wxss/



前端入门教程

https://www.runoob.com/



VDS Hacker Fans开源代码

https://github.com/EOS1O/VDS-Hacker-Fans



个人微信号（欢迎讨论）

scut2459309859

