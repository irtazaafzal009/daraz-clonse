<template>
    <div>
        <div class="products">
            <div v-if="loader" class="d-flex justify-content-center">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
            <div v-if="!loader" class="container p-container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="p-image">
                            <img :src="product.image" alt="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <h2 class="p-text"> {{product.title}} </h2>
                            <p>{{product.description}}</p>
                            <hr />
                            <p class="p-price"> Rs. {{product.price * value}} </p>
                            <label for="sb-inline">Quantity:</label>
                            <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
                            <div class="btn-sale">
                                <button class="btn-buynow">
                                    Buy Now
                                </button>
                                <button @click="addToCart()" class="btn-cart">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="delivery-details">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            product: null,
            loader: false,
            value: 1
        }
    },
    created(){
        this.getAllProducts();
    },
    methods:{
    
    getAllProducts : async function(){
            try {
            this.loader = true
            let response  = await axios.get('https://fakestoreapi.com/products?limit=6');
            this.allProducts = response.data;
            this.allProducts.forEach(product => {
                let productTitle = product.title.split(' ').join('_');
                product.route = productTitle
            });
            this.allProducts.forEach((product) =>{
                if(product.route === this.$route.params.title){
                    this.product = product
                    console.log(this.product)
                }
            })
            if(this.allProducts){
                this.loader = false
            }
            } catch (error) {
                console.error(error)
            }
        },
    addToCart: function(){
        this.$store.state.cart.push(this.product)
        }
    }
}
</script>
<style scoped>
img{
    height: 200px;
    width: 200px;
}
.products{        
    background-color:#eff0f5;
     padding-top: 50px;
     padding-bottom: 50px;
}
.p-container{
    background-color: #FFFFFF;
    padding: 5px !important;
}
.p-text{
    font-size: 22px !important;
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
 /********/

 .p-price{
     font-size: 30px;
     color: #f57224;
 }
 .btn-sale{
     display: flex;
 }
 .btn-buynow{
     width: 200px;
     height: 44px;
     border: 1px solid #2abbe8;
     background-color: #2abbe8;
     color: #FFFFFF;
     margin-right: 20px;
 }
 .btn-buynow:hover{
     background-color: #26abd4;
 }
 .btn-cart{
     width: 200px;
     height: 44px;
     border: 1px solid #f57224;
     background-color: #f57224;
     color: #FFFFFF;
 }
 .btn-cart:hover{
     background-color: #d0611e;
 }
.b-form-spinbutton{
    margin-left: 20px;
    margin-bottom: 10px;
}
.delivery-details{
    background-color: #fafafa;
}
</style>