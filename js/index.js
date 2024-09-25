const containerBubble = document.getElementById('bubble');
const randomDigit = document.getElementById('random-digit')
let addScore = 0;

const bubbleGame = () => {
  let bubble = '';
  const uniqueValues = new Set(); 
  
  for (let i = 1; i <= 130; i++) {
    let randomValue;
    do {
      randomValue = Math.floor(Math.random() * 130);
    } while (uniqueValues.has(randomValue)); 
    uniqueValues.add(randomValue); 
    bubble += `<div class="lg:w-14 lg:h-14 w-8 h-8 flex justify-center items-center m-2 rounded-full bg-cyan-950 cursor-pointer">
                 <h1 class="text-white lg:text-xl">${randomValue}</h1>
               </div>`;
  }
  document.getElementById('bubble').innerHTML = bubble;
};




const ranDigit=()=>{
    const value = Math.floor( Math.random()*130);
    document.getElementById('random-digit').innerText = value;
}
const scoreAdd =()=>{
  const score = document.getElementById('score').innerText;
  const scoreValue = parseInt(score);
   addScore += 10;
   document.getElementById('score').innerText = scoreValue  
}
let time = 60;
const timer =()=>{
  const countDown = setInterval(() => {
    if(time > 0){
    time--;
    document.getElementById('timer').innerText = time;
    }else{
        clearInterval(countDown);
        containerBubble.innerHTML = `
        <div class='flex justify-center items-center flex-col'>
        <p class='text-xl font-bold text-green-600'>your score is ${addScore}</p>
        <h1 class="text-2xl font-mono font-bold text-red-600">Ops! Game Over.</h1>
        </div>
        `;

    }
  }, 1000);
  
}


containerBubble.onclick =(details)=>{
  const rnDigit = document.getElementById('random-digit').innerText;
  const rnValue = parseInt(rnDigit)
  const conDigit= parseInt(details.target.innerText);
   if(rnValue === conDigit){
      scoreAdd();
      bubbleGame();
   }else{
    alert('Ops! try again.');
    return
   }
    document.getElementById('score').innerText = addScore;
    ranDigit(); 
    
}
bubbleGame();
timer();
ranDigit(); 


