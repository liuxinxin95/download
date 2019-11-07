<template>
	<view class="contents">
		<view class="contenttop">
			<view class="contenttoplist nearby" @tap="shownear">
				<text>附近</text>
				<text class="iconfont">{{aa==true?'&#xe62e;':'&#xe62d;'}}</text>
			</view>
			<view class="contenttoplist grade" @tap="showgrade">
				<text>年级</text>
				<text class="iconfont">{{bb==true?'&#xe62e;':'&#xe62d;'}}</text>
			</view>
			<view class="contenttoplist subject" @tap="showsubject">
				<text>科目</text>
				<text class="iconfont">{{cc==true?'&#xe62e;':'&#xe62d;'}}</text>
			</view>
			<view class="contenttoplist filter" @tap="showfilter">
				<text>筛选</text>
				<text class="iconfont">{{dd==true?'&#xe62e;':'&#xe62d;'}}</text>
			</view>
		</view>
		
		<uni-popup ref="popupnearby" type="top">
			<view class="nearbycon">
				<view class="nearbylist">
					<text @tap="nearby(item,index)" v-for="(item,index) in nearbys" :key="index" :data-index="index" :class="current==index?'check':''">{{item.name}}</text>
				</view>
			</view>
		</uni-popup>
		
		<uni-popup ref="popupgrade" type="top">
			<view class="gradecon">
				<view class="gradelist" v-for="(item,index) in grades" :key="index">
					<view class="gradelisttit">
						{{item.name}}
					</view>
					<view class="gradelistcon">
						<text v-for="(items,index1) in item.gradeslist" :key="index1" :data-index="index1" @tap="grade(items,index1,index)" :class="current1 =='a' + index + 'b' + index1?'check':''">{{items.con}}</text>
					</view>
				</view>
			</view>
		</uni-popup>
			
		<uni-popup ref="popupsubject" type="top">
			<view class="nearbycon">
				<view class="nearbylist">
					<text @tap="subject(item,index)" v-for="(item,index) in subjects" :key="index" :data-index="index" :class="current2==index?'check':''">{{item.name}}</text>
				</view>
			</view>
		</uni-popup>
		
		<uni-popup ref="popupfilter" type="top">
			<view class="gradecon">
				<view class="gradelist" v-for="(item,index) in filters" :key="index">
					<view class="gradelisttit">
						{{item.name}}
					</view>
					<view class="gradelistcon">
						<!-- :class="setClass(index,indexa)" -->
						<text v-for="(items,indexa) in item.filterlist" :key="indexa" :data-index="indexa" @tap="filter(items,indexa,index)" >{{ items.con }}</text>
					</view>
				</view>
				<view class="selectbtn">
					<view class="reset" @tap="reset">
						重置
					</view>
					<view class="sure" @tap="surebtn">
						确定
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- <view class="content"> -->
			<!-- <sl-filter :themeColor="themeColor" :menuList="menuList" @result="result"></sl-filter> -->
		<!-- </view> -->

		<view class="ReportList" v-for="(item,index) in ReportlistTeacher" :key="index" :class="identityid=='student'?'activeshow':'activehide'">
			<image :src="item.avatar" mode="" @tap="MapGo(item)"></image>
			<view class="ReportMessage"  @tap="Detail">
				<view class="ReportName">
					<text>{{item.name}}</text>
					<text>{{item.distance}}</text>
				</view>
				<view class="ReportCon">
						<text>{{item.tag1}}</text>
						<text>{{item.tag2}}</text>
						<text>{{item.tag3}}</text>
				</view>
				<view class="ReportOther">
					<text v-for="(con,i) in item.report" :key="i">{{con.con}}</text>
				</view>
			</view>
		</view>
		
		<!-- <view class="ReportList" v-for="(items,index) in ReportlistStudent" :key="'info2-'+index" :class="identityid=='teacher'?'activeshow':'activehide'">
			<image :src="items.avatar" mode="" @tap="MapGo(items)"></image>
			<view class="ReportMessage" @tap="Detail">
				<view class="ReportName">
					<text>{{items.name}}</text>
					<text>{{items.distance}}</text>
				</view>
				<view class="ReportCons">
					<text>{{items.content}}</text>
				</view>
				<view class="ReportOther">
					<text v-for="(con,i) in items.report" :key="i">{{con.con}}</text>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import slFilter from '../../components/sl-filter/sl-filter.vue';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	export default {
		data() {
			return {
				ReportlistTeacher:[
					{avatar:'../../static/teacher.jpeg',name:'张老师',longitude:'116.39747',latitude:'39.9085',tag1:"初中",tag2:"数学",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}],distance:'100m'},
					{avatar:'../../static/teacher.jpeg',name:'张老师',longitude:'114.39747',latitude:'30.9085',tag1:"初中",tag2:"语文",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}],distance:'100m'},
					{avatar:'../../static/teacher.jpeg',name:'张老师',longitude:'120.39747',latitude:'39.9085',tag1:"初中",tag2:"英语",tag3:"华东石油大学",state:"1",report:[{con:"兼职老师"},{con:"已认证"},{con:"十年教龄"}],distance:'100m'},
				],
				ReportlistStudent:[
					{avatar:'../../static/student.jpg',name:'李帅同学',longitude:'116.39747',latitude:'39.9085',content:'想找一位靠谱的老师',state:"1",report:[{con:"优秀学生"},{con:"物理学霸"},{con:"英语黑洞"}],distance:'100m'},
					{avatar:'../../static/student.jpg',name:'艳艳同学',longitude:'116.39747',latitude:'39.9085',content:'想找一位靠谱的老师',state:"1",report:[{con:"三好学生"},{con:"语文课代表"},{con:"化学差"}],distance:'100m'},
					{avatar:'../../static/student.jpg',name:'张亚同学',longitude:'116.39747',latitude:'39.9085',content:'想找一位靠谱的老师',state:"1",report:[{con:"班长"},{con:"数学优秀"},{con:"英语差"}],distance:'100m'},
				],
				aa:true,
				bb:true,
				cc:true,
				dd:true,
				current:'',
				current1:'',
				current2:'',
				current3:[],
				identityid:'',
				themeColor: '#24B353',
				filterResult: '',
				nearbys:[
					{name:'1千米'},
					{name:'2千米'},
					{name:'3千米'},
				],
				grades:[
					{
						name:'小学',
						gradeslist:[
							{con:'一年级'},
							{con:'二年级'},
							{con:'三年级'},
							{con:'四年级'},
							{con:'五年级'},
							{con:'六年级'}
						]
					},
					{
						name:'初中',
						gradeslist:[
							{con:'初一'},
							{con:'初二'},
							{con:'初三'}
						]
					},
					{
						name:'高中',
						gradeslist:[
							{con:'高一'},
							{con:'高二'},
							{con:'高三'}
						]
					}
				],
				subjects:[
					{name:'数学'},
					{name:'语文'},
					{name:'英语'},
				],
				filters:[
					{
						name:'授课方式',
						filterlist:[
							{con:'老师上门'},
							{con:'学生上门'},
							{con:'均可'}
						]
					},
					{
						name:'老师性别',
						filterlist:[
							{con:'男老师'},
							{con:'女老师'},
							{con:'均可'}
						]
					},
					{
						name:'教学经验',
						filterlist:[
							{con:'0-5年'},
							{con:'5-10年'},
							{con:'10年以上'}
						]
					},
					{
						name:'是否为教育机构',
						filterlist:[
							{con:'是'},
							{con:'否'}
						]
					},
				]
			// 	menuList: [{
			// 			'title': '附近',
			// 			'isMutiple': false,   
			// 			'key': 'jobType',
			// 			'detailList': [{
			// 					'title': '1千米',
			// 					'value': ''
			// 				},
			// 				{
			// 					'title': '2千米',
			// 					'value': ''
			// 				},
			// 				{
			// 					'title': '3千米',
			// 					'value': ''
			// 				}
			// 			]
			// 		},
			// 		{
			// 			'title': '年级',
			// 			'key': 'salary',
			// 			'isMutiple': false,
			// 			'detailList': [
			// 				{
			// 					'title': '小学',
			// 					'key': 'salary',
			// 					'isMutiple': false,
			// 					'detailListList': [
			// 						{
			// 							'title': '一年级',
			// 							'value': '一年级'
			// 						},
			// 						{
			// 							'title': '二年级',
			// 							'value': '二年级'
			// 						}
			// 					]
			// 				},
			// 				{
			// 					'title': '初中',
			// 					'key': 'salary',
			// 					'isMutiple': false,
			// 					'detailListList': [
			// 						{
			// 							'title': '初一',
			// 							'value': '初一'
			// 						},
			// 						{
			// 							'title': '初二',
			// 							'value': '初二'
			// 						}
			// 					]
			// 				},
			// 				{
			// 					'title': '高中',
			// 					'key': 'salary',
			// 					'isMutiple': false,
			// 					'detailListList': [
			// 						{
			// 							'title': '高一',
			// 							'value': '高一'
			// 						},
			// 						{
			// 							'title': '高二',
			// 							'value': '高二'
			// 						}
			// 					]
			// 				},
			// 			]

			// 		},
			// 		{
			// 			'title': '科目',
			// 			'key': 'single',
			// 			'isMutiple': false,
			// 			'detailList': [{
			// 					'title': '数学',
			// 					'value': '数学'
			// 				},
			// 				{
			// 					'title': '语文',
			// 					'value': '语文'
			// 				},
			// 				{
			// 					'title': '英语',
			// 					'value': '英语'
			// 				},
			// 				{
			// 					'title': '物理',
			// 					'value': '物理'
			// 				},
			// 				{
			// 					'title': '化学',
			// 					'value': '化学'
			// 				},
			// 				{
			// 					'title': '历史',
			// 					'value': '历史'
			// 				},
			// 				{
			// 					'title': '政治',
			// 					'value': '政治'
			// 				},
			// 				{
			// 					'title': '地理',
			// 					'value': '地理'
			// 				},
			// 				{
			// 					'title': '音乐',
			// 					'value': '音乐'
			// 				}
			// 			]
			// 		},
			// 		{
			// 			'title': '排序',
			// 			'key': 'sort',
			// 			'isSort': true,
			// 			'detailList': [{
			// 					'title': '默认排序',
			// 					'value': ''
			// 				},
			// 				{
			// 					'title': '发布时间',
			// 					'value': 'add_time'
			// 				},
			// 				{
			// 					'title': '薪资最高',
			// 					'value': 'wages_up'
			// 				},
			// 				{
			// 					'title': '离我最近',
			// 					'value': 'location'
			// 				}
			// 			]
			// 		}
			// 	]
			
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
				    title: '附近名师'
				});
			}else{
				uni.setNavigationBarTitle({
				    title: '附近学生'
				});
			}
		},
		methods: {
			result(val) {
				console.log('filter_result:' + JSON.stringify(val));
				this.filterResult = JSON.stringify(val, null, 2)
			},
			Detail:function(){   //跳转详情
				uni.navigateTo({
					url:"../detail/detail"
				})
			},
			// MapGo:function(){   //跳转地图
			// 	uni.navigateTo({
			// 		url:"../mapgo/mapgo"
			// 	})
			// },
			MapGo: function (e) {
				console.log(e)
				var latitude = e.latitude;
				var longitude=e.longitude;
				uni.openLocation({
					longitude: Number(longitude),
					latitude: Number(latitude)
					// name: value.name,
					// address: value.address
				})
			},
			shownear(e){
				console.log(e)
				this.$refs.popupnearby.open(); // 或者 boolShow = rue
				this.aa=false;
				this.$refs.popupgrade.close();
				this.bb=true;
				this.$refs.popupsubject.close();
				this.cc=true;
				this.$refs.popupfilter.close();
				this.dd=true;
			},
			nearby:function(item,index){
				this.current=index;
				var that=this;
				var timer = setInterval(function() {
					that.$refs.popupnearby.close();
					that.aa=true;
					clearInterval(timer)
				}, 2000)
			},
			showgrade(){
				this.$refs.popupgrade.open(); // 或者 boolShow = rue
				this.bb=false;
				this.$refs.popupnearby.close();
				this.aa=true;
				this.cc=true;
				this.dd=true;
				this.$refs.popupsubject.close();
				this.$refs.popupfilter.close();
			},
			grade:function(item1,index1,index){
				this.current1='a' + index + 'b' + index1;
				console.log(this.current1,item1)
				var that=this;
				var timer = setInterval(function() {
					that.$refs.popupgrade.close();
					that.bb=true;
					this.current1='';
					clearInterval(timer)
				}, 2000)
			},
			showsubject:function(){
				this.$refs.popupsubject.open();
				this.cc=false;
				this.$refs.popupgrade.close();
				this.bb=true;
				this.aa=true;
				this.dd=true;
				this.$refs.popupnearby.close();
				this.$refs.popupfilter.close();
			},
			subject:function(item,index){
				this.current2=index;
				var that=this;
				var timer = setInterval(function() {
					that.$refs.popupsubject.close();
					that.cc=true;
					clearInterval(timer)
				}, 2000)
			},
			showfilter:function(){
				this.$refs.popupfilter.open();
				this.dd=false;
				this.$refs.popupgrade.close();
				this.aa=true;
				this.bb=true;
				this.cc=true;
				this.$refs.popupsubject.close();
				this.$refs.popupnearby.close();
			},
			setClass:function(index,index1) {
				if(typeof this.current3[index] != 'undefined' && typeof this.current3[index][index1] != 'undefined' && this.current3[index][index1] == 1){
					return 'check';
				} else {
					return '';
				}
			},
			filter:function(item,index1,index){
				console.log(item)
				var that = this;
				that.current3[index] = [];
				that.current3[index][index1] = 1;
				var tmp = this.filters[index]['filterlist'][index1]['con'];
				this.filters[index]['filterlist'][index1]['con'] = '111';
				this.filters[index]['filterlist'][index1]['con'] = tmp;
				console.log(this.current3);
				console.log(tmp);    //点击的选项内容
			},
			reset:function(){
				var that=this;
				that.current3=[];
			},
			surebtn:function(){
				var that=this;
				var timer = setInterval(function() {
					that.$refs.popupfilter.close();
					that.dd=true;
					clearInterval(timer)
				}, 2000)
			}
		},
	    components: {
			slFilter,uniPopup
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
	.contents{
		padding: 30upx;
	}
	.contenttop{
		width: 100%;
		height: 30px;
		line-height: 30px;
		justify-content: space-around;
		display: flex;
		font-size: 12px;
		text-align: center;
	}
	.uni-popup{
		top:90px
	}
	.iconfont{
		font-size: 8px;
		    margin-left: 5px;
	}
	.nearbycon{
		height: 30px;
	}
	.nearbylist{
		height: 30px;
		    line-height: 30px;
	}
	.nearbylist text{
		width: 75px;
		height: 30px;
		border: 1px solid #F0F5F2;
		display: block;
		float: left;
		margin-right: 8px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		border-radius: 20px;
	}
	.nearbylist .check{
		border: 1px solid 	#24B353;
	}
	
	.gradecon{
		font-size: 12px;
	}
	.gradelist{
		margin-bottom: 10px;
	}
	.gradelist .check{
		border: 1px solid 	#24B353;
	}
	.gradelisttit{
		height: 30px;
		font-size: 14px;
		line-height: 30px;
	}
	.gradelistcon{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	.gradelistcon text{
		width: 75px;
		height: 30px;
		border: 1px solid #F0F5F2;
		display: block;
		float: left;
		margin-right: 8px;
		line-height: 30px;
		font-size: 12px;
		text-align: center;
		border-radius: 20px;
		margin-top: 10px;
	}
	
	.selectbtn{
		height: 60px;
		    /* background: pink; */
		    display: flex;
		    flex-wrap: wrap;
		    justify-content: space-around;
		    border-top: 1px solid #F0F5F2;
	}
	.selectbtn .sure{
		color: #FFFFFF;
		background: #24B353;
		border-color: #24B353;
	}
	.selectbtn view{
		width: 165px;
		    height: 30px;
		    /* background: red; */
		    text-align: center;
		    border: 1px solid #F0F5F2;
		    font-size: 12px;
		    color: #303331;
		    margin-top: 15px;
		    line-height: 30px;
		    border-radius: 50px;
	}
	.ReportList{
		width: 630upx;
		height: 160upx;
		padding: 30upx;
		box-shadow: 4upx 4upx 4upx #eee;
		background: #FFFFFF;
		border-radius: 16upx;
		margin-bottom: 30upx;
	}
	.ReportList image{
		width: 160upx;
		height: 160upx;
		border-radius: 20upx;
		margin-right: 32upx;
		float: left;
	}
	.ReportMessage{
		width: 65%;
		float: left;
	}
	.ReportName{
		color: #303331;
		font-size: 28upx;
		font-weight: 700;
	}
	.ReportName text:nth-child(2){
		font-size: 24upx;
		color: rgb(36, 179, 83);
		border-radius: 100upx;
		background: rgba(36,179,83,0.2);
		margin-left: 20upx;
		padding: 4upx 10upx;
		float: right;
	}
	.ReportCon{
		color: #9CA69F;
		font-size: 28upx;
		line-height: 60upx;
	}
	.ReportCons{
		color: #9CA69F;
		font-size: 28upx;
		line-height: 60upx;
	}
	.ReportCon text:nth-child(1){
		border-right: 2upx solid #9CA69F;
		padding-right: 10upx;
	}
	.ReportCon text:nth-child(2){
		padding: 0 10upx;
		border-right: 2upx solid #9CA69F;
	}
	.ReportCon text:nth-child(3){
		padding-left: 10upx;
	}
	.ReportOther{
		margin-top: 20upx;
	}
	.ReportOther text{
		font-size: 24upx;
		color: #fff;
		/* background: red; */
		padding: 4upx 10upx;
		border-radius: 10upx;
		margin-right: 10upx;
		float: left;
	}
	.ReportOther text:nth-child(1){
		background: #FFB726;
	}
	.ReportOther text:nth-child(2){
		background: #FF6633;
	}
	.ReportOther text:nth-child(3){
		background: #FF4D3D;
	}
	.ReportName .orangecolor{
		color: #FFB726;
		border-color: #FFB726;
	}
	.ReportName .redcolor{
		color: #FF4D3D;
		border-color: #FF4D3D;
	}
	.ReportName .greencolor{
		color: #24B353;
		border-color: #24B353;
	}
</style>
