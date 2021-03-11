<template>
    <div>
        <div class="p-nav">
            <b-navbar>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" class="ads">SAVE MORE ON APP</b-nav-item>
                    <b-nav-item href="#">DARAZ AFFILIATE PROGRAM</b-nav-item>
                    <b-nav-item href="#">SELL ON DARAZ</b-nav-item>
                    <b-nav-item href="#">CUSTOMER CARE</b-nav-item>
                    <b-nav-item href="#">TRACK MY ORDER</b-nav-item>
                    <b-nav-item to="/login">
                        LOGIN</b-nav-item>
                    <b-nav-item to="/signup">SIGNUP</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {}
    },
    mounted(){},
    computed:{},

}
</script>
<style scoped>
.navbar{
    background-color: rgba(158,158,158,.2) !important;
    padding: 0px;
}
.nav-item{
    font-size: 12px;
    padding-right: 20px;
}
.ads .nav-link {
    color: #f36f36 !important;
}
.nav-link{
    padding-top: 2px;
    padding-bottom: 2px;
}
.nav-link:hover{
    color: #f36f36 !important;
    text-decoration: underline;
    opacity: .8;
}
.navbar-nav{
    padding-right: 80px;
}
.navbar-light .navbar-nav .nav-link{
    color: #212121;
    font-family: 'RobotoRegular';
    font-weight: 550;
}
</style>