<template>
<div class="IssueReturn">
<!--/////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\-->
<div class="container-fluid" >

	<div>
	<p style="text-align:left;font-size: 30px;">
	<img  src="/static/lms2.png" alt="logo" width="100" height="100" align="left" >
	Library Management System</p>
	<br><br><br><br>
	</div>




  <!--////////////////////////////////////////////NAV BAR\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\-->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!--<a @click="home_route()" class="navbar-brand" >LMS</a>-->
  <router-link class="navbar-brand" to="/HomePage">LMS </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/HomePage">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Books">Books </router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Reserve
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Check Reservation</a>
          <a class="dropdown-item" href="#">List Reservation</a>
          <div class="dropdown-divider"></div>
          <a @click="book_route()" class="dropdown-item" >Books</a>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active" to="/IssueReturn">Issue </router-link>
        <!--<a @click="issueReturn_route()" class="nav-link" >Issue</a>-->
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/IssueReturn">Return </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="bookentry">BookEntry</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" v-model="booksearched" type="search" placeholder="Search" aria-label="Search">
<!--      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
			<a @click="searchBook()" class="btn btn-outline-success my-2 my-sm-0">Search</a>

    </form>
  </div>
</nav>


  </div>

<!--////////////////////////////////////////////Home\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\-->

<div class="issue-return">

  <div class="row">


  <div class="col">
  <div class="main-div">
      <div class="panel">
        <h2>Issue & Return</h2>
        <p>Please enter the following details</p>
      </div>
      <!--	<form action="/home_page.html" method="get">-->
          <form >

        <div class="col">

      <br>
        <!--<div class="form-row" >
          <label >Roll No</label>
          <input class="form-control"  v-model="memeberid" type="text" name="rollno" placeholder="eg 16i0163" minlength="7" maxlength="7" required>
        </div>-->
        <div class="form-row" >
          <label >Roll No1</label>
          <select name="rollnoselect" class="form-control"  v-model="member" required >
            <option v-for="member in members" :key="member.id"  v-bind:value="member.id">{{ member.roll_no }}</option>
            </select>          </div>
      <br>
      <!--  <div class="form-row">
          <label >First Name</label>
          <input class="form-control" type="text" name="firstname" placeholder="eg Hamza" required>
        </div>-->
        <div class="form-row" >
          <label >First Name</label>
          <select name="firstname" class="form-control"  v-model="firstname" required >
            <option v-for="member in members" :key="member.id"  v-bind:value="member.first_name">{{ member.first_name }}</option>
            </select>          </div>

      <br>
        <div class="form-row">
          <label >Program</label>
          <!--<input class="form-control" type="text" name="program" required>-->
          <select name="program" class="form-control" required>
            <option value="BS-CS">BS-CS</option>
            <option value="BS-EE">BS-EE</option>
            <option value="BBA">BBA</option>
            <option value="A&F">A&F</option>
            </select>

        </div>

        <br>
          <div class="form-row" >
            <label >Book Name to be Issued</label>
            <select name="bookselect" class="form-control"  v-model="book" required>
              <option v-if="book.description=='false'" v-for="book in books" :key="book.id"  v-bind:value="book.id">{{ book.name }}</option>
              </select>          </div>

      <!--<br>
        <div class="form-row">
          <label >Issued Date</label>
          <input class="form-control" type="date" name="issueddate" required>
        </div>
    -->

      <br>
      <br>
        <div class="form-row">
          <div class="form-check">
            <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
            <label class="form-check-label" for="invalidCheck3">
            Recheck Details
            </label>
            <div class="invalid-feedback">
              You must NOT agree before submitting.
            </div>
          </div>
        </div>

      </div>


      <button @click="postt()" id="issuebook" class="btn btn-primary" type="submit">Issue</button>

      <!--<script type="text/javascript">
          document.getElementById("issuebook").onclick = function () {
              location.href = "home_page.html";
          };
      </script>-->

      <br>
      <input type="reset">


      <h4>Add Return button </h4>

      </form>
    </div>
  </div>

    <div class="col">
    <div class="main-div2" >
        <div class="panel2">
        <legend>Issued Book:</legend>
          <!--<label >Delayed Fine</label>
        <input class="form-control" type="text" name="delayedfine">
        <br>
        <label >Lost Fine</label>
        <input class="form-control" type="text" name="lostfine" >
        <br>
        <label >Damaged Fine</label>
        <input class="form-control" type="text" name="damagedfine" >
        <br>
        <label >Total Fine</label>
        <input class="form-control" type="text" name="totalfine" >
      -->
        <br>
      </div>
      </div>
    </div>




