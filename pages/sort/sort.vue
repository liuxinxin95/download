<template>
	<view class="container">
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" v-for="(item,index) in bb" :key="index" :class="index==categoryActive?'active':''" @tap="categoryClickMain(item,index)">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" v-if="activeTab.child" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view class="nav-right-con"  >
					<image :src="activeTab.image" mode=""></image>
					<view class="nav-right-item" v-for="(item,index) in activeTab.child" :key="index" @tap="ClickOne(index)" :data-index="index" :class="index==clicklist?'activelist':''">
						<view >{{item.name}}</view>
					</view>
				</view>
				
				<!-- <page-foot :name="name" v-if="subCategoryList.length > 1"></page-foot> -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeTab:{},
				bb:[
					{	
						name:'小学',
						image:'../../static/indexactive.png',
						child:[
							{name:'数学'},
							{name:'语文'},
							{name:'英语'},
							{name:'作文'},
							{name:'自然'},
							{name:'科学'}
						],
					},{
						name:'初中',
						image:'../../static/indexactive.png',
						child:[
							{name:'数学'},
							{name:'语文'},
							{name:'英语'},
							{name:'物理'},
							{name:'生物'},
						],
					},{
						name:'高中',
						image:'../../static/indexactive.png',
						child:[
							{name:'化学'},
							{name:'物理'},
							{name:'英语'},
							{name:'作文'},
							{name:'数学'},
							{name:'历史'}
						],
					},{
						name:'大学',
						image:'../../static/indexactive.png',
						child:[
							{name:'毛概'},
							{name:'计算机'},
							{name:'英语'},
							{name:'高等数学'}
						],
					},{
						name:'考研',
						image:'../../static/indexactive.png',
						child:[
							{name:'哲学'},
							{name:'历史'},
							{name:'人文哲学'},
							{name:'计算机科学与技术'},
						],
					},{
						name:'考博',
						image:'../../static/indexactive.png',
						child:[
							{name:'数学'},
							{name:'语文'},
							{name:'英语'},
							{name:'作文'},
							{name:'自然'},
							{name:'科学'}
						],
					}
				],
				// categoryList: [],
				// subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
				clicklist:''
			}
		},
		onLoad: function () {
			// this.getCategory();
			this.categoryClickMain(this.bb[0].child,0);
			this.height = uni.getSystemInfoSync().windowHeight;
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(item,index) {
				console.log(item)
				console.log(index)
				this.activeTab = item;
				this.categoryActive=index;
				// this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight * index;
				this.clicklist=0;
			},
			ClickOne:function(e){
				console.log(e)
				this.clicklist=e;
			}
			// getCategory() {
			// 	var bbbb=this.bb.length;
			// 	console.log(bbbb)
			// 	for (var i = 0; i < bbbb; i++) {
			// 		var subList = [];
			// 		for (var j = 0; j < bbbb; j++) {
			// 			var xx=this.bb[j];
			// 			// console.log(xx)
			// 			subList.push({
			// 				"name": this.bb[j].name,
			// 				"LOGO":this.bb[j].LOGO
			// 			})
			// 			console.log(subList)
			// 			
			// 		}
			// 		this.categoryList.push({
			// 			"name": this.bb[i].name,
			// 			"subCategoryList": subList
			// 		})
			// 	}
			// 	this.subCategoryList = this.categoryList[0].subCategoryList;
			// }
		}
	}
</script>

<style>
	.page-body {
		display: flex;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 27%;
		background: #F6F6F6;
		color: #666666;
	}

	.nav-left-item {
		height: 100upx;
		/* border-right: solid 1px #E0E0E0; */
		/* border-bottom: solid 1px #E0E0E0; */
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #F6F6F6;
	}

	.nav-right {
		width: 70%;
		padding: 30upx;
	}
	.nav-right-con image{
		width: 440upx;
		height: 182upx;
		background-size:100% ;
	}
	.nav-right-item {
		font-weight: 700;
		background: #F6F6F6;
		float: left;
		text-align: center;
		padding: 20upx 30upx;
		font-size: 28upx;
		margin-right: 12upx;
		border-radius: 8upx;
		margin-top: 30upx;
	}

	.nav-right-item image {
		width: 100upx;
		height: 100upx;
	}

	.active {
		color: #222222;
		background: #fff;
	}
	.activelist{
		background: #24B353;
		color: #FFFFFF;
	}
</style>
