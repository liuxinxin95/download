<template>
	<view class="content">
		<view class="SignBox">
			
		</view>
		<view class="SignMess">
			<view class="SignMessLeft">
				<view class="SignDay">
					已连续签到
					<text>5</text>
					<text>天</text>
				</view>
				<view class="SignOther">
					再连续签到 2天 获得300积分
				</view>
			</view>
			<view class="SignIn">
				签到
			</view>
		</view>
		<view class="IntegralListBox">
			<view class="IntegralListTit">积分记录</view>
			<view class="IntegralList" v-for="(item,index) in integrals" :key="index">
				<view class="IntegralListLeft">
					<text>{{item.name}}</text>
					<text>{{item.time}}</text>
				</view>
				<view class="IntegralListRight" :class="item.type==1?'greencolor':'redcolor'">
					<text>{{item.type==1?"+":"-"}}</text>
					<text>{{item.code}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				integrals:[
					{name:"签到成功",time:"2019-9-17",type:"1",code:"5"},
					{name:"签到成功",time:"2019-9-18",type:"1",code:"5"},
					{name:"签到成功",time:"2019-9-17",type:"1",code:"5"}
					
				]
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
.SignBox{
	height: 200upx;
	background: #24B353;
	border-radius: 20upx;
}

.SignMess{
	height: 70upx;
	/* background: pink; */
	padding: 40upx 0;
}
.SignMessLeft{
	width: 55%;
	float: left;
}
.SignDay{
	font-size: 30upx;
	color: #3D403E;
	font-weight: 700;
}
.SignDay text:nth-child(1){
	color: #24B353;
	margin-left: 10upx;
}
.SignDay text:nth-child(2){
	color: #24B353;
}
.SignOther{
	color: #AAB2AD;
	font-size: 24upx;
}
	.SignIn{
		width: 284upx;
	    height: 60upx;
	    float: right;
	    background: linear-gradient(to right,#24B353,#2EDF68);
	    border-radius: 100upx;
	    text-align: center;
	    color: #fff;
	    font-size: 24upx;
	    line-height: 60upx;
	}


/* 积分记录 */
	.IntegralListBox{
		background: #fff;
		width: 690upx;
		left: 30upx;
		border-radius: 10upx;
		box-shadow: 4upx 4upx 4upx #EEEEEE;
	}
	.IntegralListTit{
		color: #3D403E;
		font-size: 30upx;
		font-weight: 700;
		margin: 30upx 0;
		padding-left: 20upx;
	}
	.IntegralList{
		height: 100upx;
		/* background: pink; */
		padding: 0 20upx;
		margin-bottom: 20upx;
	}
	.IntegralListLeft{
		width: 50%;
		float: left;
	}
	.IntegralListLeft text:nth-child(1){
		color: #303331;
		font-size: 28upx;
		font-weight: 700;
		display: block;
		margin-top: 20upx;
	}
	.IntegralListLeft text:nth-child(2){
		color: #9DA6A0;
		font-size: 24upx;
		display: block;
	}
	.greencolor{
		color:#24B353;
	}
	.redcolor{
		color: #FF4D3D;
	}
	.IntegralListRight{
		width: 30%;
		float: right;
		text-align: right;
		line-height: 100upx;
		font-size: 28upx;
		font-weight: 700;
	}
</style>
