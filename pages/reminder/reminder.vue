<template>
	<view class="content">
		<view class="btnbox">
			<view class="current-h" @click="onClickItem(0)">
				<image src="../../static/messicon.png" mode=""></image>
				<text >消息提醒</text>
			</view>
			<view class="current-h" @click="onClickItem(1)">
				<image src="../../static/messicon2.png" mode=""></image>
				<text>我的消息</text>
			</view>
		</view>
		 
		
		<view class="aaa" v-show="current == 0">
			<view class="ReminderList">
				<image src="../../static/messicon.png" mode=""></image>
				<view class="ReminderListMid">
					<text>家教客服</text>
					<text class="ReminderListTime">1小时前</text>
				</view>
				<view class="ReminderListcon">
					首次登陆奖励300积分！
				</view>
			</view>
			<view class="ReminderList">
				<image src="../../static/messicon.png" mode=""></image>
				<view class="ReminderListMid">
					<text>家教客服</text>
					<text class="ReminderListTime">1小时前</text>
				</view>
				<view class="ReminderListcon">
					<text>{{contents}}</text>                  
					<view class="detailnotice" @tap="opendetail" :class="aa==true?'activeshow':'activehide'">
						展开
						<text class="iconfont">&#xe62e;</text>
					</view>
					<view class="detailnotice" @tap="closedetail" :class="aa==false?'activeshow':'activehide'">
						收起
						<text class="iconfont">&#xe62d;</text>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="aaa" v-show="current == 1">
			<view class="ReminderLists">
				<image src="../../static/messicon2.png" mode=""></image>
				<view class="ReminderListMids">
					<text>家教客服</text>
					<text class="ReminderListTime">1小时前</text>
				</view>
				<view class="ReminderListcons">
					<text>您的好友虾米吃馍馍正在邀请您加入ta的机构，请在2019年10月10日12:23:59前确认是否加入TA的机构！</text>
					<view class="detailnotice" @tap="comedetail">
						详情
						<text class="iconfont">&#xe6ab;</text>
					</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="popup" type="center">
			<view class="showboxinfo">
				<view class="showboxmess">您的好友正在邀请您加入TA的机构，您是否同意？</view>
				<view class="twobtn">
					<view class="cancel" @tap="cancel">取消</view>
					<view class="call" @tap="call">同意</view>
				</view>
				
			</view>
		</uni-popup>
	
	</view>
</template>

<script>
	import uniSegmentedControl from "../../components/uni-segmented-control/uni-segmented-control.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				items: [
					{image:'../../static/messicon.png',text:'消息提醒'},
					{image:'../../static/messicon2.png',text:'我的消息'}
				],
				current: 0,
				aa:true,
				bb:true,
				contents:"造景大赛开始啦，快快来围观！造景大赛开始啦，快快来围观！造景大赛开始啦，快快来围观！造景大赛开始啦，快快来围观快快来围观！造景大赛开始啦，快快来围观造景大赛开始啦，快快来围观快快来围观！造景大赛开始啦，快快来围观造景大赛开始啦，快快来围观快快来围观！造景大赛开始啦，快快来围观"
			}
		},
		onLoad() {
			var that=this;
			that.textshow()
		},
		onShow() {
			
		},
		methods: {
			textshow:function(){
				var that=this;
				that.contents=that.contents.substr(0,50);
			},
			onClickItem:function(index){
				if (this.current !== index) {
					this.current = index;
					// if(this.current==1){
						
					// }
				}
			},
			comedetail:function(){
				this.$refs.popup.open();
			},
			cancel:function(){
				this.$refs.popup.close();
			},
			call:function(){
				
			},
			opendetail:function(){
				this.aa=false;
				// this.bb=true;
				var that=this;
				// that.contents=that.contents.substr(0,50);
				that.contents="";
				that.contents="造景大赛开始啦，快快来围观！造景大赛开始啦，快快来围观！造景大赛开始啦，快快来围观！造景大赛开始啦，快快来围观快快来围观！造景大赛开始啦，快快来围观造景大赛开始啦，快快来围观快快来围观！造景大赛开始啦，快快来围观造景大赛开始啦，快快来围观快快来围观！造景大赛开始啦，快快来围观";
				console.log(that.contents)
			},
			closedetail:function(){
				this.aa=true;
				var that=this;
				that.contents=that.contents.substr(0,50);
				// this.bb=false;
			}
		},
		components: {uniSegmentedControl,uniPopup},
	}
