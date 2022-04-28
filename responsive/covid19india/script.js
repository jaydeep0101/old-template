const Sates_Name = [ 'Andaman and Nicobar','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Delhi','Dadra and Diu','Goa','Gujarat','Himachal Pradesh','Haryana','Jharkhand','Jammu and Kashmir','Karnataka','Kerala','Ladakh','Lakshadweep','Maharashtra','Meghalaya','Manipur','Madhya Pradesh','Mizoram','Nagaland','Odisha','Punjab','Puducherry','Rajasthan','Sikkim','Telangana','Tamil Nadu','Tripura','','UttarPradesh','Uttarakhand','West Bengal']

localStorage.setItem('order', 'asc')
// localStorage.setItem('deltaItems','mouseDown')

filed_delta = ['active','confirmed', 'recovered', 'deceased', 'other', 'tested', 'vaccinated1', 'vaccinated2'];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// live update time zone
const newDate = new Date();
countMonth = months[newDate.getMonth()]
monthDigit = countMonth.slice(0,3)

firstDate = newDate.getDate()+ ' ' + monthDigit
secondDate = newDate.getDate()+ ' ' + countMonth

document.getElementById('nowDate').innerHTML = secondDate;
document.getElementById('lastUpdate').innerHTML = firstDate;

html_element_counter = 0;
document.getElementById('main-table').innerHTML = '';
var timer;

