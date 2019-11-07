<template>
	<view class="content">
		<view class="MineMessageBox">
			<view class="MineMessage">
				<view class="MineMessageName">
					<text>博文哥儿</text>
					<text class="MineType">{{identityid == 'student' ? "学生":(identityid == "teacher" ? "老师" :"机构")}}
</text>
				</view>
				<view class="MineMessageEdit" @tap="MineMessageEdit">
					查看编辑个人资料...
				</view>
			</view>
			<image src="../../static/avatar.png" mode=""></image>
		</view>
		
		<view class="MineFourBox">
			<view class="MineFour" @tap="Demand">
				<image src="../../static/fabiao.png" mode=""></image>
				<text>需求发表</text>
			</view>
			<view class="MineFour" @tap="Appointment">
				<image src="../../static/yuyue.png" mode=""></image>
				<text>我的预约</text>
			</view>
			<view class="MineFour"  @tap="MyBalabce" :class="identityid=='student'?'activeshow':identityid=='teacher'?'activeshow':'activehide'">
				<image src="../../static/yue.png" mode=""></image>
				<text>我的余额</text>
			</view>
			<view class="MineFour"  @tap="MyTeacher" :class="identityid=='student'?'activehide':identityid=='teacher'?'activehide':'activeshow'">
				<image src="../../static/myteacher.png" mode=""></image>
				<text>我的老师</text>
			</view>
			<view class="MineFour" @tap="SignIn">
				<image src="../../static/qiandao.png" mode="" ></image>
				<text>签到</text>
			</view>
		</view>
		
		<view class="MineListBox">
			<view class="MineList" @tap="Identity" :class="identityid=='student'?'activehide':identityid=='teacher'?'activeshow':'activeshow'">
				<image src="../../static/shenfen.png" mode=""></image>
				<text>身份认证</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
			<view class="MineList" @tap="Invitation">
				<image src="../../static/zhuce.png" mode=""></image>
				<text>邀请注册</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
			<view class="MineList" @tap="Collection">
				<image src="../../static/shoucang.png" mode=""></image>
				<text>我的收藏</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
			<view class="MineList" @tap="Report">
				<image src="../../static/jubao.png" mode=""></image>
				<text>我的举报</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
			<view class="MineList" @tap="Reminder">
				<image src="../../static/xiaoxi.png" mode=""></image>
				<text>消息提醒</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
			<view class="MineList" @tap="Integral">
				<image src="../../static/jifen.png" mode=""></image>
				<text>我的积分</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
			<view class="MineList" @tap="Call">
				<image src="../../static/kefu.png" mode=""></image>
				<text>我的客服</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
			<view class="MineList" @tap="AboutUs">
				<image src="../../static/guanyu.png" mode=""></image>
				<text>关于我们</text>
				<image src="../../static/arrowright.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			
			MineMessageEdit:function(){   //修改信息
				uni.navigateTo({
					url:'../mymessage/mymessage'
				})
			},
			AboutUs:function(){    //关于我们
				uni.navigateTo({
					url:'../aboutus/aboutus'
				})
			},
			Reminder:function(){    //消息提醒
				uni.navigateTo({
					url:'../reminder/reminder'
				})
			},
			Integral:function(){  //我的积分
				uni.navigateTo({
					url:'../integral/integral'
				})
			},
			MyBalabce:function(){    //我的余额
				uni.navigateTo({
					url:'../balance/balance'
				})
			},
			Invitation:function(){    //邀请注册
				uni.navigateTo({
					url:'../invitation/invitation'
				})
			},
			Call:function(){   //打电话
				uni.makePhoneCall({
				    phoneNumber: '114' //仅为示例
				});
			},
			Report:function(){   //我的举报
				uni.navigateTo({
					url:'../report/report'
				})
			},
			Appointment:function(){    //我的预约
				uni.navigateTo({
					url:"../appointment/appointment"
				})
			},
			Collection:function(){    //我的收藏
				uni.navigateTo({
					url:"../collection/collection"
				})
			},
			Demand:function(){   //需求管理
				uni.navigateTo({
					url:"../demand/demand"
				})
			},
			Identity:function(){    //老师身份认证
				uni.navigateTo({
					url:'../teacherauthentication/teacherauthentication'
				})
			},
			MyTeacher:function(){   //机构下我的老师
				uni.navigateTo({
					url:'../myteacher/myteacher'
				})
			},
			SignIn:function(){    //签到
				uni.navigateTo({
					url:'../signin/signin'
				})
			}
			
		},
		
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
	/* 个人头像信息展示 */
	.MineMessageBox{
		height: 120upx;
		/* background: pink; */
		padding: 30upx;
		box-shadow: 4upx 4upx 4upx #EEEEEE;
	}
	.MineMessage{
		width: 70%;
		float: left;
	}
	.MineMessageName{
		height: 80upx;
		line-height: 80upx;
		color: #303331;
		font-size: 40upx;
		font-weight: 700;
	}
	.MineMessage text:nth-child(1){
		float: left;
	}
	.MineMessage text:nth-child(2){
		width: 70upx;
		height: 38upx;
		background: #24b353;
		border-radius: 20upx;
		color: #fff;
		font-size: 24upx;
		float: left;
		display: block;
		line-height: 38upx;
		text-align: center;
		margin-top: 20upx;
		margin-left: 20upx;
	}
	.MineMessageEdit{
		color: #9DA6A0;
		font-size: 28upx;
	}
	.MineMessageBox image{
		width: 120upx;
		height: 120upx;
		/* background: red; */
		float: right;
		border-radius: 50%;
		background-size:100% 100% ;
	}
	
	
	/* 四个盒子*/
	.MineFourBox{
		height: 164upx;
		width: 100%;
		/* background: pink; */
		margin-top: 30upx;
		box-shadow: 4upx 4upx 4upx #EEEEEE;
	}
	.MineFour{
		width: 25%;
		float: left;
		/* background: red; */
		height: 100%;
	}
	.MineFour image{
		width: 48upx;
		height: 48upx;
		/* background: blue; */
		display: block;
		margin: 0 auto;
		margin-top: 32upx;
		background-size:100% 100% ;
	}
	.MineFour text{
		color: #303331;
		font-size: 24upx;
		text-align: center;
		display: block;
		margin-top: 20upx;
	}
	
	
	/* 列表 */
	.MineListBox{
		height: 770upx;
		margin-top: 30upx;
		/* background: pink; */
		box-shadow: 4upx 4upx 4upx #EEEEEE;
	}
	.MineList{
		height: 110upx;
		/* background: red; */
		line-height: 110upx;
	}
	.MineList image:nth-child(1){
		width: 32upx;
		height: 32upx;
		/* background: blue; */
		margin-top: 38upx;
		margin-left: 20upx;
		margin-right: 20upx;
		float: left;
		background-size: 100% 100%;
	}
	.MineList text:nth-child(2){
		color: #303331;
		font-size: 28upx;
		line-height: 110upx;
		float: left;
	}
	.MineList image:nth-child(3){
		float: right;
		width: 14upx;
		height: 24upx;
		margin: 0 auto;
		margin-right: 40upx;
		margin-top: 40upx;
	}
</style>
