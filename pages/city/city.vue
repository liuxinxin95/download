<template>
	<view class="content">
		<ss-select-city :hotCitys="hotCitys" v-model="city" @on-select="onSelect" />
	</view>
</template>

<script>
	import ssSelectCity from '@/components/ss-select-city/ss-select-city.vue'
	export default {
		data() {
			return {
				hotCitys: ['杭州', '天津', '北京', '上海', '深圳', '广州', '成都', '重庆', '厦门'],
				city: '',
			}
		},
		onShow() {
			uni.getLocation({
				type: 'wgs84',
				success: function (res) {
					console.log(res)
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				}
			});
		},
		methods: {
			onSelect(res) {
			    console.log(res)
				this.city=res;
				this.$globalData.myinfo.city=res;
				var aa=this.$globalData.myinfo.city;
				// console.log(this.$globalData.city)
				setTimeout(function(){
					uni.navigateTo({
						url:'../mymessage/mymessage?city='+aa
					})
				},1000)
				
			},
		},
		components: {
		  ssSelectCity
		},
	}
</script>

<style>

</style>
