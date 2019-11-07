<template>
	<view class="content">
		<uni-swipe-action :options="options" v-for="(item,index) in ReportlistTearcher" :key="index" :data-index="index" @tap="DeleteClick(index)">
		    <view class="ReportList" >
		    	<image :src="item.avatar" mode=""></image>
		    	<view class="ReportMessage" >
		    		<view class="ReportName">
		    			{{item.name}}
		    			<text class="greencolor" @tap="reportclick(item.states)">{{item.states==0?'缴费':'提醒'}}</text>
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
		<view class="AddTeacher" @tap="AddTeacher">添加老师</view>
		<!-- <view @tap="openPopup" class="addpeoplebtn">添加人员</view> -->
		<uni-popup ref="popup" type="center">
			<view class="aa">
				<view class="addpeople">添加老师</view>
				<input type="text" placeholder="请输入老师的邀请码" class="inputcode" @input="inputcode" :model="code">
				<view class="twobtn">
					<view class="cancel" @tap="closePopup">
						取消
					</view>
					<view class="sure" @tap="surePopup">
						确定
					</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="popups" type="center">
			<view class="bb">
				<view class="surepaytit">需支付老师认证费用，确保信息正式可靠。</view>
				<view class="twobtn">
					<view class="cancel" @tap="closePopups">
						取消
					</view>
					<view class="sure" @tap="surePopups">
						去支付
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniSwipeAction from "@/components/uni-swipe-action/uni-swipe-action.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				ReportlistTearcher:[
					{avatar:'../../static/teacher.jpeg',states:"0",name:'李老师',tag1:"初中",tag2:"数学",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',states:"1",name:'张老师',tag1:"初中",tag2:"语文",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
					{avatar:'../../static/teacher.jpeg',states:"0",name:'于老师',tag1:"初中",tag2:"英语",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}]},
				],
				options: [{
				    text: '删除',
				    style: {
				        backgroundColor: '#FA544B',
						marginLeft:'30px'
				    }
				}],
				identityid:'',
				code:''
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
			DeleteClick:function(e){
				console.log("shanchu");
				console.log(e)
				var that=this;
				uni.showModal({
					title: '提示',
					content: '确定删除？',
					success: function (res) {
						console.log(res)
						if (res.confirm) {
							console.log(that.ReportlistTearcher)
							  that.ReportlistTearcher.splice(e,1);
							} else if (res.cancel) {
								//取消
							}
						
					
					},
				})
			},
			reportclick:function(states){
				if(states==0){
					this.$refs.popups.open();
				}
				if(states==1){
					uni.showToast({
						title:"已提醒",
						icon:"none"
					})
				}
			},
			AddTeacher(){
				this.$refs.popup.open();
			},
			closePopup(){
				this.$refs.popup.close();
			},
			inputcode:function(e){
				console.log(e.detail.value)
				this.code=e.detail.value;
			},
			surePopup(){
				var that=this;
				if(that.code==""){
					// console.log("aaaa")
					// uni.showModal({
					// 	title: '提示',
					// })
				}else{
					
					that.closePopup();
					that.$refs.popups.open();
				}
			},
			closePopups(){
				this.$refs.popups.close();
			},
			surePopups(){
				// 调取支付接口
			}
		},
		components: {uniSwipeAction,uniPopup}
	}
</script>

<style>
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
}
.ReportName text{
	font-size: 24upx;
	color: #FFB726;
	/* border-radius: 10upx; */
	/* border: 2upx solid #ffb726; */
	margin-left: 20upx;
	/* padding: 4upx 10upx; */
	float: right;
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
.AddTeacher{
	height: 88upx;
	background: #24B353;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	border-radius: 100upx;
	margin-top: 60upx;
}


/* 弹出框 */
.aa{
	width: 460upx;
	height: 332upx;
}
.addpeople{
	color: #303331;
	font-size: 28upx;
	text-align: center;
	display: block;
	font-weight: 700;
	height: 100upx;
	line-height: 100upx;
}
.inputcode{
	width: 410upx;
	height: 88upx;
	background: #F0F5F2;
	border-radius: 100upx;
	padding-left: 60upx;
	font-size: 24upx;
}
.twobtn{
	height: 88upx;
	line-height: 88upx;
	border-top: 2upx solid #eee;
	margin-top: 40upx;
	font-size: 28upx;
}
.cancel{
	width: 50%;
	float: left;
	text-align: center;
	line-height: 88upx;
	color: #303331;
}
.sure{
	width: 50%;
	float: left;
	text-align: center;
	line-height: 88upx;
	color: #24B353;
}
.bb{
	width: 400upx;
}
.surepaytit{
	color: #303331;
	font-size: 28upx;
	font-weight: 700;
	text-align: center;
}
</style>
