let list = document.getElementById('navList');
let icon = document.getElementById('hamburger').addEventListener('click', toggle = () => {

    if(list.style.display != 'flex'){
        list.style.display = 'flex';
    }else{
        list.style.display = 'none';
    }
})

if(innerWidth <= 425px){
    list.addEventListener('click', hide = () => {
    list.style.display = 'none';
})
}


// Instagram-Chat-Plugin
var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "100473028945662");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v11.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
// Instagram-Chat-Plugin
