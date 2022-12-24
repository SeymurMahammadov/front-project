//soldaki
var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
}; 

//sagdaki

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


 
let paginationLeftPos = "20px";
let paginationOpacity = 0;
let checkPaginationClick = 0;

$(".pagination-page-number").click(function () {
  $(".pagination-page-number").removeClass("active");
  $(this).addClass("active");
  paginationLeftPos = $(this).prop("offsetLeft") + "px";
  paginationOpacity = 1;
  checkPaginationClick = 1;

  $(".pagination-hover-overlay").css({
    left: paginationLeftPos,
    backgroundColor: "black",
    opacity: paginationOpacity });

  $(this).css({
    color: "#fff" });

});

$(".pagination-page-number").hover(
function () {
  paginationOpacity = 1;
  $(".pagination-hover-overlay").css({
    backgroundColor: "#black",
    left: $(this).prop("offsetLeft") + "px",
    opacity: paginationOpacity });


  $(".pagination-page-number.active").css({
    color: "black" });


  $(this).css({
    color: "#fff" });

},
function () {
  if (checkPaginationClick) {
    paginationOpacity = 1;
  } else {
    paginationOpacity = 0;
  }

  $(".pagination-hover-overlay").css({
    backgroundColor: "black",
    opacity: paginationOpacity,
    left: paginationLeftPos });


  $(this).css({
    color: "black" });


  $(".pagination-page-number.active").css({
    color: "#fff" });

});



let buttons=document.querySelectorAll('.btn');

if(localStorage.getItem('products') === null) {
  localStorage.setItem('products',JSON.stringify([]))
}

for(let btn of buttons) {
  btn.onclick = function(e) {
    
      e.preventDefault();

      let pr_id = e.target.parentElement.parentElement.id;
      let pr_name = e.target.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
      let pr_price = e.target.previousElementSibling.firstElementChild.innerHTML;
      let pr_image = e.target.parentElement.parentElement.firstElementChild.src;
      
      let basket = JSON.parse(localStorage.getItem('products'));

      let exist_prod = basket.find(pr => pr.Id === pr_id);

      if(exist_prod === undefined) {
          basket.push({
              Id: pr_id,
              Name: pr_name,
              Price: pr_price,
              Image:pr_image,
              Count: 1
          })

      }
      else{
          exist_prod.Count += 1;
      }


      localStorage.setItem('products',JSON.stringify(basket));
      
      BasketCount();
  }
}

function BasketCount() {
let basket = JSON.parse(localStorage.getItem('products'));
document.getElementById('count').innerHTML =  basket.length;
}

BasketCount();