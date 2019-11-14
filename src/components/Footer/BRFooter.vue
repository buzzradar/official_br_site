/* eslint-disable */

<template>






	<!-- ========== FOOTER ========== -->
	  <footer id="SVGfooterTopShape" class="svg-preloader position-relative gradient-half-primary-v5">
	    <div class="container space-top-4 space-bottom-1">
	      <div class="row justify-content-lg-start">

	        <div class="col-sm-9 col-lg-4">
	          <!-- Logo -->
	          <router-link to="/" class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-default u-header__navbar-brand-text-white">
				<img alt="Buzz Radar" src="@/assets/buzzradar/svg/buzzradar_logo/buzzlogo_name_white.svg">
			  </router-link>
	          <!-- End Logo -->

	          <p class="small text-white-70">Buzz Radar is the leading social intelligence platform designed for marketers rather than analysts, providing powerful, easy to digest, actionable insights.</p>
	          <!-- Copyright -->
	          <p class="small text-white-70 mb-0">All Rights Reserved, © 2019 Buzz Radar Ltd <a href="/terms-conditions">T&C</a>/<a href="/privacy-policy">Privacy</a></p>
	          <!-- End Copyright -->
	        </div>

	        <div class="col-6 col-sm-4 col-lg-3 ml-lg-auto mb-4">
	          <h3 class="h6 text-white">Contact Us</h3>

	          <!-- Address -->
	          <address class="list-group list-group-transparent list-group-white list-group-flush list-group-borderless mb-0">
	            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-phone-square"></i> +44 2032867369</a>
	            <a class="list-group-item list-group-item-action" href="mailto:info@buzzradar.com"><i class="fas fa-envelope-square"></i> info@buzzradar.com</a>
	            <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-map-marker-alt"></i> 110 Gloucester Ave<br>Primrose Hill<br>London, NW1 8HX</a>
	          </address>
	          <!-- End Address -->
	        </div>

	        <div class="col-6 col-sm-4 col-lg-3 mb-4 ml-1">
	          <div class="mb-4">
	            <h4 class="h6 text-white mb-3">Subscribe</h4>

	            <!-- Subscribe Form -->
	            <form class="js-validate js-form-message">
	              <label class="sr-only" for="subscribeEmail">Your email</label>
	              <div v-if="!subscribed" class="input-group">
	                <input type="email" class="form-control" name="email" id="subscribeEmail" placeholder="Your email" aria-label="Your email" aria-describedby="subscribeButton"
	                       data-msg="Please enter a valid email address.">
	                <div class="input-group-append">
	                  <button v-on:click="updateMailingList" type="button" class="btn btn-primary">
	                    <span class="fas fa-paper-plane"></span>
	                  </button>
	                </div>
	              </div>
	              <div v-else class="input-group">
	                <input type="emailsent" class="form-control" name="emailsent" placeholder="Done, thank you!" disabled>
	                <div class="input-group-append">
	                  <button type="button" class="btn btn-green">
	                    <span class="fas fa-check"></span>
	                  </button>
	                </div>
	              </div>

	              <span v-if="emailError" class="error-msg">Invalid email</span>
	            </form>
	            <!-- End Subscribe Form -->
	          </div>

	          <h4 class="h6 text-white-70 mb-3">Stay in touch</h4>

	          <!-- Social Networks -->
	          <ul class="list-inline mb-0">
	            <li class="list-inline-item">
	              <a class="btn btn-sm btn-icon btn-soft-secondary" target="_blank" href="https://www.facebook.com/BuzzRadar">
	                <span class="fab fa-facebook-f btn-icon__inner"></span>
	              </a>
	            </li>
	            <li class="list-inline-item">
	              <a class="btn btn-sm btn-icon btn-soft-secondary" target="_blank" href="https://twitter.com/buzzradar">
	                <span class="fab fa-twitter btn-icon__inner"></span>
	              </a>
	            </li>
	            <li class="list-inline-item">
	              <a class="btn btn-sm btn-icon btn-soft-secondary" target="_blank" href="https://www.linkedin.com/company/buzz-radar">
	                <span class="fab fa-linkedin btn-icon__inner"></span>
	              </a>
	            </li>
	          </ul>
	          <!-- End Social Networks -->
	        </div>

	      </div>

	    </div>

	    <!-- SVG Wave Shape -->
	    <figure class="position-absolute top-0 right-0 left-0">
	      <img class="js-svg-injector" src="@/assets/buzzradar/svg/components/wave-1-top-sm.svg" alt="Image Description"
	           data-parent="#SVGfooterTopShape">
	    </figure>
	    <!-- End SVG Wave Shape -->

	  </footer>
	  <!-- ========== END FOOTER ========== -->


</template>







<script>

	export default {
		name: 'BRFooter',
		data : function() {
	      return {
	        subscribed : false,
	        emailError : false,
	      }
	    },
	    mounted() {
	      
	    },
		methods : {
			updateMailingList: function () {

				var subscribedEmail = $('#subscribeEmail').val();
				if (this.validEmail(subscribedEmail)) {

					this.emailError = false;
					console.log("It is valid!");

					var newsLetterList =  {
				        'ht' : '110cc29c538300a21aa753004897a90886c7e9f6:MTUyNDY3NDg0Ni43MzE2',
				        'listId' : 'a06aa57adb',
				    };

				    var dataForm = {
				        "mc_signupsource" : 'hosted',
				        "EMAIL" : subscribedEmail,
				        "FNAME" : " ",
				        "LNAME" : " ",
				    };

				    console.log("MailChimp listName newsletter");
				    console.log(newsLetterList);
				    console.log(dataForm);

				    var url = 'https://buzzradar.us5.list-manage.com/subscribe/post?u=c9003a2b46ba63c35711fc287&amp;id='+newsLetterList.listId;
				    url = url.replace('/post?', '/post-json?').concat('&c=?');

				    var $self = this;

				    $.ajax({
				        url: url,
				        data : dataForm,
				        success: function() {
				        	$self.subscribed = true;
				        	console.log("sucess....", $self.subscribed)
				        },
				        dataType: 'jsonp',
				        error: function (resp, text) {
				            console.log('mailchimp ajax submit error: ' + text);
				        }
				    });

				}else{
					this.emailError = true;
				}
   
			},
			validEmail: function (email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		}, 
	}

</script>








<style lang="scss" scoped>

	@import "compass";

	.navbar-brand{
		margin-bottom:10px;
	}

	.btn-green{
		background: #21c6ca !important;
		color: white;
		cursor: default !important;
	}

	.error-msg{
		color:#ff8282;
	}

</style>
































