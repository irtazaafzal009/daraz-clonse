<template>
    <div>
        <div class="main-container">
            <div class="flex-container">
                <router-link  to="/">
                    <img :src="logo" alt="logo" class="logo">
                </router-link>
                <div class="search">
                    <button class="btn-search">
                        <b-icon class="icon-search" icon="search"></b-icon>
                    </button>
                    <input type="text" class="searchBox" :placeholder="placeholderText">
                </div>
                <div>
                    <p class="cart-length"> {{$store.state.cart.length}} </p>
                    <b-icon class="icon-cart" icon="cart2"></b-icon>
                </div>
                <img :src="poster" alt="poster" class="poster">
            </div>
            <div class="flex-container-nav">
                <select class="categoriesListing" name="" id="">
                    <option 
                    v-for="category in categories" 
                    :key="category.name"
                    >
                    {{category.name}}
                    </option>
                </select>
                <div class="dmall">
                    <b-icon icon="shop"></b-icon>
                    DarazMall
                </div>
                <div class="dmart">
                    <b-icon icon="minecart-loaded"></b-icon>
                    dMart
                </div>
                <div class="dls">
                    <b-icon icon="bag-check"></b-icon>
                    LifeStyle
                </div>
                <div class="dgc">
                    <b-icon icon="collection"></b-icon>
                    Global Collection
                </div>
                <div class="dg">
                    <b-icon icon="journal-album"></b-icon>
                    Daraz Digital
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dlogo from '../../assets/images/d-logo.png'
import dposter from '../../assets/images/d-poster.png'
export default {
    data(){
        return {
            logo: dlogo,
            poster:dposter,
            placeholderText:'Search in Daraz',
            categories:[
                {name:'Categories'},
                {name:'Electronic Devices'},
                {name:'Health and Beauty'},
                {name:'TV & Home Appliances'},
                {name:'Home & Life Style'},
                {name:'Men Fashion'},
                {name:'Women Fashion'}
            ]

        }
    }
}
</script>
<style scoped>
.flex-container {
    padding-top: 11px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}
.logo{
    height: 41px;
    width: 135px;
}
.poster{
    width: 188px;
    height: 45px;
}
.search{
    min-width: 700px;
}
.search::after{
    content: " ";
    clear: both;
    display: table;
}
.btn-search{
    float: right;
    width: 7%;
    height: 45px;
    border: none;
    background-color: #f36f36 !important;
}
.searchBox{
    border: none;
    background-color:  rgba(158,158,158,.2) !important;
    border-radius: 0px;
    height: 45px;
    width: 93%;
    float: left;
    padding-left: 19px;
}
.icon-search{
    color: white;
}
.icon-cart{
    height: 30px;
    width: 35px;
}
select{
    border: none;
    width: 100px;
}
.categoriesListing{
    margin-right: 100px;
}
.flex-container-nav{
    display: flex;
    padding-top: 30px;
    margin-left: 60px;
}
.dmall{
    margin-right: 30px;
}
.dmart{
    margin-right: 30px;
}
.dls{
    margin-right: 30px;
}
.dgc{
    margin-right: 30px;
}
.main-container{
    padding-bottom: 10px;
    box-shadow: 0px 15px 10px -15px #111;
}
.cart-length{
    position: absolute;
    
}
</style>
    