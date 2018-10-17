<template>
   <div class="video">
		 <div class="videoshow">
			<video controls>
			  <source src="/static/video/video.mp4" type="video/mp4">
			  <source src="/static/video/video.mp4" type="video/ogg">
			  您的浏览器不支持 HTML5 video 标签。
			</video>
		 </div>

		 <div class="videomain">
			<h3>模板详情(detailid={{detailid}})</h3>
			<p>模板说明：发射点发射点发射点发射点发射点</p>
			</div>	

	</div> 
</template>
<script>
export default {
    data(){
		return{
			detailid:""	
		}
	},
	mounted:function(){
       this.detailid=this.$route.params.id;
	}
}
</script>

<style scoped>
.videomain{
	margin:10px;
}
</style>
