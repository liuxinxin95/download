<template>
	<view class="content">
		<view class="DemandStudent" :class="identityid=='student'?'activeshow':'activehide'">
			<view class="MesssTit">学生信息</view>
			<view class="Information">
				<text>您的姓名</text>
				<input type="text" :model="name" placeholder="姓名或昵称"  @input="changename"/>
			</view>
			<view class="Information">
				<text>手机号码</text>
				<image src="../../static/arrowright.png" mode="" @tap="telnum"></image>
				<text>{{phone}}</text>
			</view>
			<view class="Information">
				<text>选择年级</text>
				<picker @change="changegrade" :range="grades" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{grade}}</text>
			</view>
			<view class="Information">
				<text>性别</text>
				<picker @change="changesex" :range="sexs" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{sex}}</text>
			</view>
			
			<view class="MesssTit">学生需求</view>
			<view class="Information">
				<text>老师性别</text>
				<picker @change="changesext" :range="sexst" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{sext}}</text>
			</view>
			<view class="Information">
				<text>所授科目</text>
				<picker @change="changesubject" :range="subjects" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{subject}}</text>
			</view>
			<view class="Information">
				<text>授课地址</text>
				<w-picker
				    mode="region"
				    :defaultVal="['浙江省','杭州市','滨江区']"
				    :areaCode="['33','3301','330108']"
				    :hideArea="true"
				    @confirm="onConfirm" 
				    ref="region" 
				    themeColor="#f00">
				</w-picker>
				<image src="../../static/arrowright.png" mode="" @tap="changeaddr"></image>
				<text style="color: #9DA6A0;float: right;">{{addr}}</text>
				<!-- <input type="text" :model="address" placeholder="请输入详细地址"  @input="editaddress"/> -->
			</view>
			<view class="Information">
				<text>详细地址</text>
				<input type="text" :model="addrxiangxi" placeholder="请输入"  @input="addrxiangxis"/>
			</view>
			<view class="Information">
				<text>定位地址</text>
				<image src="../../static/address.png" mode="" style="width: 18px;height: 23px;float: right;"></image>
				<text style="float: right;color: #9DA6A0;">{{fixedadd}}</text>
			</view>
			<view class="Information">
				<text>所授时间</text>
				<picker @change="changetime"  :range="times" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{time}}</text>
			</view>
			<view class="Information">
				<text>授课时长（小时）</text>
				<input type="text" :model="hour" placeholder="请输入"  @input="subjecttime"/>
			</view>
			<view class="Information">
				<text>授课方式</text>
				<picker @change="changemethod" :range="methods" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{method}}</text>
			</view>
			<view class="Information">
				<text>愿支付酬金</text>
				<input type="text" :model="money" placeholder="请输入"  @input="moneyneed"/>
			</view>
			<view class="Information">
				<text>其他需求</text>
				<input type="text" :model="other" placeholder="请输入"  @input="otherneed"/>
			</view>
		</view>
		
		<view class="DemandTeacher" :class="identityid=='teacher'?'activeshow':'activehide'">
			<view class="MesssTit">老师信息</view>
			<view class="Information">
				<text>您的姓名</text>
				<input type="text" :model="namet" placeholder="姓名或昵称"  @input="changenamet"/>
			</view>
			<view class="Information">
				<text>手机号码</text>
				<image src="../../static/arrowright.png" mode="" @tap="telnumt"></image>
				<text>{{phonet}}</text>
			</view>
			<view class="Information">
				<text>性别</text>
				<picker @change="changesextt" :range="sexstt" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{sextt}}</text>
			</view>
			<view class="Information">
				<text>最高学历</text>
				<picker @change="changeeducation" :range="Educations" style="float: right;" placeholder="请选择">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{Education}}</text>
			</view>
			<view class="Information">
				<text>毕业院校</text>
				<input type="text" :model="school" placeholder="请输入"  @input="changeschool"/>
			</view>
			<view class="Information">
				<text>所选专业</text>
				<input type="text" :model="major" placeholder="请输入"  @input="changemajor"/>
			</view>
			<view class="Information">
				<text>任教学校</text>
				<input type="text" :model="school" placeholder="请输入"  @input="changeschool"/>
			</view>
			<view class="Information">
				<text>教龄</text>
				<picker @change="changeteachingage" :range="teachingages" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{teachingage}}</text>
			</view>
			<view class="Information">
				<text>授课年级</text>
				<picker @change="changegradet" :range="gradest" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{gradet}}</text>
			</view>
			<view class="Information">
				<text>授课科目</text>
				<picker @change="changesubjectt" :range="subjectst" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{subjectt}}</text>
			</view>
			<view class="Information">
				<text>授课地址</text>
				<w-picker
				    mode="region"
				    :defaultVal="['浙江省','杭州市','滨江区']"
				    :areaCode="['33','3301','330108']"
				    :hideArea="true"
				    @confirm="onConfirmt" 
				    ref="region" 
				    themeColor="#f00">
				</w-picker>
				<image src="../../static/arrowright.png" mode="" @tap="changeaddrt"></image>
				<text style="color: #9DA6A0;float: right;">{{addrt}}</text>
				<!-- <input type="text" :model="address" placeholder="请输入详细地址"  @input="editaddress"/> -->
			</view>
			<view class="Information">
				<text>详细地址</text>
				<input type="text" :model="addresst" placeholder="请输入"  @input="changeaddresst"/>
			</view>
			<view class="Information">
				<text>定位地址</text>
				<image src="../../static/address.png" mode="" style="width: 18px;height: 23px;float: right;"></image>
				<text style="float: right;color: #9DA6A0;">{{fixedadd}}</text>
			</view>
			<view class="Information">
				<text>授课方式</text>
				<picker @change="changemethodt" :range="methodst" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{methodt}}</text>
			</view>
			<view class="Information">
				<text>授课时间</text>
				<picker @change="changetimet"  :range="timest" style="float: right;">
					<image src="../../static/arrowright.png" mode=""></image>
				</picker>
				<text>{{timet}}</text>
			</view>
			<view class="Information">
				<text>酬金(元/小时)</text>
				<input type="text" :model="moneyt" placeholder="请输入"  @input="moneyneedt"/>
			</view>
			<view class="Information">
				<text>教学特点</text>
				<input type="text" :model="characteristic" placeholder="请输入"  @input="Characteristic"/>
			</view>
			
		</view>
		
		<view class="unloadbtn" @tap="ReleaseBtn">
			发布
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"
	export default {
		data() {
			return {
				identityid:'',
				name:"",
				phone:'18435179661',
				sexs:['男','女'],    //学生性别
				sex:'',
				sexst:['男','女'],   //老师性别
				sext:'',
				grades:['初一','初二','初三','高一','高二','高三'],
				grade:"",
				// birthday:"",
				mode:"date",
				classs:['老师','学生','机构'],
				class:'',
				subjects:['语文','数学','英语'],
				subject:'',
				times:['工作日辅导','周末辅导'],
				time:'',
				methods:['学生上门','老师上门','均可'],
				method:'',
				address:'添加/修改',
				city:'',
				hour:'',
				money:'',
				other:'',
				addr:'',
				addrxiangxi:'',
				addrt:'',
				
				// 老师
				namet:'',
				phonet:'18435179660',
				sexstt:['男','女'],   //老师性别
				sextt:'',
				Educations:['大专','在校大学生','本科','硕士','博士'],
				Education:'',
				school:'',
				major:'',
				teachingages:['5年以下','5年-10年','10年以上'],
				teachingage:'',
				gradest:['初一','初二','初三','高一','高二','高三'],
				gradet:"",
				subjectst:['语文','数学','英语'],
				subjectt:'',
				addresst:'',
				fixedadd:'山西省太原市',
				timest:['工作日辅导','周末辅导','均可'],
				timet:'',
				methodst:['学生上门','老师上门','均可'],
				methodt:'',
				moneyt:'',
				characteristic:''
			}
		},
		onLoad(option) {
			// console.log(option)
			var that=this;    //转换指针
			uni.getStorage({
				key: 'identityid',
				success: function (res) {
					// console.log(res.data);
					that.identityid=res.data;
					// console.log(that.identityid);
				}
			});
			// console.log(that.identityid);
		},
		onShow(option) {
			//学生
			this.name=this.$globalData.teacherinfo.name||this.name;   //姓名
			this.phone=this.$globalData.teacherinfo.phone||this.phone;   //电话
			this.sex=this.$globalData.teacherinfo.sex||this.sex;   //性别
			this.grade=this.$globalData.teacherinfo.grade||this.grade;   //年级
			this.sext=this.$globalData.teacherinfo.sext||this.sext;   //性别
			this.subject=this.$globalData.teacherinfo.subject||this.subject;   //科目
			this.address=this.$globalData.teacherinfo.address||this.address;  //地址
			this.time=this.$globalData.teacherinfo.time||this.time;   //时间
			this.hour=this.$globalData.teacherinfo.hour||this.hour;   //小时
			this.method=this.$globalData.teacherinfo.method||this.method;   //方式
			this.money=this.$globalData.teacherinfo.money||this.money;   //钱
			this.other=this.$globalData.teacherinfo.other||this.other;    //其他
			// 老师
			this.namet=this.$globalData.teacherinfo.namet||this.namet;   //姓名
			this.phonet=this.$globalData.teacherinfo.phone||this.phonet;   //电话
			this.sextt=this.$globalData.teacherinfo.sextt||this.sextt;   //性别
			this.Education=this.$globalData.teacherinfo.Education||this.Education;   //学历
			this.major=this.$globalData.teacherinfo.major||this.major;    //专业
			this.school=this.$globalData.teacherinfo.school||this.school;  //学校
			this.teachingage=this.$globalData.teacherinfo.teachingage||this.teachingage;   //教龄
			this.gradet=this.$globalData.teacherinfo.gradet||this.gradet;   //年级
			this.subjectt=this.$globalData.teacherinfo.subjectt||this.subjectt;   //科目
			this.addresst=this.$globalData.teacherinfo.addresst||this.addresst;  //地址
			this.methodt=this.$globalData.teacherinfo.methodt||this.methodt;   //方式
			this.timet=this.$globalData.teacherinfo.timet||this.timet;   //时间
			this.moneyt=this.$globalData.teacherinfo.moneyt||this.moneyt;   //钱
			this.characteristic=this.$globalData.teacherinfo.characteristic||this.characteristic;   //特点
			
			// this.identity =this.$globalData.teacherinfo.identity||this.identity;
			// this.birthday=this.$globalData.teacherinfo.birthday||this.birthday;
		},
		methods: { 
			//学生
			changename:function(e){     //改变昵称
				this.$globalData.studentinfo.name=e.detail.value;
				this.name=e.detail.value
			},
			telnum:function(){      //修改手机号
				uni.navigateTo({
					url:'../telnum/telnum'
				})
			},
			changesex: function(e) {    //选择性别
				if(e.target.value==0){
					this.$globalData.studentinfo.sex='男';
					this.sex ="男"
				}else if(e.target.value==1){
					this.$globalData.studentinfo.sex='女';
					this.sex="女"
				}
			},
			changegrade:function(e){
				if(e.target.value==0){
					this.$globalData.studentinfo.grade='初一';
					this.grade ="初一"
				}else if(e.target.value==1){
					this.$globalData.studentinfo.grade='初二';
					this.grade ="初二"
				}else if(e.target.value==2){
					this.$globalData.studentinfo.grade='初三';
					this.grade ="初三"
				}else if(e.target.value==3){
					this.$globalData.studentinfo.grade='高一';
					this.grade ="高一"
				}else if(e.target.value==4){
					this.$globalData.studentinfo.grade='高二';
					this.grade ="高二"
				}else if(e.target.value==5){
					this.$globalData.studentinfo.grade='高三';
					this.grade ="高三"
				}
			},
			changesext:function(e){    //选择老师的性别
				if(e.target.value==0){
					this.$globalData.studentinfo.sext='男';
					this.sext ="男"
				}else if(e.target.value==1){
					this.$globalData.studentinfo.sext='女';
					this.sext="女"
				}
			},
			changesubject:function(e){
				if(e.target.value==0){
					this.$globalData.studentinfo.subject='语文';
					this.subject ="语文"
				}else if(e.target.value==1){
					this.$globalData.studentinfo.subject='数学';
					this.subject ="数学"
				}else if(e.target.value==2){
					this.$globalData.studentinfo.subject='英语';
					this.subject ="英语"
				}
			},
			changeaddr:function(){      //授课地址
				this.mode="region";
				console.log(this.$refs)
				this.$refs["region"].show();
			},
			onConfirm(val){
				console.log(val);
				this.addr=val.result;
			},
			addrxiangxis:function(e){    //授课地址
				this.$globalData.studentinfo.addrxiangxi=e.detail.value;
				this.addrxiangxi=e.detail.value;
			},
			changetime:function(e){
				if(e.target.value==0){
					this.$globalData.studentinfo.time='工作日辅导';
					this.time ="工作日辅导"
				}else if(e.target.value==1){
					this.$globalData.studentinfo.time='周末辅导';
					this.time ="周末辅导"
				}
			},
			subjecttime:function(e){    //授课时长
				this.$globalData.studentinfo.hour=e.detail.value;
				this.hour=e.detail.value;
			},
			changemethod:function(e){
				if(e.target.value==0){
					this.$globalData.studentinfo.method='学生上门';
					this.method ="学生上门"
				}else if(e.target.value==1){
					this.$globalData.studentinfo.method='老师上门';
					this.method ="老师上门"
				}else if(e.target.value==2){
					this.$globalData.studentinfo.method='均可';
					this.method ="均可"
				}
			},
			moneyneed:function(e){
				this.$globalData.studentinfo.money=e.detail.value;
				this.money=e.detail.value;
			},
			otherneed:function(e){
				this.$globalData.studentinfo.other=e.detail.value;
				this.other=e.detail.value;
			},

			
			// 老师
			changenamet:function(e){
				this.$globalData.teacherinfo.namet=e.detail.value;
				this.namet=e.detail.value;
			},
			changesextt:function(e){
				if(e.target.value==0){
					this.$globalData.teacherinfo.sextt='男';
					this.sextt ="男"
				}else if(e.target.value==1){
					this.$globalData.teacherinfo.sextt='女';
					this.sextt="女"
				}
			},
			telnumt:function(){
				uni.navigateTo({
					url:'../telnum/telnum'
				})
			},
			changeeducation:function(e){    //最高学历
				if(e.target.value==0){
					this.$globalData.teacherinfo.Education='大专';
					this.Education ="大专"
				}else if(e.target.value==1){
					this.$globalData.teacherinfo.Education='在校大学生';
					this.Education="在校大学生"
				}else if(e.target.value==2){
					this.$globalData.teacherinfo.Education='本科';
					this.Education="本科"
				}else if(e.target.value==3){
					this.$globalData.teacherinfo.Education='硕士';
					this.Education="硕士"
				}else if(e.target.value==4){
					this.$globalData.teacherinfo.Education='博士';
					this.Education="博士"
				}
			},
			changemajor:function(e){
				this.$globalData.teacherinfo.major=e.detail.value;
				this.major=e.detail.value
			},
			changeschool:function(e){     //学校
				this.$globalData.teacherinfo.school=e.detail.value;
				this.school=e.detail.value
			},
			changeteachingage:function(e){   //教龄
				if(e.target.value==0){
					this.$globalData.teacherinfo.teachingage ="5年以下";
					this.teachingage ="5年以下";
				}else if(e.target.value==1){
					this.$globalData.teacherinfo.teachingage="5年-10年";
					this.teachingage ="5年以下";
				}else if(e.target.value==2){
					this.$globalData.teacherinfo.teachingage="10年以上";
					this.teachingage ="5年以下";
				}
			},
			changegradet:function(e){     //年级
				if(e.target.value==0){
					this.$globalData.teacherinfo.gradet ="初一"
					this.gradet ="初一"
				}else if(e.target.value==1){
					this.$globalData.teacherinfo.gradet ="初二"
					this.gradet ="初二"
				}else if(e.target.value==2){
					this.$globalData.teacherinfo.gradet ="初三"
					this.gradet ="初三"
				}else if(e.target.value==3){
					this.$globalData.teacherinfo.gradet ="高一"
					this.gradet ="高一"
				}else if(e.target.value==4){
					this.$globalData.teacherinfo.gradet ="高二"
					this.gradet ="高二"
				}else if(e.target.value==5){
					this.$globalData.teacherinfo.gradet ="高三"
					this.gradet ="高三"
				}			
			},
			changesubjectt:function(e){   //科目
				if(e.target.value==0){
					this.$globalData.teacherinfo.subjectt ="语文"
					this.subjectt ="语文"
				}else if(e.target.value==1){
					this.$globalData.teacherinfo.subjectt ="数学"
					this.subjectt ="数学"
				}else if(e.target.value==2){
					this.$globalData.teacherinfo.subjectt ="英语"
					this.subjectt ="英语"
				}
			},
			changeaddrt:function(){
				this.mode="region";
				console.log(this.$refs)
				this.$refs["region"].show();
			},
			onConfirmt(val){
				console.log(val);
				this.addrt=val.result;
			},
			changeaddresst:function(e){
				this.$globalData.teacherinfo.addresst=e.target.value;
				this.addresst=e.target.value;
			},
			changetimet:function(e){
				if(e.target.value==0){
					this.$globalData.teacherinfo.timet ="工作日辅导"
					this.timet ="工作日辅导"
				}else if(e.target.value==1){
					this.$globalData.teacherinfo.timet ="周末辅导"
					this.timet ="周末辅导"
				}else if(e.target.value==2){
					this.$globalData.teacherinfo.timet ="均可"
					this.timet ="均可"
				}
			},
			changemethodt:function(e){
				if(e.target.value==0){
					this.$globalData.teacherinfo.methodt ="学生上门"
					this.methodt ="学生上门"
				}else if(e.target.value==1){
					this.$globalData.teacherinfo.methodt ="老师上门"
					this.methodt ="老师上门"
				}else if(e.target.value==2){
					this.$globalData.teacherinfo.methodt ="均可"
					this.methodt ="均可"
				}
			},
			moneyneedt:function(e){
				this.$globalData.teacherinfo.moneyt=e.detail.value;
				this.moneyt=e.detail.value;
			},
			Characteristic:function(e){
				this.$globalData.teacherinfo.characteristic=e.detail.value;
				this.characteristic=e.detail.value;
			},
			
			// 提交
			ReleaseBtn:function(){   //&this.phone 除外
			
				if(this.identityid=="teacher"){
					if(!this.namet && !this.sextt && !this.Education && !this.major && !this.school && !this.teachingage && !this.gradet && !this.subjectt && !this.addrt &&!this.addresst && !this.methodt && !this.timet && !this.moneyt && !this.characteristic){
						uni.showToast({
							title:"输入老师内容为空",
							icon:"none"
						})
					}else{
						uni.showToast({
							title:"发布成功",
							duration: 1500,
							success() {
								setTimeout(function(){
									uni.navigateTo({
										url: '../demand/demand',
										success: res => {},
										fail: () => {},
										complete: () => {}
									});
								}, 2000);
							}
						})
						
					}
				}else{
					if(!this.name && !this.sex && !this.grade && !this.sext && !this.subject && !this.addr &&!this.addrxiangxi && !this.time && !this.hour && !this.method && !this.money && !this.other){
						uni.showToast({
							title:"输入学生内容为空",
							icon:"none"
						})
					}else{
						uni.showToast({
							title:"发布成功",
							duration: 1500,
							success() {
								setTimeout(function(){
									uni.navigateTo({
										url: '../demand/demand',
										success: res => {},
										fail: () => {},
										complete: () => {}
									});
								}, 2000);
							}
						})
						
					}
				}
				
				
			},
			
		},
		components: {wPicker}
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
.MesssTit{
	color: #9DA6A0;
	font-size: 28upx;
	height: 100upx;
	line-height: 100upx;
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
	height: 28upx;
	float: right;
	margin-top: 36upx;
	margin-left: 20upx;
}
.Information input{
	width: 65%;
	float: right;
	height: 100upx;
	color: #9DA6A0;
	font-size: 28upx;
	text-align: right;
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
</style>
