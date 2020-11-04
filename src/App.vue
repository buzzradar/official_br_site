<template>
  
  <div id="app">
    
    <BRHeader></BRHeader>
    
    <BRContentPages></BRContentPages>

  </div>

</template>












<script>

import BRHeader from './components/Header/BRHeader.vue';
import BRContentPages from './components/Content/BRContentPages.vue';

export default {
  name: 'app',
  components: {
    BRHeader,
    BRContentPages,
  },
  mounted() {
    //We need this to display submenus in the Main Nav
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 767.98,
      hideTimeOut: 0
    });

    this.checkCookiesConsent();

  },
  methods : {
      checkCookiesConsent : function() {
        var gdpr = this.getCookie('gdpr_cookie_consent');
        console.log ("%c ➜ ", "background:#93f035;", "GDPR Consent Cookie value is->" + gdpr);

        if (!gdpr) {
          console.log("------------------Show Popup for GDPR consent");
          
          var _this = this;
          bootbox.dialog({ 
            closeButton: false,
            message: '<p>We use cookies to improve your experience and support our mission. Read more about it in our <a href="/cookie-policy">Cookies Policy</a>. By using our site you agree to the use of cookies.</p>',
            size: 'small',
            onEscape: false,
            backdrop: false,
            centerVertical: true,
            buttons: {
                accept: {
                    label: 'Accept',
                    className: 'btn-primary',
                    callback: function(){
                      console.log ("%c ➜ ", "background:#ffff00;", "Cookies Consent Accepted");
                      _this.setCookie('gdpr_cookie_consent',true,100);
                    }
                }
            }
          });

        }else{
          console.log ("%c ➜ ", "background:#34feff;", "GDPR is true do nothing!!!");
          //this.eraseCookie('gdpr_cookie_consent')
        }


      },
      setCookie: function(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
      },
      getCookie: function(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for(var i=0;i < ca.length;i++) {
              var c = ca[i];
              while (c.charAt(0)==' ') c = c.substring(1,c.length);
              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
          }
          return null;
      },
      eraseCookie: function(name) {   
          document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      },
    },

}
</script>










<style lang="scss">

  html,body{
    margin:0;
  }
  #app {

  }

  

</style>
