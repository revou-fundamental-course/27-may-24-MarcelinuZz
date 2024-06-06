//Ini JavaScript
function GetNewName(){
    var name = prompt("kenalan dulu yuk nama kamu siapa?", "Owen")
    document.getElementById("refresh").innerHTML= name
}

GetNewName()

document.getElementById("pencet").addEventListener("click", function(){
    GetNewName()
})

function getData(){
    var nama = document.getElementById("Name").value
    var tanggal = document.getElementById("Tgl").value
    var gender = document.getElementsByName("Gender")
    var pesan = document.getElementById("Note").value

    for(var i = 0; i < gender.length;i++){
        if(gender[i].checked){
            Genders = gender[i].value;
            break
        }
    }

    document.getElementById("NamaOutput").innerHTML=": "+nama
    document.getElementById("TanggalOutput").innerHTML=": "+tanggal
    document.getElementById("GenderOutput").innerHTML=": "+Genders
    document.getElementById("PesanOutput").innerHTML=": "+pesan
}

function validateForm() {
    var nama = document.getElementById("Name").value;
    var tanggal = document.getElementById("Tgl").value;
    var gender = document.getElementsByName("Gender");
    var pesan = document.getElementById("Note").value;

    var isValid = true;

    if (nama.trim() === "") {
        alert("Silakan isi Nama.");
        isValid = false;
    }

    if (tanggal.trim() === "") {
        alert("Silakan pilih Tanggal Lahir.");
        isValid = false;
    }

    var genderSelected = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected) {
        alert("Silakan pilih Jenis Kelamin.");
        isValid = false;
    }

    if (pesan.trim() === "") {
        alert("Silakan isi Pesan.");
        isValid = false;
    }
    
    return isValid;
}


document.getElementById("Kirim").addEventListener("click", function(){
    event.preventDefault()
    var NextFunc
    NextFunc = validateForm();
    if(NextFunc == true){
        getData();
    }
})

var imageSlideIndex = 0;
var imageSlideWidth = document.getElementsByClassName('ImageSlide')[0].offsetWidth;
showImageSlide(imageSlideIndex);

var textSlideIndex = 0;
var textSlideWidth = document.getElementsByClassName('TextSlide')[0].offsetWidth;
showTextSlide(textSlideIndex);

setInterval(() => {
    nextImageIndex(1);
}, 2500);

setInterval(() => {
    nextTextIndex(1);
}, 5000);

var brownColors = ['#bc846e', '#d3aa9a'];

var currentColorIndex = 0;

function nextImageIndex(n) {
    imageSlideIndex += n;
    showImageSlide(imageSlideIndex);
    updateSliderBackgroundColor();
}


function nextTextIndex(n) {
    textSlideIndex += n;
    showTextSlide(textSlideIndex);
    updateSliderBackgroundColor();
}


function updateSliderBackgroundColor() {
    var sliders = document.querySelectorAll('.slider');
    sliders.forEach(function(slider) {
        slider.style.backgroundColor = brownColors[currentColorIndex];
    });
    
    currentColorIndex = (currentColorIndex + 1) % brownColors.length;
}

// gk tau kenapa perlu di kasih setInterval lagi agar warna bergeser dgn sempurna
setInterval(function() {
    nextImageIndex(1);
}, 2500);

// gk tau kenapa perlu di kasih setInterval lagi agar warna bergeser dgn sempurna
setInterval(function() {
    nextTextIndex(1);
}, 2500);

function showImageSlide(imageIndex) {
    var imageSlides = document.getElementsByClassName("ImageSlide");
    var imageContainer = document.getElementsByClassName('ImageContainer')[0];

    if (imageIndex >= imageSlides.length) {
        imageSlideIndex = 0;
    }
    if (imageIndex < 0) {
        imageSlideIndex = imageSlides.length - 1;
    }

    imageSlideWidth = imageSlides[0].offsetWidth;
    var translateX = -imageSlideIndex * imageSlideWidth;
    imageContainer.style.transform = 'translateX(' + translateX + 'px)';
}

function showTextSlide(textIndex) {
    var textSlides = document.getElementsByClassName("TextSlide");
    var textContainer = document.getElementsByClassName('TextContainer')[0];

    if (textIndex >= textSlides.length) {
        textSlideIndex = 0;
    }
    if (textIndex < 0) {
        textSlideIndex = textSlides.length - 1;
    }

    textSlideWidth = textSlides[0].offsetWidth;
    var translateX = -textSlideIndex * textSlideWidth;
    textContainer.style.transform = 'translateX(' + translateX + 'px)';
}

function scrollWithOffset(event, id) {
    event.preventDefault();
    const yOffset = -30;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}