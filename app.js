

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements[0].classList.add('show')
// hiddenElements[0].classList.remove('hidden')
// var index = 0 
// var interval = 10000;
// function start() {
//     clearInterval(intervalFun)
//     var element = document.getElementById('Music');
//     element.play();
    
//     scrollDown()
   
//     setInterval(scrollDown, interval);
// }
// var intervalFun = setInterval(scrollDown, interval);

// function scrollDown(){

//     index+=1 
//     if(index == 1) {
//         clearInterval(intervalFun)
//         interval = 1000;

//         var intervalFun =  setInterval(scrollDown, 1000);

//     }
//     else if(index == 7 ){
//         clearInterval(intervalFun)
//         interval = 7000;
        
//     }
//     else if(index == 8 ){
//         interval = 9000;
//     }else if(index == 9 ){
//         interval = 33000;
//     }else {
//         clearInterval(intervalFun)
//         interval = 10000;

//         var intervalFun =  setInterval(scrollDown, 10000);    
//     }

//     window.scrollBy(0, window.innerHeight  );
//     hiddenElements[index].classList.add('show')
//     hiddenElements[index].classList.remove('hidden')

// }
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements[0].classList.add('show')
hiddenElements[0].classList.remove('hidden')
var index = 0
var interval = 9000;
var intervalId = null;

function start() {
    clearInterval(intervalId);
    var element = document.getElementById('Music');
    element.play();
    
    scrollDown();
   
    intervalId = setInterval(scrollDown, interval);
}

function scrollDown() {

    index += 1;
    

    window.scrollBy(0, window.innerHeight);
    hiddenElements[index].classList.add('show');
    hiddenElements[index].classList.remove('hidden');

    // Clear the existing interval
    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    // Set the new interval
    intervalId = setInterval(scrollDown, interval);
}