</script>

<style>
	.btnbox .current-h-seg{
		color: #40CA59;
	}
	.btnbox .current-h-seo{
		color: #ffa500;
	}
	.activeshow{
		display: block;
	}
	.activehide{
		display: none;
	}
 
.content{
	padding: 30upx;
}
.btnbox{
	width: 345px;
	height: 110px;
	box-shadow: 2px 2px 2px #eee;
	margin-bottom: 20px;
}
.current-h{
	width: 50%;
	    float: left;
}
.current-h image{
	width: 44px;
	    height: 44px;
	    margin: 0 auto;
	    display: block;
	    margin-top: 25px;
		background-size: 100%;
}
.current-h text{
	color: #3D403E;
	    font-size: 12px;
	    text-align: center;
	    display: block;
	    margin-top: 10px;
}
.ReminderList{
	padding: 30upx;
	/* height: 88upx; */
	width: 630upx;
	box-shadow: 4upx 4upx 4upx #eee;
	margin-bottom: 30upx;
}
.ReminderList image{
	width: 88upx;
	height: 88upx;
	margin: 0 auto;
	float: left;
	margin-right: 32upx;
}
.ReminderListMid{
	float: left;
	width: 80%;
}
.ReminderListMid text:nth-child(1){
	font-size: 32upx;
	color: #3D403E;
	display: block;
	font-weight: 700;
	float: left;
}
.ReminderListMid text:nth-child(2){
	font-size: 28upx;
	color: #AAB3AD;
	float: right;
}
.ReminderListcon{
	width: 80%;
	/* float: left; */
	color: #AAB3AD;
	font-size: 12px;
	margin-top: 5px;
	overflow: hidden;
	position: relative;
	text-overflow: ellipsis;
	/* -webkit-line-clamp: 3; */
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
.ReminderLists{
	padding: 30upx;
	height: 160upx;
	width: 630upx;
	box-shadow: 4upx 4upx 4upx #eee;
	margin-bottom: 30upx;
}
.ReminderLists image{
	width: 88upx;
	height: 88upx;
	margin: 0 auto;
	float: left;
	margin-right: 32upx;
}
.ReminderListMids{
	float: left;
	width: 80%;
}
.ReminderListMids text:nth-child(1){
	font-size: 32upx;
	color: #3D403E;
	display: block;
	font-weight: 700;
	float: left;
}
.ReminderListMids text:nth-child(2){
	font-size: 28upx;
	color: #AAB3AD;
	float: right;
}
.ReminderListcons{
	width: 80%;
	float: left;
	color: #AAB3AD;
	font-size: 12px;
	margin-top: 5px;
	overflow: hidden;
	line-height: 20px;
	position: relative;
}
.detailnotice{
	position: absolute;
	bottom: 0;
	right: 0;
	color: #40CA59;
	font-size: 12px;
}
.iconfont{
	font-size: 12px;
}

/* 隐藏盒子 */
.showboxinfo{
	width: 167px;
	height: 100px;
}
.showboxmess{
	height: 55px;
	line-height: 20px;
	text-align: center;
	color: #303331;
	font-size: 14px;
}
.twobtn{
	height: 50px;
	line-height: 50px;
	display: flex;
	justify-content: space-around;
	font-size: 14px;
	border-top: 1px solid #eee;
}
.call{
	color:#24B353
}
</style>
