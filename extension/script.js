function getVerses(url) {
  $.ajax({
    url: url,
    success: function(result){
    //$("#reqObject").text(url);
    //$("#returnObject").text(JSON.stringify(result, null, 4));
    $("#demo").text(result.verses[0].text);
  }
  });
}

function start() {
  input = document.getElementById('search').value;
  urll = "https://api.lsm.org/recver.php?String=" + input + '&In=osis&Out=json';
  console.log(urll);
  getVerses(urll);
}

var url = "https://api.lsm.org/recver.php?String='John 1:1'&Out=json";

$(document).ready(function(){
   $('body').on('click', 'button', function(){
     getVerses();
   });
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
