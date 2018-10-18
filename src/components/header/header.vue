<template>
    <div class="header">
        <div class="banner"><img :src="banner" /></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            banner:""
        }
    },
    mounted(){
        this.$axios({
            url:"/ad",
            method:"POST",
        }).then(res=>{
            this.banner=res.data;
        },error=>{

        })
    }
}
</script>
<style>

</style>
