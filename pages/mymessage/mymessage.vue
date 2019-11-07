<template>
	<view class="content">
		<image :src="avatar" mode="" class="avatarimg"></image>
		<view class="Information" @tap="changename">
			<text>昵称</text>
			<text style="float: right;color: #9DA6A0;">{{name}}</text>
		</view>
		<view class="Information">
			<text>性别</text>
			<picker @change="changesex" :range="sex" style="float: right;">
				<image src="../../static/arrowright.png" mode=""></image>
			</picker>
			<text>{{sexs}}</text>
		</view>
		<view class="Information">
			<text>生日</text>
			<image src="../../static/arrowright.png" mode="" @tap="changebirthday"></image>
			<w-picker
				mode="date" 
				startYear="2017" 
				endYear="2019"
				:defaultVal="[2,1,3]" 
				:current="false" 
				@confirm="onConfirm"
				:disabledAfter="true"
				ref="date" 
				themeColor="#f00"
			></w-picker>
			<text style="float: right;color: rgb(157, 166, 160);">{{birthday}}</text>
		</view>
		<view class="Information">
			<text>身份</text>
			<image src="../../static/arrowright.png" mode="" @tap="changedientity" :class="aa==true?'activeshow':'activehide'"></image>
			<picker @change="changeidentity" :range="identitys" style="float: right;" :class="aa==false?'activeshow':'activehide'">
				<image src="../../static/arrowright.png" mode=""></image>
			</picker>
			<text style="float: right;color: #9DA6A0;">{{identity}}</text>
		</view>
		<view class="Information">
			<text>手机</text>
			<image src="../../static/arrowright.png" mode="" @tap="telnum"></image>
			<text>{{phone}}</text>
		</view>
		<view class="Information">
			<text>城市</text>
			<image src="../../static/arrowright.png" mode="" @tap="selectcity"></image>
			<text>{{city}}</text>
		</view>
		<view class="Information">
			<text>详情头像</text>
			<image src="../../static/arrowright.png" mode="" @tap="selectimg"></image>
			<!-- <text>{{city}}</text> -->
		</view>
		<!-- <view class="Information">
			<text>常住地址</text>
			<image src="../../static/arrowright.png" mode="" @tap="editaddress"></image>
			<text>{{address}}</text>
		</view> -->
		<view class="unloadbtn">
			退出登录
		</view>
		
		<uni-popup ref="popup" type="center">
			<view class="showboxinfo">
				<view class="showboxmess">切换身份需联系客服进行申请！</view>
				<view class="twobtn">
					<view class="cancel" @tap="cancel">取消</view>
					<view class="call" @tap="call">去拨打</view>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				name:"博文哥儿",
				sex:['女','男'],
				sexs:'男',
				birthday:"1990-10-04",
				mode:"date",
				identitys:['老师','学生','机构'],
				identity:'学生',
				address:'添加/修改',
				city:'山西',
				phone:'18435179630',
				aa:true,
				
				session:'',
				avatar:''
			}
		},
		onLoad(option) {
			console.log("onload")
			try {
			    const session = uni.getStorageSync('session');
			    this.session=session;
			} catch (e) {
			    // error
			}
			try {
			    const identity = uni.getStorageSync('identity');
			    
			} catch (e) {
			    // error
			}
			var that=this;
			uni.request({
				url:that.$url+'famil-education/api/sysuser/getUserInfo',
				method:"GET",
				header: {
					'content-type': 'application/json',
					'Authorization':this.session
				},
				data:{},
				success(res) {
					that.name=res.data.body.userName;
					that.avatar=res.data.body.avatar;
					that.openId=res.data.body.openId;
					that.professional=res.data.body.professional;
					if(res.data.body.sex==1){
						that.sexs="男"
					}else{
						that.sexs="女"
					}
					if(res.data.body.userType==1){
						that.identity="老师"
					}else if(res.data.body.userType==2){
						that.identity="机构"
					}
					if(res.data.body.birthday==null){
						that.birthday="请选择您的生日";
					}
					if(res.data.body.phone==null){
						that.phone="请绑定您的手机号";
					}
					// avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLjkGHQyGTY0owD6HpHP9Sag2s3gAhRYiaCDIfPvhfuRq5X59Zj8TB5PSSrFfHnNTFHYtBut8ocn5w/132"
					// birthday: null
					// openId: "odHf90LP6RoJdpwlAd9TvZWKFDHI"
					// phone: null
					// professional: null
					// sex: 2
					// userName: "乐天派"
					// userType: 1
				}
			})
		},
		onShow(option) {
			// console.log(option)
			// var that=this;
			// console.log(that.$globalData.myinfo.name)
			// that.name=option.name;
			// this.address=this.$globalData.myinfo.address||this.address;
			// this.city=this.$globalData.myinfo.city||this.city;
			// this.phone=this.$globalData.myinfo.phone||this.phone;
			// this.sexs=this.$globalData.myinfo.sexs||this.sexs;
			// this.identity =this.$globalData.myinfo.identity||this.identity;
			// this.birthday=this.$globalData.myinfo.birthday||this.birthday;
		},
		methods: {
			changename:function(){     //改变昵称
				uni.navigateTo({
					url:'../name/name'
				})
			},
			changesex: function(e) {    //选择性别
				console.log(e)
				if(e.target.value==0){
					this.$globalData.myinfo.sexs ="女"
					this.sexs="女"
				}else if(e.target.value==1){
					this.$globalData.myinfo.sexs="男"
					this.sexs="男"
				}
				var that=this;
				uni.request({
					url:that.$url+'famil-education/api/sysuser/updateUserInfo',
					method:"POST",
					header: {
						'content-type': 'application/json',
						'Authorization':that.session
					},
					data:{
						sex:e.target.value
					},
					success(res) {
						console.log("修改性别成功")
					}
				})
				
			},
			changebirthday:function(){    //选择生日
				this.mode="date";
				console.log(this.$refs.result)
				this.birthday=this.$refs.result
				this.$refs["date"].show();
				var that=this;
				uni.request({
					url:that.$url+'famil-education/api/sysuser/updateUserInfo',
					method:"POST",
					header: {
						'content-type': 'application/json',
						'Authorization':that.session
					},
					data:{
						birthday:this.birthday
					},
					success(res) {
						console.log("修改生日成功")
					}
				})
				
			},
			onConfirm(val){
				console.log(val);
				this.$globalData.myinfo.birthday=val.result;
				this.birthday=val.result;
			},
			
			changeidentity:function(e){      //选择身份
				if(e.target.value==0){
					this.$globalData.myinfo.identity="老师"
					this.identity ="老师"
				}else if(e.target.value==1){
					this.$globalData.myinfo.identity="学生"
					this.identity="学生"
				}else if(e.target.value==2){
					this.$globalData.myinfo.identity="机构"
					this.identity="机构"
				}
				var that=this;
				uni.request({
					url:that.$url+'famil-education/api/sysuser/updateUserInfo',
					method:"POST",
					header: {
						'content-type': 'application/json',
						'Authorization':that.session
					},
					data:{
						identity:e.target.value
					},
					success(res) {
						console.log("修改身份成功")
					}
				})
			},
			
			selectcity:function(){     //选择城市
				uni.navigateTo({
					url:'../city/city'
				})
			},
			
			telnum:function(){      //修改手机号
				uni.navigateTo({
					url:'../telnum/telnum'
				})
			},
			// editaddress:function(){   //详细地址
			// 	uni.navigateTo({
			// 		url:'../address/address'
					
			// 	})
			// },
			selectimg:function(){
				var that=this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						console.log(typeof(JSON.stringify(res.tempFilePaths)))
						var aa=JSON.stringify(res.tempFilePaths)
						var bb=aa.substring(2,aa.length-2)
						console.log(aa.substring(2,aa.length-2))
						uni.request({
							url:that.$url+'famil-education/api/sysuser/updateUserInfo',
							method:"POST",
							header: {
								'content-type': 'application/json',
								'Authorization':that.session
							},
							data:{
								avatar:bb
							},
							success(res) {
								console.log("修改头像成功")
								that.avatar=res.tempFilePaths;
							}
						})
				    }
				});
			},
			changedientity:function(){
				this.$refs.popup.open();
			},
			cancel:function(){
				this.$refs.popup.close();
			},
			call:function(){
				uni.makePhoneCall({
					phoneNumber:"114"
				})
			}
		},
		components: {wPicker,uniPopup}
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
.avatarimg{
	width: 120upx;
	height: 120upx;
	margin: 0 auto;
	display: block;
	margin-top: 60upx;
	margin-bottom: 60upx;
}
.Information{
	height: 100upx;
	/* background: pink; */
	line-height: 100upx;
	font-size: 28upx;
}
.Information text:nth-child(1){
	color: #303331;
	font-size: 28upx;
	font-weight: 700;
	float: left;
}
.Information text:nth-child(3){
	color: #9DA6A0;
	float: right;
}
.Information image{
	width: 14upx;
	height: 24upx;
	float: right;
	margin-top: 36upx;
	margin-left: 20upx;
}
.unloadbtn{
	background: #24B353;
	width: 690upx;
	height: 88upx;
	border-radius: 44upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	font-size: 28upx;
	margin-top: 60upx;
}


/* 隐藏盒子 */
.showboxinfo{
	width: 250px;
	height: 129px;
}
.showboxmess{
	height: 80px;
	line-height: 50px;
	text-align: center;
	color: #303331;
	font-size: 14px;
}
.twobtn{
	height: 50px;
	line-height: 50px;
	display: flex;
	justify-content: space-around;
	font-size: 14px;
	border-top: 1px solid #eee;
}
.call{
	color:#24B353
}
</style>
