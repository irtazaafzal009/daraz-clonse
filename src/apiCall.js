import axios from 'axios';
import Vuex from 'vuex'

export default{
    methods: {
        getAllProducts : async function(){
            try {
            this.loader = true
            let response  = await axios.get('https://fakestoreapi.com/products?limit=6');
            this.allProducts = response.data;
            this.allProducts.forEach(product => {
                let productTitle = product.title.split(' ').join('_');
                product.route = productTitle
            });
            console.log(this.allProducts)
            if(this.allProducts){
                this.loader = false
            }
            this.$store.commit('productsList', this.allProducts)
            } catch (error) {
                console.error(error)
            }
        }
    },  
}