<template>
	<view class="content">
		<input type="text" placeholder="输入新昵称" :model="name" @input="change"/>
		<view class="Keepbtn" @tap="Keepbtn">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				session:''
			}
		},
		onLoad() {
			try {
			    const session = uni.getStorageSync('session');
			    this.session=session;
			} catch (e) {
			    // error
			}
		},
		methods: {
			change:function(e){
				this.name=e.detail.value;
				this.$globalData.myinfo.name =e.detail.value;
				// console.log(this.$globalData.myinfo.name)
			},
			Keepbtn:function(){
				if(this.name==""){
					uni.showModal({
						title:"提示",
						content:"请输入昵称！"
					})
				}else{
					var that=this;
					uni.request({
						url:that.$url+'famil-education/api/sysuser/updateUserInfo',
						method:"POST",
						header: {
							'content-type': 'application/json',
							'Authorization':that.session
						},
						data:{
							userName:that.name
						},
						success(res) {
							console.log("修改昵称成功")
							uni.navigateTo({
								url:'../mymessage/mymessage?name='+that.name
								// url:'../mymessage/mymessage?name='+this.$globalData.myinfo.name
							})
						}
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
		border-radius: 44upx;
		text-align: center;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
		margin: 0 auto;
		margin-top: 60upx;
	}
</style>