function tableSorting(val, tag) {
    html_data = "";
    request = new XMLHttpRequest();
    var url = "https://data.covid19india.org/v4/min/data.min.json";



    request.open("GET", url)
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {

            var jsonData = JSON.parse(request.responseText)
            html_element = document.getElementById('main-table');
            var arrayData = Object.entries(jsonData)

            Sates_Name.filter((value,index)=> {
                arrayData[index][0] = value
            })

            arrayData.filter((value) => {
                typeof (value[1]?.delta == undefined ? value[1].delta = '' : value[1].delta);
                value[1].total.other = value[1].total.other == undefined ? '0' : value[1].total.other;
                value[1].delta.confirmed = value[1].delta.confirmed ===  undefined ? '' : value[1].delta.confirmed;
                value[1].delta.recovered = value[1].delta.recovered == undefined ?  '': value[1].delta.recovered;
                value[1].delta.deceased = value[1].delta.deceased == undefined ?  '': value[1].delta.deceased;
                value[1].delta.tested = value[1].delta.tested == undefined ?  '': value[1].delta.tested;
                value[1].delta.vaccinated1 = value[1].delta.vaccinated1 == undefined ?  '': value[1].delta.vaccinated1;
                value[1].delta.vaccinated2 = value[1].delta.vaccinated2 == undefined ?  '': value[1].delta.vaccinated2;
                value[1].total.active = value[1].total.confirmed-value[1].total.recovered-value[1].total.deceased-value[1].total.other;
            })
            
            // Panel Time Zone
            listDateTime = arrayData
            newListDateTime = listDateTime[10][1]['meta']['last_updated'].slice(11,16)
            joinDateTime = firstDate + ' ,'+newListDateTime ;

            d= arrayData[33][1]['meta']['last_updated']
            b = d.slice(11,16)

            document.getElementById('panelDateTime').innerHTML = joinDateTime;
            document.getElementById('nowTime').innerHTML = b;

            dataOfTotalPopulation = arrayData[33][1]['meta']['population']
            dataOfTotalConfirmed = arrayData[33][1]['delta']['confirmed']

            dataOfTotalDeceased = arrayData[33][1]['delta']['deceased']
            dataOfTotalRecovered = arrayData[33][1]['delta']['recovered']
            dataOfTotalOther = arrayData[33][1]['delta']['other']

            dataOfTotalVaccinatedFirstDoes =  arrayData[33][1]['delta']['vaccinated1']
            dataOfTotalVaccinatedSecondDoes =  arrayData[33][1]['delta']['vaccinated2']
            dataOfTotalTested =  arrayData[33][1]['delta']['tested']

            TotalDataConfirmed = arrayData[33][1]['total']['confirmed']
            TotalDataDeceased = arrayData[33][1]['total']['deceased']

            TotalDataOther = arrayData[33][1]['total']['other']
            TotalDataTested = arrayData[33][1]['total']['tested']

            TotalDataVaccinatedFirst = arrayData[33][1]['total']['vaccinated1']
            TotalDataVaccinatedSecond = arrayData[33][1]['total']['vaccinated2']
            TotalDataRecovered = arrayData[33][1]['total']['recovered']
            
            dataOfTotalActive = TotalDataConfirmed - TotalDataRecovered - TotalDataDeceased - TotalDataOther
            TotalVaccineDose = TotalDataVaccinatedFirst + TotalDataVaccinatedSecond
            TotalDeltaDataOfFullyVacinated = dataOfTotalVaccinatedFirstDoes + dataOfTotalVaccinatedSecondDoes

            delete arrayData[33]
            
            if (localStorage.getItem('mousedown') == 'mouseDown') {

                if (val == 'state') {
                    if(localStorage.getItem("order") == "asc"){
                        arrayData.sort();
                        localStorage.setItem("order", "")
                    }
                    else{
                        arrayData.reverse();
                        localStorage.setItem('order', 'asc')
                    }
                }
                else {

                    if (localStorage.getItem('order') == 'asc') {
                        arrayData.sort((a, b) => a[1]['delta'][val] > b[1]['delta'][val])
                        localStorage.setItem('order', '')
                    }
                    else {
                        
                        // arrayData.sort((a, b) => a[1]['delta'][val] < b[1]['delta'][val])
                        arrayData.sort((a, b) => a[1][tag][val] < b[1][tag][val])
                        localStorage.setItem('order', 'asc')
                    }
                }
                localStorage.setItem('mousedown','')
            }

            else {

                if (val == 'state') {
                    if(localStorage.getItem("order") == "asc"){
                        arrayData.sort();
                        localStorage.setItem("order", "")
                    }
                    else{
                        arrayData.reverse();
                        localStorage.setItem('order', 'asc')
                    }
                }
                else {
                    if (localStorage.getItem('order') == 'asc') {
                        arrayData.sort((a, b) => a[1][tag][val] > b[1][tag][val])
                        localStorage.setItem('order', '')
                    }
                    else {
                        arrayData.sort((a, b) => a[1]['delta'][val] < b[1]['delta'][val])
                        localStorage.setItem('order', 'asc')
                    }
                }
                localStorage.setItem('mousedown','mouseDown')
            }


            // if (val == 'state') {
            //     if(localStorage.getItem("order") == "asc"){
            //         arrayData.sort();
            //         localStorage.setItem("order", "")
            //     }
            //     else{
            //         arrayData.reverse();
            //         localStorage.setItem('order', 'asc')
            //     }
            // }
            // else {

            //     if (localStorage.getItem('order') == 'asc') {
            //         arrayData.sort((a, b) => a[1][tag][val] > b[1][tag][val])
            //         localStorage.setItem('order', '')
            //     }
            //     else {
                    
            //         arrayData.sort((a, b) => a[1][tag][val] < b[1][tag][val])
            //         localStorage.setItem('order', 'asc')
            //     }
            // }


            function convertNumber(number){
                    if (number > 999 && number < 100000) {
                        return (number/1000).toFixed(1) + 'K'
                    }

                    else if(number >= 100000 && number < 9999999) {
                        return (number/100000).toFixed(1) + 'L'
                    }

                    else if(number >= 10000000) {
                        return (number/10000000).toFixed(1) + 'Cr'
                    }
                    else if(number < 999) {
                        return number
                    }
                }
                

            arrayData.forEach((item) => {
                var allItems = item[1]
                var allItemsTotal = allItems['total']
                var allItemsDelta = allItems['delta']

                var allItemsMeta = allItems['meta']
                var findDalta = allItems['delta']

                var deltaData = filed_delta.filter(c => !Object.keys(findDalta).includes(c));
                var findDalta = deltaData.reduce((k, z) => ({...k,[z]: ''}), findDalta)

                if (html_element_counter % 2 == 0) {
                    html_element = `
                        <div class='table_row'  onmouseover='first_hover("${item[0]}")'>
                            <div class="cell fixed dark_mode_cell" id='row-first-id'>
                              <div class="state_name" id="table-first-value" value=''>${item[0]}</div>
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right " id="hover-id">
                              <div class="delta is-confirmed  u_table_padding u_font_size">${findDalta.confirmed}</div> 
                              <div class="delta" id="table-first-value">${new Intl.NumberFormat().format(allItemsTotal.confirmed)}</div> 
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right">
                              <div>${new Intl.NumberFormat().format(allItemsTotal.active)}</div>
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right">
                              <div class="delta is-recovered u_table_padding u_font_size">${(findDalta.recovered)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                 
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right">
                              <div class="delta is-deceased u_table_padding u_font_size">${(findDalta.deceased)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.deceased)}</div>
                 
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right">
                              <div class="delta  u_table_padding u_font_size">${(findDalta.other)}</div>
                              <div class="delta ">${(allItemsTotal.other)}</div>
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right  hide_cell new_hide_cell">
                              <div class="delta is-tested u_table_padding u_font_size">${(findDalta.tested)}</div>
                              <div class="delta ">${convertNumber(allItemsTotal.tested)}</div>
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right  hide_cell new_hide_cell">
                              <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated1)}</div>
                              <div class="delta ">${convertNumber(allItemsTotal.vaccinated1)}</div>
                  
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right  hide_cell new_hide_cell">
                              <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated2)}</div>
                              <div class="delta ">${convertNumber(allItemsTotal.vaccinated2)}</div>
                
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right  hide_cell new_hide_cell">
                              <div class="delta ">${convertNumber(allItemsTotal.vaccinated1 + allItemsTotal.vaccinated2)}</div>
                            </div>
                            <div class="cell statistic u_hover u_color align_items_right  hide_cell new_hide_cell">
                            <div class="delta">😈</div>
                            </div>
                            <div class="cell statistic u_hover hide_cell new_hide_cell u_color align_items_right ">
                              <div class="delta">😈</div>
                            </div>
                            <div class="cell statistic u_hover hide_cell new_hide_cell u_color align_items_right ">
                              <div class="delta">${convertNumber(allItemsMeta.population)}</div>
                            </div>
                        </div>
                    `
                } else {
                    html_element = `
                        <div class='table_row' onmouseover='first_hover("${item[0]}")'>
                          <div class="cell fixed dark_mode_cell" id='row-first-id'>
                            <div class="state_name" id="table-first-value" value=''>${item[0]}</div>
                          </div>
                          <div class="cell statistic new_class u_hover u_color align_items_right ligth_color" id="hover-id">
                            <div class="delta is-confirmed" id="data-confirmed u_table_padding u_font_size">${(findDalta.confirmed)}</div>
                            <div class="delta" id="data-confirmed">${new Intl.NumberFormat().format(allItemsTotal.confirmed)}</div>
                          </div>
                        <div class="cell statistic new_class u_hover u_color align_items_right ligth_color ">
                          <div>${new Intl.NumberFormat().format(allItemsTotal.active)}</div>
                        </div>
                        <div class="cell statistic new_class u_hover u_color align_items_right ">
                          <div class="delta is-recovered u_table_padding u_font_size">${(findDalta.recovered)}</div>
                          <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                        </div>
                        <div class="cell statistic new_class u_hover u_color align_items_right ">
                          <div class="delta is-deceased u_table_padding u_font_size">${(findDalta.deceased)}</div>
                          <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.deceased)}</div>
            
                        </div>
                        <div class="cell statistic new_class u_hover u_color align_items_right ">
                        <div class="delta  u_table_padding u_font_size">${(findDalta.other)}</div>
                          <div class="delta">${(allItemsTotal.other)}</div>
                        </div>
                        <div class="cell statistic u_hover u_color align_items_right  new_class hide_cell new_hide_cell">
                          <div class="delta is-tested u_table_padding u_font_size">${(findDalta.tested)}</div>
                          <div class="delta ">${convertNumber(allItemsTotal.tested)}</div>
                        </div>
                        <div class="cell statistic u_hover u_color align_items_right  new_class hide_cell new_hide_cell">
                          <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated1)}</div>
                          <div class="delta ">${convertNumber(allItemsTotal.vaccinated1)}</div>
              
                        </div>
                        <div class="cell statistic u_hover u_color align_items_right  new_class hide_cell new_hide_cell">
                          <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated2)}</div>
                          <div class="delta ">${convertNumber(allItemsTotal.vaccinated2)}</div>
              
                        </div>
                        <div class="cell statistic u_hover u_color align_items_right  new_class hide_cell new_hide_cell">
                          <div class="delta ">${convertNumber(allItemsTotal.vaccinated1 + allItemsTotal.vaccinated2)}</div>
               
                        </div>
                        <div class="cell statistic u_hover u_color align_items_right  new_class hide_cell new_hide_cell">
                          <div class="delta">😈</div>
                        </div>
                        <div class="cell statistic u_hover new_class hide_cell new_hide_cell u_color align_items_right ">
                          <div class="delta">😈</div>
                        </div>
                        <div class="cell statistic u_hover new_class hide_cell new_hide_cell u_color align_items_right ">
                          <div class="delta">${convertNumber(allItemsMeta.population)}</div>
                        </div>
                      </div>
                    `
                }

                html_data += html_element;
                html_element_counter += 1;
                
            });


             html_element = `
                        <div class='table_row'>
                            <div class="cell fixed dark_mode_cell" id='row-first-id'>
                                <div class="state_name" id="table-first-value" value=''>India</div>
                            </div>
                            
                            <div class="cell statistic new_class align_items_right u_hover u_color  ligth_color" id="hover-id">
                            <div class="delta is-confirmed" id="data-confirmed u_table_padding u_font_size">${(dataOfTotalConfirmed)}</div>
                                <div class="delta" id="data-confirmed">${new Intl.NumberFormat().format(TotalDataConfirmed)}</div>
                            </div>

                            <div class="cell statistic new_class align_items_right u_hover u_color ">

                              <div class="delta ">${new Intl.NumberFormat().format(dataOfTotalActive)}</div>
                            </div>

                            <div class="cell statistic new_class align_items_right u_hover u_color ">
                                <div class="delta is-recovered u_table_padding u_font_size">${(dataOfTotalRecovered)}</div>
                                <div class="delta ">${new Intl.NumberFormat().format(TotalDataRecovered)}</div>
                            </div>

                            <div class="cell statistic new_class align_items_right u_hover u_color ">
                            <div class="delta is-deceased u_table_padding u_font_size">${(dataOfTotalDeceased)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(TotalDataDeceased)}</div>
                            </div>

                            <div class="cell statistic new_class align_items_right u_hover u_color ">
                              <div class="delta">${new Intl.NumberFormat().format(dataOfTotalOther)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(TotalDataOther)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  new_class align_items_right hide_cell new_hide_cell">
                              <div class="delta ">${convertNumber(dataOfTotalTested)}</div>
                              <div class="delta ">${convertNumber(TotalDataTested)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  new_class align_items_right hide_cell new_hide_cell">
                              <div class="delta ">${convertNumber(dataOfTotalVaccinatedFirstDoes)}</div>
                              <div class="delta ">${convertNumber(TotalDataVaccinatedFirst)}</div>
                  
                            </div>
                            <div class="cell statistic u_hover u_color  new_class align_items_right hide_cell new_hide_cell">
                              <div class="delta ">${convertNumber(dataOfTotalVaccinatedSecondDoes)}</div>
                              <div class="delta ">${convertNumber(TotalDataVaccinatedSecond)}</div>
                  
                            </div>
                            <div class="cell statistic u_hover u_color  new_class align_items_right hide_cell new_hide_cell">
                              <div class="delta ">${convertNumber(TotalDeltaDataOfFullyVacinated)}</div>
                              <div class="delta ">${convertNumber(TotalVaccineDose)}</div>
                   
                            </div>
                            <div class="cell statistic u_hover u_color  new_class align_items_right hide_cell new_hide_cell">
                              <div class="delta">😈</div>
                            </div>

                            <div class="cell statistic u_hover new_class align_items_right hide_cell new_hide_cell u_color ">
                              <div class="delta">😈</div>
                            </div>

                            <div class="cell statistic u_hover new_class align_items_right hide_cell new_hide_cell u_color ">
                              <div class="delta">${convertNumber(dataOfTotalPopulation)}</div>
                            </div>

                        </div>

                    `
            html_data+=html_element
                            
            AtLeastOneDose = TotalDataVaccinatedFirst*100/dataOfTotalPopulation
            FullyVaccinated = TotalDataVaccinatedSecond*100/dataOfTotalPopulation

            num = AtLeastOneDose.toString();
            num2 = FullyVaccinated.toString();
            var x = Number(num.slice(0,5));
            var y = Number(num2.slice(0,5));
            
            document.getElementById('totalTested').innerHTML = TotalDataTested.toLocaleString();
            document.getElementById('h4-data').innerHTML = dataOfTotalConfirmed.toLocaleString();
            document.getElementById('recovered').innerHTML = dataOfTotalRecovered.toLocaleString();
            document.getElementById('deceased').innerHTML = dataOfTotalDeceased.toLocaleString();
            document.getElementById('administered').innerHTML = TotalVaccineDose.toLocaleString();

            document.getElementById("total-confirmed").innerHTML = TotalDataConfirmed.toLocaleString();
            document.getElementById('total-recovered').innerHTML = TotalDataRecovered.toLocaleString();
             document.getElementById('total-deceased').innerHTML = TotalDataDeceased.toLocaleString();
             document.getElementById('total-active').innerHTML = dataOfTotalActive.toLocaleString();

            document.getElementById('progress-total-value').innerHTML =x + '%'
            document.getElementById('progress-highlight-value').innerHTML = y + '%'
            document.getElementById('between-progress-highlight-value').style.marginLeft = y + '%'
            document.getElementById('progress-width').style.width = x + '%';
            document.getElementById('progress-highlight').style.width = y + '%';
            document.getElementById('progress-highlight-width').style.marginLeft = y + '%';
            document.getElementById('main-table').innerHTML = html_data;
        };
    };
};

