<template>
	<view class="content">
		<image class="logo" src="/static/login.png"></image>
		<view class="logintext">请绑定您要修改的手机号</view>
		<input type="number" class="number" placeholder="输入手机号" maxlength="11" @input="blurPhone" :model="phone"/>
		<view class="code">
			<input class="codenum" type="number" :model="codeinput" placeholder="输入验证码" @input="blurcode"/>
			<view @tap="masend">发送验证码</view>
		</view>
		<view class="surebtn" @tap="surebtn">确定</view>
		<!-- <view class="join">
			加入我们
		</view> -->
		
		<!-- <view class="page">
			<view class="alert">
				<view class="main" :class="{'show': show}">
					<view class="icon"></view>
					<view class="text">请输入验证码</view>
					<view class="code">
						<input type="text" maxlength="1" v-for="(o, i) in list" v-model="o.val" :key="i" :focus="o.fs" :class="{'focus': o.fs}" @focus="onFocus(i)" @blur="onBlur(i)" @input="onInput($event, i)"/>
					</view>
					<view class="btns" @click="onSubmit" hover-class="none">提交验证码</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputtext:'',
				list: [
					{val: '', fs: true},  // 初始发时使第一个输入框架得到焦点
					{val: '', fs: false}, 
					{val: '', fs: false},
					{val: '', fs: false},
					{val: '', fs: false},
					{val: '', fs: false}
				],
				show: false,
				phone:'',
				
				
				codeinput:'',
				session:''
			}
		},
		onLoad() {
			try {
			    const session = uni.getStorageSync('session');
			    this.session=session;
				console.log(session)
			} catch (e) {
			    // error
			}
		},
		onReady() {
			// 显示弹出动画开关
			this.show = true;
		},
		methods: {
			blurPhone: function (e) {
				this.phone = e.detail.value;
				this.$globalData.myinfo.phone=e.detail.value;
				this.$globalData.teacherinfo.phone=e.detail.value;
			},
			blurcode:function(e){
				this.codeinput=e.detail.value;
			},
			masend:function(){
				console.log("发送验证码")
				if(!(/^1[3456789]\d{9}$/.test(this.phone))){
					if(this.phone.length<11){
						uni.showModal({
							title: '提示',
							content: '请输入正确的手机号码',
							success: function (res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						})
					}else if(this.phone.length==0){
						uni.showModal({
							title: '提示',
							content: '电话空',
						})
					}
				}else{
					var that=this;
					uni.request({
						url:that.$url+'famil-education/api/sysuser/SmsBiz',    //获取验证码
						method:"GET",
						header: {
							'content-type': 'application/json',
							'Authorization':this.session
						},
						data:{
							phone:this.phone
						},
						success(res) {
							console.log(res)
						}
					})
				}
				
			},
			surebtn:function(e){
				console.log(e)
				if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
					if(this.phone.length<11){
						uni.showModal({
							title: '提示',
							content: '请输入正确的手机号码',
							success: function (res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						})
					}else if(this.phone.length==0){
						uni.showModal({
							title: '提示',
							content: '电话空',
						})
					}
				}else{
					var that=this;
					uni.request({
						url:that.$url+'famil-education/api/sysuser/updatePhone',    //修改手机号
						method:"GET",
						header: {
							'content-type': 'application/json',
							'Authorization':this.session
						},
						data:{
							phone:this.phone,
							smsCaptcha:this.codeinput
						},
						success(res) {
							console.log(res)
							uni.request({
								url:that.$url+'famil-education/api/sysuser/updateUserInfo',
								method:"POST",
								header: {
									'content-type': 'application/json',
									'Authorization':that.session
								},
								data:{
									phone:that.name
								},
								success(res) {
									console.log("修改手机号成功")
									uni.navigateBack({
										url: '../mymessage/mymessage?phone='+that.phone
									});
								}
							})
							
						}
					})
					
				}
			}
			// 当输入框的内容改变时的操作
				// onInput(e, i) {
				// 	
				// 	// 输入完成时，跳到下一个输入框(得到焦点)
				// 	if (i < (this.list.length - 1) && e.target.value) {
				// 		// 如果下一个输入框有值，则不跳
				// 		if(!this.list[i + 1].val) this.onFocus(i + 1, true);
				// 	};
				// 	
				// 	// 删除时，跳到上一个输入框
				// 	if(i && !e.target.value) {
				// 		// if(!this.list[i - 1].val)
				// 		this.onFocus(i - 1, true);
				// 	};
				// },
				
				// 得到焦点 激活下边框样式
				// onFocus(i, t) {
					// this.list[i].val = '';	// 清除输入框中的内容
				// 	this.list[i].fs = true;
				// },
				
				// 失去焦点 去除下边框样式
				// onBlur(i) {
				// 	this.list[i].fs = false;
				// },
				
				// 提示验证码方法
				// onSubmit() {
				// 	let code = '';
				// 	for(let i = 0, len = this.list.length; i < len; i++) {
				// 		// 获取用户输入的验证码
				// 		code += this.list[i].val;
				// 	};
				// 	if(code && 6 == code.length) {
				// 		uni.showToast({
				// 			title: '验证通过：'+ code,
				// 			image: '../../static/avatar.png',
				// 			duration: 3000
				// 		});
				// 	} else {
				// 		uni.showToast({
				// 			title: '请正确输入验证码！',
				// 			image: '../../static/bu.png',
				// 			duration: 3000
				// 		});
				// 	};
				// }
			}
		}
