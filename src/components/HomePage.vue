<template>
<div class="HomePage">
<!--/////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\-->
<div class="container-fluid" >

	<!--<h1 class="form-heading">LOGIN FORM</h1>  -->
	<div>
	<p style="text-align:left;font-size: 30px;">
	<img  src="/static/lms2.png" alt="logo" width="100" height="100" align="left" >
	Library Management System</p>
	<br><br><br><br>
	</div>




  <!--////////////////////////////////////////////NAV BAR\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\-->
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<!--  <a @click="home_route()" class="navbar-brand" >LMS</a>-->
	<router-link class="navbar-brand" to="/HomePage">LMS </router-link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
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
        <!--<a @click="issueReturn_route()" class="nav-link" >Issue</a>-->
				<router-link class="nav-link" to="/IssueReturn">Issue </router-link>
      </li>
      <li class="nav-item">
				<router-link class="nav-link" to="/IssueReturn">Return </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="bookentry">BookEntry</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" v-model="booksearched" type="search" placeholder="Search Book" aria-label="Search">
      <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
			<a @click="searchBook()" class="btn btn-outline-success my-2 my-sm-0">Search</a>

    </form>
  </div>
</nav>


  </div>

<!--////////////////////////////////////////////Home\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\-->

	<div class="home-page">


		<div class="row">
			<div class="col">
					<div class="col1">
						<div class="panel">
							<div class="col"   >NEW BOOKS</div><br>
							<div class="row"  v-for="book in books" :key="book.id" >

										<h5 class="col">{{ book.name }}</h5>
										<h6 class="col">{{ book.isbn }}</h6>

								</div>


						</div>
					</div>
			</div>

			<div class="col" >
					<div class="col2">
						<div class="panel2">
								<h5 >Search from Available Books</h5>
							<form class="form-inline my-2 my-lg-0">
								<input class="form-control mr-sm-2" v-model="booksearched" type="search" placeholder="Search Book" aria-label="Search">
								<!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
								<a @click="searchBook()" class="btn btn-outline-success my-2 my-sm-0">Search</a>

							</form>
						</div>
					</div>
			</div>
		</div>



    <br><br>
    <marquee  behavior="scroll" scrollamount="5" style="; border:3px solid Tomato;border-style: inset; "> Kindly Maintain Decorum of Library</marquee>
      <br><br>
		<!--BREAD CRUMB-->
		<nav aria-label="breadcrumb">
		  <ol class="breadcrumb">
			<li class="breadcrumb-item"><a @click="login_route()">LoginPage</a></li>
			<li class="breadcrumb-item active" aria-current="page">Home</li>
		  </ol>
		</nav>


	</div>
</div>



</div>

</template>

<!--///////////////////////////SCRIPT///////////////////-->

<script>
import axios from 'axios'
export default {
  name: 'HomePage',
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



    .HomePage{ background-image:url("https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg"); background-attachment: fixed; background-position:center; background-size:cover; padding:60px;
    border-width:5px;
    border-style:inset;
    border-color: coral;

    }
    .form-heading { color:#fff; font-size:50px; position:center;}
    .panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
    .panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
    .home-page .form-control {
      background: #f7f7f7 none repeat scroll 0 0;
      border: 1px solid #d4d4d4;
      border-radius: 4px;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
    }
    .col1 {
      background: #ffffff none repeat scroll 0 0;
      border-radius: 30px;
      margin: 30px ;
      max-width: 90%;
      padding: 30px 30px 30px 31px;

      border-width:2px;
      border-style:inset;
      border-color: coral;

    }
		.col{color: #FF0000;
		font-size: 18px;
		text-decoration: underline;

		}

    .panel2 h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}
    .panel2 p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}
    .col2 {
      background: #ffffff none repeat scroll 0 0;
      border-radius: 30px;
      margin: 30px ;
      max-width: 90%;
      padding: 30px 30px 30px 31px;

      border-width:2px;
      border-style:outset;
      border-color: coral;


    }
    /*.home-page .form-row {
      margin-bottom:10px;
    }*/
    .home-page{ text-align:left;}
    .forgot a {
      color: #777777;
      font-size: 14px;
      text-decoration: underline;

    }
    .home-page  .btn.btn-primary {
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
    .home-page .btn.btn-primary.reset {
      background: #ff9900 none repeat scroll 0 0;
    }
    /*.back { text-align: left; margin-top:10px;}
    .back a {color: #444444; font-size: 13px;text-decoration: none;}
    */


</style>
