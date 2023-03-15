$(document).ready(function () {
    //this ajax for the date 
    $.ajax({
    url: "Sources/get_current_date.php", 
    success: function(result){
    $("#Date").html(result);
  },
  error: function (){
    $("#Err").html("Date Error");
  }
  });
  //here for the buttons click
  $('#four').click(function () {
    clickshow(4);
  });
  $('#eight').click(function () {
    clickshow(8);
  });
  $('#ten').click(function () {
    clickshow(10);
  });
  });
  function clickshow(butn){
  let URL = "https://zoo-animal-api.herokuapp.com/animals/rand/" + butn;
  $.ajax({
      type: "GET",
      url: URL,
      dataType: 'json',
      timeout: 50000,
      success: function showDetails(data){
          let arrItems = [];
          arrItems = JSON.stringify(data);
          let div = document.getElementById("Info");     // The parent <div>.
          div.innerHTML = '';
          // Loop through data in the JSON array.
           for (i = 0; i <= arrItems.length - 1; i++) {
               let divLeft = document.createElement("div");
                  divLeft.innerHTML = arrItems[i].name;
                  let img = document.createElement("img");    // Create an element
                  img.src = arrItems[i].image_link;      
                  let divRight = document.createElement("div");
                   divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
                   divRight.appendChild(img);
        // Add the child DIVs to parent DIV.
                  div.appendChild(divLeft);
                  div.appendChild(divRight);
           }
            console.log(data);
      } ,
      error: function (request, status, error) {
         alert(request.responseText); 
        }
  });
  }
  