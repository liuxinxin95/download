<template>
	<view class="content">
		<view class="Notice">
			请填写以下表单（<text class="Star">*</text>为必填）
		</view>
		<view class="OnlineList">
			<text class="Star">*</text>
			<text>联系人</text>
			<input type="text" value="" placeholder="姓名或昵称"/>
		</view>
		<view class="OnlineList">
			<text class="Star">*</text>
			<text>手机号码</text>
			<input type="text" value="" placeholder="您的手机号码"/>
		</view>
		<view class="OnlineList">
			<text>所在地区</text>
			<image src="../../static/arrowright.png" mode="" @tap="changeaddr"></image>
			<text style="color: #9DA6A0;float: right;">{{addr}}</text>
			<w-picker 
			    mode="region"
			    :defaultVal="['浙江省','杭州市','滨江区']"
			    :areaCode="['33','3301','330108']"
			    :hideArea="true"
			    @confirm="onConfirm" 
			    ref="region" 
			    themeColor="#f00">
			</w-picker>
		</view>
		<view class="OnlineList">
			<text>授课地区描述</text>
			<input type="text" value="" placeholder="填写小区或公交站，便于老师查询"/>
		</view>
		<view class="OnlineList">
			<text class="Star">*</text>
			<text>学员年级</text>
			<input type="text" value="" placeholder="请输入"/>
		</view>
		<view class="OnlineList">
			<text class="Star">*</text>
			<text>求教科目</text>
			<input type="text" value="" placeholder="请输入"/>
		</view>
		<view class="OnlineList">
			<text>上课时间</text>
			<input type="text" value="" placeholder="请输入"/>
		</view>
		<view class="OnlineList">
			<text>学员情况描述</text>
			<input type="text" value="" placeholder="请输入"/>
		</view>
		<view class="OnlineList">
			<text>对教员要求</text>
			<input type="text" value="" placeholder="请输入"/>
		</view>
		<view class="OnlineList">
			<text>收费要求</text>
			<input type="text" value="" placeholder="面议/电话沟通"/>
		</view>
		
		<view class="ShenBtn">
			立即申请
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"
	export default {
		data() {
			return {
				 mode:"region",
				 addr:''
			}
		},
		methods: {
			changeaddr:function(){
				this.mode="region";
				console.log(this.$refs)
				this.$refs["region"].show();
			},
			onConfirm(val){
				console.log(val);
				this.addr=val.result;
			},
		},
		components: {wPicker}
	}
</script>

<style>
.content{
	padding: 30upx;
	font-size: 28upx;
	font-weight: 700;
}
.Notice{
	color: #9DA6A0;
	height: 100upx;
	line-height: 100upx;
	font-weight: 700;
}
.Star{
	color: #FF4D3D;
}
.OnlineList{
	height: 100upx;
	line-height: 100upx;
	font-weight: 700;
}
.OnlineList input{
	width: 60%;
	float: right;
	font-size: 28upx;
	height: 100upx;
	text-align: right;
	color: #9DA6A0;
}
.OnlineList image{
	width: 14upx;
	    height: 24upx;
		background-size: 100%;
		float: right;
		display: block;
		margin-top: 40upx;
		margin-left: 20upx;
}
.ShenBtn{
	width: 630upx;
	height: 88upx;
	background: #24b353;
	margin: 0 auto;
	border-radius: 100upx;
	text-align: center;
	line-height: 88upx;
	color: #fff;
	margin-top: 60upx;
	font-size: 28upx;
}
</style>
