<template>
	<view class="content">
		<view class="IndexBanner">
			<image src="../../static/indexbanner.png" mode="" class="IndexBack"></image>
			<view class="IndexAddress">
				<view class="IndexCity">
					<text>上海</text>
					<text @click="location">当前位置</text>
					<view class="IndexCityImg">
						<image src="../../static/indexaddr.png" mode="" :class="active==true?'activeshow':'activehide'"></image>
						<image src="../../static/load.gif" mode="" :class="active==false?'activeshow':'activehide'"></image>
					</view>
				</view>
				<view class="IndexAddr">
					<input type="text" :model="address" @input="AddressFous" placeholder="请定位您的位置"/>
					<image src="../../static/indexcancel.png" mode=""></image>
				</view>
				<view class="IndexSearch" @tap="SearchBtn">搜索</view>
			</view>
		</view>
		
		<view class="IndexSort">
			<view class="IndexSortList">
				<image src="../../static/indexmath.png" mode=""></image>
				<text>数学</text>
			</view>
			<view class="IndexSortList">
				<image src="../../static/indexchinese.png" mode=""></image>
				<text>语文</text>
			</view>
			<view class="IndexSortList">
				<image src="../../static/indexenglish.png" mode=""></image>
				<text>英语</text>
			</view>
			<view class="IndexSortList">
				<image src="../../static/indexphysics.png" mode=""></image>
				<text>物理</text>
			</view>
			<view class="IndexSortList">
				<image src="../../static/indexmore.png" mode=""></image>
				<text>更多</text>
			</view>
		</view>
		
		<view class="IndexData">
			<view class="IndexDataTit">成就数据</view>
			<view class="IndexDataCon">
				<view class="IndexDataList">
					<text>123456</text>
					<text>入驻老师</text>
				</view>
				<view class="IndexDataList">
					<text>123456</text>
					<text>服务学员</text>
				</view>
				<view class="IndexDataList">
					<text>569</text>
					<text>驻点城市</text>
				</view>
			</view>
		</view>
	
		<view class="IndexGood" :class="identityid=='teacher'?'activeshow':'activehide'">      <!-- 精选名师 -->
			<view class="IndexGoodTit">
				<text>精选名师</text>
				<text @click="IndexGood">全部</text>
				<!-- uniapp中用这个 -->
			</view>
			<view class="ReportList" v-for="(item,index) in ReportlistTearcher" :key="index" :data-index="index" @tap="TeacherDetail">
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
		</view>
		<view class="IndexGood" :class="identityid=='student'?'activeshow':'activehide'">    <!-- 优秀学生 -->
			<view class="IndexGoodTit">
				<text>精选同学</text>
				<text @tap="IndexGood">全部</text>
			</view>
			<view class="ReportList" v-for="(item,index) in ReportlistStudent" :key="index" :data-index="index" @tap="StudentDetail">
				<image :src="item.avatar" mode=""></image>
				<view class="ReportMessage" >
					<view class="ReportName">
						<text>{{item.name}}</text>
						<text>{{item.distance}}</text>
						<text class="iconfont"></text>
						<!-- <text :class="item.type==1?'orangecolor':(item.type==2?'redcolor':'greencolor')">{{item.type==1?"举报求证中":(item.type==2?'举报失败':'举报成功')}}</text> -->
					</view>
					<view class="ReportCons">
						<text>{{item.content}}</text>
					</view>
					<view class="ReportOther">
						<text v-for="(con,i) in item.report" :key="i">{{con.con}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="IndexHotCity">
			<view class="IndexGoodTit" style="padding: 0 15px;">
				<text>热门城市</text>
				<text @tap="HotCity">全部</text>
			</view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view class="indexrebotlist scroll-view-item_H uni-bg-red" id="demo1" v-for="(item,index) in HotAll" :key="index" :data-index="index" :class="changebig==true?'changebig':''" @touchstart="ChangeBig(index)">
					<image src="../../static/indexcity.png" mode="" class="HotBack"></image>
					<view class="HotAddr">
						<image :src="item.img" mode="" class="Addr"></image>
						<text>{{item.city}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="IndexHotActive">
			<view class="IndexGoodTit" style="padding: 0 30upx;">
				<text>热门活动</text>
				<text @tap="HotActive">{{nowlenth}}/{{ActiveAlllenth}}</text>
			</view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120" style="height: 160px;">
				<view class="HotActiveImgBox scroll-view-item_H uni-bg-red" id="demo1" v-for="(item,index) in ActiveAll" :key="index" :data-index="index" @longpress="Scrollimg(index)">
					<image :src="item.img" mode="" class="HotActiveImg"></image>
				</view>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	var QQMapWX = require('../../qqmap-wx-jssdk.js');
	var qqmapsdk;
	export default {
		data() {
			return {
				ReportlistTearcher:[
					{avatar:'../../static/teacher.jpeg',name:'张老师',distance:'100m',tag1:"初中",tag2:"数学",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'张老师',distance:'100m',tag1:"初中",tag2:"语文",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',name:'张老师',distance:'100m',tag1:"初中",tag2:"英语",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
				],
				ReportlistStudent:[
					{avatar:'../../static/student.jpg',name:'李帅同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"优秀学生"},{con:"物理学霸"},{con:"英语黑洞"}]},
					{avatar:'../../static/student.jpg',name:'艳艳同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"三好学生"},{con:"语文课代表"},{con:"化学差"}]},
					{avatar:'../../static/student.jpg',name:'张亚同学',distance:'100m',content:'想找一位靠谱的老师',state:"1",report:[{con:"班长"},{con:"数学优秀"},{con:"英语差"}]},
				],
				HotAll:[
					{img:'../../static/indexaddr2.png',city:'北京'},
					{img:'../../static/indexaddr2.png',city:'上海'},
					{img:'../../static/indexaddr2.png',city:'广州'},
					{img:'../../static/indexaddr2.png',city:'山西'}
				],
				ActiveAll:[
					{img:'../../static/indexactive.png'},
					{img:'../../static/indexactive.png'},
					{img:'../../static/indexactive.png'},
					{img:'../../static/indexactive.png'},
				],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				identityid:'' ,   //身份id
				ActiveAlllenth:'',
				nowlenth:'1',
				active:true,
				changebig:true,
				address:""
			}
		},
		onLoad(options) {
			console.log(options)
			
			this.ActiveAlllenth=this.ActiveAll.length;    //活动的数量
			
			var that=this;    //转换指针
			// that.deng();
			uni.getStorage({
				key: 'identityid',
				success: function (res) {
					// console.log(res.data);
					that.identityid=res.data;
					// console.log(that.identityid);
				}
			});
			// console.log(that.identityid);
		},
		onShow() {
			// 调用接口
			
		},
		methods: {
			// deng:function(){
			// 			var that=this;
				
			// },
			location:function(){
				if(this.active==true){
					this.active=false;
					var that=this;
					setTimeout(function(){
						console.log(that.active)
						that.active=true
					}, 2000);
				}
				
			},
			IndexGood:function(){
				uni.navigateTo({
					url:'../selected/selected'
				})
			},
			SearchBtn:function(){
				uni.navigateTo({
					url:'../nearby/nearby'
				})
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon:"none",
					title:"纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			HotActive:function(){    //热门活动
				
			},
			HotCity:function(){    //热门城市
				
			},
			StudentDetail:function(){   //精选同学
				uni.navigateTo({
					url:'../detail/detail'
				})
			},
			TeacherDetail:function(){    //精选老师
				uni.navigateTo({
					url:"../detail/detail"
				})
			},
			Scrollimg:function(e){   //活动进度
				console.log(e)
				this.nowlenth=e+1;
			},
			ChangeBig:function(e){   //变大特效
				this.changebig=true;
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
	.changebig:hover{
		cursor: pointer;
		transition: all 0.6s;
		transform: scale(1.1);
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.IndexBanner{
		width: 100%;
		height: 580upx;
		position: relative;
	}
	.IndexBack{
		width: 100%;
		height: 440upx;
		position: absolute;
		top: 0;
		left: 0;
		background-size: 100%;
	}
	.IndexAddress{
		width: 630upx;
		height: 310upx;
		background: #fff;
		position: absolute;
		top: 200upx;
		left: 30upx;
		padding: 30upx;
		border-radius: 20upx;
		box-shadow: 4upx 4upx 4upx #eee;
	}
	.IndexCity{
		height: 110upx;
		line-height: 110upx;
		font-size: 28upx;
		color: #303331;
		border-bottom: 2upx solid #F0F5F2;
		padding: 0 30upx;
	}
	.IndexCity text:nth-child(2){
		float: right;
	}
	.IndexCityImg{
		float: right;
		position: relative;
		width: 34upx;
		height: 34upx;
	}
	.IndexCityImg image{
		width: 34upx;
		height: 34upx;
		top: 36upx;
		right: 16upx;
		position: absolute;
	}
	.IndexAddr{
		height: 120upx;
		font-size: 28upx;
		line-height: 120upx;
		color: #303331;
	}
	.IndexAddr input{
		height: 120upx;
		line-height: 120upx;
		width: 80%;
		float: left;
		padding: 0 30upx;
	}
	.IndexAddr image{
		width: 34upx;
		height: 34upx;
		background-size: 100%;
		margin-top: 46upx;
	}
	.IndexSearch{
		width: 630upx;
		height: 88upx;
		background: #24B353;
		color: #fff;
		font-size: 28upx;
		text-align: center;
		line-height: 88upx;
		border-radius: 100upx;
	}
	
	
	/* 分类 */
	.IndexSort{
		height: 130upx;
		width: 100%;
		margin-top: 80upx;
	}
	.IndexSortList{
		width: 20%;
		float: left;
	}
	.IndexSortList image{
		width: 82upx;
		height: 82upx;
		margin: 0 auto;
		display: block;
	}
	.IndexSortList text{
		color: #303331;
		font-size: 24upx;
		text-align: center;
		display: block;
		margin-top: 18upx;
	}
	
	/* 数据成就 */
	.IndexData{
		margin-top: 60upx;
		width: 100%;
	}
	.IndexDataTit{
		height: 100upx;
		line-height: 100upx;
		padding: 0 30upx;
		font-weight: 700;
		font-size: 38upx;
	}
	.IndexDataCon{
		box-shadow: 4upx 4upx 4upx #eee;
		width: 690upx;
		height: 150upx;
		margin: 0 auto;
	}
	.IndexDataList{
		width: 33.33%;
		float: left;
	}
	.IndexDataList text:nth-child(1){
		color: #303331;
		font-size: 38upx;
		font-weight: 700;
		text-align: center;
		display: block;
		margin-top: 40upx;
	}
	.IndexDataList text:nth-child(2){
		color: #9DA6A0;
		font-size: 24upx;
		text-align: center;
		display: block;
	}
	
	/* 精选名师 */
	.IndexGood{
		margin-top: 60upx;
	}
	.IndexGoodTit{
		height: 100upx;
		line-height: 100upx;
	}
	.IndexGoodTit text:nth-child(1){
		color: #303331;
		font-size: 38upx;
		font-weight: 700;
		float: left;
	}
	.IndexGoodTit text:nth-child(2){
		float: right;
		color: #303331;
		font-size: 24upx;
		width: 80upx;
		height: 40upx;
		border: 2upx solid #eee;
		border-radius: 100upx;
		line-height: 40upx;
		text-align: center;
		margin-top: 26upx;
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
	
	
	/* 热门城市 */
	.scroll-Y {
		height: 300upx;
	}
	
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		height: 400upx;
	}
	
	.scroll-view-item {
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}
	
	.indexrebotlist {
		display: inline-block;
		width: 254upx;
		    height: 384upx;
		/* line-height: 300upx; */
		text-align: center;
		font-size: 36upx;
		margin-left: 20upx;
		position: relative;
	}
	.indexrebotlist .HotBack{
		width: 254upx;
		height: 384upx;
		background-size: 100%;
		position: absolute;
		left: 0;
	}
	.IndexHotCity{
		height: 520upx;
		/* background: pink; */
		margin-top: 40upx;
		width: 100%;
	}
	.HotAddr{
		width: 110upx;
		height: 36upx;
		border-radius: 100upx;
		background: rgba(0,0,0,0.6);
		color: #fff;
		position: absolute;
		left: 20upx;
		bottom: 20upx;
		line-height: 36upx;
	}
	.Addr{
		width: 20upx;
		height: 24upx;
		margin-right: 10upx;
	}
	.HotAddr text{
		font-size: 28upx
	}
	.IndexHotActive{
		height: 440upx;
		/* background: pink; */
		margin-top: 40upx;
		width: 100%;
	}
	.HotActiveImgBox {
		display: inline-block;
		width: 630upx;
		height: 300upx;
		/* line-height: 300upx; */
		text-align: center;
		font-size: 36upx;
		margin-left: 20upx;
		position: relative;
	}
	.HotActiveImgBox image{
		width: 630upx;
		height: 300upx;
	}
</style>
