<template>
  <div id="LoginForm">

      <div class="container">

      <!--<h1 class="form-heading">LOGIN FORM</h1>  -->
      <p style="text-align:center;">
      <img  src="lms2.png" alt="logo" width="100" height="100" align="middle" >
      Library Management System</p>


      <div class="login-form">
        <div class="main-div">
              <div class="panel">
              <h2>ISSUE COMPLETED</h2>
              <a @click="home_route()">HomePage</a>
            </div>

            </div>

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">IssueComplete</li>
            </ol>
        </nav>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IssueCompleted',
  data () {
    return {

    }
  },
  computed: {

  },

  created () {

  },
  methods: {
    home_route() {this.$router.push('/HomePage')}
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


</style>
