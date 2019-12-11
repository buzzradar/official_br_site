/* eslint-disable */

<template>

    <div>


        <!-- Hero Section -->
        <div id="parallaxDOM" class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll"
             data-options='{direction: "normal"}'>
          <!-- Apply your Parallax background image here -->
          <div class="divimage dzsparallaxer--target" :style="heroBgImage"></div>

          <!-- Content -->
          <div class="container position-relative space-3 space-top-md-4 space-bottom-md-3 text-white">
            <div class="w-lg-75">
              <!-- <img class="img-fluid" src="@/assets/buzzradar/img/ces/are_you_ces_ready.png" alt="Are you CES ready?">
              <p>
                <img class="img-fluid mt-3" src="@/assets/buzzradar/img/ces/ces_2020_date.png" alt="January 7-10 (Las Vegas)">
              </p> -->
              <h1 class="display-5 font-size-md-down-5 font-weight-bold mb-2">
                We help CES make smarter<br>data driven decisions
              </h1>
              <h3>And we can help you too!</h3>
              <p>
                <img class="img-fluid mt-3" src="@/assets/buzzradar/img/ces/ces_buzzradar.png" alt="CES & Buzz Radar">
              </p>

            </div>
          </div>
          <!-- End Content -->
        </div>
        <!-- End Hero Section -->







        <!-- Contact Form Section -->
        <div class="container space-2 space-top-md-2">
          <div class="row justify-content-lg-between">

            <div class="col-lg-12">
                <!-- Title -->
                <div class="mb-3">
                  <h2 class="text-primary font-weight-normal">
                    <span class="text-ces">Buzz Radar + CES2020</span>
                  </h2>
                </div>
                <!-- End Title -->
            </div>

            <div class="col-lg-6">

              <p>For the past 7 years we’ve been the real-time data and insights provider for CES and the Consumer Technology Association. Helping them build and grow insight capability. Starting with developing the technogly platform behind the now established Social Media Command Centre that tracks every CES conversation, product and brand online. We also use that data to provide in-depth insight reports for all of CES’s top exhibitors and invaluable data led recommendations for CES across a wide range of topics. From understanding their audiences more intimately to analysing how well their content performs compared to their competitors.<br>
              The result? Across almost all major measurable data points CES is the leading technology conference across digital and social. </p>
              <p>If you’d like to see how we can help your business in the same way we’ve helped CES or would just like the <strong>CES 2020</strong> report then click on the links below.</p>

            </div>

            <div class="col-lg-6 mb-3">

              <div class="col-md-12">

                <!-- Contact Form -->
                <form class="js-validate card shadow-sm p-5">

                  <div class="text-center mb-4">
                    <h3 class="h4">Get the CES 2020 Intelligence Report</h3>
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

                  
                  <button v-on:click="checkForm()" type="button" class="btn btn-ces transition-3d-hover btn-submit-form">Get The Report</button>

                  <div class="form-alert mt-3">
                    
                  </div>

                </form>
                <!-- End Contact Form -->


              </div>    
            </div>


            <div class="col-md-12 mb-5 mt-9">
              
              <div class="card mb-2">
                <div class="card-body">
                  <p class="card-text">
                    
                    <!-- Contacts Info -->
                    <div class="media pl-lg-3">
                      <figure id="icon1" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
                        <img class="js-svg-injector" src="@/assets/buzzradar/img/ces/icons/icon-8.svg" alt="Try the CES Attendee Analyser"
                             data-parent="#icon1">
                      </figure>
                      <div class="media-body">
                        <h3 class="h4">Come visit us at CES we can show you how we can help your team too.</h3>
                        <p class="mb-0"><strong>Booth GL-5A at the Las Vegas Convention centre and CS-14 at the Aria.</strong></p>
                      </div>
                    </div>
                    <!-- End Contacts Info -->

                  </p>

                </div>
              </div>

            </div>

        
          </div>

        </div>
        <!-- End Contact Form Section -->








        <!-- 2 Choice Section -->
        <div class="bg-light">
          <div class="container">
            <div class="row space-2">
              <div class="col-lg-6 u-ver-divider u-ver-divider--none-lg mb-7 mb-lg-0">
                <!-- Contacts Info -->
                <div class="media pr-lg-9">
                  <figure id="icon15" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
                    <img class="js-svg-injector" src="@/assets/buzzradar/img/ces/icons/icon-11.svg" alt="Book a Meeting"
                         data-parent="#icon15">
                  </figure>
                  <div class="media-body">
                    <h3 class="h4">Book a Meeting</h3>
                    <p class="mb-1">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can.</p>
                    <a v-on:click="bookMeeting" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="/casestudies/cs-user-case-allianz">Book a Meeting<span class="fas fa-angle-right ml-2"></span></a>

                  </div>
                </div>
                <!-- End Contacts Info -->
              </div>

              <div class="col-lg-6">
                <!-- Contacts Info -->
                <div class="media pl-lg-9">
                  <figure id="icon4" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
                    <img class="js-svg-injector" src="@/assets/buzzradar/img/ces/icons/icon-1.svg" alt="Try the CES Attendee Analyser"
                         data-parent="#icon4">
                  </figure>
                  <div class="media-body">
                    <h3 class="h4">Try the CES Attendee Analyser</h3>
                    <p class="mb-1">Have some technical questions? Hit us with an email or just say hello on the bottom right corner of the page.</p>
                    <a v-on:click="launchPersonalityAnalyser" class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="#">Try Now<span class="fas fa-angle-right ml-2"></span></a>
                  </div>
                </div>
                <!-- End Contacts Info -->
              </div>
            </div>

          </div>
        </div>
        <!-- End 2 Choice Section -->













        <!-- Testimonials Section -->
        <div class="bg-white">
          <div class="container space-2 space-lg-2">
            <div class="w-md-80 w-lg-80 mx-md-auto">
              <!-- Quote -->
              <figure class="mx-auto text-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px"
                   viewBox="0 0 8 8" style="enable-background:new 0 0 8 8;" xml:space="preserve">
                  <path class="fill-gray-400" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
                    C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
                    c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
                    C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"/>
                </svg>
              </figure>
              <!-- End Quote -->

              <div class="js-slick-carousel u-slick"
                   data-fade="true"
                   data-autoplay="true"
                   data-autoplay-speed="7000"
                   data-pagi-classes="text-center u-slick__pagination mt-4 mb-0">


                <!-- Testimonial -->
                <div class="js-slide">
                  <div class="text-center mb-5">
                    <blockquote class="h3">Buzz Radar has consistently been a valued partner for our organization. They are at the cutting edge of data and AI and bring expert analytics to any project we have worked on with them.</blockquote>
                  </div>
                  <div class="d-flex justify-content-center align-items-center w-lg-50 mx-auto">
                    <div class="u-avatar">
                      <img class="img-fluid rounded-circle" src="@/assets/buzzradar/img/testimonials/tinaanthony.png" alt="Tina Anthony, Director, Digital Strategy at the Consumer Technology Association">
                    </div>
                    <div class="ml-3">
                      <h4 class="h6 mb-0">Tina Anthony</h4>
                      <small class="text-muted">Director, Digital Strategy at the CTA</small>
                    </div>
                  </div>
                </div>
                <!-- End Testimonial -->

              </div>
            </div>
          </div>
        </div>
        <!-- End Testimonials Section -->






    </div>

