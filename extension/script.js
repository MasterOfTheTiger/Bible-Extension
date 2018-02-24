function getVerses(url) {
  fetch(url)
  .then(response => response.text())
  .then(result => {
    document.getElementById('scripture').innerHTML = result;
    console.log(result);
  });
}

function start() {
  input = document.getElementById('search').value;
  urll = "http://api.biblia.com/v1/bible/content/LEB.txt.txt?passage=" + input +  "&callback=myCallbackFunction&key=b4e7aedb44e6c74f4327182f0a244da1";
  console.log(urll);
  getVerses(urll);
}

var url = "http://api.biblia.com/v1/bible/content/LEB.txt.txt?passage=John3.16&callback=myCallbackFunction&key=b4e7aedb44e6c74f4327182f0a244da1";
getVerses(url);

$('body').on('click', 'button', function(){
  start();
});

button.addEventListener('click', start());

/*
$(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});
*/
