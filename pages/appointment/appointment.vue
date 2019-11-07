<template>
	<view class="content">
		<view class="AppointmentListBox" v-for="(item,index) in AppointmentListTeacher" :key="index" :class="identityid=='teacher'?'activeshow':'activehide'">
			<view class="AppointmentTime">{{item.Time}}</view>
			<view class="AppointmentList" v-for="(list,i) in item.List" :key="i">
				<view class="AppointmentListLeft">
					<text>{{list.time}}</text>
					<text>打电话</text>
				</view>
				<view class="AppointmentListMid">
					<text class="AppointmentListName">{{list.name}}</text>
					<view class="AppointmentListCon">
						<text>{{list.tag1}}</text>
						<text>{{list.tag2}}</text>
						<text>{{list.tag3}}</text>
					</view>
				</view>
				<view class="AppointmentListRight iconfont" @tap="AppointmentDetail">&#xe6ab;</view>
			</view>
		</view>
		
		
		<view class="AppointmentListBox" v-for="(item,index) in AppointmentListStudent" :key="'info2-'+index" :class="identityid=='student'?'activeshow':'activehide'">
			<view class="AppointmentTime">{{item.Time}}</view>
			<view class="AppointmentList" v-for="(list,i) in item.List" :key="i">
				<view class="AppointmentListLeft">
					<text>{{list.time}}</text>
					<text>打电话</text>
				</view>
				<view class="AppointmentListMid">
					<text class="AppointmentListName">{{list.name}}</text>
					<view class="AppointmentListCons">
						<text>{{list.con}}</text>
					</view>
				</view>
				<view class="AppointmentListRight iconfont" @tap="AppointmentDetail">&#xe6ab;</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				AppointmentListTeacher:[
					{Time:"2016年10月15日",
					 List:[
						{time:'14:22',name:'张老师',tag1:"初中",tag2:"数学",tag3:"华东石油大学"},
						{time:'14:22',name:'李老师',tag1:"初中",tag2:"语文",tag3:"华东石油大学"},
						{time:'14:22',name:'张老师',tag1:"初中",tag2:"英语",tag3:"华东石油大学"},
					 ],
					},
					{Time:"2016年10月16日",
					 List:[
						{time:'14:22',name:'张老师',tag1:"初中",tag2:"数学",tag3:"华东石油大学"},
						{time:'14:22',name:'李老师',tag1:"初中",tag2:"语文",tag3:"华东石油大学"},
						{time:'14:22',name:'张老师',tag1:"初中",tag2:"英语",tag3:"华东石油大学"},
					 ],
					}
				],
				AppointmentListStudent:[
					{Time:"2016年10月15日",
					 List:[
						{time:'14:22',name:'李同学',con:'希望找一位辅导我英语的老师'},
						{time:'14:22',name:'张同学',con:'希望找一位辅导我语文的老师'},
						{time:'14:22',name:'刘同学',con:'希望找一位辅导我数学的老师'},
					 ],
					},
					{Time:"2016年10月16日",
					 List:[
						{time:'14:22',name:'赵彤',con:'希望找一位辅导我物理的老师'},
						{time:'14:22',name:'李芳',con:'希望找一位辅导我化学的老师'},
						{time:'14:22',name:'华华',con:'希望找一位辅导我英语的老师'},
					 ],
					}
				],
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
			Call:function(){   //打电话
				uni.makePhoneCall({
				    phoneNumber: '114' //仅为示例
				});
			},
			AppointmentDetail:function(){    //预约详情
				uni.navigateTo({
					url:"../appointmentdetail/appointmentdetail"
				})
			}
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
	.content{
		padding: 30upx;
	}
	.AppointmentListBox{
		height: auto;
		margin-bottom: 60upx;
		    /* background: pink; */
	}
	.AppointmentTime{
		color: #9CA69F;
		font-size: 24upx;
	}
	.AppointmentList{
		padding: 30upx;
		background: #24B353;
		width: 630upx;
		height: 96upx;
		color: #fff;
		border-radius: 20upx;
		margin-top: 20upx;
		margin-bottom: 30upx;
	}
	.AppointmentListLeft{
		width: 20%;
		float: left;
		margin-right: 50upx;
	}
	.AppointmentListLeft text:nth-child(1){
		font-size: 36upx;
		font-weight: 700;
		display: block;
	}
	.AppointmentListLeft text:nth-child(2){
		font-size: 24upx;
		padding: 6upx 14upx;
		background: #FFB726;
		border-radius: 100upx;
		height: 30upx;
		line-height: 30upx;
		display: block;
		text-align: center;
		margin-top: 6upx;
	}
	.AppointmentListMid{
		width: 60%;
		float: left;
	}
	.AppointmentListName{
		font-size: 30upx;
		height: 40upx;
		line-height: 40upx;
		display: block;
		font-weight: 700;
	}
	.AppointmentListCon{
		font-size: 24upx;
		height: 70upx;
		line-height: 70upx;
	}
	.AppointmentListCons{
		font-size: 24upx;
		height: 70upx;
		line-height: 70upx;
	}
	.AppointmentListCon text:nth-child(1){
		border-right: 2upx solid #fff;
		padding-right: 10upx;
	}
	.AppointmentListCon text:nth-child(2){
		padding: 0 10upx;
		border-right: 2upx solid #fff
	}
	.AppointmentListCon text:nth-child(3){
		padding-left: 10upx;
	}
	.AppointmentListRight{
		width: 10%;
		float: right;
		height: 96upx;
		line-height: 96upx;
		display: block;
		text-align: right;
	}
</style>
