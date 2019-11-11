/* eslint-disable */

<template>

    <div>

        <router-view></router-view>

    </div>

</template>







<script>

	export default {
        name: 'AboutWrapper',
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
































