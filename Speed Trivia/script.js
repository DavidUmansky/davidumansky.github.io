const button = document.querySelector('button');
const introContent = document.querySelector('.hero-text');
const gameContent = document.querySelector('#gameContainer');
const imgBG = document.querySelector('.hero-image');
const question = document.getElementsByClassName('arrow-pointer')[0];
const logo = document.querySelector('#myLogo2');
const selects = document.getElementsByTagName('select');
const spanQ = document.getElementById('spanQ');
const answers = document.getElementsByClassName('ansSpan');
const divQ = document.querySelector('.down');
const secSpan = document.querySelector('.timer')
const answers2 = document.getElementsByClassName('answers');
const body = document.getElementsByTagName('body');
const phoneImg = document.getElementsByClassName('test');

if (window.innerWidth < 421) {
    imgBG.classList.add('test');
}

let count = 0;

const enterGame = () => {
    let subject = selects[0].value;
    if (subject === 'Music') {
        subject = 12
    } else {
        if(subject === 'Entertainment: Films') {
            subject = 11
        } else {
            if(subject === 'Sports') {
                subject = 21
            } else {
                if(subject === 'History') {
                    subject = 23
                } else {
                    if (subject === 'Animals') {
                        subject = 27
                    }
                }
            }
        } 
    } 
    
    const level = selects[1].value.charAt(0).toLowerCase() + selects[1].value.slice(1);
        
    if (subject === 'Choose questions subject' || level === 'Choose difficulty level') {
        return;
    }

    introContent.innerHTML = '';
    introContent.style.backgroundColor = 'initial';
    introContent.style.opacity = 'initial';
    introContent.appendChild(gameContent)
    gameContent.style.display = 'block'
    introContent.classList.add('hero-text2');
    imgBG.classList.add('hero-image2');
    logo.style.display = 'none';
    

    const httpRequest = new XMLHttpRequest();
    httpRequest.responseType = 'json';
        
    httpRequest.onload = function() {
        if (httpRequest.status === 200) {
          let responsi = httpRequest.response.results
          function insertQ() {
            let i = responsi.length;
            let j = Math.floor((Math.random() * i));
            let h = 0;
            spanQ.innerHTML = responsi[j].question ;
            answers[Math.floor((Math.random() * 4))].innerHTML = responsi[j].correct_answer    
            
            while (h < 3) {
                let i = Math.floor((Math.random() * 4));
                if(answers[i].innerHTML === '') {
                    answers[i].innerHTML = responsi[j].incorrect_answers[h]
                    h++     
                }
            }

            if (window.innerWidth < 421) {
                let i = 0;
                while (i < 4) {
                    if (answers[i].innerText.length > 78) {
                        answers2[i].classList.add('bigger');
                    } else {
                        answers2[i].classList.remove('bigger');
                    }
                    i++
                }      
            }

            count++
            responsi.splice(j, 1);
        
          }
            
          insertQ()
         
          let intervalId = setInterval(secondDown,1000)  
        
          function secondDown() {
            
            if (secSpan.innerHTML === '01') {
                clearInterval(intervalId);
            }
                         
            let i = '0';
            let sec_value = +(secSpan.innerHTML);
            sec_value--;
    
            if (sec_value < 10) {
                sec_value = i + sec_value 
            }
            
            secSpan.innerHTML = sec_value; 
            
             
            if (+sec_value < 10) {
                secSpan.style.backgroundColor = 'red'
            }
    
           }
           
           function more() {
                for (let i = 0; i < 4; i++) {
                  answers[i].innerHTML = ''; 
                }
                
                insertQ()
            }
        
           for (let i = 0; i < 4; i++) {
             answers2[i].addEventListener('click',more) 
          }
       }  
    };

    httpRequest.open('GET', 'https://opentdb.com/api.php?amount=10&category=' + subject + '&difficulty=' + level + '&type=multiple');
    httpRequest.send();

    
    
}

button.addEventListener('click',enterGame)












