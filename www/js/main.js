function loadPreparings(){
    li_index = 0;
    if(document.documentElement.clientWidth<576){
        var mainPhotoDiv = document.getElementById("mainPhoto");
        mainPhotoDiv.classList.add("order-first");
    }
    $("#carousel").on('slid.bs.carousel', function () {
        changeActiveLi(getActiveSlideIndex());
      })
    var navbar = document.getElementsByClassName("navbar-nav")[0];
    navbar.addEventListener("click", navChange, event)
}

function navChange(event){
    var items = document.getElementsByClassName("nav-link");
    for(var i = 0; i < items.length; i++){
        items[i].classList.remove("active");
    }
    var choosed = event.target;
    choosed.classList.add("active");
}

function changeActiveLi(newIndex){
    var index = newIndex;
    var films = document.getElementsByClassName("film-li");
    for(var i = 0; i < films.length; i++){
        films[i].classList.remove("activ-li");
    }
    if(index == 5){
        index=0;
    }
    films[index].classList.add("activ-li");
}

function getActiveSlideIndex(){
    var slides = document.getElementsByClassName("carousel-item");
    for(var i=0; i<slides.length;i++){
        if(slides[i].classList.length == 2){
            return i;
        }
    }
}

function changeStyle(){
    var checkbox = document.getElementById("check");
    var divs = document.getElementsByClassName("style-changable");
    var modeLabel = document.getElementById("mode-label");
    if(checkbox.checked == true)
        for(var i = 0; i < divs.length; i++){
            divs[i].classList.add("dark");
            modeLabel.innerText="Перейти в дневной режим";
        }
    else{
        for(var i = 0; i < divs.length; i++){
            divs[i].classList.remove("dark");
            modeLabel.innerText="Перейти в ночной режим";
        }
    }
}