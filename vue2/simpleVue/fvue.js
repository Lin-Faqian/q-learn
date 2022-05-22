class FVue{
	constructor(options){
		this.$options = options
		// 数据的响应式
		this.$data = options.data
		this.observe(this.$data)
		// new Watcher()
		// this.$data.test
		// new Watcher()
		// this.$data.foo.bar
		new Compile(options.el,this)
		// 解决钩子函数的执行
		if(options.created){
			// 执行函数并改变this指向，为了在钩子函数的内部使用this
			options.created.call(this)
		}
	}
	observe(data){
		// 如果不是对象或者没传直接返回
		if (data && Object.prototype.toString.call(data) !== "[object Object]") return
		// 接下来说明有写data并且是对象，在这里实现监测
		Object.keys(data).forEach(key=>{
			// 另取一个函数写defineProperty()
			this.defineReactive(data,key,data[key])
			// 代理data中的属性到vue实例上
			this.proxyData(key)
		})
	}
	proxyData(key){
		// data属性添加到vm
		Object.defineProperty(this,key,{
			get(){
				return this.$data[key]
			},
			set(newVal){
				this.$data[key] = newVal
			}
		})
	}
	defineReactive(obj,key,val){
		// 递归调用解决嵌套的对象
		this.observe(val)
		const dep = new Dep()
		Object.defineProperty(obj,key,{
			get(){
				Dep.target && dep.addDep(Dep.target)
				return val
			},
			set(newVal){
				// 如果值没变就直接返回，发生变化的话就改变原先的值
				if (val === newVal) {
					return
				}
				// console.log(`${val}=>${newVal}`)
				val = newVal
				// 依赖发生变化通知watcher更新
				dep.notify()
			}
		})
	}
}

/**
* 类Dep收集依赖，用来管理观察者
*/
class Dep{
	constructor(){
		// 存放若干依赖(watcher)
		this.deps = []
	}
	// 添加依赖
	addDep(dep){
		this.deps.push(dep)
	}
	// 通知更新
	notify(){
		this.deps.forEach(dep=>{
			dep.update()
		})
	}
}

class Watcher{
	constructor(vm,key,cb){
		this.vm = vm
		this.key = key
		this.cb = cb
		// 将当前的watcher实例指定到Dep静态属性target中
		Dep.target = this
		// 为了触发getter，添加依赖
		this.vm[this.key]
		// 避免重复赋值
		Dep.target = null
	}
	update(){
		// console.log('数据更新了')
		this.cb.call(this.vm,this.vm[this.key])
	}
}