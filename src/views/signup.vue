<template>
    <div class="login">
        <div class="head">
            <div class="container">
                <b-row>
                    <b-col sm="12" md="6" offset="2">
                        <h4>Create your Daraz Account.</h4>
                    </b-col>
                    <b-col sm="12" md="4">
                        <p class="txt-signup">Already member ? <router-link to="/login">Login</router-link> here.</p>
                    </b-col>
                </b-row>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <b-row>
                    <b-col offset="0" md="8">
                        <b-row>
                            <p class="txt-login col-md-12 col-sm-12">Email*</p>
                            <input placeholder="Please provide your email" class="input-login col-md-12 col-sm-12" type="text">
                        </b-row>
                        <b-row>
                            <p class="txt-pswd col-md-12 col-sm-12">Password *</p>
                            <input placeholder="Minimum 6 characters with a number and letter" class="input-pswd col-md-12 col-sm-12" type="text">
                        </b-row>
                    </b-col>
                    <b-col md="4">
                        <b-row>
                            <p class="txt-login col-md-12 col-sm-12">Full Name*</p>
                            <input placeholder="Provide your full name" class="input-login col-md-12 col-sm-12" type="text">
                        </b-row>
                        <b-row>
                            <button class="btn-sign">
                                <b-icon icon="person-plus"></b-icon>
                                Sign Up
                            </button>
                            <p class="txt-policy">By clicking "SIGN UP", I agree Daraz's Term of Use and Privacy Policy. </p>
                            <p class="txt-policy">Or SIGNUP with </p>
                        </b-row>
                        <b-row>
                            <button class="btn-sign-email">
                                <b-icon icon="google"></b-icon>
                                Sign Up with Email
                            </button>
                        </b-row>
                        <b-row>
                            <button class="btn-fb">
                                <b-icon icon="facebook"></b-icon>
                                Facebook
                            </button>
                            <button class="btn-google">
                                <b-icon icon="google"></b-icon>
                                Google
                            </button>
                        </b-row>
                    </b-col>   
                </b-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Login',
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
.login{
    background-color: #eff0f5 !important;
    padding-bottom: 50px;
}
.head{
    padding-top: 40px;
}
.txt-signup{
    color: #757575;
    font-size: 12px;
    padding-top: 10px;
}
.card{
    background-color: #FFFFFF;
    max-width: 800px;
    margin: auto;
    padding:10px 60px 60px 60px;
    border-radius: 0px;
}
.input-login{
    height: 40px;
    border: 1px solid #ddd;
    font-size: 14px;
    max-width: 90%;
}
.txt-login{
    font-size: 12px;
    color: #424242;
    padding: 5px 0 0 0;
    margin-bottom: 5px;
}
.input-pswd{
    height: 40px;
    border: 1px solid #ddd;
    font-size: 14px;
    max-width: 90%;
}
.txt-pswd{
    font-size: 12px;
    color: #424242;
    padding: 5px 0 0 0;
    margin-bottom: 5px;
    margin-top: 10px;
}
.txt-forgot{
    color: #049cb9;
    font-size: 12px;
    float: left;
}
.btn-login{
    width: 300px;
    border-style: solid;
    background-color: #f57224;
    border-radius: 2px;
    border-color: #f57224;
    transition: all .3s ease-out;
    color: #FFFFFF;
    height: 48px;
}
.g-text{
    font-size: 12px;
    color: #757575;
    margin-top: 5px;
}
.btn-fb{
    width: 45%;
    border-style: solid;
    background-color: #3b5998;
    border-radius: 2px;
    border-color: #3b5998;
    transition: all .3s ease-out;
    color: #FFFFFF;
    height: 40px;
    margin-bottom: 10px;
    margin-right:10%;
}
.btn-google{
    width: 45%;
    border-style: solid;
    background-color: #d34836;
    border-radius: 2px;
    border-color: #d34836;
    transition: all .3s ease-out;
    color: #FFFFFF;
    height: 40px;
}
.btn-sign{
    width: 300px;
    border-style: solid;
    background-color: #f57224;
    border-radius: 2px;
    border-color: #f57224;
    transition: all .3s ease-out;
    color: #FFFFFF;
    height: 48px;
    margin-top:10px;
    margin-bottom:10px
}
.txt-policy{
    font-size:12px;
}
.btn-sign-email{
      width: 300px;
    border-style: solid;
    background-color: #FFFFFF;
    border-radius: 2px;
    border-color: #f57224;
    transition: all .3s ease-out;
    color: #f57224;
    height: 48px;
    margin-top:10px;
    margin-bottom:10px  
}
</style>