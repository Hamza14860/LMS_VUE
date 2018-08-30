<template>
  <div id="LoginForm">

      <div class="container">

            <!--<h1 class="form-heading">LOGIN FORM</h1>  -->
            <p style="text-align:center;">
            <img  src="/static/lms2.png" alt="logo" width="100" height="100" align="middle" >

          <!--  <img  src="lms2.png" alt="logo" width="100" height="100" align="middle" >-->
            Library Management System</p>


            <div class="login-form">
              <div class="main-div">
                    <div class="panel">
                    <h2>Member Login</h2>
                    <p>Please enter your email and password</p>
                    </div>
                    <form id="Login" >

                      <div class="form-group" >
                            <input type="text" class="form-control" v-model="input.email" placeholder="Email" required>
                      </div>


                      <div class="form-group" >
                              <input type="password" class="form-control" v-model="input.password" placeholder="Password" required>
                      </div>


                      <div class="forgot">
                          <a href="reset.html">Forgot password?</a>
                      </div>




            <!--ADD SUBMIT BUTTON CODE HERE-->
              <a @click="checkLogin()" class="btn btn-primary">Login</a>
            <!--  <router-link  v-on:click="checkLogin()"  id="myButton" type="submit" class="btn btn-primary" to="/HomePage">Login </router-link>-->

                <!--SCRIPT-->


                <!--<button type="submit" class="btn btn-primary">Login</button>-->

                    </form>
                  </div>

              <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item active" aria-current="page">LoginPage</li>
                  </ol>
              </nav>


            <p class="bottom-text"> Designed by Hamza Azam</p>
            </div>
          </div>


          <!--/////////////////////////////-SIDENAV/////////////////-->
          <div v-show="isOpen" id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" v-on:click="toggleNav()">&times;</a>
          <router-link to="/About">About </router-link>
          <router-link to="/About">Contact </router-link>

          </div>

          <span style="font-size:30px;cursor:pointer" v-on:click="toggleNav()">&#9776; About</span><!--@click instead of onclick-->


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
    //  members: [],
      input: {
                  email: "",
                  password: "",

              },
      isOpen: false,
      isverified: {status: "false"}
    }
  },
  computed: {

  },

  created () {

      const that = this
    //axios.get('https://botiquestore.herokuapp.com/api/v1/items')
    axios.get('http://localhost:3000/api/v1/members')
    .then(response => {
      that.$store.commit('login/UpdateMembers', response.data)
    })
  },
  methods: {

    checkLogin() {
                if(this.input.email != "" && this.input.password != "") {

                  this.$store.commit('login/checkLogin',[ this.input.email,this.input.password,this.isverified])
                  if(this.isverified.out.status === "succeed") {

                      this.$router.push('/HomePage')
                    }
                  else{
                    console.log("EMAIL OR PASSWORD INCORRECT");
                      this.$router.push('/')
                //console.log(this.isverified.out)
              }



                    //.then(() => this.$router.push('/HomePage'))
                    //.catch(err => console.log(err))
                } else {
                    console.log("A email and password must be present");
                }
            },
      toggleNav () {
        this.isOpen = ! this.isOpen
    }
  }
}


/*document.getElementById("myButton").onclick = function () {
    location.href = "/HomePage";
    <router-link to="/HomePage"> </router-link>

};*/





</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #LoginForm{ background-image:url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg"); background-repeat:no-repeat; background-position:center; background-size:auto; padding:30px;}

  .form-heading { color:#fff; font-size:50px; position:center;}
  .panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
  .panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
  .login-form .form-control {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }
  .main-div {
    background: #ffffff none repeat scroll 0 0;
    border-radius: 2px;
    margin: 10px auto 30px;
    max-width: 38%;
    padding: 50px 70px 70px 71px;

  }

  .login-form .form-group {
    margin-bottom:10px;
  }
  .login-form{ text-align:center;}
  .forgot a {
    color: #777777;
    font-size: 14px;
    text-decoration: underline;
  }
  .login-form  .btn.btn-primary {
    background: #f0ad4e none repeat scroll 0 0;
    border-color: #f0ad4e;
    color: #ffffff;
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0;
  }
  .forgot {
    text-align: left; margin-bottom:30px;
  }
  .bottom-text {
    color: #ffffff;
    font-size: 14px;
    margin: auto;
  }
  .login-form .btn.btn-primary.reset {
    background: #ff9900 none repeat scroll 0 0;
  }
  /*.back { text-align: left; margin-top:10px;}
  .back a {color: #444444; font-size: 13px;text-decoration: none;}
  */
  /*SIDE NAV STYLE BELOW*/
  .sidenav {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #8B0000;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
  }

  .sidenav a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
  }

  .sidenav a:hover {
      color: #f1f1f1;
  }

  .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }


</style>
