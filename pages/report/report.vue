<template>
	<view class="content">
		<view class="ReportList" v-for="(item,index) in ReportlistTeacher" :key="index" :class="identityid=='teacher'?'activeshow':'activehide'">
			<image :src="item.avatar" mode=""></image>
			<view class="ReportMessage" >
				<view class="ReportName">
					{{item.name}}
					<text :class="item.type==1?'orangecolor':(item.type==2?'redcolor':'greencolor')">{{item.type==1?"举报求证中":(item.type==2?'举报失败':'举报成功')}}</text>
				</view>
				<view class="ReportCon">
					举报内容：<text>{{item.content}}</text>
				</view>
				<view class="ReportOther">
					<text v-for="(con,i) in item.report" :key="i">{{con.con}}</text>
				</view>
			</view>
		</view>
		
		<view class="ReportList" v-for="(item,index) in ReportlistStudent" :key="'info2-'+index" :class="identityid=='student'?'activeshow':'activehide'">
			<image :src="item.avatar" mode=""></image>
			<view class="ReportMessage" >
				<view class="ReportName">
					{{item.name}}
					<text :class="item.type==1?'orangecolor':(item.type==2?'redcolor':'greencolor')">{{item.type==1?"举报求证中":(item.type==2?'举报失败':'举报成功')}}</text>
				</view>
				<view class="ReportCon">
					举报内容：<text>{{item.content}}</text>
				</view>
				<view class="ReportOther">
					<text v-for="(con,i) in item.report" :key="i">{{con.con}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ReportlistTeacher:[
					{avatar:'../../static/teacher.jpeg',name:'张老师',type:"1",content:"不实信息",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'张老师',type:"2",content:"违法信息",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'张老师',type:"3",content:"其他",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
				],
				ReportlistStudent:[
					{avatar:'../../static/student.jpg',name:'李帅同学',type:"1",content:"不实信息",state:"1",report:[{con:"好学生"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/student.jpg',name:'艳艳同学',type:"2",content:"违法信息",state:"1",report:[{con:"课代表"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/student.jpg',name:'张亚同学',type:"3",content:"其他",state:"1",report:[{con:"优秀学生"},{con:"已认证"},{con:"十年教龄"}]},
				],
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
			
		}
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
.ReportList{
	width: 630upx;
	height: 160upx;
	padding: 30upx;
	box-shadow: 4upx 4upx 4upx #eee;
	margin-bottom: 30upx;
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
}
.ReportName text{
	font-size: 24upx;
	color: #FFB726;
	border-radius: 10upx;
	border: 2upx solid #ffb726;
	margin-left: 20upx;
	padding: 4upx 10upx;
}
.ReportCon{
	color: #9CA69F;
	font-size: 28upx;
	line-height: 60upx;
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
