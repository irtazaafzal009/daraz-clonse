<template>
<div>
<div class="listing">
    <div class="container sale-container">
        <div v-if="loader" class="d-flex justify-content-center">
                <div class="lds-ellipsis "><div></div><div></div><div></div><div></div></div>
        </div>
        <div class="row">
                <div v-for="product in allProducts" :key="product.id" class="col-sm-2">
                    <router-link 
                        :to="{ name: 'product', params: { title: product.route, product: product }}"
                    >
                        <div v-if="!loader" class="card card-body">
                            <img :src="product.image" class="card-img-top" alt="...">
                            <div class="card-txt">
                                <p class="p-title"> {{ limitTitle(product.title) }} </p>
                                <p class="p-price"> $ {{product.price}} </p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name:'productListing',
    data(){
        return {
            allProducts : null,
            allProductTitle : [],
            loader: false

        }
    },
    computed:{
    },
    mounted(){
        this.getAllProducts();
    },
    methods:{
        limitTitle(text){
            return text.length > 25 ? text.slice(0, 25) + '...' : text.slice(0, 25);
        },
        getAllProducts : async function(){
            try {
            this.loader = true
            let response  = await axios.get('https://fakestoreapi.com/products?limit=6');
            this.allProducts = response.data;
            this.allProducts.forEach(product => {
                let productTitle = product.title.split(' ').join('_');
                product.route = productTitle
            });
            if(this.allProducts){
                this.loader = false
            }
            this.$store.commit('productsList', this.allProducts)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
<style scoped>
.p-title{
     font-size: 14px;
     text-decoration: none;
     color: #000;
 }
 .sale-container{
     background-color: white;
     padding: 20px;
 }
 .listing{
     background-color:#eff0f5;
     padding-top: 50px;
     padding-bottom: 50px;
 }
 .card{
     border: none !important;
     cursor: pointer;
 }
 .card:hover{
     box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
 }
 .p-price{
     font-size: 18px;
     color: #f57224;
 }
 .product-image{
    width: 180px;
      height: 180px;
      text-align: center;
      margin: 0 auto;
      display: block;
 }
 .content{
 }
.card-img, .card-img-top{
     height: 150px;
     width: 120px;
 }
 .card-txt{
     text-decoration: none;
 }
 /* Loader*/
 .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #f57224;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
 /***/
</style>