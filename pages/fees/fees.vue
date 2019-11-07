<template>
	<view class="content">
		<view class="FeesTit">
			服务须知
		</view>
		<view class="FeesCon">
			<view class="FeesConList">
				1、本站从五十万多教员库择优为您服务。
			</view>
			<view class="FeesConList">
				 2、在教员前去执教前，家教114网会对教员进行实 际严格认证。 
			</view>
			<view class="FeesConList">
				3、若家长/学员对派遣的教员不满意可暂时不缴纳会 员费，直到调换到满意的教员为止。
			</view>
			<view class="FeesConList">
				 4、您需要支付的费用由两部分组成：
				 <text>A).支付给本站的“会员服务费”。</text>
				 <text>B).支付给教员的授课报酬。</text>
			</view>
			<view class="FeesConList">
				5、您的会员服务费由初次上门的教员代收。
			</view>
			<view class="FeesConList">
				6、如有任何疑问：请直接单击：
				<view class="CallPhone" @tap="CallPhone">
					拨打热线
				</view>
			</view>
		</view>
		<view class="FeesTit" style="margin-top: 90upx;">
			A.会员服务费:
		</view>
		<view class="FeesMess">
			一次支付会员服务费100元，终生免费聘用和更换在职教师，在校大学生或明星教员执教。       
		</view>
		<view class="FeesTit"  style="margin-top: 60upx;">
			B.教员课时费参考标准:
		</view>
		<view class="FeesMess">
			特别提示：本价格为付给教员的参考价格，具体价格家教114网的工作人员与学员（家长）协商，根据路程、课程难易、对教员的水平要求、是否全英文教授、是否给车贴等因素而定。此价格默认的不付给教员车贴。
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
			CallPhone:function(){
				uni.makePhoneCall({
				    phoneNumber: '114' //仅为示例
				});
			}
		}
	}
</script>

<style>
.content{
	padding: 30upx;
	padding-bottom: 80upx;
}
.FeesTit{
	color: #303331;
	font-size: 28upx;
	font-weight: 700;
}
.FeesConList{
	color: #9CA69F;
	font-size: 28upx;
	/* height: 30px; */
	line-height: 60upx;
}
.FeesConList text{
	display: block;
	color: #313331;
	text-indent: 2em;
}
.CallPhone{
	background: #24B353;
	color: #fff;
	float: right;
	padding: 2upx 20upx;
	border-radius: 8upx;
	margin-right: 90upx;
}
.FeesMess{
	color: #9CA69F;
	font-size: 28upx;
	line-height: 60upx;
}
</style>
