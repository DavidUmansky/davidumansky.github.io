const button = document.querySelector('button');
const introContent = document.querySelector('.hero-text');
const gameContent = document.querySelector('#gameContainer');
const endContent = document.querySelector('#endGame');
const imgBG = document.querySelector('.hero-image');
const question = document.getElementsByClassName('arrow-pointer')[0];
const logo = document.querySelector('#myLogo2');
const selects = document.getElementsByTagName('select');
const spanQ = document.getElementById('spanQ');
const answers = document.getElementsByClassName('ansSpan');
const divQ = document.querySelector('.down');
const secSpan = document.querySelector('.timer')
const answers2 = document.getElementsByClassName('answers');
const answersLetter = document.getElementsByClassName('span2');
const body = document.getElementsByTagName('body');
const phoneImg = document.getElementsByClassName('test');
const messageImg = document.getElementsByClassName('happy');
const messageContent = document.getElementsByClassName('messegeC');
const messegeSign = document.getElementById('likeTop'); 


let messege = document.getElementsByClassName('messege'); 
let subject;
let subject2;
let l; // 0-3 to get right answer
let count = 0;
let gameO_counter = 0;
let x; 
let correct = 0;


if (window.innerWidth < 421) {
    imgBG.classList.add('test');
}

const enterGame = () => {
    subject = selects[0].value;
    subject2 = selects[0].value.charAt(0).toLowerCase() + selects[0].value.slice(1);
    if (subject === 'Music') {
        subject = 12
    } else {
        if(subject === 'Films') {
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
        
    if (subject === 'Choose questions subject' || level === 'choose difficulty level') {
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
    const gameContainer = document.querySelector('.hero-text2');
     
    function endM() {
        x = 0;
        introContent.innerHTML = '';
        introContent.appendChild(endContent)
        endContent.style.display = 'block'
        introContent.style.backgroundColor = 'initial';
        introContent.style.opacity = 'initial';
        introContent.classList.add('hero-text3')
        endContent.style.backgroundColor = 'initial';
        endContent.style.opacity = 'initial';
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } 

    const httpRequest = new XMLHttpRequest();
    httpRequest.responseType = 'json';
        
    httpRequest.onload = function() {
        if (httpRequest.status === 200) {
          let responsi = httpRequest.response.results
          function insertQ() {
            count++
    
            if (count > 10 && gameO_counter < 3) {
                
                endM();
                messege[0].innerHTML = `You win the 1,000,000$ with ${correct} right answers! Your knowledge in 
                the subject of ${subject2} is excellent. Try higher levels /play with other subjects.`
                for(let x = 0; x < 3; x++) {
                    messageImg[x].src = 'victory.gif';
                }                

                if (window.innerWidth < 421) {
                    for(let y = 0; y < 2; y++) {
                        messageImg[y].parentNode.removeChild(messageImg[y])
                        }                
                        messageImg[0].src = 'victory.gif';
                        messageImg[0].style.height = '148.1px' 
                        messageImg[0].style.width = '100%'
                        messageContent[0].style.height = '275px'
                        messege[0].style.marginTop = '-0.6px'
                        document.getElementById('fixArrow').src = 'return.png';
                        document.getElementById('firstI').style.marginTop = '-9px';
                    }
                
                if (window.innerWidth < 415 && window.innerWidth > 410) {
                    document.getElementById('fixArrow').style.marginTop = '10px';
                    document.getElementById('video').style.marginTop = '5px'
                    document.getElementById('firstI').style.marginTop = '-12px';
                    document.getElementById('thirdI').style.marginTop = '11px';
                    document.getElementById('secondI').style.marginLeft = '-4px';
                    document.getElementById('video').style.marginLeft = '4px';
                }                

                if (window.innerWidth < 322 && window.innerWidth > 318) {
                    messageImg[0].style.height = '128.2px'
                    messegeSign.style.width = '62.5%'; 
                }

                if (window.innerWidth < 290 && window.innerWidth > 270) {
                    messageImg[0].style.height = '91px'
                    messageImg[0].style.width = '100.7%' 
                    document.getElementById('firstI').style.marginTop = '-6px';
                }                 
                
                if (window.innerWidth < 1030 && window.innerWidth > 1020) {
                    messageContent[0].style.width = '95%'
                }

                return;
            }

            if (gameO_counter === 3) {
                console.log('Game Over, stop game and enter message');
                endM();
                messegeSign.innerHTML = '&#128078'
                messege[0].innerHTML = `You have 3 wrong answers, game over &#128542 try again.`;
                for(let x = 0; x < 3; x++) {
                    messageImg[x].src = 'failed.gif';
                    messageImg[x].style.height = '168px'
                }
                messege[0].style.backgroundColor = '#de5e55'
                messageContent[0].style.border = '5px solid #4b1d24'
                // messageContent[0].style.borderTop = '6px solid rgb(199 38 62)'
            
                if (window.innerWidth < 421) {
                    for(let y = 0; y < 2; y++) {
                        messageImg[y].parentNode.removeChild(messageImg[y])
                        }                
                        messageImg[0].style.height = '149.5px' 
                        document.getElementById('fixArrow').src = 'return.png';
                        messegeSign.style.width = '61%';
                        document.getElementById('fixArrow').style.marginTop = '9px';

                    }
                
                    if (window.innerWidth < 415 && window.innerWidth > 410) {
                        messageImg[0].style.height = '149.5px';
                        messege[0].style.marginLeft = '-0.7px'
                        messageImg[0].style.marginLeft = '-0.7px';
                        messageImg[0].style.width = '100.5%';
                        document.getElementById('secondI').style.marginLeft = '-4px';
                        document.getElementById('video').style.marginLeft = '10px';
                    }
                

                if (window.innerWidth < 290) {
                    messageImg[0].style.height = '127.5px'
                    messege[0].style.marginTop = '-0.7px'

                }
                
                if (window.innerWidth < 1030 && window.innerWidth > 1020) {
                    for(let x = 0; x < 3; x++) {
                        messageImg[x].style.height = '168px'
                    }
                    messageContent[0].style.width = '95%'
                }

                return;
            }

            l = Math.floor((Math.random() * 4));
            let i = responsi.length;
            let j = Math.floor((Math.random() * i));
            let h = 0;
            spanQ.innerHTML = responsi[j].question ;
            answers[l].innerHTML = responsi[j].correct_answer    
            answers2[l].classList.add('correct');
            answers[l].classList.add('correct');
            answersLetter[l].classList.add('correct');

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

            if (window.innerWidth < 290 && window.innerWidth > 270) {
                const imgBG2 = document.querySelector('.hero-image2');

                let i = 0;
                while (i < 4) {
                    if (divQ.innerText.length > 85) {
                        imgBG2.style.overflow = 'hidden';
                        divQ.style.width = '235px'
                    } else {
                        imgBG2.style.overflow = 'initial';
                        divQ.style.width = '185px'
                    }
                    i++
                }
            }

            if (window.innerWidth < 340 && window.innerWidth > 320) {
                const imgBG2 = document.querySelector('.hero-image2');

                let i = 0;
                while (i < 4) {
                    if (divQ.innerText.length > 116) {
                        divQ.style.width = '260px'
                    } else {
                        divQ.style.width = '240px'
                    }
                    i++
                }      
            }


     
            responsi.splice(j, 1);
        
          }
            
          insertQ()

          let sec_value = 31;

          let intervalId = setInterval(secondDown,1000)  
        
          function secondDown() {
            
            if (x === 0) {
                clearInterval(intervalId);
            }                         

            let i = '0';
            sec_value--;
    
            if (sec_value < 10) {
                sec_value = i + sec_value 
            }
              
            // padding-left: 11.5px;
            
            secSpan.innerHTML = sec_value;
            
            if (sec_value < 20 && sec_value > 9) {
                secSpan.style.paddingLeft = '11.5px'
                secSpan.style.justifyContent = 'initial'
            } else {
                secSpan.style.justifyContent = 'center'
                secSpan.style.paddingLeft = 'initial'
            }

            //     justify-content: center;


            if (+sec_value < 10) {
                secSpan.style.backgroundColor = 'red'
            }
 
            if (secSpan.innerHTML === '00') {
                gameO_counter++
                more()
            }

           }
           
           function more(e) {
                
                if(e) {
                    if (e.target.className.includes("correct") === false) {
                        gameO_counter++
                    } else {
                        correct++
                    }
                }
                 
                for (let i = 0; i < 4; i++) {
                  answers[i].innerHTML = ''; 
                }
                
                secSpan.innerHTML = 30;
                sec_value = 31;
                secSpan.style.backgroundColor = 'rgb(9, 170, 9)'
                
                answers2[l].classList.remove('correct');
                answers[l].classList.remove('correct');
                answersLetter[l].classList.remove('correct');
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










