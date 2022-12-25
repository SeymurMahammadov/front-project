$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
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
          infinite:false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  });

  $('.sliderr').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      
    ]
  });

  $('.sliderrr').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
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
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4
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
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
      
    ]
  });

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunctionn() {
    document.getElementById("myDropdownn").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtnn')) {
      var dropdowns = document.getElementsByClassName("dropdownn-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunctionnn() {
    document.getElementById("myDropdownnn").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtnnn')) {
      var dropdowns = document.getElementsByClassName("dropdownnn-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


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

