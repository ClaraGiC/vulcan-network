// Mobile menu toggle
(function(){
  var b=document.querySelector('.menu-toggle'),n=document.getElementById('nav');
  if(!b||!n)return;
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
})();

// Newsletter: open an email to the VULCAN team with the subscriber's address
document.querySelectorAll('.nl-form').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var em=f.querySelector('input[type=email]').value.trim(); if(!em)return;
    var to=f.getAttribute('data-to');
    var body='Please add '+em+' to the VULCAN newsletter.';
    window.location.href='mailto:'+to+'?subject='+encodeURIComponent('Subscribe to the VULCAN newsletter')+'&body='+encodeURIComponent(body);
  });
});
