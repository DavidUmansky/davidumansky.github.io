let generate_btn = document.querySelector('.generate_btn');
let want = document.querySelector('.want');
let loading = document.querySelector('.loading'); 


generate_btn.addEventListener('click',fetchPics);
want.addEventListener('click',showMsg)

function fetchPics() {
    let catsImgDiv = document.querySelector('.catsImgDiv');
    catsImgDiv.innerHTML = ''
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.responseType = 'json';
    
    httpRequest.onloadstart = function() {
        loading.innerHTML = 'חתול בטעינה...'
    }

    httpRequest.onload = function() {
       
    if (httpRequest.status === 200) {
        let catsImgUrl = httpRequest.response[0].url;

        let catsImgEl = document.createElement('img');
        catsImgEl.setAttribute('src',`${catsImgUrl}`);
        catsImgEl.classList.add('showcase');

        catsImgDiv.appendChild(catsImgEl);
        loading.innerHTML = '';
       } else {
           console.log('Error');
       }  
     };
  
    httpRequest.open('GET', 'https://api.thecatapi.com/v1/images/search');
    httpRequest.send();
}

fetchPics();

function showMsg() {
    let alert_success = document.querySelector('.alert-success')
    alert_success.style.display = 'block';    
}






