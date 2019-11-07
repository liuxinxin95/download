<template>
	<view class="content">
		<view class="IntegralBox">
			<text>28609</text>
			<text>积分余额（元）</text>
		</view>
		<view class="IntegralListBox">
			<view class="IntegralListTit">余额收入支出</view>
			<view class="IntegralList" v-for="(item,index) in integrals" :key="index">
				<view class="IntegralListLeft">
					<text>{{item.name}}</text>
					<text>{{item.time}}</text>
				</view>
				<view class="IntegralListRight" >
					<text :class="item.type==1?'greencolor':'redcolor'">{{item.type==1?"+":"-"}}</text>
					<text :class="item.type==1?'greencolor':'redcolor'">{{item.money}}</text>
					<text :class="item.state==1?'redcolor':(item.state==2?'graycolor':'greencolor')">{{item.state == 1 ? "提现失败":(item.state == "2" ? "提现中" :(item.state == "3" ? "提现成功" :""))}}
</text>
				</view>
			</view>
		</view>
		<view class="balancebtn" @tap="BalanceClick">
			余额提现
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				integrals:[
					{name:"邀请好友",time:"2019-9-17",type:"1",state:'0',money:"50"},
					// {name:"签到",time:"2019-9-18",type:"1",money:"50"},
					// {name:"被投诉",time:"2019-9-17",type:"2",money:"10"},
					{name:"提现",time:"2019-9-17",type:"2",state:'1',money:"10"},
					{name:"提现",time:"2019-9-17",type:"2",state:'2',money:"10"},
					{name:"提现",time:"2019-9-17",type:"2",state:'3',money:"10"},
					
				]
			}
		},
		methods: {
			BalanceClick:function(){
				uni.navigateTo({
					url:'../balance1/balance1'
				})
			}
		}
	}
</script>

<style>
	
.content{
	position: relative;
}
.IntegralBox{
	position: absolute;
	top: 0;
	left: 0;
	height: 300upx;
	width: 100%;
	background-size: 100%;
	text-align: center;
	background: url(../../static/jifenback.png);
	}
	.IntegralBox text:nth-child(1){
		font-size: 80upx;
		color: #fff;
		display: block;
		margin-top: 60upx;
	}
	.IntegralBox text:nth-child(2){
		font-size: 24upx;
		color: #fff;
	}
	.IntegralListBox{
		position: absolute;
		top: 260upx;
		background: #fff;
		width: 690upx;
		left: 30upx;
		border-radius: 10upx;
		box-shadow: 4upx 4upx 4upx #EEEEEE;
	}
	.IntegralListTit{
		color: #303331;
		font-size: 26upx;
		font-weight: 700;
		border-left: 4upx solid #24B353;
		margin: 30upx 0;
		padding-left: 30upx;
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
	.graycolor{
		color: #9DA6A0;
	}
	.IntegralListRight{
		width: 30%;
		float: right;
		text-align: right;
		height: 100upx;
		font-size: 28upx;
		font-weight: 700;
		position: relative;
	}
	.IntegralListRight text:nth-child(1){
		top: 20upx;
		position: absolute;
		right: 40upx;
	}
	.IntegralListRight text:nth-child(2){
		top: 20upx;
		position: absolute;
		right: 0;
	}
	.IntegralListRight text:nth-child(3){
		font-size: 24upx;
		position: absolute;
		width: 200upx;
		right: 0;
		top: 52upx;
	}
	.balancebtn{
		width: 630upx;
		height: 88upx;
		background: #24b353;
		position: fixed;
		bottom: 40upx;
		left: 60upx;
		border-radius: 100upx;
		text-align: center;
		line-height: 88upx;
		color: #fff;
		font-size: 28upx;
	}
</style>
