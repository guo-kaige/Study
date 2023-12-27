```Vue
const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
			vueLink: "https://vuejs.org"
        }
    }
});

app.mount('#user-goal');

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

```

