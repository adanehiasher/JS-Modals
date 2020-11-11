const storeImg = document.querySelectorAll('.store-img');
const lightBox = document.querySelector('.lightbox-container');
const lightBoxItem = document.querySelector('.lightbox-item');


//set an array to push the img.src
let imageList = []

//array counter to slide thru the array
let counter = 0;


storeImg.forEach(function(img){
  
  //moved each img into the array
  imageList.push(img.src)

  //addeventlistener to each img
  img.addEventListener('click', function(ev){
   
    //find the click target
    let eventSrc = ev.target.src

    //fix target in lightboxitem
    lightBoxItem.style.backgroundImage = `url(${eventSrc})`

    //add visible class
    lightBox.classList.add('show')


    // console.log(img.src)
    // console.log(imageList)
    // console.log(imageList.indexOf(img.src))
    let counter = imageList.indexOf(img.src)

    //console.log(counter)

  })
  
})


const btnCtrl = document.querySelectorAll('.lightbox-control');
const closeBtn = document.querySelector('.lightbox-close');

//wire up the slide buttons
btnCtrl.forEach(function(btn){
  btn.addEventListener('click',function(e){
    
    let index = e.currentTarget.classList
    //console.log(index)

    if(index.contains('btnRight')){

      //+1 per click to move thru the array
      counter++
      // console.log(counter + 'new shit')
      if(counter > imageList.length - 1){
        //if counter is less than 0, counter should be equal to the first index of the array
        counter =  0;
      }

      lightBoxItem.style.backgroundImage = `url(${imageList[counter]})`
      
    }else if(index.contains('btnLeft')){

      //-1 per click to move thru the array
      counter--
      // console.log(counter + 'old shit')
      if(counter < 0){
        //if counter is less than 0, counter should be equal to the last index of the array
        counter = imageList.length - 1;
      }

      //change the background as the counter moves thru the array 
      lightBoxItem.style.backgroundImage = `url(${imageList[counter]})`
    }
  })
})


//close the modal container by basically removing the class
closeBtn.addEventListener('click', function(){
  lightBox.classList.remove('show')
})




//console.log(imageList)

