class Compile{
	constructor(el, vm){
		// 默认是选择器
		this.$el = document.querySelector(el)
		this.$vm = vm
		if(this.$el){
			// 将dom节点转化为虚拟节点
			this.$fragment = this.node2Fragment(this.$el)
			// 执行编译
			this.compile(this.$fragment)
			// 将虚拟的编译好的html追加到this.$el中
			this.$el.appendChild(this.$fragment)
		}
	}
	/**
	*将元素的代码片段取出遍历，可以更高效
	*/
	node2Fragment(el){
		// 创建一个独特的区域
		const frag = document.createDocumentFragment()
		// 取出el的子元素，然后放入frag中
		let child
		while(child = el.firstChild){
			frag.appendChild(child)
		}
		return frag
	}
	// 编译过程
	compile(el){
		// 取出子节点，类数组形式
		let childNodes = el.childNodes
		// 转化为数组形式，并遍历循环
		Array.from(childNodes).forEach(node=>{
			// 判断是元素节点还是插值文本
			if (this.isElement(node)) {
				const attrs = node.attributes
				Array.from(attrs).forEach(attr=>{
					let attrName = attr.name,
					exp = attr.value
					if(this.isDirective(attrName)){
					 	// f-指令处理
					 	let dir = attrName.substring(2)
					 	this[dir] && this[dir](node, this.$vm, exp)
				 	}
				  if(this.isEvent(attrName)){
				  	// @事件处理
				  	let dir = attrName.substring(1)
				  	this.handdleEvent(node,this.$vm,exp,dir)
				  }
				})
			} else if(this.isInterpolation(node)){
				this.compileText(node)
			}
			// 递归处理存在子节点的节点
			if (node.childNodes && node.childNodes.length > 0) {
				this.compile(node)
			}
		})
	}
	// 处理f-text
	text(node,vm,exp){
		this.update(node,vm,exp,"text")
	}
	// 双向数据绑定处理
	model(node,vm,exp){
		this.update(node,vm,exp,"model")
		node.addEventListener("input",e=>{
			vm[exp] = e.target.value
		})
	}
	// 处理f-html
	html(node,vm,exp){
		this.update(node,vm,exp,"html")
	}
	// 处理事件
	handdleEvent(node,vm,exp,dir){
		// @click="changeName"
		// exp=>changeName,dir=>click
		// 获取methods中的事件处理函数
		const fn = vm.$options.methods && vm.$options.methods[exp]
		if (node && fn) {
			// 为dom元素添加事件并改变this指向，为了可以在methods方法里使用this
			node.addEventListener(dir,fn.bind(vm))
		}
	}
	// 判断是否是指令
	isDirective(attr){
		// console.log(typeof attr)
		return attr.indexOf("f-") === 0
	}
	// 判断是否是事件
	isEvent(attr){
		return attr.indexOf("@") === 0
	}
	// 根据f-text更新dom
	compileText(node){
		// console.log(RegExp.$1)
		// node.textContent = this.$vm.$data[RegExp.$1] // 存在缺陷，如果数据更新不能响应式的变化
		this.update(node, this.$vm, RegExp.$1, "text")
	}
	// 更新函数
	update(node, vm, exp, dir){
		/**
		*node=>更新的节点
		*vm=>实例
		*exp=>表达式
		*dir=>指令(事件或文本)
		*/
		// 创建一个函数
		const updateFn = this[dir+'Updater']
		// 判断函数是否存在，存在并执行
		updateFn && updateFn(node,vm[exp])
		// 收集依赖
		new Watcher(vm,exp,value=>{
			updateFn && updateFn(node,value)
		})
	}
	// 更新文本节点的数据
	textUpdater(node,value){
		node.textContent = value
	}
	// 数据双向绑定input输入框的value属性
	modelUpdater(node,value){
		node.value = value
	}
	// 将html模板转为HTML
	htmlUpdater(node,value){
		node.innerHTML = value
	}
	isElement(node){
		// 元素节点的类型数值
		return node.nodeType === 1
	}
	isInterpolation(node){
		// 先满足文本节点，然后判断是否是插值文本
		return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
	}
}