<template>
	<view class="content">
		<view class="TeacherDetail" :class="identityid=='teacher'?'activeshow':'activehide'">   <!-- 老师详情 -->
			<view class="DetailBack">
				<image src="../../static/teacherback.png" mode="" class="BackImg"></image>
				<view class="CollectionChange" @tap="CollectionChange">
					<image src="../../static/collection.png" mode="" :class="aa==true?'active':'hide'"></image>				
					<image src="../../static/collectionactive.png" mode="" :class="aa==false?'active':'hide'"></image>
				</view>
				<picker :value="report" :range="reports" style="float: right;" @tap="ReportBtn">
					<image src="../../static/report.png" mode="" class="ReportImg" ></image>
				</picker>
			</view>
			
			<view class="DetailMess">
				<view class="DetailName">
					<text>张老师</text>
					<text class="iconfont"></text>
					<text>100m</text>
				</view>
				<view class="DetailCon">
					<text>初中</text>
					<text>数学</text>
					<text>华东石油大学</text>
				</view>
				<view class="DetailTag">
					<text>专职老师</text>
					<text>已认证</text>
					<text>十年教龄</text>
				</view>
			</view>
			
			<view class="BasicMess">
				<view class="BasicMessTit">
					基本信息
				</view>
				<view class="BasicMessList">
					性别：<text>男</text>
				</view>
				<view class="BasicMessList">
					最高学历：<text>本科</text>
				</view>
				<view class="BasicMessList">
					毕业院校：<text>华东石油大学</text>
				</view>
				<view class="BasicMessList">
					所学专业：<text>数学系</text>
				</view>
				<view class="BasicMessList">
					任教学校：<text>上海市第四中学</text>
				</view>
				<view class="BasicMessList">
					教龄：<text>10年</text>
				</view>
				<view class="BasicMessList">
					授课地址：<text>上海-浦东新区</text>
				</view>
				<view class="BasicMessList">
					授课方式：<text>学生上门</text>
				</view>
				<view class="BasicMessList">
					授课时间：<text>工作日晚上</text>
				</view>
				<view class="BasicMessList">
					酬金：<text>60元/小时</text>
				</view>
			</view>
			
			<view class="Subject">
				<view class="SubjectTit">
					授课科目
				</view>
				<view class="SubjectList">
					<text>初中数学</text>
					<text>初中数学</text>
					<text>初中数学</text>
					<text>初中数学</text>
				</view>
			</view>
			
			<view class="Characteristic">
				<view class="CharacteristicTit">
					教学特点
				</view>
				<view class="CharacteristicCon">
					幽默风趣，善于结合学生感兴趣的内容来引导学生来掌握相关方法技巧，是学生很容易接受且信赖的朋友。
				</view>
			</view>
			
			<view class="GetMoney">
				<view class="GetMoneyTit">
					收费标准
				</view>
				<view class="GetMoneyCon" @tap="Frees">
					家教老师薪水参考标准
				</view>
			</view>
			
			<view class="DetailFix">
				<view class="ShareBtn" @tap="ShareBtnteacher">
					<image src="../../static/share.png" mode=""></image>
					<text>分享</text>
				</view>
				<view class="TelBtn" @tap="TelBtnteacher">
					<image src="../../static/tel.png" mode=""></image>
					<text>电话</text>
				</view>
				<view class="Appointment" @tap="MakeAppointment">
					预约老师
				</view>
			</view>
		</view>
		
		<view class="StudentDetail" :class="identityid=='student'?'activeshow':'activehide'">   <!-- 学生详情 -->
			<view class="DetailBack">
				<image src="../../static/studentback.png" mode="" class="BackImg"></image>
				<view class="CollectionChange" @tap="CollectionChange">
					<image src="../../static/collection.png" mode="" :class="aa==true?'active':'hide'"></image>				
					<image src="../../static/collectionactive.png" mode="" :class="aa==false?'active':'hide'"></image>
				</view>
				<picker :value="report" :range="reports" style="float: right;" @tap="ReportBtn">
					<image src="../../static/report.png" mode="" class="ReportImg" ></image>
				</picker>
			</view>
			<view class="DetailMess">
				<view class="DetailName">
					<text>李树同学</text>
					<text class="iconfont"></text>
					<text>100m</text>
				</view>
				<view class="DetailCons">
					<text>想找一位可以辅导初中数学的老师，最好还可以有其它技能供我学习</text>
				</view>
				<view class="DetailTag">
					<text>专职老师</text>
					<text>已认证</text>
					<text>十年教龄</text>
				</view>
			</view>
			<view class="BasicMess">
				<view class="BasicMessTit">
					基本信息
				</view>
				<view class="BasicMessList">
					年级：<text>初三</text>
				</view>
				<view class="BasicMessList">
					性别：<text>男</text>
				</view>
			</view>
			
			<view class="BasicMess" style="margin-top: 15px;">
				<view class="BasicMessTit">
					需要老师
				</view>
				<view class="BasicMessList">
					授课方式：<text>学生上门</text>
				</view>
				<view class="BasicMessList">
					授课地址：<text>上海-浦东新区</text>
				</view>
				<view class="BasicMessList">
					授课时长：<text>3课时</text>
				</view>
				<view class="BasicMessList">
					老师性别：<text>男女均可</text>
				</view>
			</view>
			
			<view class="Subject">
				<view class="SubjectTit">
					需授课科目
				</view>
				<view class="SubjectList">
					<text>初中数学</text>
					<text>初中数学</text>
					<text>初中数学</text>
					<text>初中数学</text>
				</view>
			</view>
			
			<view class="Characteristic" style="height: 55px;">
				<view class="CharacteristicTit">
					愿支付酬金
				</view>
				<view class="CharacteristicCon">
					50元/小时-80元/小时
				</view>
			</view>
			
			<view class="Characteristic">
				<view class="CharacteristicTit">
					其他需求
				</view>
				<view class="CharacteristicCon">
					希望老师也可以有相关科目的辅导经验，211、985在校大学生也可以！
				</view>
			</view>
			
			<view class="DetailFix" style="padding: 0;">
				<view class="ShareBtn" style="width: 50%;margin: 0;">
					<image src="../../static/share.png" mode=""></image>
					<button open-type="share">分享</button>
				</view>
				<view class="TelBtn" style="width: 50%;margin: 0;" @tap="StudentCall">
					<image src="../../static/tel.png" mode=""></image>
					<text>电话</text>
				</view>
				<uni-popup ref="popup" type="center">
					<view class="CallMess">
						<text>需支付信息查看费，方可查看平台学生电话。</text>
					</view>
					<view class="Callbtntwo">
						<view @tap="closePopup" class="closebtn">取消</view>
						<view @tap="payPopup" class="closebtn" style="color: #24B353;">去支付</view>
					</view>
				</uni-popup>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				identityid:'',
				aa:true,
				reports:['不实信息','违法信息','其他'],
				report:''
			}
		},
		onLoad(options) {
			console.log(options)
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
			if(that.identityid=="student"){
				uni.setNavigationBarTitle({
				    title: '学生详情'
				});
			}else{
				uni.setNavigationBarTitle({
				    title: '名师详情'
				});
			}
		},
		onShareAppMessage(res){    //微信开发者工具
			console.log(res)
			if (res.from === 'button') {// 来自页面内分享按钮
			   console.log(res.target)
			}
			return {
			  // title: '自定义分享标题',
			  // path: '/pages/test/test?id=123'
			}
		},
		methods: {
			Frees:function(){
				uni.navigateTo({
					url:"../fees/fees"
				})
			},
			CollectionChange:function(){   //收藏
				if(this.aa==true){
					this.aa=false;
					uni.showToast({
						title:"收藏成功"
					})
				}else{
					this.aa=true;
					uni.showToast({
						title:"取消收藏"
					})
				}
				
			},
			ReportBtn: function(e) {    //举报
				console.log(e)
				if(e.target.value==0){
					this.sexs ="男"
				}else if(e.target.value==1){
					this.sexs="女"
				}
			},
			MakeAppointment:function(){   //预约老师
				uni.navigateTo({
					url:"../onlineappointment/onlineappointment"
				})
			},
			StudentCall:function(){
				this.$refs.popup.open()
			},
			closePopup(){
				this.$refs.popup.close()
			},
			payPopup(){   //支付接口
				this.$refs.popup.close()
			},
			ShareBtnteacher(){    
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			ShareBtnstudent(){
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			TelBtnteacher:function(){
				uni.makePhoneCall({
					phoneNumber:"110"
				})
			}
			
		},
		components: {uniPopup,wPicker},
	}
</script>

<style>
.active{
	display: block;
}
.hide{
	display: none;
}
.activeshow{
	display: block;
}
.activehide{
	display: none;
}
.content{
	padding-bottom: 120upx;
}
.DetailBack{
	width: 100%;
	height: 400upx;
	position: relative;
}
.BackImg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 400upx;
	background-size: 100%;
}
.CollectionChange{
	position: absolute;
	width: 60upx;
	height: 60upx;
	right: 108upx;
	top: 30upx;
}
.CollectionChange image{
	position: absolute;
	width: 60upx;
	height: 60upx;
}
.ReportImg{
	position: absolute;
	width: 60upx;
	height: 60upx;
	right: 30upx;
	top: 30upx;
}
.DetailMess{
	height: 160upx;
	    /* background: pink; */
	padding: 30upx;
}
.DetailName{
	color: #303331;
	font-size: 28upx;
	font-weight: 700;
	height: 30px;
	    line-height: 30px;
}
.DetailName text:nth-child(1){
	float: left;
}
.DetailName text:nth-child(2){
	float: right;
}
.DetailName text:nth-child(3){
	float: right;
	    color: #24B353;
}
.DetailCon{
	color: #9CA69F;
	font-size: 24upx;
	height: 60upx;
	line-height: 60upx;
}
.DetailCons{
	color: #9CA69F;
	font-size: 24upx;
	height: 60upx;
	line-height: 60upx;
}
.DetailCons text{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: block;
}
.DetailCon text:nth-child(1){
	border-right: 2upx solid #9CA69F;
	padding-right:10upx;
}
.DetailCon text:nth-child(2){
	border-right: 2upx solid #9CA69F;
	padding:0 10upx;
}
.DetailCon text:nth-child(3){
	padding-left: 10upx;
}
.DetailTag{
	font-size: 24upx;
	color: #fff;
}
.DetailTag text:nth-child(1){
	background: #FFB726;
	padding: 6upx 10upx;
	border-radius: 8upx;
	margin-right: 10upx;
}
.DetailTag text:nth-child(2){
	background: #FF6633;
	padding: 6upx 10upx;
	border-radius: 8upx;
	margin-right: 10upx;
}
.DetailTag text:nth-child(3){
	background: #FF4D3D;
	padding: 6upx 10upx;
	border-radius: 8upx;
}
.BasicMess{
	padding: 30upx;
	box-shadow: 4upx 4upx 4upx #eee;
	width: 630upx;
	margin: 0 auto;
}
.BasicMessList{
	height: 80upx;
	line-height: 80upx;
	color: #9DA6A0;
	font-size: 24upx;
}
.BasicMessTit{
	color: #303331;
	border-left: 4upx solid #24B353;
	font-size: 28upx;
	padding-left: 10upx;
	font-weight: 700;
}
.BasicMessList text{
	color: #303331;
}


