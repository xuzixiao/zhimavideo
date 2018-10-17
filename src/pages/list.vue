<template>
    <div class="list">
	<div class="list-title">
		<h3>文哥推荐</h3>
	</div>
	<div class="list-main">
			<div class="wrapper">
				<ul class="wall">
					<li class="article">
						<router-link to="/detail">
							<img src="/static/images/7.jpg" />
							<p>视频名称</p>
							<small>￥16.6</small>
							<span>编号：001</span>
							<!--<input type="button" value="0412" />-->
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
			listid:""
		}
	},
	watch:{
		$route(to,from){
			console.log(to);
			console.log(from);
		}

	},
	created:function(){

		
	}

}
</script>
<style>

</style>
