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

### css

#### video

```shell
autoplay: 如果出现该属性马上播放,否则需要点击播放
loop: 循环播放
muted: 静音
poster: 封面
preload: 预加载 auto
```

