<script>
	export default {
		onLaunch: function() {
			var that=this;
			wx.login({
				success (res) {
					// console.log(res)
					if (res.code) {
						uni.request({
							url:"https://api.weixin.qq.com/sns/jscode2session",
							method:"GET",
							data:{
								appid:"wx4a58a10154287c21",
								secret:"cefe93fbd01c3d8eb67eba28728f367b",
								js_code:res.code,
								grant_type:"authorization_code"
							},
							success(res) {
								// console.log(res)
								var openid=res.data.openid;
								console.log(openid)
								try {        //存储openid
									uni.setStorageSync('openid', openid);
								} catch (e) {
								}
								uni.request({
									url:that.$url+'famil-education/api/login/checkUser',
									method:"post",
									header: {
										'content-type': 'application/x-www-form-urlencoded'
									},
									data:{
										openId:openid
									},
									success(res) {
										if(res.data.body==false){    //没有该用户，去选择身份
											uni.navigateTo({
												url:"../identity/identity"
											})
										}else{    //获取用户信息
											console.log("该用户已进入")
											try {
											    const session = uni.getStorageSync('session');
											    // this.session=session;
												console.log(session)
												uni.request({
													url:that.$url+'famil-education/api/sysuser/getUserInfo',
													method:"GET",
													header: {
														'content-type': 'application/json',
														'Authorization':session
													},
													data:{},
													success(res) {
														console.log(res)
													}
												})
											} catch (e) {
											    // error
											}
											
										}
									}
								})
							}
						})
					}
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page{
		/* background: #f8f8f8; */
		/* height: 100%; */
		font-family:'Arial','PingFang SC';
	}
	@font-face {
		font-family: "PingFangSC,Regular";
	 	src: url('http://a.xianzhu.org/fonts/regular.eot');
	 	src: local('fontName PingFangSC,Regular'),
	    local('fontName'),
	    url('http://a.xianzhu.org/fonts/regular.woff') format('woff'),
	    url('http://a.xianzhu.org/fonts/regular.ttf') format('truetype'),
	    url('http://a.xianzhu.org/fonts/regular.svg') format('svg');
	}
	@font-face {
		font-family: "PingFang-Bold";
	 	src: url('http://a.xianzhu.org/fonts/bold.eot');
	 	src: local('fontName PingFang-Bold'),
	    local('fontName'),
	    url('http://a.xianzhu.org/fonts/bold.woff') format('woff'),
	    url('http://a.xianzhu.org/fonts/bold.ttf') format('truetype'),
	    url('http://a.xianzhu.org/fonts/bold.svg') format('svg');
	}
/* 	@font-face {
	  font-family: 'iconfont';  
	  src: url('https://at.alicdn.com/t/font_1424556_xek11a8royo.eot');
	  src: url('https://at.alicdn.com/t/font_1424556_xek11a8royo.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_1424556_xek11a8royo.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_1424556_xek11a8royo.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1424556_xek11a8royo.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_1424556_xek11a8royo.svg#iconfont') format('svg');
	} */
	@font-face {
	  font-family: 'iconfont';  /* project id 1424556 */
	  src: url('https://at.alicdn.com/t/font_1424556_jwxa642zhep.eot');
	  src: url('https://at.alicdn.com/t/font_1424556_jwxa642zhep.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_1424556_jwxa642zhep.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_1424556_jwxa642zhep.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1424556_jwxa642zhep.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_1424556_jwxa642zhep.svg#iconfont') format('svg');
	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
</style>
