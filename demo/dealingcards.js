// /* 发牌 */

// const cardSymbols = [
//     '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮',  
//     '🂱', '🂲', '🂳', '🂴', '🂵', '🂶', '🂷', '🂸', '🂹', '🂺', '🂻', '🂽', '🂾',
//     '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃈', '🃉', '🃊', '🃋', '🃍', '🃎',
//     '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃝', '🃞', 
//     '🂿', '🃟'
// ];

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomCards(symbols, num) {
//     const shuffled = [...symbols].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, num);
// }

// function shuffleCards() {

  
//     const selectedCards = getRandomCards(cardSymbols, 9);
//     const container = document.getElementById('card-container');
//     container.innerHTML = '';  

//     selectedCards.forEach((symbol, index) => {
//         const cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
//         cardDiv.style.setProperty('--i', index - 4);
//         cardDiv.textContent = symbol;
//         container.appendChild(cardDiv);
//     });

//     setTimeout(() => {
//         const outerContainer = document.getElementById('nine-cards-container');
//         if (outerContainer) {
//             outerContainer.style.height = '500px'; 
//         }
//     }, 100); 
// }

// let timer;
// function resetTimer() {
//     clearTimeout(timer);
//     timer = setTimeout(shuffleCards, 2000); 
// }

// function setupEventListeners() {
//     const container = document.getElementById('card-container');
//     if (container) {
//         container.addEventListener('mouseover', () => {
//             clearTimeout(timer);  
//         });

//         container.addEventListener('mouseout', resetTimer);
//     }
// }

// function onPageLoadComplete() {
//     shuffleCards();
//     setupEventListeners();
// }

// document.addEventListener('pjax:load', onPageLoadComplete);

// if (document.readyState === 'complete') {
//     onPageLoadComplete();
// } else {
//     window.addEventListener('load', onPageLoadComplete);
// }