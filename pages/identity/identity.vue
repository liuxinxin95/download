<template>
	<view class="content">
		<view class="IdentityChoose">
			<text>您的身份是？</text>
			<text>根据选择为您提供精准服务</text>
		</view>
		<view class="IdentityList" @tap="identitys(item.tag)" v-for="(item,index) in identitylist" :key="index" :data-index="index">
			<view class="IdentityMess" >
				<text>{{item.name}}</text>
				<text>{{item.content}}</text>
			</view>
			<image :src="item.identityimg" mode=""></image>
		</view>
		<button  open-type="getUserInfo" bindgetuserinfo="bindGetUserInfo">授权登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				identity:"",
				openid:'',
				identitylist:[
					{name:"学生",content:'快速找到满意老师',identityimg:'../../static/student.png',tag:'3'},
					{name:"老师",content:'发布需求寻找生源',identityimg:'../../static/teacher.png',tag:'1'},
					{name:"机构",content:'发布活动寻找老师',identityimg:'../../static/mechanism.png',tag:'2'},
				],
				
			}
		},
		onLoad() {
			var that=this;
			try {
			    const openid = uni.getStorageSync('openid');
				that.openid=openid;
			}catch(e){
				
			}
			wx.getSetting({
			  success (res){
				if (res.authSetting['scope.userInfo']) {
				  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
				  wx.getUserInfo({
					success: function(res) {
					  console.log(res.userInfo)
					}
				  })
				}
			  }
			})
			
		},
		methods: {
			identitys:function(tag){
				var that=this;
				wx.getUserInfo({
				    success: function(res) {
					    console.log(res)
						uni.request({
							url:that.$url+'famil-education/api/login/login',
							method:"post",
							header: {
								'content-type': 'application/json'
							},
							data:{
								avatar:res.userInfo.avatarUrl,
								sex:res.userInfo.gender,
								userName:res.userInfo.nickName,
								openId:that.openid,
								userType:tag
							},
							success(res) {
								console.log(res)
								try {
									uni.setStorageSync('session', res.data.body.session);
								} catch (e) {
									// error
								}
								try {
									uni.setStorageSync('identity', res.data.body.userType);
								} catch (e) {
									// error
								}
								uni.switchTab({
									url:"../index/index"
								})
							}
						})
				    },
				})
			// 	uni.login({
			// 	    provider: 'weixin',
			// 	    success: function (loginRes) {
			// 			console.log(loginRes)
			// 	        console.log(loginRes.authResult);
				
			// 			uni.getUserInfo({
			// 			    provider: 'weixin',
			// 			    success: function (infoRes) {
			// 				    console.log(infoRes.userInfo)
								
			// 					avatar:infoRes.userInfo.avatarUrl,
								// sex:infoRes.userInfo.gender,
								// userName:infoRes.userInfo.nickName,
								// openId:that.openid,
								// userType:tag
			// 			    }
			// 			});
			// 		}
			// 	});
			
			},
			identitymechanism:function(){
				// uni.setStorage({
				//     key: 'identityid',
				//     data: 'mechanism',
				//     success: function () {
				//         console.log('success2');
				// 		uni.switchTab({
				// 			url:'../index/index'
				// 		})
				//     }
				// });
			},
			
		}
	}
</script>

<style>
.content{
	padding: 30upx;
}
.IdentityChoose{
	height: 170upx;
}
.IdentityChoose text:nth-child(1){
	color: #303331;
	font-size: 48upx;
	font-weight: 700;
	display: block;
	height: 60upx;
	line-height: 60upx;
}
.IdentityChoose text:nth-child(2){
	color: #9CA69F;
	font-size: 28upx;
	margin-top: 20upx;
	display: block;
}
.IdentityList{
	height: 188upx;
	border-radius: 20upx;
	box-shadow: 4upx 4upx 4upx #eee;
	margin-top: 80upx;
}
.IdentityMess{
	width: 60%;
	float: left;
}
.IdentityMess text:nth-child(1){
	display: block;
	font-weight: 700;
	margin: 60upx 60upx 0;
	font-size: 38upx;
}
.IdentityMess text:nth-child(2){
	font-size: 24upx;
	color: #9CA69F;
	margin: 60upx;
}
.IdentityList image{
	width: 188upx;
	height: 188upx;
	float: right;
	background-size: 100%;
}
</style>
