<template>
   <div class="video">
		 <div class="videoshow">
			 <video-player
			 :videohref='videoInfo.videolink'
			 :videologo='videoInfo.logo'
			 ></video-player>
		 </div>
		 <div class="videomain">
			<h3>{{videoInfo.title}}</h3>
			<p>{{videoInfo.concent}}</p>
		</div>	

	</div> 
</template>
<script>
import 'video.js/dist/video-js.css'
import  videoPlayer  from '@/components/player/player.vue'

export default {
    data(){
		return{
			detailid:"",
			videoInfo:"",
		}
	},
	components:{
		videoPlayer
		},
	created:function(){
	   this.detailid=this.$route.params.id;
	   this.$axios({
		   url:"/detail",
		   method:"POST",
	   }).then(res=>{
		   let vlist=res.data;
		   for(let i=0;i<vlist.length;i++){
			   if(vlist[i].id==this.detailid){
				   this.videoInfo=vlist[i];
			   }
		   }
	   },error=>{})
	},
	methods:{


	},
}
</script>

<style scoped>
.videomain{
	margin:10px;
}

</style>
