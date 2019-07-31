<template>
  
  <div>



    <!-- Hero Section -->
    <div id="parallaxDOM" class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll"
         data-options='{direction: "normal"}'>
      <!-- Apply your Parallax background image here -->
      <div class="divimage dzsparallaxer--target" :style="heroBgImage"></div>

      <!-- Content -->
      <div class="container position-relative space-2 space-top-md-3 space-bottom-md-2 z-index-2">
        <div class="w-lg-80 text-center mx-auto">
          <h1 class="display-3 font-size-md-down-5 text-white font-weight-semi-bold">Got a question?</h1>
          <p class="lead text-white">We'd love to talk about how we can help you.</p>
        </div>
      </div>
      <!-- End Content -->
    </div>
    <!-- End Hero Section -->

    <!-- Contacts Info Section -->
    <div class="clearfix space-2">
      <div class="row no-gutters">
        <div class="col-sm-6 col-lg-4 u-ver-divider u-ver-divider--none-lg">
          <!-- Contacts Info -->
          <div class="text-center p-5">
            <figure id="icon8" class="svg-preloader ie-height-56 max-width-8 mx-auto mb-3">
              <img class="js-svg-injector" src="@/assets/svg/icons/icon-8.svg" alt="SVG"
                   data-parent="#icon8">
            </figure>
            <h2 class="h6 mb-0">Address</h2>
            <p class="mb-0">153 Williamson Plaza, 09514</p>
          </div>
          <!-- End Contacts Info -->
        </div>

        <div class="col-sm-6 col-lg-4 u-ver-divider u-ver-divider--none-lg">
          <!-- Contacts Info -->
          <div class="text-center p-5">
            <figure id="icon15" class="svg-preloader ie-height-56 max-width-8 mx-auto mb-3">
              <img class="js-svg-injector" src="@/assets/svg/icons/icon-15.svg" alt="SVG"
                   data-parent="#icon15">
            </figure>
            <h3 class="h6 mb-0">Email</h3>
            <p class="mb-0">support@htmlstream.com</p>
          </div>
          <!-- End Contacts Info -->
        </div>

        <div class="col-sm-6 col-lg-4 u-ver-divider u-ver-divider--none-lg">
          <!-- Contacts Info -->
          <div class="text-center p-5">
            <figure id="icon16" class="svg-preloader ie-height-56 max-width-8 mx-auto mb-3">
              <img class="js-svg-injector" src="@/assets/svg/icons/icon-16.svg" alt="SVG"
                   data-parent="#icon16">
            </figure>
            <h3 class="h6 mb-0">Phone Number</h3>
            <p class="mb-0">+1 (062) 109-9222</p>
          </div>
          <!-- End Contacts Info -->
        </div>

        
      </div>
    </div>
    <!-- End Contacts Info Section -->

    <!-- <hr class="my-0"> -->

    




    <!-- SVG Top Shape -->
    <figure>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="64px"
           viewBox="0 0 1921 273" style="margin-bottom: -8px; enable-background:new 0 0 1921 273;" xml:space="preserve">
        <polygon class="fill-gray-100" points="0,273 1921,273 1921,0 "/>
      </svg>
    </figure>
    <!-- End SVG Top Shape -->

    <!-- Contacts Section -->
    <div class="bg-light position-relative">
      <div class="container space-top-1 pb-1">
        <div class="row justify-content-center mb-5">
          <div class="col-md-1 d-none d-md-inline-block">
            <!-- Illustration -->
            <figure id="contactSVGillustration1" class="svg-preloader position-absolute bottom-0 left-0 w-100">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/flowers.svg" alt="Image Description"
                   data-parent="#contactSVGillustration1">
            </figure>
            <!-- End Illustration -->
          </div>

          <div class="col-md-10 col-lg-7 mt-n11">
            <!-- Contact Form -->
            <form class="js-validate card shadow-sm p-5">
              <div class="text-center mb-4">
                <h3 class="h4">Drop us a message</h3>
                <p>Find the right solution.</p>
              </div>

              <div class="row mx-gutters-2">
                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <label class="sr-only">First name</label>

                  <div class="js-form-message">
                    <div class="input-group">
                      <input type="text" class="form-control" name="firstName" placeholder="First name" aria-label="First name" required
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
                    <div class="input-group">
                      <input type="text" class="form-control" name="lasstName" placeholder="Last name" aria-label="Last name" required
                             data-msg="Please enter your last name."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="w-100"></div>

                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <label class="sr-only">Country</label>

                  <div class="js-form-message">
                    <div class="input-group">
                      <select class="form-control custom-select text-muted" required
                              data-msg="Please select country."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success">
                        <option value="">Select country</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Åland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia, Plurinational State of</option>
                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, the Democratic Republic of the</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Côte d'Ivoire</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curaçao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and McDonald Islands</option>
                        <option value="VA">Holy See (Vatican City State)</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, Democratic People's Republic of</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia, Federated States of</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestinian Territory, Occupied</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Réunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthélemy</option>
                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten (Dutch part)</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UM">United States Minor Outlying Islands</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <label class="sr-only">Email address</label>

                  <div class="js-form-message">
                    <div class="input-group">
                      <input type="text" class="form-control" name="email" placeholder="Email address" aria-label="Email address" required
                             data-msg="Please enter a valid email address."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="w-100"></div>

                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <label class="sr-only">Company</label>

                  <div class="js-form-message">
                    <div class="input-group">
                      <input type="text" class="form-control" name="company" placeholder="Company" aria-label="Company" required
                             data-msg="Please enter company name."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <label class="sr-only">Job title</label>

                  <div class="js-form-message">
                    <div class="input-group">
                      <input type="text" class="form-control" name="jobTitle" placeholder="Job title" aria-label="Job title" required
                             data-msg="Please enter a job title."
                             data-error-class="u-has-error"
                             data-success-class="u-has-success">
                    </div>
                  </div>
                  <!-- End Input -->
                </div>
              </div>

              <!-- Input -->
              <div class="mb-5">
                <label class="sr-only">How can we help you?</label>

                <div class="js-form-message input-group">
                  <textarea class="form-control" rows="4" name="description" placeholder="Hi there, I would like to ..." aria-label="Hi there, I would like to ..." required
                            data-msg="Please enter a reason."
                            data-error-class="u-has-error"
                            data-success-class="u-has-success"></textarea>
                </div>
              </div>
              <!-- End Input -->

              <!-- Checkbox -->
              <div class="js-form-message mb-3">
                <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                  <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="termsCheckbox" required
                         data-msg="Please accept our Terms and Conditions."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                  <label class="custom-control-label" for="termsCheckbox">
                    <small>
                      I agree to the
                      <a class="link-muted" href="../pages/terms.html">Terms and Conditions</a>
                    </small>
                  </label>
                </div>
              </div>
              <!-- End Checkbox -->

              <!-- Checkbox -->
              <div class="js-form-message mb-5">
                <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
                  <input type="checkbox" class="custom-control-input" id="newsletterCheckbox" name="newsletterCheckbox" required
                         data-msg="Please accept our Terms and Conditions."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                  <label class="custom-control-label" for="newsletterCheckbox">
                    <small>I want to receive Front's Newsletters</small>
                  </label>
                </div>
              </div>
              <!-- End Checkbox -->

              <button type="submit" class="btn btn-primary transition-3d-hover">Submit</button>
            </form>
            <!-- End Contact Form -->
          </div>

          <div class="col-md-1 d-none d-md-inline-block">
            <!-- Illustration -->
            <figure id="contactSVGillustration2" class="svg-preloader ie-chatting-man position-absolute bottom-0 left-0 w-100">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/chatting-man.svg" alt="Image Description"
                   data-parent="#contactSVGillustration2">
            </figure>
            <!-- End Illustration -->
          </div>
        </div>

        <div class="text-center">
          <p class="small">You'll hear from us within 1-2 business days.</p>
        </div>
      </div>
    </div>
    <!-- End Contacts Section -->

    <!-- SVG Bottom Shape -->
    <figure>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="64px"
           viewBox="0 0 1921 273" style="margin-bottom: -8px; enable-background:new 0 0 1921 273;" xml:space="preserve">
        <!-- <polygon class="fill-gray-100" points="0,273 1921,273 1921,0 "/> -->
        <polygon class="fill-gray-100" points="0,0 0,273 1921,0"/>
      </svg>
    </figure>
    <!-- End SVG Bottom Shape -->

    
    


  </div>

</template>



<script>

 	export default {

 		name : 'Aboutus',
    data () {
      return {
        heroBgImage : {
          height : '120%',
          backgroundImage : 'url("'+require('@/assets/img/1920x800/img13.jpg')+'")',
        },        
      }
    },
    mounted() {
      dzsprx_init('#parallaxDOM', { direction: "normal", mode_scroll:"fromtop"} );
    }
    
 	}

 </script>








<style lang="scss" scoped>

	@import "compass";

</style>

