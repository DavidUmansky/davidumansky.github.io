let generate_btn = document.querySelector('.generate_btn');
let want = document.querySelector('.want');
let loading = document.querySelector('.loading'); 


generate_btn.addEventListener('click',fetchPics);
want.addEventListener('click',showMsg)

function fetchPics() {
    let catsImgDiv = document.querySelector('.catsImgDiv');
    catsImgDiv.innerHTML = ''
    loading.innerHTML = 'חתול בטעינה...'
    
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Error');
                return;
            }
            // Examine the text in the response
            
            response.json().then(function(data) {
            let catsImgUrl = data[0].url;
            let catsImgEl = document.createElement('img');
            catsImgEl.setAttribute('src',`${catsImgUrl}`);
            catsImgEl.classList.add('showcase');
            catsImgDiv.appendChild(catsImgEl);
            loading.innerHTML = '';        
            });
        }
        )
        .catch(function(err) {
            console.log('Error');
        }); 
}

fetchPics();

function showMsg() {
    let alert_success = document.querySelector('.alert-success')
    alert_success.style.display = 'block';    
}
