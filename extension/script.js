var url = "https://baseurl/recver.php?String='John 1:1'&Out=json";

document.getElementById('demo').innerHTML = url.verses[0].text;

/*
$.ajax({
  url: url,
  success: function(result){
  document.getElementById("demo").innerHTML = (result.url);
}
});
*/
