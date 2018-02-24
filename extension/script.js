function getVerses(reference, version) {
  url = 'http://api.biblia.com/v1/bible/content/' + version + '.txt?passage=' + reference + '&callback=myCallbackFunction&key=b4e7aedb44e6c74f4327182f0a244da1';
  fetch(url)
  .then(response => response.text())
  .then(result => {
    document.getElementById('scripture').innerHTML = result;
    document.getElementById('reference').innerHTML = reference;
    return result;
  });
}

function start() {
  var version = document.getElementById('translation').value;
  input = document.getElementById('search').value;
  urll = "http://api.biblia.com/v1/bible/content/KJV.txt?passage=" + input +  "&callback=myCallbackFunction&key=b4e7aedb44e6c74f4327182f0a244da1";
  getVerses(input, version);
}
var references =
      ["1 Thessalonians 5.16",
       "1 Thessalonians 5.19",
       "1 Thessalonians 5.20",
       "1 Thessalonians 5.21",
       "1 Thessalonians 5.22",
       "1 Peter 4.7",
       "3 John 1.4",
       "Proverbs 6.6",
       "Psalms 8.9",
       "Revelation 17.11",
       "John 3.16-17",
       "Hebrews 12.1-2",
       "Genesis 1.1",
       "Peter 1.16"
      ];
var random = Math.floor((Math.random() * references.length-1 ) + 1);
random = references[random];
var url = "http://api.biblia.com/v1/bible/content/KJV.txt?passage=" + random + "&callback=myCallbackFunction&key=b4e7aedb44e6c74f4327182f0a244da1";
getVerses(url, random);

document.getElementById("button").addEventListener("click", start);
