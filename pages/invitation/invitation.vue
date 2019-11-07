<template>
	<view class="content">
		<image src="../../static/invitationmin.png" mode="" class="InvitationImage"></image>
		<view class="InvitationText">邀请好友注册，得大额积分</view>
		<view class="InvitationBox">
			<view class="InvitationMin">
				<image src="../../static/invitationl.png" mode=""></image>
				<text>我的邀请码</text>
				<image src="../../static/invitationr.png" mode=""></image>
			</view>
			<view class="InvitationCode">256890</view>
			<view class="InvitationInput">
				<input type="number" value="" placeholder="输入好友邀请码"/>
				<view class="InvitationGet">领取</view>
			</view>
			<view class="InvitationFriend">邀请好友</view>
		</view>
		<text class="InvitationRecode" @tap="InvitationRecode">邀请记录</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			InvitationRecode:function(){
				uni.navigateTo({
					url:'../invitationrecode/invitationrecode'
				})
			}
		}
	}
</script>

<style>
.InvitationImage{
	width: 322upx;
	height: 236upx;
	margin: 0 auto;
	display: block;
	margin-top: 44upx;
	background-size: 100%;
}
.InvitationText{
	color: #303331;
	font-size: 28upx;
	text-align: center;
	font-weight: 700;
	margin-top: 24upx;
}
.InvitationBox{
	width: 690upx;
	height: 466upx;
	box-shadow: 4upx 4upx 4upx #eee;
	margin: 0 auto;
	margin-top: 60upx;
}
.InvitationMin{
	height: 100upx;
	line-height: 100upx;
	text-align: center;
}
.InvitationMin image{
	width: 124upx;
	height: 4upx;
}
.InvitationMin text{
	font-size: 28upx;
	color: #303331;
	margin-left: 24upx;
	margin-right: 24upx;
}
.InvitationCode{
	color: #24B353;
	font-size: 48upx;
	text-align: center;
	font-weight: 700;
}


/* 输入框 */
.InvitationInput{
	height: 88upx;
	padding: 30upx;
}
.InvitationInput input{
	width: 67%;
	background: #eee;
	height: 88upx;
	border-radius: 100upx;
	padding-left: 60upx;
	color: #9DA6A0;
	font-size: 24upx;
	float: left;
}
.InvitationGet{
	width: 20%;
	float: right;
	background: #24B353;
	height: 88upx;
	border-radius: 100upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
}
.InvitationFriend{
	width: 630upx;
	height: 88upx;
	background: #24B353;
	border-radius: 100upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	margin: 0 auto;
	margin-top: 30upx;
}
.InvitationRecode{
	color: #24B353;
	font-size: 28upx;
	text-align: center;
	display: block;
	text-decoration: underline;
	margin-top: 20upx;
}
</style>
