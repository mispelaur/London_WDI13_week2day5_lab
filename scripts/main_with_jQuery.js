$('.greeting').on("click", showGreeting);

function showGreeting(){
    console.log("click");
    var output = "WDI 13 speaks: " + $(this).attr('id');
    $('p').text(output);
}