<template>
	<view class="content">
		<view class="IdentityBox">
			<view class="identityTit" @tap="Num=0" :class="Num==0?'Num-h-se':''">
				<text>老师认证</text>
				<text :class="Num==0?'activeshow':'activehide'">——</text>
			</view>
			<view class="identityTit" @tap="Num=1" :class="Num==1?'Num-h-se':''">
				<text>机构认证</text>
				<text :class="Num==1?'activeshow':'activehide'">——</text>
			</view>
		</view>
		<view class="navbar" v-show="Num == 0">
			<input class="IdentityName" type="text" value="" placeholder="您的姓名"/>
			<input class="IdentityId" type="text" value="" placeholder="身份证号"/>
			<view class="IDBox">
				<view class="Idcard">
					<image src="../../static/add.png" mode=""></image>
					<text>身份证正面</text>
				</view>
				<view class="Idcard">
					<image src="../../static/add.png" mode=""></image>
					<text>身份证反面</text>
				</view>
				<view class="Idcard">
					<image src="../../static/add.png" mode=""></image>
					<text>手持身份证</text>
				</view>
			</view>
			<view class="TeacherBox">
				<image src="../../static/add.png" mode=""></image>
				<text>教师资格证内页</text>
			</view>
			<view class="SureBtn" @tap="SureLoad">确定上传</view>
			<text class="Notice">注：请确保身份证中头像与字体清晰可见。</text>
		</view>
		<view class="navbar" v-show="Num == 1">
			<input class="IdentityName" type="text" value="" placeholder="法人姓名"/>
			<input class="IdentityId" type="text" value="" placeholder="身份证号"/>
			<input class="IdentityYingId" type="text" value="" placeholder="营业执照注册号"/>
			<view class="IDBox">
				<view class="Idcard">
					<image src="../../static/add.png" mode=""></image>
					<text>身份证正面</text>
				</view>
				<view class="Idcard">
					<image src="../../static/add.png" mode=""></image>
					<text>身份证反面</text>
				</view>
				<view class="Idcard">
					<image src="../../static/add.png" mode=""></image>
					<text>手持身份证</text>
				</view>
			</view>
			<view class="TeacherBox">
				<image src="../../static/add.png" mode=""></image>
				<text>教师资格证内页</text>
			</view>
			<view class="SureBtn">确定上传</view>
			<text class="Notice">注：请确保身份证中头像与字体清晰可见。</text>
		</view>
			
		</view>
</template>

<script>
	export default {
		data() {
			return {
				Num:0,
			}
		},
		methods: {
			SureLoad:function(){
				uni.navigateTo({
					url:'../examine/examine'
				})
			}
		}
	}
</script>

<style>
.Num-h-se{
	color: #24B353;
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
.IdentityBox{
	color: #303331;
	font-size: 28upx;
	font-weight: 700;
	height: 100upx;
}
.identityTit{
	width: 50%;
	float: left;
	text-align: center;
}
.identityTit text:nth-child(1){
	display: block;
}
.IdentityName{
	width: 630upx;
	padding-left: 60upx;
	background: #F0F5F2;
	height: 88upx;
	border-radius: 100upx;
	font-size: 24upx;
	line-height: 88upx;
	margin-top: 30upx;
}
.IdentityId{
	width: 630upx;
	padding-left: 60upx;
	background: #F0F5F2;
	height: 88upx;
	border-radius: 100upx;
	font-size: 24upx;
	line-height: 88upx;
	margin-top: 30upx;
}
.IdentityYingId{
	width: 630upx;
	padding-left: 60upx;
	background: #F0F5F2;
	height: 88upx;
	border-radius: 100upx;
	font-size: 24upx;
	line-height: 88upx;
	margin-top: 30upx;
}
.IDBox{
	height: 190upx;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	margin-top: 30upx;
	}

.IDBox .Idcard{
	width: 190upx;
	height: 190upx;
	background: #F0F5F2;
	border-radius: 8upx;
}
.Idcard image{
	width: 40upx;
	height: 40upx;
	margin: 0 auto;
	display: block;
	margin-top: 54upx;
}
.Idcard text{
	color: #9DA6A0;
	font-size: 24upx;
	text-align: center;
	display: block;
	margin-top: 20upx;
}
.TeacherBox{
	height: 190upx;
	background: #F0F5F2;
	margin-top: 30upx;
	border-radius: 8upx;
}
.TeacherBox image{
	width: 40upx;
	height: 40upx;
	margin: 0 auto;
	display: block;
	padding-top: 54upx;
}
.TeacherBox text{
	color: #9DA6A0;
	font-size: 24upx;
	text-align: center;
	display: block;
	margin-top: 20upx;
}
.SureBtn{
	height: 88upx;
	background: #24B353;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	border-radius: 100upx;
	margin-top: 60upx;
}
.Notice{
	color: #9DA6A0;
	font-size: 24upx;
	text-align: center;
	display: block;
	margin-top: 40upx;
}
</style>
