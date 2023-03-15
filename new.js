var cur_char = undefined;
var urls = [];
var cur_button = undefined;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ad").innerHTML = this.responseText;
        cur_button = this.responseText.substring(3, 5);
    }
    };
    xhttp.open("GET", "get_current_date.php", true);
    xhttp.send();
    $("button").click(check);
}
function check(button){
    $("#res").html('');
    $("#det").html('');
    cur_char = $(this).text();
    $.ajax('https://travelbriefing.org/countries.json', {dataType: 'json',timeout: 500, success: function(data, status, XHR){
    tab(data);},
    error: function(data, status, XHR){$("#res").html('<h4>An error occurred.<h4/>')}});
}

$("document").ready(loadDoc);
//details
function details(data){
    let list= '{"name":, "age":, "car":}';
    let str = "<list ='" + bord +"'><tr><th>Languages</th><th>Neighbors</th><th>Currency</th><th>Current month average temprature</th></tr>";
    let lang_size = data.language.length;
    let neigh_size = data.neighbors.length;
    
    str = str + "<tr>";  
    str = str + "<td>";
    if(lang_size > 0){
        for(let i = 0; i < lang_size; i++){
            str = str + data.language[i].language + ", ";
        }
        str = str.substring(0, str.length - 2);
        str = str + "</td>";
    }else{
        str = str + "  </td>";
    }
    str = str + "<td>";
    if(neigh_size > 0){
        for(let i = 0; i < neigh_size; i++){
            str = str + data.neighbors[i].name + ", ";
        }
        str = str.substring(0, str.length - 2);
        str = str + "</td>";
    }else{
        str = str + "  </td>";
    }
    str = str + "<td>";
    if(data.currency.name){
        str = str + data.currency.name + ", ";
    }
    if(data.currency.symbol){
        str = str + data.currency.symbol + ", ";
    }
    if(data.currency.rate){
        str = str + data.currency.rate;
    }
    str = str + "</td>";
    str = str + "<td>";
    let Avg = undefined;
}
    switch(cur_month) {
        case '01':
        Avg = data.weather['January'].tAvg;
        break;
        case '02':
        Avg = data.weather['February'].tAvg;
        break;
        case '03':
        Avg = data.weather['March'].tAvg;
        break;
    }