/* 授课科目 */
.Subject{
	width: 630upx;
	padding: 30upx;
	height: 136upx;
	/* height: auto; */
	box-shadow: 4upx 4upx 4upx #eee;
	margin: 0 auto;
	margin-top: 40upx;
}
.SubjectTit{
	color: #303331;
	border-left: 4upx solid #24B353;
	font-size: 28upx;
	padding-left: 10upx;
	font-weight: 700;
}
.SubjectList{
	margin-top: 20upx;
}
.SubjectList text{
	background: #F0F5F2;
	font-size: 24upx;
	color: #9DA6A0;
	padding: 20upx;
	border-radius: 8upx;
	margin-right: 12upx;
	margin-bottom: 20upx;
	display: block;
	float: left;
}
.Characteristic{
	width: 630upx;
	padding: 30upx;
	height: 136upx;
	/* height: auto; */
	box-shadow: 4upx 4upx 4upx #eee;
	margin: 0 auto;
	margin-top: 40upx;
}
.CharacteristicTit{
	color: #303331;
	border-left: 4upx solid #24B353;
	font-size: 28upx;
	padding-left: 10upx;
	font-weight: 700;
}


.CharacteristicCon{
	color: #303331;
	font-size: 24upx;
	margin-top: 20upx;
	line-height: 40upx;
}