</template>







<script>

	export default {
        name: 'CES',
        data() {
            return {
              heroBgImage : {
                height : '120%',
                backgroundImage : 'url("'+require('@/assets/buzzradar/img/ces/heroimage2020.jpg')+'")',
              },

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
              envelopeSentAsset : {
                url : require('@/assets/buzzradar/img/ces/sent.png'),
              },

            }
        },
        components: {

        },
        mounted(){

          $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
          $('.js-pagination').remove();


          this.emailObject.inputVal = 'j.infante.garcia@gmail.com';
          this.firstNameObject.inputVal  = 'Peter';
          this.lastNameObject.inputVal  = 'Jones';
          this.companyObject.inputVal  = 'Peter Jones Co';
        },
        updated() {

        }, 
        methods : {
          launchPersonalityAnalyser : function(e) {
            if (e) e.preventDefault();
            window.open('https://insights.buzzradar.com/preview/IDIVQYOP', '_blank');
            return false;
          },
          bookMeeting : function(e) {
            e.preventDefault();
            Calendly.showPopupWidget('https://calendly.com/buzzradar/introduction-meeting');
            return false;
          },
          checkForm: function() {

            if ( !$('.btn-submit-form').hasClass('disabled') ) {

              this.firstNameObject.inputGroupClass['u-has-error'] = !this.firstNameObject.inputVal;
              this.lastNameObject.inputGroupClass['u-has-error'] = !this.lastNameObject.inputVal;        
              this.companyObject.inputGroupClass['u-has-error'] = !this.companyObject.inputVal;        
              this.emailObject.inputGroupClass['u-has-error'] = !this.validEmail(this.emailObject.inputVal); 

              if (!this.firstNameObject.inputGroupClass['u-has-error'] && !this.lastNameObject.inputGroupClass['u-has-error'] && !this.companyObject.inputGroupClass['u-has-error'] && !this.emailObject.inputGroupClass['u-has-error']) {
                console.log("submit the form!!!!!!!", this.envelopeSentAsset);

                var objToSend = {
                  'EMAIL' : this.emailObject.inputVal,
                  'FNAME' : this.firstNameObject.inputVal,
                  'LNAME' : this.lastNameObject.inputVal,
                  'MMERGE3' : this.companyObject.inputVal,
                };

                console.log("Contact Form objToSend-->", objToSend);
                $('.btn-submit-form').addClass('disabled');
                $('.btn-submit-form').html('<i class="fas fa-spinner fa-spin"></i>');


                this.updateMailingList(objToSend);

              }

            }

          },
          validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          },
          updateMailingList : function (dataForm) {
    
              var newsLetterList =  {
                  'ht' : '110cc29c538300a21aa753004897a90886c7e9f6:MTUyNDY3NDg0Ni43MzE2',
                  'listId' : 'c994623d59',
              };

              console.log("MailChimp listName newsletter");
              console.log(newsLetterList);
              console.log(dataForm);

              var url = 'https://buzzradar.us5.list-manage.com/subscribe/post?u=c9003a2b46ba63c35711fc287&amp;id='+newsLetterList.listId;
              url = url.replace('/post?', '/post-json?').concat('&c=?');

              var _this = this;
              $.ajax({
                  url: url,
                  data : dataForm,
                  success: function() {
                    
                    $('.btn-submit-form').removeClass('disabled');
                    $('.btn-submit-form').html("Submit");
                    $('.envelope-holder').html('<img class="envelope-sent animated zoomInUp" style="position: absolute;z-index: 999;top:50px;right:30px;" src="'+_this.envelopeSentAsset.url+'" alt="Email Sent">');

                    $('.form-alert').html('<p><small>Once the report is completed and ready we’ll send it right over</small></p>');

                    //Reset the form
                    setTimeout(function(){
                      $('.envelope-holder').remove();
                      this.firstNameObject.inputVal = '';
                      this.lastNameObject.inputVal = '';        
                      this.companyObject.inputVal = '';        
                      this.emailObject.inputVal = ''; 

                      $('.form-alert').empty();

                    }.bind(_this),4500); 

                  },
                  dataType: 'jsonp',
                  error: function (resp, text) {
                      console.log('mailchimp ajax submit error: ' + text);
                  }
              });

          }
        },
        
	}

</script>








<style lang="scss" scoped>

	@import "compass";

  .text-ces{
    color: #27a0fc;
  }

  .text-ces-pink{
    color: #f781dc;
  }

  .btn-ces{
    background: #27a0fc;
    color:white;
  }

  .btn-ces-purple{
    background: #f781dc;
    color:white; 
  }

  .fill-primary{
    fill:#ff0000 !important;
  }


  .u-avatar {
    width: 5rem;
    height: 5rem;

    img {
      border:4px solid #26a0fc;
    }
  }


</style>
































