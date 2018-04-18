console.log('client.js is loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded');
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
    .then(function(response){
        console.log(response);
        $('#allQuotes').append('<li>' + response[0].quote + '</li>');
        $('#allQuotes').append('<li>' + response[1].quote + '</li>');
        $('#allQuotes').append('<li>' + response[2].quote + '</li>');
        
        
    });

    $('#quoteButton').on('click', function (){
        console.log('button click');
        $.ajax({
            type: 'GET',
            url: '/quotes'
        })
        .then(function(response){
            console.log(response);
            $('#randomQuotes').text(response.quote);
        });
        
    });

}