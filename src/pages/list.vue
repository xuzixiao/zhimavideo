<template>
    <div class="list">
	<div class="list-title">
		<h3>{{listtitle}}</h3>
	</div>
	<div class="list-main">
			<div class="wrapper">
				<ul class="wall">
					<li class="article" v-for="item in list">
						<router-link :to="/detail/+item.id">
							<img :src="item.logo" />
							<p v-text="item.title"></p>
							<small>￥ {{item.money}}</small>
							<span>编号：{{item.id}}</span>
						</router-link>
					</li>
				</ul>
		</div>
	</div>
</div>
</template>
<script>
export default {
    data(){
		return{
			listid:"",
			listtitle:"",
			list:""
		}
	},
	watch:{
		'this.$route':{
			handler:(to,from)=>{
				//console.log(to);
				//console.log(from);
			}
		}
	},
	mounted:function(){
		this.listid=this.$route.params.id;
		this.$axios({
		   url:"/detail",
		   method:"POST",
	   }).then(res=>{
		   let listdata=res.data;
		   let thislist=[];
			for(let i=0;i<listdata.length;i++){
				if(listdata[i].navid==this.listid){
					this.listtitle=listdata[i].fromnav;
					thislist.push(listdata[i]);
				}
			}
			this.list=thislist;
	   },error=>{})
   		//console.log(this.$route.params.id);
	}
}
</script>
<style>

</style>