var mouseDown = (val,tag) => {
    timer = setTimeout(() => {
        localStorage.setItem('mousedown','mouseDown')
        tableSorting(val,tag);
    },1000);
};


let mouseUp = () => {
    clearTimeout(timer);
};

localStorage.removeItem('mousedown')
// Table Events
document.getElementById('right-arrow').addEventListener('click', right_arrow);
function right_arrow() {

    var right_arrow = document.getElementById('right-arrow');
    var table = document.getElementById('table-container');

    var hide_cell = document.getElementsByClassName('hide_cell');
    var main_hero_section = document.getElementById('hero');
    var hero_container = document.getElementById('hero-container');

    var state_selection = document.getElementById('state-selection');
    var searchbox = document.getElementById('searchbox');

    var panel = document.getElementById('panel');
    var map_swicher = document.getElementById('map-swicher');

    var progress_width = document.getElementById('progress-width');
    var progress_bar = document.getElementById('progress-bar');
    
        
    if (right_arrow.classList.contains('right_arrow')) {

        right_arrow.classList.remove('right_arrow');
        right_arrow.classList.add('new_right_arrow');

        for (var i of hide_cell) {
            i.classList.add('show');
        }

        table.classList.remove('table_row');
        table.classList.add('click_table');

        hero_container.classList.remove('hero_container');
        hero_container.classList.add('hero_new_container');

        main_hero_section.classList.remove('hero')
        main_hero_section.classList.add('new_hero');

        state_selection.classList.remove('state_selection');
        state_selection.classList.add('state_new_selection');

        searchbox.classList.remove('searchbox');
        searchbox.classList.add('searchbox_new');

        panel.classList.remove('action_panel');
        panel.classList.add('action_new_panel');

        map_swicher.classList.remove('map_switcher');
        map_swicher.classList.add('map_new_switcher');

        progress_width.classList.remove('value')
        progress_width.classList.add('new_progress_value')

        progress_bar.classList.remove('progress_bar')
        progress_bar.classList.add('new_progress_bar')

    }
     else {
        right_arrow.classList.remove('new_right_arrow');
        right_arrow.classList.add('right_arrow');

        for (var i of hide_cell) {
            i.classList.remove('show');
        }

        table.classList.remove('click_table');
        table.classList.add('table_row');


        hero_container.classList.add('hero_container');
        hero_container.classList.remove('hero_new_container');

        main_hero_section.classList.remove('new_hero');
        main_hero_section.classList.add('hero')

        state_selection.classList.add('state_selection');
        state_selection.classList.remove('state_new_selection');

        searchbox.classList.add('searchbox');
        searchbox.classList.remove('searchbox_new');

        panel.classList.add('action_panel');
        panel.classList.remove('action_new_panel');

        map_swicher.classList.add('map_switcher');
        map_swicher.classList.remove('map_new_switcher');

        progress_width.classList.remove('new_progress_value')
        progress_width.classList.add('value')

        progress_bar.classList.remove('new_progress_bar')
        progress_bar.classList.add('progress_bar')

    }
}

