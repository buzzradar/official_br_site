/* eslint-disable */

<template>

    <div>


        <!-- Hero Section -->
        <div id="parallaxDOM" class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll"
             data-options='{direction: "normal"}'>
          <!-- Apply your Parallax background image here -->
          <div class="divimage dzsparallaxer--target" :style="heroBgImage"></div>

          <!-- Content -->
          <div class="container position-relative space-3 space-top-md-5 space-bottom-md-5 text-white">
            <div class="w-lg-75">
              <!-- <img class="img-fluid" src="@/assets/buzzradar/img/ces/are_you_ces_ready.png" alt="Are you CES ready?">
              <p>
                <img class="img-fluid mt-3" src="@/assets/buzzradar/img/ces/ces_2020_date.png" alt="January 7-10 (Las Vegas)">
              </p> -->
              

            </div>
          </div>
          <!-- End Content -->
        </div>
        <!-- End Hero Section -->





        <!-- Personality Traits -->
        <div class="bg-light">
        <div class="container space-2 space-top-md-2">
          <div class="row justify-content-lg-between">

            <!-- The Networker -->
            <div class="col-lg-12 mb-8">
                <div class="media">
                  <span class="btn btn-icon btn-lg rounded-circle mr-5" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/Networker.svg" width="100%" alt="Personality Trait">
                  </span>
                  <div class="media-body">
                    <h3 class="h3 text-secondary font-weight-bold">The Networker</h3>
                    <p class="mb-0">
                      The networker aims to meet and make lasting connections with other industry professionals. Often found at mixers and events asking lots of questions, getting to know other attendees and working out how to connect the dots. CES2020 ahead of time.
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/094e9acd-cd82-4011-9b78-78a5d07f5ec2?source=sessions" target="_blank">The Power of AI</a>
                    </p>
                  </div>
                </div>
            </div>
            <!-- END The Networker -->

            <!-- The Discoverer -->
            <div class="col-lg-12 mb-8">
                <div class="media">
                  <div class="media-body mr-5">
                    <h3 class="h3 text-secondary font-weight-bold">The Discoverer</h3>
                    <p class="mb-0">
                      The Discoverer attends conferences to soak up every ounce of knowledge that he or she can. You’ll probably see this person juggling a laptop, smartphone, and notebook, all while diligently taking notes -- or live-tweeting -- from each.
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/54de7c4e-fb68-4704-b0fc-d8d41ebea7c4?source=sessions" target="_blank">Accelerating Discovery to Solve Big Challenges</a>
                    </p>
                  </div>
                  <span class="btn btn-icon btn-lg rounded-circle" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/Discoverer.svg" width="100%" alt="Personality Trait">
                  </span>
                </div>
            </div>
            <!-- END The Discoverer -->

            <!-- The Inspiration Seeker -->
            <div class="col-lg-12 mb-8">
                <div class="media">
                  <span class="btn btn-icon btn-lg rounded-circle mr-5" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/InspirationSeeker.svg" width="100%" alt="Personality Trait">
                  </span>
                  <div class="media-body">
                    <h3 class="h3 text-secondary font-weight-bold">The Inspiration Seeker</h3>
                    <p class="mb-0">
                      They watch TED Talks on a daily basis. Their favourite book, collectively, is Water Isaacson's Steve Jobs. And see themselves as innovators. They attend CES in hopes of striking a creative streak. Entrepreneurs, thinkers, and problem-solvers - people who seek inspiration for their next brilliant idea or invention.
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/ddc009e9-fe79-4c63-aca0-3ed432d71864?source=sessions" target="_blank">Next Generation Television in Focus</a>
                    </p>
                  </div>
                </div>
            </div>
            <!-- END The Inspiration Seeker -->

            <!-- The Super Fan -->
            <div class="col-lg-12 mb-8">
                <div class="media">
                  <div class="media-body mr-5">
                    <h3 class="h3 text-secondary font-weight-bold">The Super Fan</h3>
                    <p class="mb-0">
                      The Superfan is super active when it comes to conference-related social media activity. This person never forgets to include the speaker's Twitter handle in hopes that he or she will retweet or reply  for example, tweeting with event's hashtag that they’re “so excited to meet @speaker.”
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/1b660d41-7b5c-4390-8f75-aade57f34b98?source=sessions" target="_blank">Trends Shaping the Future of The Fan Experience</a>
                    </p>
                  </div>
                  <span class="btn btn-icon btn-lg rounded-circle" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/SuperFan.svg" width="100%" alt="Personality Trait">
                  </span>
                </div>
            </div>
            <!-- END The Super Fan -->

            <!-- The Deal Maker -->
            <div class="col-lg-12 mb-8">
                <div class="media mb-8">
                  <span class="btn btn-icon btn-lg rounded-circle mr-5" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/DealMaker.svg" width="100%" alt="Personality Trait">
                  </span>
                  <div class="media-body">
                    <h3 class="h3 text-secondary font-weight-bold">The Deal Maker</h3>
                    <p class="mb-0">
                      Attends CES with the goal of creating business partnerships. But that could be for a number of opportunities.
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/938f3e9a-cda5-48d1-a979-09810e35fb74?source=sessions" target="_blank">Fast-Tracking the Digital Health Revolution</a>
                    </p>
                  </div>
                </div>
            </div>
            <!-- END The Deal Maker -->

            <!-- The Content Creator -->
            <div class="col-lg-12 mb-8">
                <div class="media">
                  <div class="media-body mr-5">
                    <h3 class="h3 text-secondary font-weight-bold">The Content Creator</h3>
                    <p class="mb-0">
                      The Content Creator attends a conference specifically on behalf of, well, a blog, or to obtain fodder for some other form of content. He or she is likely found listening to keynotes and breakout sessions while writing down an outline or quotes on a laptop.
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/ceccdd0b-771a-4d9f-95ae-f7c7276db8fb?source=sessions" target="_blank">The Future of Gaming</a>
                    </p>
                  </div>
                  <span class="btn btn-icon btn-lg rounded-circle" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/ContentCreator.svg" width="100%" alt="Personality Trait">
                  </span>
                </div>
            </div>
            <!-- END The Content Creator -->

            <!-- The Teacher -->
            <div class="col-lg-12 mb-8">
                <div class="media">
                  <span class="btn btn-icon btn-lg rounded-circle mr-5" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/Teacher.svg" width="100%" alt="Personality Trait">
                  </span>
                  <div class="media-body">
                    <h3 class="h3 text-secondary font-weight-bold">The Teacher</h3>
                    <p class="mb-0">
                      We don't mean "teacher" in the conventional sense. Rather, this is the person who comes back from CES to the office with the best takeaways. The teacher takes excellent notes and then relays them back to the team. If you have a company wiki, he or she will likely create a page on there with the lessons and best practices from the conference, or even give a presentation upon return.
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/68e9460c-9754-47e7-96f4-988f90e0be3b?source=sessions" target="_blank">New Technologies Accelerating Education</a>
                    </p>
                  </div>
                </div>
            </div>
            <!-- END The Teacher -->

            <!-- The Thought Leader -->
            <div class="col-lg-12">
                <div class="media">
                  <div class="media-body mr-5">
                    <h3 class="h3 text-secondary font-weight-bold">The Thought Leader</h3>
                    <p class="mb-0">
                      Thought leaders, though not synonymous with them, are often also the conference speakers. They're experts on a given topic, and that's why they're at the event: To talk to a crowd about it. They’ve probably written books and countless blog articles on the same topic, and have high numbers of followers on social media. 
                      <br> <a class="btn btn-sm btn-outline-secondary btn-wide transition-3d-hover mt-3" href="https://digital.ces.tech/sessions/b2ac78de-6b45-4c48-92c4-0fdfcb85c44d?source=sessions" target="_blank">Making Autonomous Vehicles a Reality</a>
                    </p>
                  </div>
                  <span class="btn btn-icon btn-lg rounded-circle" style="width:12rem;">
                    <img class="img-fluid" src="@/assets/buzzradar/img/ces/personalities/ThoughtLeader.svg" width="100%" alt="Personality Trait">
                  </span>
                </div>
            </div>
            <!-- END The Thought Leader -->
        
          </div>

        </div>
        </div>
        <!-- End Personality Traits -->







        <!-- Contact Form Section -->
        <div class="container space-2 space-top-md-2">
          <div class="row justify-content-lg-between">

            <div class="col-lg-12">
                <!-- Title -->
                <div class="mb-3">
                  <h2 class="text-primary font-weight-normal">
                    <span class="text-ces">Buzz Radar + CES2021</span>
                  </h2>
                </div>
                <!-- End Title -->
            </div>

            <div class="col-lg-6">

              <p>For the past 8 years we’ve been the real-time data and insights provider for CES and the Consumer Technology Association. Helping them build and grow insight capability. Starting with developing the technogly platform behind the now established Social Media Command Centre that tracks every CES conversation, product and brand online. We also use that data to provide in-depth insight reports for all of CES’s top exhibitors and invaluable data led recommendations for CES across a wide range of topics. From understanding their audiences more intimately to analysing how well their content performs compared to their competitors.<br>
              The result? Across almost all major measurable data points CES is the leading technology conference across digital and social. </p>
              <p>If you’d like to see how we can help your business in the same way we’ve helped CES or would just like the <strong>CES 2021</strong> report then click on the links below.</p>

            </div>

            <div class="col-lg-6 mb-3">

              <div class="col-md-12">

                <!-- Contact Form -->
                <form class="js-validate card shadow-sm p-5">

                  <div class="text-center mb-4">
                    <h3 class="h4">Get the CES 2021 Intelligence Report</h3>
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
        
          </div>

        </div>
        <!-- End Contact Form Section -->







    </div>

</template>







<script>

	export default {
        name: 'CES',
        data() {
            return {
              heroBgImage : {
                height : '120%',
                backgroundImage : 'url("'+require('@/assets/buzzradar/img/ces/heroimage2021-personalities.jpg')+'")',
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


          // this.emailObject.inputVal = 'j.infante.garcia@gmail.com';
          // this.firstNameObject.inputVal  = 'Peter';
          // this.lastNameObject.inputVal  = 'Jones';
          // this.companyObject.inputVal  = 'Peter Jones Co';
        },
        updated() {

        }, 
        methods : {
          launchPersonalityAnalyzer : function(e) {
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
                  'listId' : '254d31366d',
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
































