<template>
  
  <div>

    
    <!-- Contact Form Section -->
    <div class="container space-md-3">
      <div class="row justify-content-lg-between">
        <div class="col-lg-5 mb-9 mb-lg-0">
          <!-- Title -->
          <div class="mb-7">
            <h1 class="text-primary font-weight-normal">
              <span class="text-primary">Contact Us</span>
            </h1>

            <div class="row">
              <div class="col-md-6">
                <address class="list-group list-group-transparent list-group-flush list-group-borderless mb-0">
                  <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-phone-square"></i> +44 2032867369</a>

                  <a class="list-group-item list-group-item-action" href="#"><i class="fas fa-map-marker-alt"></i> 110 Gloucester Ave<br>Primrose Hill<br>London, NW1 8HX</a>
                </address>
              </div>
              <div class="col-md-6">
                <address class="list-group list-group-transparent list-group-flush list-group-borderless mb-0">
                  <a class="list-group-item list-group-item-action" href="mailto:info@buzzradar.com" target="_blank"><i class="fas fa-envelope-square"></i> info@buzzradar.com</a>

                  <a class="list-group-item list-group-item-action" href="http://twitter.com/buzzradar" target="_blank"><i class="fab fa-twitter-square"></i> twitter.com/buzzradar</a>

                  <a class="list-group-item list-group-item-action" href="https://www.linkedin.com/company/buzz-radar/" target="_blank"><i class="fab fa-linkedin"></i> company/buzz-radar</a>

                </address>
              </div>
            </div>

          </div>
          <!-- End Title -->

          <!-- Google Map -->
          <div class="embed-responsive embed-responsive-21by9 u-gmap-interactive min-height-300 mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9925.723787915656!2d-0.16278740237378667!3d51.5419963676922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2suk!4v1569422318526!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
          <!-- End Google Map -->

          <!-- Office Hours -->
          <div class="media">
            <h4 class="h6 mr-3">Office Hours:</h4>
            <div class="media-body">
              <p class="small mb-0">Monday - Friday: 09:00 AM - 06:00 PM</p>
              <p class="small mb-0">Closed on Sunday &amp; Holidays</p>
            </div>
          </div>
          <!-- End Office Hours -->
        </div>

        <div class="col-lg-6">

          <div class="col-md-12">














            <!-- Contact Form -->
            <form class="js-validate card shadow-sm p-5">

              <div class="text-center mb-4">
                <h3 class="h4">Drop us a message</h3>
                <p>Find the right solution.</p>
              </div>

              <div class="envelope-holder"></div>
              
              <div class="row mx-gutters-2">
                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <label class="sr-only">First name</label>

                  <div class="js-form-message">
                    <div v-bind:class="firstNameObject.inputGroupClass">
                      <input type="text" class="form-control" name="firstName" placeholder="First name" aria-label="First name" required
                             v-model="firstNameObject.inputVal"
                             data-msg="Please enter your first name."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <label class="sr-only">Last name</label>

                  <div class="js-form-message">
                    <div v-bind:class="lastNameObject.inputGroupClass">
                      <input type="text" class="form-control" name="lastName" placeholder="Last name" aria-label="Last name" required
                             v-model="lastNameObject.inputVal"
                             data-msg="Please enter your last name."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="w-100"></div>

                <div class="col-md-12 mb-3">
                  <!-- Input -->
                  <label class="sr-only">Company name</label>

                  <div class="js-form-message">
                    <div v-bind:class="companyObject.inputGroupClass">
                      <input type="text" class="form-control" name="companyName" placeholder="Company name" aria-label="Company name" required
                             v-model="companyObject.inputVal"
                             data-msg="Please enter your last name."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="col-md-12 mb-3">
                  <!-- Input -->
                  <label class="sr-only">Email address</label>

                  <div class="js-form-message">
                    <div v-bind:class="emailObject.inputGroupClass">
                      <input type="text" class="form-control" name="email" placeholder="Email address" aria-label="Email address" required
                             v-model="emailObject.inputVal"
                             data-msg="Please enter a valid email address."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="w-100"></div>

              </div>

              <!-- Input -->
              <div class="mb-5">
                <label class="sr-only">How can we help you?</label>

                <div class="js-form-message">
                  <div v-bind:class="messageObject.inputGroupClass">
                    <textarea class="form-control" rows="4" name="messageContent" placeholder="Your comment goes here..." aria-label="Hi there, I would like to ..." required
                            v-model="messageObject.inputVal"
                            data-msg="Please enter a reason."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"></textarea>
                  </div>
                </div>
              </div>
              <!-- End Input -->

              
              <button v-on:click="checkForm()" type="button" class="btn btn-primary transition-3d-hover btn-submit-form">Submit</button>
            </form>
            <!-- End Contact Form -->






























          </div>    
        </div>


        <div class="col-lg-1 d-none d-lg-inline-block">
          <!-- Illustration -->
          <figure id="contactSVGillustration2" class="svg-preloader ie-chatting-man position-absolute bottom-0 left-0 w-100">
            <img class="js-svg-injector" src="@/assets/buzzradar/svg/contactus/contactus.svg" alt="Image Description"
                 data-parent="#contactSVGillustration2">
          </figure>
          <!-- End Illustration -->
        </div>


      </div>
    </div>
    <!-- End Contact Form Section -->



  </div>

