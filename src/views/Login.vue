<template>
    <div class="container">
    <div class="row">
        <div class="offset-4 col-md-4">
            <h3>Welcome to Vchat</h3>
            <br><br><br>
            <div class="form-login">
                <h5>Login Here</h5>                
            <span class="group-btn">     
                <button @click="login" class="btn btn-primary btn-md">Login with Google <i class="fa fa-sign-in"></i></button>
            </span>

            </div>
        
        </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {

  methods: {
      login(){
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

                firebase.auth().signInWithPopup(provider).then(result=> {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                this.$router.push('/')

                }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                //...
                });
      }
    
  }
}
</script>

<style>
    @import url(http://fonts.googleapis.com/css?family=Roboto:400);
body {
  background-color:#fff;
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
}

.container {
    padding: 25px;
    position: 0 auto;
}

.form-login {
    background-color: #EDEDED;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    border-color:#d2d2d2;
    border-width: 5px;
    box-shadow:0 1px 0 #cfcfcf;
}

h4 { 
 border:0 solid #fff; 
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}

.form-control {
    border-radius: 10px;
}

.wrapper {
    text-align: center;
}
</style>