// Click to Dark mode on Body
document.getElementById('themes').addEventListener('click', () => {
    document.body.classList.toggle('dark_mode')
    if (document.body.classList.contains('dark_mode')) {

        document.getElementById('themes').innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21
        12.79z"></path></svg>`;
    }
     else {

        document.getElementById('themes').innerHTML = `<svg 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12"
        y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36"
        y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12"
        x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64"
        x2="19.78" y2="4.22"></line></svg>`
    }
});

// icon Details
document.getElementById('detail_id').addEventListener('click', (()=> {
    var icon_details = document.getElementById('fourth-table-icon-details')
    var detail_id = document.getElementById('detail_id')

    detail_id.classList.toggle('new_detail_id')
    icon_details.classList.toggle('new_fourth_table_icon_details');

    var i = 0;
    function change() {
        let doc =  document.getElementById('details-effect');
        var color = ["#007bff", "rgba(32,26,162,.8666666666666667)", "#ff073a", "#28a745", "#6c757d"];

        doc.style.color = color[i];
        i = (i + 1) % color.length;
    };
    setInterval(change, 1500);
}));

function first_hover(val){
  document.getElementById('select-dropdown').value = val;
}

xyz = document.getElementsByClassName('cls1');
var i;

for(i = 0; i < xyz.length; i++){
    xyz[i].style.fill = 'blue'
    xyz[i].style.stroke="blue"
}

$(document).ready(function(e) {
  $(".circles").mouseover(function() {
    console.log($('.cls1').text());
  }); 
});