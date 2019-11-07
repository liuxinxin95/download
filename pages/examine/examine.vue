<template>
	<view class="content">
		<view class="Examine" :class="type==1?'activeshow':'activehide'">
			<image src="../../static/shenhe1.png" mode=""></image>
			<text>你的身份在审核中，请耐心等待，</text>
			<text>1~3个工作日审核完成</text>
		</view>
		<view class="ExamineSuccess" :class="type==2?'activeshow':'activehide'">
			<image src="../../static/shenhe2.png" mode=""></image>
			<text>认证成功</text>
			<view class="BackIndex" @tap="BackIndex">
				返回首页
			</view>
		</view>
		<view class="ExamineFail" :class="type==3?'activeshow':'activehide'">
			<image src="../../static/shenhe3.png" mode=""></image>
			<text>认证失败</text>
			<view class="Refresh" @tap="Refresh">
				重新上传
			</view>
		</view>
		<view class="ExamineSuccess" :class="type==4?'activeshow':'activehide'">
			<image src="../../static/shenhe2.png" mode=""></image>
			<text>认证成功</text>
			<view class="BackIndex" >
				去缴费
			</view>
		</view>
		<view class="ExamineSuccess" :class="type==5?'activeshow':'activehide'">
			<image src="../../static/shenhe2.png" mode=""></image>
			<text>认证成功</text>
			<view class="BackIndex">
				提醒机构去缴费
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'5'
			}
		},
		onLoad() {
			if(this.type==1){
				uni.setNavigationBarTitle({
					title:"审核中"
				})
			}else if(this.type==2){
				uni.setNavigationBarTitle({
					title:"认证成功"
				})
			}else if(this.type==3){
				uni.setNavigationBarTitle({
					title:"认证失败"
				})
			}else if(this.type==4){
				uni.setNavigationBarTitle({
					title:"认证成功"
				})
			}else if(this.type==5){
				uni.setNavigationBarTitle({
					title:"认证成功"
				})
			}
		},
		methods: {
			BackIndex:function(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			Refresh:function(){
				uni.navigateBack({
				    delta: 1
				});
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
	.Examine image{
		width: 322upx;
		height: 236upx;
		margin: 0 auto;
		display: block;
		margin-top: 60upx;
	}
	.Examine text:nth-child(2){
		color: #303331;
		font-size: 28upx;
		font-weight: 700;
		text-align: center;
		display: block;
		margin-top: 42upx;
	}
	.Examine text:nth-child(3){
		color: #303331;
		font-size: 28upx;
		font-weight: 700;
		text-align: center;
		display: block;
	}
	.ExamineSuccess image{
		width: 322upx;
		height: 236upx;
		margin: 0 auto;
		display: block;
		margin-top: 60upx;
	}
	.ExamineSuccess text:nth-child(2){
		color: #303331;
		font-size: 28upx;
		font-weight: 700;
		text-align: center;
		display: block;
		margin-top: 42upx;
	}
	.BackIndex{
		height: 88upx;
		background: #24B353;
		text-align: center;
		line-height: 88upx;
		margin: 0 auto;
		color: #fff;
		font-size: 28upx;
		border-radius: 100upx;
		margin-top: 312upx;
		width: 630upx;
	}
	.ExamineFail image{
		width: 322upx;
		height: 236upx;
		margin: 0 auto;
		display: block;
		margin-top: 60upx;
	}
	.ExamineFail text:nth-child(2){
		color: #303331;
		font-size: 28upx;
		font-weight: 700;
		text-align: center;
		display: block;
		margin-top: 42upx;
	}
	.Refresh{
		height: 88upx;
		background: #24B353;
		text-align: center;
		line-height: 88upx;
		margin: 0 auto;
		color: #fff;
		font-size: 28upx;
		border-radius: 100upx;
		margin-top: 212upx;
		width: 630upx;
	}
</style>
