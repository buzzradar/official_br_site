/* eslint-disable */

<template>

    <div>


        <!-- Hero Section -->
        <div class="container space-2 space-top-md-3">
          <div class="w-lg-80 text-center mx-lg-auto">
            <div class="mb-11">
              <h1 class="font-weight-normal">About <span class="text-primary">US</span></h1>
            </div>
          </div>

          <!-- Gallery Section -->
          <div class="row mx-n2">
            <div class="col-md px-2 mb-3">
              <div class="height-250 bg-img-hero img-thumbnail" :style="imgAboutUsBg1"></div>
            </div>
            <div class="col-md-3 px-2 mb-3">
              <div class="height-250 bg-img-hero img-thumbnail" :style="imgAboutUsBg2"></div>
            </div>
            <div class="col-md px-2 mb-3">
              <div class="height-250 bg-img-hero img-thumbnail" :style="imgAboutUsBg3"></div>
            </div>

            <div class="w-100"></div>

            <div class="col-md px-2 mb-3 mb-md-0">
              <div class="height-250 bg-img-hero img-thumbnail" :style="imgAboutUsBg4"></div>
            </div>
            <div class="col-md-4 px-2 mb-3 mb-md-0">
              <div class="height-250 bg-img-hero img-thumbnail" :style="imgAboutUsBg5"></div>
            </div>
            <div class="col-md px-2">
              <div class="height-250 bg-img-hero img-thumbnail" :style="imgAboutUsBg6"></div>
            </div>
          </div>
          <!-- End Gallery Section -->
        </div>
        <!-- End Hero Section -->






        <!-- Divider -->
        <div class="container">
          <div class="w-lg-65 mx-lg-auto">
            <hr class="my-0">
          </div>
        </div>
        <!-- End Divider -->

        <!-- About Section -->
        <div class="container space-2">
          <div class="w-lg-65 mx-lg-auto">

              <p>Buzz Radar was founded in 2012 by a veteran team of social intelligence specialists AI and data visualisation engineers. Before starting Buzz Radar, we worked on some of the most piviotal social marketing campaigns and all found we where encountering the same challenge: how to make data accessible, insightful and actionable for everyone Inside an organisation quickly and easily.</p>

              <p>To try and solve this, we created Buzz Radar. It delivers valuable insights to the right person at the right moment in ways that they can easily understand and act on.</p>

              <p>Now, we are helping the world's biggest brands, events and broadcasters gain actionable intelligence from their data.</p>

              <p>On the way we’ve won multiple international awards for the work we’ve done and are lucky enough to be considered one of the most innovative new technology companies in Europe.</p>

          </div>

        </div>
        <!-- End About Section -->

        <!-- Divider -->
        <div class="container">
          <div class="w-lg-65 mx-lg-auto">
            <hr class="my-0">
          </div>
        </div>
        <!-- End Divider -->


    </div>

</template>







<script>

	export default {
        name: 'About Us',
        data() {
            return {
                imgAboutUsBg1 : {
                  backgroundImage: 'url('+require('@/assets/buzzradar/img/contactus/us2.jpg')+')',
                },
                imgAboutUsBg2 : {
                  backgroundImage: 'url('+require('@/assets/buzzradar/img/contactus/us1.jpg')+')',
                },
                imgAboutUsBg3 : {
                  backgroundImage: 'url('+require('@/assets/buzzradar/img/contactus/us5.jpg')+')',
                },
                imgAboutUsBg4 : {
                  backgroundImage: 'url('+require('@/assets/buzzradar/img/contactus/us3.jpg')+')',
                },
                imgAboutUsBg5 : {
                  backgroundImage: 'url('+require('@/assets/buzzradar/img/contactus/us7.jpg')+')',
                },
                imgAboutUsBg6 : {
                  backgroundImage: 'url('+require('@/assets/buzzradar/img/contactus/us4.jpg')+')',
                },
            }
        },
        components: {

        },
        mounted(){

        },
        updated() {

        }
	}

</script>








<style lang="scss" scoped>

	@import "compass";

</style>
