</template>



<script>

 	export default {

 		name : 'Contactus',
    data () {
      return {
        firstNameObject : {
          'inputVal' : null,
          'inputGroupClass' : {
            'input-group' : true,
            'u-has-error' : false,  
          }
        },
        lastNameObject : {
          'inputVal' : null,
          'inputGroupClass' : {
            'input-group' : true,
            'u-has-error' : false,  
          }
        },
        companyObject : {
          'inputVal' : null,
          'inputGroupClass' : {
            'input-group' : true,
            'u-has-error' : false,  
          }
        },
        emailObject : {
          'inputVal' : null,
          'inputGroupClass' : {
            'input-group' : true,
            'u-has-error' : false,  
          }
        },
        messageObject : {
          'inputVal' : null,
          'inputGroupClass' : {
            'input-group' : true,
            'u-has-error' : false,  
          }
        },
        envelopeSentAsset : {
          url : require('@/assets/buzzradar/img/contactus/sent.png'),
        }
      }
    },
    mounted() {
      // this.emailObject.inputVal = 'j.infante.garcia@gmail.com';
      // this.firstNameObject.inputVal  = 'Peter';
      // this.lastNameObject.inputVal  = 'Jones';
      // this.companyObject.inputVal  = 'Peter Jones Co';
      // this.messageObject.inputVal  = 'This is the message of the email.';
    },
    methods : {
      checkForm: function() {

        if ( !$('.btn-submit-form').hasClass('disabled') ) {

          this.firstNameObject.inputGroupClass['u-has-error'] = !this.firstNameObject.inputVal;
          this.lastNameObject.inputGroupClass['u-has-error'] = !this.lastNameObject.inputVal;        
          this.companyObject.inputGroupClass['u-has-error'] = !this.companyObject.inputVal;        
          this.emailObject.inputGroupClass['u-has-error'] = !this.validEmail(this.emailObject.inputVal); 
          this.messageObject.inputGroupClass['u-has-error'] = !this.messageObject.inputVal;     

          if (!this.firstNameObject.inputGroupClass['u-has-error'] && !this.lastNameObject.inputGroupClass['u-has-error'] && !this.companyObject.inputGroupClass['u-has-error'] && !this.emailObject.inputGroupClass['u-has-error'] && !this.messageObject.inputGroupClass['u-has-error']) {
            console.log("submit the form!!!!!!!", this.envelopeSentAsset);

            var objToSend = {
              email : this.emailObject.inputVal,
              firstName : this.firstNameObject.inputVal,
              lastName : this.lastNameObject.inputVal,
              companyName : this.companyObject.inputVal,
              messageContent : this.messageObject.inputVal,
            };

            console.log("Contact Form objToSend-->", objToSend);
            $('.btn-submit-form').addClass('disabled');
            $('.btn-submit-form').html('<i class="fas fa-spinner fa-spin"></i>');



            // setTimeout(function(){
            //   $('.btn-submit-form').removeClass('disabled');
            //   $('.btn-submit-form').html("Submit");
            //   $('.envelope-holder').html('<img class="envelope-sent animated zoomInUp" style="position: absolute;z-index: 999;top:50px;right:30px;" src="'+this.envelopeSentAsset.url+'" alt="Email Sent">');

            //   setTimeout(function(){
            //     $('.envelope-holder').remove();
            //     this.firstNameObject.inputVal = '';
            //     this.lastNameObject.inputVal = '';        
            //     this.companyObject.inputVal = '';        
            //     this.emailObject.inputVal = ''; 
            //     this.messageObject.inputVal = '';     
            //   }.bind(this),2000); 

            // }.bind(this),1500);



            $.ajax({
                type: 'GET',
                url: 'http://insights.buzzradar.com/api/contact-form',
                data : objToSend,
                success: function(json) {
                  console.log("success",json);
                  if (json.status == "ok") {
                    $('.btn-submit-form').removeClass('disabled');
                    $('.btn-submit-form').html("Submit");
                    $('.envelope-holder').html('<img class="envelope-sent animated zoomInUp" style="position: absolute;z-index: 999;top:50px;right:30px;" src="'+this.envelopeSentAsset.url+'" alt="Email Sent">');

                    //Reset the form
                    setTimeout(function(){
                      $('.envelope-holder').remove();
                      this.firstNameObject.inputVal = '';
                      this.lastNameObject.inputVal = '';        
                      this.companyObject.inputVal = '';        
                      this.emailObject.inputVal = ''; 
                      this.messageObject.inputVal = '';     
                    }.bind(this),2000); 

                  }
                }.bind(this),
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                  console.log ("%c -> ", "background:#ff0000;", "GET APICalls.ajaxCall() ---> Error", XMLHttpRequest.responseJSON);
                }
            });
          }

        }

      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

  .envelope-sent{
    position: absolute;
    z-index: 999;
    top:100px;
  }

</style>

