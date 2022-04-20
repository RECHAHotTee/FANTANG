# JINGDONGDAOJIA
>Vue3实现的移动端项目

## 技术
* Vue-Router
* VueX
* axios
* Vue3
* SCSS
* mockjs

## 应用gif演示

![fantang](https://user-images.githubusercontent.com/50287648/164221208-c9d78727-fd85-4f75-9f36-fb681492a313.gif)

## 项目页面开发流程

### 登录页面
>用户登录页面

1. 登录操作
   获取用户在页面输入的账号和密码 -> 
   post 请求，向服务器传送账号密码并得到返回值 ->
   判断返回值是否符合规范 ->
    * 符合规范，跳转页面到首页
    * 不符合规范，提示错误信息，不做跳转

2. 注册操作
   跳转页面到注册页面

### 注册页面
>用户注册页面

1. 注册操作
   获取用户的输入，向服务器传送用户的输入，并对服务器返回的信息做判断 ->
   * 符合规范，跳转页面到登录页面
   * 不符合规范，提示错误信息，不做跳转

2. 已有账号做登录
   跳转到登录页面

### 首页
>应用首页

1. 获取附件热门数据展示
2. 展示banner和静态分类
3. :to 做页面跳转到商家详情页

### 商家详情页
>商家详情页

1. 返回按钮，返回到上一页
2. 商家详情信息获取展示
3. 商品信息获取展示
4. 商品种类tab切换展示
5. 购物车功能
   1. 商品数量增删（不能为负值）
   2. 商品价格计算（精确小数点两位）
   3. 清空购物车
   4. 全选
   5. 跳转结算页面

### 确认订单页面

1. 收货地址选择
2. 购物车商品展示
3. 实付金额计算
4. 确认支付

### 订单详情页面

1. 获取服务器数据展示订单数据

### 个人详情页

1. 个人信息展示
2. 收货地址展示
3. 新建收货地址
4. 退出登录

## 报错处理
1. Parsing error: No Babel config file detected for D:\xk-project\demo\vue.config.js. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.eslint

在.eslintrc.js文件，找到parserOptions对象加入requireConfigFile: false就可以完美解决。

## 技术总结
1. 设置 html 的font-size 大小为100px，作为页面元素大小的根节点，再利用rem设置其他元素的大小。


2. 网页默认最小的字体为12px。例如docker页面下的字体就是10px，这时候可以利用缩放对字体大小进行调整。

```css
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
```

3. 文本溢出处理

例如wrapper中的地址栏会出现很长很长文字的情况，这种时候最好使用
```css
white-space: nowrap;
text-overflow: ellipsis;
over-flow: hidden;
```
对溢出作省略处理。

4. 慢速网络造成的页面抖动问题

例如首页中的banner是一张图片，如果用户的网速不好，banner的加载速度会慢于其下面元素的加载速度，就会出现banner缓慢出现，其下部元素向下抖动的情况。

解决方法：
```css
height: 0;
overflow: hidden;
padding-bottom: 25.4%;
&img{
    width: 100%;
}
```

5. 图片闪烁问题解决

例如商品详情页中的图片加载速度慢，会出现“图裂了”的提示，这时候只需要在HTML标签里加上
`v-show="imgUrl"`判断就可以了。




