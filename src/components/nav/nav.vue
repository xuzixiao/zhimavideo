<template>
    <div class="nav">
				<h3>选择主题</h3>
				<ul>
                    <li v-for="item in navlist"><router-link :to="/list/+item.id">{{item.name}}</router-link></li>
				</ul>
			</div>
</template>
<script>
export default {
    data(){
        return{
           navlist:[]
        }
    },
    mounted(){
        this.$axios({
            url:"/nav",
            method:"POST"
        }).then(res=>{
            this.navlist=res.data
        },error=>{
            console.log(error);
        })
    }
    
}
</script>

