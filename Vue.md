```javascript
const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: 'Vue.js',
            confirmedName: 'Vue.js',
            lastName: "Hello"
        }
    },
    computed: {
        fullName() {
            return this.name + ' ' + this.lastName;
        }
    },
    methods: {
        add(num) {
            this.counter += num;
        },
        minus(num) {
            this.counter -= num;
        },
        setName(event, lastName) {
            this.confirmedName = event.target.value + ' ' + lastName;
        },
        submintForm(event) {
            event.preventDefault();
        }
    },
    watch: {
        name(newValue, oldValue) {
            this.confirmedName = newValue;
        }
    }
    
})

app.mount('#events')
```



```Vue
# {{  }} # interpolation # 插值 
# v-bind:href="vueLink"
# <p v-html="outputGoal()">  </p> # 把vue中的data或者method解释为html
# <button v-on:click="counter++">Add</button>
# v-on:input="setName($event, 'Hello')"
# $event是一个保留字，放在参数第一位，可以获取事件的所有信息（事件的callback）

# 事件修饰符 event modifier
# <form v-on:submit.prevent="submintForm"> # 等价于 event.preventDefault();
# v-on:keyup.enter
# v-once  # 只执行一次
# v-model # 双向绑定
# 当html中调用一个函数的时候，页面上任何元素更新，都会引起函数重新执行
# computed # 当其中用到的任一变量发生改变时，computed会重新计算结果
# watch 	# 当watch的值（watch内的函数名）发生变化时，触发执行，接收两个参数，newValue 和 oldValue, 可以监视计算属性

## methods		VS			computed		VS 			watch
methods: use with event binding OR data binding
computed: use with data binding
watch: 		not used directly in template

```

```vue
# styling css with vue

:style="{'border-color': boxAselected ? 'red': 'green'}"
:class="{active: boxAselected}" 							# 如果boxAselected为true，则添加 active 这个class
:class="boxAclass"											# boxAclass为computed属性
computed: {
	boxAclass() {
		return {active: this.boxAselected}
	}
},
:class="['demo', {active: boxBselected}]" 				# demo为一直在的class, active根据boxBselected决定在不在

```



