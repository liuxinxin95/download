<template>
	<view class="content">
		<view class="Edition">
			家教   V1.0.0
		</view>
		<view class="vlist">
			<text>清除缓存</text>
			<image src="../../static/arrowright.png" mode=""></image>
			<text style="color: #24B353;">77.4M</text>
		</view>
		<view class="vlist">
			<text>版本更新</text>
			<image src="../../static/arrowright.png" mode=""></image>
			<text class="new">新</text>
		</view>
		<view class="vlist">
			<text>隐私条款</text>
			<image src="../../static/arrowright.png" mode=""></image>
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
.Edition{
	color: #9DA6A0;
	font-size: 28upx;
	height: 120upx;
	line-height: 120upx;
}
.vlist{
	height: 100upx;
	/* background: pink; */
	line-height: 100upx;
	font-size: 28upx;
}
.vlist text:nth-child(1){
	color: #303331;
	font-size: 28upx;
	font-weight: 700;
	float: left;
}
.vlist text:nth-child(3){
	/* color: #9DA6A0; */
	float: right;
}
.vlist image{
	width: 14upx;
	height: 24upx;
	float: right;
	margin-top: 36upx;
	margin-left: 20upx;
}
.new{
	width: 32upx;
	height: 32upx;
	background: red;
	line-height: 30upx;
	display: block;
	color: #fff;
	font-size: 24upx;
	text-align: center;
	border-radius: 50%;
	padding: 2upx;
	margin-top: 30upx;
}
</style>