</script>

<style>
	/* .page{ position: fixed; top: 0; right: 0; bottom: 0; left: 0; background:  url(../../static/gour.png) no-repeat center; background-size: cover; }
	.page .alert{ position: fixed; top: 0; right: 0; bottom: 0; left: 0; display: flex; flex-direction: row; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.4);}
	.page .alert .main{ position: relative; display: none; flex-direction: column; align-items: center; padding: 50upx; border-radius: 12upx; width: 480upx; height: 360upx; background: rgba(255, 255, 255, 0); }
	.page .alert .main .icon{ position: absolute; top: -48upx; width: 98upx; height: 98upx; background: url(../../static/gour.png) no-repeat; background-size: contain;}
	.page .alert .main .text{ padding: 50upx 0; color: #4c4e60; font-size: 32upx;}
	.page .alert .main .code{ display: flex; flex-direction: row;  justify-content: space-between; padding: 30upx 0 50upx; width: 360upx;}
	.page .alert .main .code input{ width: 40upx; height: 40upx; line-height: 40upx; border: none; border-bottom: 4upx solid #b2bfbd; text-align: center; color: #4c4e60; font-size: 46upx;}
	.page .alert .main .code input.focus{ border-color: #4c79fa;}
	.page .alert .main .btns{ width: 360upx; height: 80upx; line-height: 80upx; border-radius: 40upx; text-align: center; color: white; font-size: 32upx; font-weight: bold; background: linear-gradient(#614cff, #4c79fa)}
	@keyframes show{
		0%{transform: scale(0); background: rgba(255, 255, 255, 0.3);}
		50%{transform: scale(1.1); background: rgba(255, 255, 255, 0.6);}
		100%{transform: scale(1); background: rgba(255, 255, 255, 1);}
	}
	.page .alert .show{ display: flex!important; animation: show .6s ease-in-out forwards; } */
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 290upx;
		width: 182upx;
		margin-top: 100upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 40upx;
	}
	.logintext{
		color: #303331;
		font-size: 28upx;
		font-weight: 700;
	}
	.number{
		width: 570upx;
		height: 88upx;
		margin: 0 auto;
		background: #F6F3F3;
		border-radius: 100upx;
		padding-left: 60upx;
		color: #a49f9f;
		font-size: 24upx;
		margin-top: 100upx;
	}
	.code{
		height: 88upx;
		margin-top: 30upx;
		position: relative;
		width: 630upx;
	}
	.codenum{
		width: 570upx;
		height: 88upx;
		margin: 0 auto;
		background: #F6F3F3;
		border-radius: 100upx;
		padding-left: 60upx;
		color: #a49f9f;
		font-size: 24upx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.code view{
		width: 180upx;
		height: 56upx;
		background: #24B353;
		border-radius: 100upx;
		position: absolute;
		right: 0;
		top: 16upx;
		color: #fff;
		font-size: 24upx;
		z-index: 999;
		text-align: center;
		line-height: 56upx;
	}
	.surebtn{
		/* background: url(../../static/add.png); */
		background: #24B353;
		background-size: 100% 100%;
		width: 640upx;
		height: 88upx;
		margin: 0 auto;
		color: #FFFFFF;
		text-align: center;
		line-height: 88upx;
		overflow: hidden;
		font-size: 28upx;
		font-weight: 700;
		margin-top: 60upx;
		border-radius: 100upx;
	}
	.join{
		color: #333;
		font-size: 28upx;
		text-align: center;
		margin-top: 40upx;
		text-decoration: underline;
	}
</style>
