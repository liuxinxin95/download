import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$url="http://47.98.165.2:8066/";

Vue.prototype.$deng=function(){
	
}

Vue.prototype.$globalData = {
	myinfo:{
		
	},
	studentinfo:{    //学生信息
		
	},
	teacherinfo:{    //老师信息
		
	},
	Session:{    //缓存信息
		
	}
};

const app = new Vue({
    ...App
})
app.$mount()
