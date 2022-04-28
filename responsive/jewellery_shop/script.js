// if ($('#back-to-top').length) {
//     var scrollTrigger = 100, // px
//         backToTop = function () {
//             var scrollTop = $(window).scrollTop();
//             if (scrollTop > scrollTrigger) {
//                 $('#back-to-top').addClass('show');
//             } else {
//                 $('#back-to-top').removeClass('show');
//             }
//         };
//     backToTop();
//     $(window).on('scroll', function () {
//         backToTop();
//     });
//     $('#back-to-top').on('click', function (e) {
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: 0
//         }, 700);
//     });







$(document).ready(function(){

    $('#itemslider').carousel({ interval: 3000 });

    $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i=1;i<6;i++) {
            itemToClone = itemToClone.next();

            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            itemToClone.children(':first-child').clone()
            .addClass("cloneditem-"+(i))
            .appendTo($(this));
        }
    });
});



// const sliderShowImage = document.querySelectorAll('.slider_bg .slideshow_img_1');

// const nextimageDelay = 3000;
// let currentImageCounter = 0;

// sliderShowImage[currentImageCounter].style.opacity = 1;
// setInterval(nextImage, nextimageDelay);

// function nextImage (){
//     sliderShowImage[currentImageCounter].style.zIndex = -2;
//     const tempcounter = currentImageCounter;

//     setTimeout(()=> {
//         sliderShowImage[tempcounter].style.opacity = 0;
//     },1000);

//     sliderShowImage[currentImageCounter].style.opacity = 0;
//     currentImageCounter = (currentImageCounter + 1) % sliderShowImage.length;

//     sliderShowImage[currentImageCounter].style.opacity = 1;
//     sliderShowImage[currentImageCounter].style.zIndex = -1;
// }




testeOne = document.getElementById('teste1');
testeTwo = document.getElementById('teste2');
testeThree = document.getElementById('teste3');
testeFourth = document.getElementById('teste4');
testeFifth = document.getElementById('teste5');
ratingFirst= document.getElementById('rt1');
ratingSecond= document.getElementById('rt2');
ratingThird= document.getElementById('rt3');
ratingFourth= document.getElementById('rt4');
ratingFifth= document.getElementById('rt5');

function myFirstHover () {
    testeOne = document.getElementById('teste1');
testeTwo = document.getElementById('teste2');
testeThree = document.getElementById('teste3');
testeFourth = document.getElementById('teste4');
testeFifth = document.getElementById('teste5');
ratingFirst= document.getElementById('rt1');
ratingSecond= document.getElementById('rt2');
ratingThird= document.getElementById('rt3');
ratingFourth= document.getElementById('rt4');
ratingFifth= document.getElementById('rt5');

    if(testeOne.classList.contains('teste11')) {
        testeOne.classList.remove('teste11')
        testeTwo.classList.add('teste22');
        testeThree.classList.add('teste33')
        testeFourth.classList.add('teste44')
        testeFifth.classList.add('teste55')

        elem = document.getElementById('firstImageHover');
        elem.focus();

        ratingFirst.classList.add('new_rating_first')
        ratingSecond.classList.remove('new_rating_second')
        ratingThird.classList.remove('new_rating_third')
        ratingFourth.classList.remove('new_rating_fourth')
        ratingFifth.classList.remove('new_rating_fifth')
    }
}

function mySecondHover () {

    if(testeTwo.classList.contains('teste22')) {
        testeTwo.classList.remove('teste22');
        testeOne.classList.add('teste11')
        testeThree.classList.add('teste33')
        testeFourth.classList.add('teste44')
        testeFifth.classList.add('teste55')

        ratingFirst.classList.remove('new_rating_first')
        ratingSecond.classList.add('new_rating_second')
        ratingThird.classList.remove('new_rating_third')
        ratingFourth.classList.remove('new_rating_fourth')
        ratingFifth.classList.remove('new_rating_fifth')
        
    }
}

function myThirdHover () {

    if(testeThree.classList.contains('teste33')) {
        testeOne.classList.add('teste11')
        testeTwo.classList.add('teste22');
        testeThree.classList.remove('teste33')
        testeFourth.classList.add('teste44')
        testeFifth.classList.add('teste55')

        ratingFirst.classList.remove('new_rating_first')
        ratingSecond.classList.remove('new_rating_second')
        ratingThird.classList.add('new_rating_third')
        ratingFourth.classList.remove('new_rating_fourth')
        ratingFifth.classList.remove('new_rating_fifth')
    }
}

function myFourthHover () {

    if(testeFourth.classList.contains('teste44')) {
        testeOne.classList.add('teste11')
        testeTwo.classList.add('teste22');
        testeThree.classList.add('teste33')
        testeFourth.classList.remove('teste44')
        testeFifth.classList.add('teste55')

        ratingFirst.classList.remove('new_rating_first')
        ratingSecond.classList.remove('new_rating_second')
        ratingThird.classList.remove('new_rating_third')
        ratingFourth.classList.add('new_rating_fourth')
        ratingFifth.classList.remove('new_rating_fifth')
    }
}


function myFifthHover () {

    if(testeFifth.classList.contains('teste55')) {
        testeOne.classList.add('teste11')
        testeTwo.classList.add('teste22');
        testeThree.classList.add('teste33')
        testeFourth.classList.add('teste44')
        testeFifth.classList.remove('teste55')

        ratingFirst.classList.remove('new_rating_first')
        ratingSecond.classList.remove('new_rating_second')
        ratingThird.classList.remove('new_rating_third')
        ratingFourth.classList.remove('new_rating_fourth')
        ratingFifth.classList.add('new_rating_fifth')
    }
}