</div><!--ROW END-->
</div><!--ISSUE RETURN END-->

    <br><br>
    <marquee  behavior="scroll" scrollamount="5" style="; border:3px solid Tomato;border-style: inset; "> Kindly Maintain Decorum of Library</marquee>
      <br><br>
		<!--BREAD CRUMB-->
		<nav aria-label="breadcrumb">
		  <ol class="breadcrumb">
			<li class="breadcrumb-item"><a @click="login_route()">LoginPage</a></li>
      <li class="breadcrumb-item"><a @click="home_route()">Home</a></li>
			<li class="breadcrumb-item active" aria-current="page">Issue & Return</li>
		  </ol>
		</nav>

		<p class="bottom-text"> Designed by Hamza Azam</p>



</div>



</div>

</template>

<!--///////////////////////////SCRIPT///////////////////-->

<script>
import axios from 'axios'
export default {
  name: 'IssueReturn',
  data () {
    return {
			isverifiedbook: {status: "falsebook"}

    }
  },

  computed: {
		booksHavingImages () {
			return this.books.filter(book => book.id !== null)
		},
		books () {
			return this.$store.state.booksmodule.books

		},
    members () {
			return this.$store.state.login.selectedIssueMember

		}
  },

  created () {

     const that = this
    axios.get('http://localhost:3000/api/v1/books')
    .then(response => {
      that.$store.commit('booksmodule/UpdateBooks', response.data)
    })
  },

  methods: {
		home_route() {/*console.log(getDate())*/
			this.$router.push('/HomePage')
	},
		book_route() {this.$router.push('/Books')},
		issueReturn_route() {this.$router.push('/IssueReturn')},
		login_route() {this.$router.push('/')},
    postt() {
      axios.post('http://localhost:3000/api/v1/issues', {
        member_id : this.member,
        book_id : this.book
      })
      .then(response => {})
      /*.catch(e => {
        console.log("Error")
        this.errors.push(e)
      })*/
      this.$router.push('/IssueCompleted')
    },

    issue_check() {console.log(this.book)
     console.log(this.member)
     console.log(this.firstname)
    //console.log(this.book.id)
		},
		searchBook(){
			this.$store.commit('booksmodule/SearchedBook', [this.booksearched,this.isverifiedbook])
				if(this.isverifiedbook.out.status === "succeedbook") {
						this.$router.push('/BookSearchValidPage')
				}
				else{
					console.log("No Book exists");
						this.$router.push('/BookSearchInvalidPage')
				}
		}
  }
}

</script>





<!-- /////////////////STYLE ////////////Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.IssueReturn{ background-image:url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg"); background-repeat:no-repeat; background-position:center; background-size:cover; padding:30px;
border-width:5px;
border-style:inset;
border-color: coral;

}
.form-heading { color:#fff; font-size:50px; position:center;}
.panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
.panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
.issue-return .form-control {
background: #f7f7f7 none repeat scroll 0 0;
border: 1px solid #d4d4d4;
border-radius: 4px;
font-size: 14px;
height: 50px;
line-height: 50px;
}
.main-div {
background: #ffffff none repeat scroll 0 0;
border-radius: 3px;
margin: 10px ;
max-width: 90%;
padding: 30px 30px 30px 31px;
}



.main-div2 {
background: #ffffff none repeat scroll 0 0;
border-radius: 3px;
margin: 10px ;
max-width: 90%;
padding: 30px 30px 30px 31px;
border-width:5px;
border-style:outset;
border-color: tomato red;
}
.panel2 h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
.panel2 p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}

.issue-return{ text-align:left;}
.forgot a {
color: #777777;
font-size: 14px;
text-decoration: underline;
}
.issue-return  .btn.btn-primary {
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
.issue-return .btn.btn-primary.reset {
background: #ff9900 none repeat scroll 0 0;
}
/*.back { text-align: left; margin-top:10px;}
.back a {color: #444444; font-size: 13px;text-decoration: none;}
*/


</style>
