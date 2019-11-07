<template>
	<view class="content">
		<view class="ReportList" v-for="(item,index) in ReportlistTeacher" :key="index" :data-index="index" :class="identityid=='teacher'?'activeshow':'activehide'" @tap="TeacherDetail">
			<image :src="item.avatar" mode=""></image>
			<view class="ReportMessage" >
				<view class="ReportName">
					<text>{{item.name}}</text>
					<text>{{item.distance}}</text>
					<text class="iconfont"></text>
				</view>
				<view class="ReportCon">
						<text>{{item.tag1}}</text>
						<text>{{item.tag2}}</text>
						<text>{{item.tag3}}</text>
				</view>
				<view class="ReportOther">
					<text v-for="(con,i) in item.report" :key="i">{{con.con}}</text>
				</view>
			</view>
		</view>
		
		<view class="ReportList" v-for="(items,index) in ReportlistStudent" :key="'info2-'+index" :data-index="index" :class="identityid=='student'?'activeshow':'activehide'" @tap="StudentDetail">
			<image :src="items.avatar" mode=""></image>
			<view class="ReportMessage" >
				<view class="ReportName">
					<text>{{items.name}}</text>
					<text>{{items.distance}}</text>
					<text class="iconfont"></text>
				</view>
				<view class="ReportCons">
					<text>{{items.content}}</text>
				</view>
				<view class="ReportOther">
					<text v-for="(con,i) in items.report" :key="i">{{con.con}}</text>
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
					{avatar:'../../static/teacher.jpeg',name:'张老师',distance:'100m',tag1:"初中",tag2:"数学",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'张老师',distance:'100m',tag1:"初中",tag2:"语文",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'张老师',distance:'100m',tag1:"初中",tag2:"英语",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
				],
				ReportlistStudent:[
					{avatar:'../../static/student.jpg',name:'李帅同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"优秀学生"},{con:"物理学霸"},{con:"英语黑洞"}]},
					{avatar:'../../static/student.jpg',name:'艳艳同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"三好学生"},{con:"语文课代表"},{con:"化学差"}]},
					{avatar:'../../static/student.jpg',name:'张亚同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"班长"},{con:"数学优秀"},{con:"英语差"}]},
				],
				identityid:''
			}
		},
		onLoad(options) {
			console.log(options)
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
			if(that.identityid=="student"){
				uni.setNavigationBarTitle({
				    title: '精选学生'
				});
			}else{
				uni.setNavigationBarTitle({
				    title: '精选名师'
				});
			}
		},
		methods: {
			StudentDetail:function(){    //精选同学
				uni.navigateTo({
					url:"../detail/detail"
				})
			},
			TeacherDetail:function(){     //精选老师
				uni.navigateTo({
					url:"../detail/detail"
				})
			}
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
		background: #FFFFFF;
		border-radius: 16upx;
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
