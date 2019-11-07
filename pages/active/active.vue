<template>
	<view class="content">
		<view class="ActiveTit">
			热门活动
		</view>
		<view class="ActiveCon" v-for="(item,index) in ActiveList" :key="index">
			<image :src="item.imageurl" mode=""></image>
			<view class="ActiveMess">
				{{item.mess}}
			</view>
			<view class="ActiveOther">
				<view class="ActiveTime">
					活动报名： <text>{{item.time}}</text>
				</view>
				<view class="ActiveAdd">
					<text class="iconfont">&#xe611;</text>
					<text>{{item.addr}}</text>
				</view>
			</view>
			<view class="ActiveType" :class="item.type==1?'yellowcolor':(item.type==2?'greencolor':'orangecolor')">
				{{item.type==1?'未开始':(item.type==2?'开始中':'已结束')}}
			</view>
		</view>
		<view class="AddBtn" @tap="AddBtn">
			<image src="../../static/addbtn.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ActiveList:[
					{imageurl:'../../static/activebanner.png',mess:'暑假想补英语，充值1000再送1000元课程hdhhdjsia',time:'2019年8月12日-8月20日',addr:'上海',type:'1'},
					{imageurl:'../../static/activebanner.png',mess:'暑假想补英语，充值1000再送1000元课程hdhhdjsia',time:'2019年9月12日-8月20日',addr:'上海',type:'2'},
					{imageurl:'../../static/activebanner.png',mess:'暑假想补英语，充值1000再送1000元课程hdhhdjsia',time:'2019年10月12日-8月20日',addr:'上海',type:'3'},
				]
			}
		},
		methods: {
			AddBtn:function(){
				
			}
		}
	}
</script>

<style>
	.content{
		padding: 30upx;
		position: relative;
	}
	.ActiveTit{
		color: #303331;
		font-size: 38upx;
		font-weight: 700;
		height: 100upx;
		line-height: 100upx;
	}
	.yellowcolor{
		background: #ffb726;
	}
	.greencolor{
		background: #24B353;
	}
	.orangecolor{
		background: #FF6633;
	}
	.ActiveCon{
		height: 476upx;
		box-shadow: 4upx 4upx 4upx #eee;
		margin-bottom: 40upx;
		overflow: hidden;
		position: relative;
	}
	.ActiveCon image{
		width: 100%;
		height: 328upx;
		background-size: 100%;
		border-radius: 20upx;
	}
	.ActiveMess{
		color: #303331;
		font-size: 32upx;
		font-weight: 700;
		margin-top: 20upx;
		padding: 0 20upx;
		text-overflow: ellipsis;
		height: 40upx;
		overflow: hidden;
		white-space: nowrap;
	}
	.ActiveOther{
		font-size: 26upx;
		padding: 0 20upx;
		margin-top: 20upx;
	}
	.ActiveTime{
		color: #666666;
		width: 80%;
		float: left;
	}
	.ActiveAdd{
		float: right;
		color: #303331;
	}
	.ActiveType{
		position: absolute;
		width: 140upx;
		height: 40upx;
		right: -20upx;
		top: 30%;
		border-radius: 100upx;
		font-size: 28upx;
		text-align: center;
		color: #fff;
	}
	.AddBtn{
		width: 88upx;
		height: 88upx;
		position: fixed;
		right: 50upx;
		bottom: 200upx;
	}
	.AddBtn image{
		width: 88upx;
		height: 88upx;
	}
</style>
