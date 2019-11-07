<template>
	<view class="content">
		<uni-swipe-action :options="options" v-for="(item,index) in ReportlistTearcher" :key="index" :data-index="index" @tap="DeleteClick(index)" :class="identityid=='student'?'activeshow':'activehide'">
		    <view class="ReportList" >
		    	<image :src="item.avatar" mode=""></image>
		    	<view class="ReportMessage" >
		    		<view class="ReportName">
		    			<text>{{item.name}}</text>
		    			<text>{{item.distance}}</text>
		    			<text class="iconfont"></text>
		    			<!-- <text :class="item.type==1?'orangecolor':(item.type==2?'redcolor':'greencolor')">{{item.type==1?"举报求证中":(item.type==2?'举报失败':'举报成功')}}</text> -->
		    		</view>
		    		<view class="ReportCon">
		    			<!-- <view class="AppointmentListCon"> -->
		    				<text>{{item.tag1}}</text>
		    				<text>{{item.tag2}}</text>
		    				<text>{{item.tag3}}</text>
		    			<!-- </view> -->
		    		</view>
		    		<view class="ReportOther">
		    			<text v-for="(con,i) in item.report" :key="i">{{con.con}}</text>
		    		</view>
		    	</view>
		    </view>
		</uni-swipe-action>
		
		<uni-swipe-action :options="option" v-for="(item,index) in ReportlistStudent" :key="'info2-'+index" :data-index="index" @tap="DeleteClick1(index)" :class="identityid=='teacher'?'activeshow':'activehide'">
		    <view class="ReportList" >
		    	<image :src="item.avatar" mode=""></image>
		    	<view class="ReportMessage" >
		    		<view class="ReportName">
		    			<text>{{item.name}}</text>
						<text>{{item.distance}}</text>
						<text class="iconfont"></text>
		    		</view>
		    		<view class="ReportCons">
		    			<text>{{item.content}}</text>
		    		</view>
		    		<view class="ReportOther">
		    			<text v-for="(con,i) in item.report" :key="i">{{con.con}}</text>
		    		</view>
		    	</view>
		    </view>
		</uni-swipe-action>
	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue"
	export default {
		data() {
			return {
				ReportlistTearcher:[
					{avatar:'../../static/teacher.jpeg',name:'张老师',distance:'100m',tag1:"初中",tag2:"数学",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'李老师',distance:'100m',tag1:"初中",tag2:"语文",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'赵老师',distance:'100m',tag1:"初中",tag2:"英语",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]}
				],
				ReportlistStudent:[
					{avatar:'../../static/student.jpg',name:'李帅同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"优秀学生"},{con:"物理学霸"},{con:"英语黑洞"}]},
					{avatar:'../../static/student.jpg',name:'艳艳同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"三好学生"},{con:"语文课代表"},{con:"化学差"}]},
					{avatar:'../../static/student.jpg',name:'张亚同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"班长"},{con:"数学优秀"},{con:"英语差"}]}
				],
				options: [{
				    text: '删除',
				    style: {
				        backgroundColor: '#FA544B',
						marginLeft:'60upx'
				    }
				}],
				option: [{
				    text: '删除',
				    style: {
				        backgroundColor: '#FA544B',
						marginLeft:'60upx'
				    }
				}],
				identityid:''
			}
		},
		onLoad() {
			var that=this;    //转换指针
			uni.getStorage({
				key: 'identityid',
				success: function (res) {
					console.log(res.data);
					that.identityid=res.data;
					console.log(that.identityid);
				}
			});
			console.log(that.identityid);
		},
		methods: {
			DeleteClick:function(e){    //老师
				console.log(e)
				var that=this;
				uni.showModal({
					title: '提示',
					content: '确定删除？',
					success: function (res) {
						console.log(res)
						if (res.confirm) {
							  that.ReportlistTearcher.splice(e,1);
							} else if (res.cancel) {
								//取消
							}
						
					
					},
				})
			},
			DeleteClick1:function(e){    //学生
				console.log(e)
				var that=this;
				uni.showModal({
					title: '提示',
					content: '确定删除？',
					success: function (res) {
						console.log(res)
						if (res.confirm) {
							  that.ReportlistStudent.splice(e,1);
							} else if (res.cancel) {
								//取消
							}
						
					
					},
				})
			}
		},
		components: {uniSwipeAction}
	}
</script>

<style>
.activeshow{
	display: block;
}
.activehide{
	display: none;
}
.content{
	padding: 30upx;
}
.uni-swipe-action{
	height: 220upx;
	margin-bottom: 30upx;
	background: none;
}
.uni-swipe-action__btn-group{
	margin-left: 60upx;
}
.ReportList{
	width: 630upx;
	height: 160upx;
	padding: 30upx;
	box-shadow: 4upx 4upx 4upx #eee;
	background: #FFFFFF;
	border-radius: 16upx;
}
.ReportList image{
	width: 160upx;
	height: 160upx;
	border-radius: 20upx;
	margin-right: 32upx;
	float: left;
}
.ReportMessage{
	width: 60%;
	float: left;
}
.ReportName{
	color: #303331;
	font-size: 28upx;
	font-weight: 700;
	height: 50upx;
	line-height: 50upx;
}
.ReportName text:nth-child(1){
	font-size: 28upx;
	float: left;
}
.ReportName text:nth-child(2){
	float: right;
	font-size: 24upx;
	color: #24B353;
}
.ReportName text:nth-child(3){
	float: right;
	font-size: 24upx;
	color: #24B353;
}
.ReportCon{
	color: #9CA69F;
	font-size: 28upx;
	line-height: 60upx;
}
.ReportCons{
	color: #9CA69F;
	font-size: 28upx;
	line-height: 60upx;
}
.ReportCon text:nth-child(1){
	border-right: 2upx solid #9CA69F;
	padding-right: 10upx;
}
.ReportCon text:nth-child(2){
	padding: 0 10upx;
	border-right: 2upx solid #9CA69F;
}
.ReportCon text:nth-child(3){
	padding-left: 10upx;
}
.ReportOther{
	margin-top: 20upx;
}
.ReportOther text{
	font-size: 24upx;
	color: #fff;
	/* background: red; */
	padding: 4upx 10upx;
	border-radius: 10upx;
	margin-right: 10upx;
	float: left;
}
.ReportOther text:nth-child(1){
	background: #FFB726;
}
.ReportOther text:nth-child(2){
	background: #FF6633;
}
.ReportOther text:nth-child(3){
	background: #FF4D3D;
}
.ReportName .orangecolor{
	color: #FFB726;
	border-color: #FFB726;
}
.ReportName .redcolor{
	color: #FF4D3D;
	border-color: #FF4D3D;
}
.ReportName .greencolor{
	color: #24B353;
	border-color: #24B353;
}
</style>
