$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  $('.down-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  $('.your-class').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots:true,
          infinite:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  let menu=document.querySelector('#a')
let sidebar=document.querySelector('#sidebar')

menu.addEventListener('click',()=>{
  sidebar.classList.toggle("active")
})

let search=document.querySelector('#z')
let srch=document.querySelector('#search')

search.addEventListener('click',()=>{
  srch.classList.toggle("activee")
})


let signbut=document.querySelector('#olar')
let sign=document.querySelector('#sign')

signbut.addEventListener('click',()=>{
  sign.classList.toggle("activee")
})
