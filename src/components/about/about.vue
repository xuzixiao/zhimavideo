<template>
    <div class="about">
        <h3>{{title}}</h3>
        <div class="about-main">
            <p>{{concent}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"",
            concent:""
        }
    },
    mounted(){
        this.$axios({
            url:"/about",
            method:"POST"
        }).then(res=>{
            this.title=res.data.title;
            this.concent=res.data.concent;
        },error=>{
            console.log(error);
        })
    }
    
}
</script>
<style>

</style>
