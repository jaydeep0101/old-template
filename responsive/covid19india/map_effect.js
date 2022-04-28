xyz = document.getElementsByClassName('cls1');
var i;

function changeColor(a,b){
    for(i = 0; i < xyz.length; i++){
        xyz[i].style.fill = a
        xyz[i].style.stroke=b
    }
}

$('#first-map-div').click(() => {
    $('#second-map-div').removeClass('second_map_div_bgcolor');
    $('#second-map-div').removeClass('abcd');
    $('#third-map-div').removeClass('third_map_div_bgcolor');
    $('#fourth-map-div').removeClass('fourth_map_div_bgcolor');
    $('#first-map-div').addClass('first_map_div_bgcolor');

    changeColor('#7c456d','#7c456d')
});
            
$('#second-map-div').click(() => {
    $('#first-map-div').removeClass('first_map_div_bgcolor');
    $('#third-map-div').removeClass('third_map_div_bgcolor');
    $('#fourth-map-div').removeClass('fourth_map_div_bgcolor');
    $('#second-map-div').addClass('second_map_div_bgcolor');

    changeColor('rgba(0, 123, 255, 0.4392156862745098)','rgba(0, 123, 255, 0.4392156862745098)')
});

$('#third-map-div').click(() => {
    $('#third-map-div').addClass('third_map_div_bgcolor')
    $('#second-map-div').removeClass('second_map_div_bgcolor');
    $('#second-map-div').removeClass('abcd');
    $('#first-map-div').removeClass('first_map_div_bgcolor');
    $('#fourth-map-div').removeClass('fourth_map_div_bgcolor');

    changeColor("rgba(40, 167, 69, 0.4392156862745098)","rgba(40, 167, 69, 0.4392156862745098)")
});

$('#fourth-map-div').click(() => {
    $('#third-map-div').removeClass('third_map_div_bgcolor')
    $('#second-map-div').removeClass('second_map_div_bgcolor');
    $('#second-map-div').removeClass('abcd');
    $('#first-map-div').removeClass('first_map_div_bgcolor');
    $('#fourth-map-div').addClass('fourth_map_div_bgcolor');

    changeColor("rgba(108, 117, 125, 0.4392156862745098)","rgba(108, 117, 125, 0.4392156862745098)")
});

$('#title-india').click(()=> {
    $('body').toggleClass('title_india_bgColor');
})

window.addEventListener('click', function(event){
     var titleIndia = document.getElementById('title-india');
     if(event.target !=titleIndia) {
         $('body').removeClass('title_india_bgColor');
     }
});
