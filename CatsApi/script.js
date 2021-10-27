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

    httpRequest.onreadystatechange = function() {
       
    if (httpRequest.status === 200 && httpRequest.readyState === 4) {
        let catsImgUrl = httpRequest.response[0].url;

        let catsImgEl = document.createElement('img');
        catsImgEl.setAttribute('src',`${catsImgUrl}`);
        catsImgEl.classList.add('showcase');

        catsImgDiv.appendChild(catsImgEl);
        loading.innerHTML = '';
       } else {
           console.log(httpRequest.readyState);
       }   
     };
  
    httpRequest.open('GET', 'https://api.thecamages/search');
    httpRequest.send();
}

fetchPics();

function showMsg() {
    let alert_success = document.querySelector('.alert-success')
    alert_success.style.display = 'block';    
}
