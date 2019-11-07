<template>
	<view class="content">
		<view class="AppointmentDetailBox" :class="identityid=='teacher'?'activeshow':'activehide'">
			<image src="../../static/appointmenttop.png" mode="" class="AppointmentDetailBoxTop"></image>
			<view class="AppointmentDetail">
				<view class="AppointmentDetailTop">
					<image src="../../static/teacher.jpeg" mode=""></image>
					<view class="AppointmentDetailMess">
						<view class="AppointmentName">张老师</view>
						<view class="AppointmentCon">
							<text>初中</text>
							<text>数学</text>
							<text>华东石油大学</text>
						</view>
						<view class="AppointmentMoney">
							<text>60</text>元/小时
						</view>
					</view>
				</view>
				<view class="AppointmentList">
					<text>教龄：</text>
					<text>10年</text>
				</view>
				<view class="AppointmentList">
					<text>授课地址：</text>
					<text>上海-浦东新区</text>
				</view>
				<view class="AppointmentList">
					<text>授课科目：</text>
					<text>初中数学</text>
				</view>
				<view class="AppointmentList">
					<text>毕业院校：</text>
					<text>华东石油大学</text>
				</view>
				<view class="AppointmentList">
					<text>任教学校：</text>
					<text>上海市第四中学</text>
				</view>
				<view class="AppointmentList">
					<text>性别：</text>
					<text>男</text>
				</view>
				<view class="AppointmentList">
					<text>老师电话：</text>
					<text>18435179662</text>
				</view>
				<view class="AppointmentList">
					<text>预约编号：</text>
					<text>T20180816302312</text>
				</view>
				<view class="AppointmentList">
					<text>订单时间：</text>
					<text>2019-10-11  12：00：00</text>
				</view>
				<view class="Line"></view>
				<view class="CancelAppointment">取消预约</view>
			</view>
		</view>
		
		<view class="AppointmentDetailBox" :class="identityid=='student'?'activeshow':'activehide'">
			<image src="../../static/appointmenttop.png" mode="" class="AppointmentDetailBoxTop"></image>
			<view class="AppointmentDetail">
				<view class="AppointmentDetailTop">
					<image src="../../static/student.jpg" mode=""></image>
					<view class="AppointmentDetailMess">
						<view class="AppointmentName">李帅同学</view>
						<view class="AppointmentCons">
							<text>想找一位可以辅导初中数学的老师</text>
						</view>
						<view class="AppointmentMoney">
							<text>面议/电话沟通</text>
						</view>
					</view>
				</view>
				<view class="AppointmentList">
					<text>所在区域：</text>
					<text>湖北省-武汉市-江夏区</text>
				</view>
				<view class="AppointmentList">
					<text>授课地区描述：</text>
					<text>百步亭花园世博园小区</text>
				</view>
				<view class="AppointmentList">
					<text>授课科目：</text>
					<text>初中数学</text>
				</view>
				<view class="AppointmentList">
					<text>上课时间：</text>
					<text>周末辅导</text>
				</view>
				<view class="AppointmentList">
					<text>学员情况：</text>
					<text>在数学方面比较落后，希望通过辅导有大作用</text>
				</view>
				<view class="AppointmentList">
					<text>对教员要求：</text>
					<text>希望老师幽默趣味，耐心准时富有爱心，敬业，友善</text>
				</view>
				<view class="AppointmentList">
					<text>学生电话：</text>
					<text>18435179662</text>
				</view>
				<view class="AppointmentList">
					<text>预约编号：</text>
					<text>T20180816302312</text>
				</view>
				<view class="AppointmentList">
					<text>订单时间：</text>
					<text>2019-10-11  12：00：00</text>
				</view>
				<view class="Line"></view>
				<view class="CancelAppointment">确认预约</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				identityid:''
			}
		},
		onLoad() {
			var that=this;    //转换指针
			uni.getStorage({
				key: 'identityid',
				success: function (res) {
					console.log(res.data);
					that.identityid=res.data;
					console.log(that.identityid);
				}
			});
			console.log(that.identityid);
		},
		methods: {
			
		}
	}
</script>

<style>
	.activeshow{
		display: block;
	}
	.activehide{
		display: none;
	}
.AppointmentDetailBox{
	position: relative;
	height:1140upx;
	width: 650upx;
	margin: 0 auto;
	box-shadow: 4upx 4upx 4upx #eee;
	margin-top: 42upx;
}
.AppointmentDetailBoxTop{
	width: 690upx;
	height: 24upx;
	position: absolute;
	top: -20upx;
	left: -20upx;
}
.AppointmentDetail{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
.AppointmentDetailTop{
	height: 160upx;
	    /* background: pink; */
	padding: 30upx;
}
.AppointmentDetailTop image{
	width: 160upx;
	height: 160upx;
	border-radius: 10upx;
	margin-right: 30upx;
	float: left;
}
.AppointmentDetailMess{
	float: left;
}
.AppointmentName{
	color: #303331;
	font-size: 30upx;
	font-weight: 700;
}
.AppointmentCon{
	color: #9CA69F;
	font-size: 28upx;
	height: 60upx;
	line-height: 60upx;
}
.AppointmentCons{
	color: #9CA69F;
	font-size: 24upx;
	height: 60upx;
	line-height: 60upx;
}
.AppointmentCon text:nth-child(1){
	border-right: 2upx solid #9CA69F;
	padding-right: 10upx;
}
.AppointmentCon text:nth-child(2){
	padding: 0 10upx;
	border-right: 2upx solid #9CA69F
}
.AppointmentCon text:nth-child(3){
	padding-left: 10upx;
}
.AppointmentMoney{
	color: #24B353;
	font-size: 26upx;
	margin-top: 20upx;
	font-weight: 700;
}
.AppointmentList{
	height: 80upx;
	line-height: 80upx;
	font-size: 30upx;
	padding: 0 30upx;
}
.AppointmentList text:nth-child(1){
	color: #9CA69F;
	float: left;
}
.AppointmentList text:nth-child(2){
	color: #303331;
	float: right;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 60%;
	text-align: right;
}
.Line{
	width: 100%;
	border: 2upx dashed #eee;
	margin-top: 40upx;
}
.CancelAppointment{
	width: 590upx;
	height: 88upx;
	background: #24B353;
	border-radius: 100upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	margin: 0 auto;
	margin-top: 44upx;
}
</style>
