function getVerses(url) {
  fetch(url)
  .then(response => response.json())
  .then(result => {
    document.getElementById('demo').innerHTML = result.verses[0].text;
    console.log(result);
  });
}

function start() {
  input = document.getElementById('search').value;
  urll = "https://api.lsm.org/recver.php?String=" + input + '\&Out=json';
  console.log(urll);
  getVerses(urll);
}

var url = "https://api.lsm.org/recver.php?String=\'John 1:1\'\&Out=json";
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
