<template>
    	<div class="box">
            <Header></Header>
			<About></About>
			<Nav></Nav>
            <Footer></Footer>
		</div>
</template>
<script>
import Header from "@/components/header/header.vue"
import Footer from "@/components/footer/footer.vue"
import About from "@/components/About/About.vue"
import Nav from "@/components/Nav/Nav.vue"

export default {
    data(){
        return {

            
        }
    },
    components:{Header,Footer,About,Nav}
}
</script>
<style scoped>


</style>
