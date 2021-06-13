var send = document.getElementById('send');
var search = document.getElementById('search');
var deletee = document.getElementById('delete');

send.addEventListener('click',getUrl)

search.addEventListener('keydown',function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        getUrl()        
    }
})

deletee.addEventListener('click',deleteeFunc)



function getUrl() {
    var url2 = search.value
    var url = '';
    
    for (var i = 0; i < search.value.length; i++) {
        if (search.value[i] === ' ') {
            url = url + '_';
        } else {
            url = url + search.value[i]
        }                                                    
    }

    search.value = '';
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.responseType = 'json';
    
    httpRequest.onload = function() {
        if (httpRequest.status === 200) {
          let length = httpRequest.response.data;
          let length2 = length.length

          let randomNum = Math.floor((Math.random() * length2)) 
          let randomUrlImg = httpRequest.response.data[randomNum].images.original.url
          let gifRandomImg = document.createElement('img');
          gifRandomImg.setAttribute('src',`${randomUrlImg}`);
          
          let body = document.getElementsByTagName('body')[0];
          body.appendChild(gifRandomImg);
    
        }  
    };
          
    httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?q=' + url + '&rating=g&api_key=dc6zaTOxFJmzC');
    httpRequest.send();

}

function deleteeFunc() {
    let imgList = document.getElementsByTagName('img');
    let length3 = imgList.length
    for(var i = 0; i < length3; i++) {
        imgList[0].parentElement.removeChild(imgList[0]);
    }
} 
 

 

// get random

 

 







