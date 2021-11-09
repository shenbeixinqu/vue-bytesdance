## bytesdance

### 错误问题

**this.getOptions is not a function**

```shell
less-loader版本过高
1.npm uninstall less-loader
2.npm install less-loader@6.0.0
```

### lint问题

```shell
delete `CR`
原因: linux和windows的回车符不同
解决: npm run lint --fix
```

### vue.config.js

**lintOnSave**

```shell
设置是否在开发环境下每次保存代码时都启用eslint验证
false: 关闭每次保存都进行检测
true: 开启每次保存都进行检测,效果与warning一样
'error': 开启每次保存都进行检测,lint错误将显示到浏览器页面上,且编译失败
'default': 同'error'
'warning': 开启每次保存都进行检测,lint错误将显示到控制台命令行,并且编译并不会失败
```

**pages**

```shell
pages: {
	index: {
		chunks: ["chunk-vendors", "chunk-common", "index"]
	}
}
```

**pluginOptions**

```shell
这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "src/assets/style/variable.less"),
        path.resolve(__dirname, "src/assets/style/mixin.less"),
      ],
    },
  },
  
 style-resources-loader style样式资源处理器,在style资源中注入内容,导入css/sass/scss/less等内容,避免在每个样式文件中手动@import导入
 安装:
 	有前置安装
 		npm i less
 		npm i less-loader
    npm i style-resources-loader
    npm i vue-cli-plugin-style-resources-loader
```



### css

#### 伪元素和伪类

```shell
伪类和伪元素的根本区别在于: 是否创造了新元素
- 伪元素:
	不存在DOM文档中,是虚拟的元素,
	::after
	::before
- 伪类
	存在DOM文档中,逻辑上存在但是无须标识
	:hover
	:first-child 等
	
::before  向选定的元素前插入内容
	使用content属性指定要插入的内容
::after 向选定的元素后插入内容
    使用content属性指定要插入的内容	
```

#### vh

```shell
长度单位, css中相对长度单位,表示相对视口高度
1vh = 1% * 视口高度
```



#### video

```shell
autoplay: 如果出现该属性马上播放,否则需要点击播放
loop: 循环播放
muted: 静音
poster: 封面
preload: 预加载 auto
```

#### align-items

```shell
居中对齐弹性盒的各项div元素
div {
  display: flex;
  align-items: center
}
```

#### object-fit

```shell
指定元素的内容应该如何去适应指定容器的高度和宽度
object-fit 一般用于img和video标签,一般可以对这些元素进行保留原始比例的剪切,缩放或者直接进行拉伸
object-fit: cover /*保持原有尺寸比例,但是部分内容可能被剪切*/
```

#### z-index

```shell
z-index 指定一个元素的堆叠顺序
拥有更高堆叠顺序的元素总会处于堆叠顺序较低的元素的前面
使用: 
	必须在定位元素上才有效
	可以有负值
	不同父元素的子元素之间进行显示时,会根据父级元素的z-index进行渲染
```

#### overflow:hidden

```shell
overflow: hidden 的作用
1- 溢出隐藏
	给一个元素中设置overflow:hidden,那么该元素的内容若超出了给定的宽度和高度属性,那么超出的部分将会被隐藏,不占位
2- 清除浮动
	一般而言,父元素不设置高度时,高度随内容增加自适应高度, 当父元素内部的子元素全部都设置浮动之后,子元素会脱离标准流,不占位,父级元素检测不到子元素的高度,父级元素高度为零,下面的元素会顶上去造成页面塌陷,因此需要给父元素加
	overflow:hidden 属性
3- 解决外边距塌陷
	父元素内部有子元素,如果子元素添加margin-top样式,那么父级元素会跟着下来,造成外边距塌陷,因此给父元素添加
	overflow:hidden就可以解决
```



