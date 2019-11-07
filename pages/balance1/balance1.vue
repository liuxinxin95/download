<template>
	<view class="content">
		<view class="BalanceTi">
			<input type="number" value="" placeholder="输入提现金额" @input="CheckBalance"/>
			<view class="MayTi">
				可提现金额 <text>0</text> 元
			</view>
			<view class="SureTi">确认</view>
		</view>
		<view class="NoticeBox">
			<view class="NoticeList">
				<view class="NoticeListTit">注意事项:</view>
				<view class="NoticeListCon">
					1.每天可提现一次
				</view>
				<view class="NoticeListCon">
					2.每次不得超过200元
				</view>
				<view class="NoticeListCon">
					 3.每次提现将收取0.1%的手续费。
				</view>
			</view>
			<view class="NoticeList">
				<view class="NoticeListTit">在线客服:</view>
				<view class="NoticeListCon">
					1.客服微信：sss56j
				</view>
				<view class="NoticeListCon">
					2.客服电话：400-569-8954
				</view>
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
			CheckBalance:function(){
				
			}
		}
	}
</script>

<style>
.BalanceTi{
	height: 400upx;
	    /* background: pink; */
}
.BalanceTi input{
	height: 160upx;
	color: #9DA6A0;
	font-size: 36upx;
	padding-left: 60upx;
	background-color: transparent;
}
.MayTi{
	color: #FF4D3D;
	font-size: 24upx;
	text-align: center;
}
.SureTi{
	width: 364upx;
	height: 88upx;
	background: #24B353;
	color: #fff;
	border-radius: 100upx;
	text-align: center;
	line-height: 88upx;
	font-size: 24upx;
	margin: 0 auto;
	margin-top: 58upx;
}
.NoticeBox{
	height: 440upx;
	width: 610upx;
	margin: 0 auto;
	margin-top: 40upx;
	box-shadow: 4upx 4upx 4upx #eee;
	padding: 40upx;
}
.NoticeListTit{
	color: #333;
	font-size: 28upx;
	height: 80upx;
	line-height: 80upx;
}
.NoticeListCon{
	font-size: 24upx;
	padding: 0 30upx;
	height: 60upx;
	line-height: 60upx;
	color: #999;
}
</style>
