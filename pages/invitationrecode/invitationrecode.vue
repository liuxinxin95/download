<template>
	<view class="content">
		<view class="InvitationRecodeList">
			<view class="InvitationRecodeListLeft">
				<view class="RecodeName">豆包的铲屎官</view>
				<view class="RecodeTime">
					加入时间：<text>2019-9-18 10:12:55</text>
				</view>
			</view>
			<view class="RecodeCode" style="color:#24B353;;">
				+￥<text>10</text>
			</view>
		</view>
		<view class="InvitationRecodeList">
			<view class="InvitationRecodeListLeft">
				<view class="RecodeName">豆包的铲屎官</view>
				<view class="RecodeTime">
					加入时间：<text>2019-9-18 10:12:55</text>
				</view>
			</view>
			<view class="RecodeCode" style="color: #9CA69F;">
				邀请中
			</view>
		</view>
		<view class="InvitationRecodeList">
			<view class="InvitationRecodeListLeft">
				<view class="RecodeName">豆包的铲屎官</view>
				<view class="RecodeTime">
					加入时间：<text>2019-9-18 10:12:55</text>
				</view>
			</view>
			<view class="RecodeCode" style="color: #FA544B;">
				邀请失败
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.content{
	padding: 30upx;
}
.InvitationRecodeList{
	width: 630upx;
	height: 80upx;
	box-shadow: 4upx 4upx 4upx #eee;
	padding: 30upx;
	border-radius: 20upx;
	margin-bottom: 30upx;
}
.InvitationRecodeListLeft{
	width: 80%;
	float: left;
}
.RecodeName{
	font-size: 28upx;
	color: #303331;
	font-weight: 700;
}
.RecodeTime{
	font-size: 24upx;
	color: #9CA69F;
	line-height: 40upx;
}
.RecodeCode{
	width: 20%;
	float: right;
	font-size: 28upx;
	text-align: right;
	display: block;
	line-height: 80upx;
}
</style>