.GetMoney{
	width: 630upx;
	padding: 30upx;
	height: 96upx;
	/* height: auto; */
	-webkit-box-shadow: 4upx 4upx 4upx #eee;
	box-shadow: 4upx 4upx 4upx #eee;
	margin: 0 auto;
	margin-top: 40upx;
}
.GetMoneyTit{
	color: #303331;
	border-left: 4upx solid #24B353;
	font-size: 28upx;
	padding-left: 10upx;
	font-weight: 700;
}
.GetMoneyCon{
	color: #24B353;
	font-size: 24upx;
	text-decoration: underline;
	margin-top: 20upx;
}

.DetailFix{
	width: 100%;
	height: 98upx;
	position: fixed;
	bottom: 0;
	background: #fff;
}
.ShareBtn{
	width: 15%;
	float: left;
	/* background: pink; */
	margin-left: 30upx;
}
.ShareBtn image{
	width: 38upx;
	height: 38upx;
	display: block;
	margin: 0 auto;
	margin-top: 10upx;
}
.ShareBtn text{
	color: #303331;
	font-size: 24upx;
	text-align: center;
	display: block;
}
.ShareBtn button{
	color: #303331;
	font-size: 24upx;
	text-align: center;
	display: block;
	border: none;
	background: #fff;
	outline: none;
	border-color: #fff;
	line-height: 40upx;
}
.ShareBtn button::after{ border: none;} 
.TelBtn{
	width: 15%;
	float: left;
	/* background: pink; */
	margin-left: 30upx;
}
.TelBtn image{
	width: 38upx;
	height: 38upx;
	display: block;
	margin: 0 auto;
	margin-top: 10upx;
}
.TelBtn text{
	color: #303331;
	font-size: 24upx;
	text-align: center;
	display: block;
}
.Appointment{
	width: 60%;
	float: right;
	background: #24B353;
	color: #fff;
	height: 98upx;
	text-align: center;
	font-size: 28upx;
	line-height: 98upx;
}

/* 弹出框 */
.CallMess{
	color: #303331;
	font-size: 28upx;
	width: 400upx;
	padding: 40upx;
	font-weight: 700;
}
.closebtn{
	width: 50%;
	float: left;
	text-align: center;
	font-size: 28upx;
	font-weight: 700;
	border-top: 2upx solid #eee;
	height: 52upx;
	line-height: 88upx;
}
</style>
