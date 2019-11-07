<template>
	<view class="content">
		<input type="text" value="" placeholder="请输入你的常驻地址以便老师上门" :model="address" @input="change"/>
		<view class="Keepbtn" @tap="Keepbtn">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:""
			}
		},
		methods: {
			change:function(e){
				console.log(e)
				this.address=e.detail.value;
				this.$globalData.myinfo.address =e.detail.value;
			},
			Keepbtn:function(){
				if(this.address==""){
					uni.showModal({
						title:"提示",
						content:"请输入地址！"
					})
				}else{
					uni.navigateTo({
						url:'../mymessage/mymessage?address='+this.$globalData.myinfo.address
					})
					// uni.showModal({
					// 	title:"提示",
					// 	content:"保存成功！"
					// })
				}
			}
		}
	}
</script>

<style>
	input{
		width: 80%;
		height: 88upx;
		line-height: 88upx;
		color: #9DA6A0;
		font-size: 24upx;
		margin: 0 auto;
		padding-left: 72upx;
		margin-top: 30upx;
	}
	.Keepbtn{
		background: #24B353;
		width: 690upx;
		height: 88upx;
		border-radius: 88upx;
		text-align: center;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
		margin: 0 auto;
		margin-top: 60upx;
	}
</style>
