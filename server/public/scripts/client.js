console.log('client.js is loaded')

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded');
    getAllQuotes();

    $('#addNewQuoteButton').on('click', addNewQuote)

    $('#quoteButton').on('click', function () {
        addNewQuote();
        console.log('button click');
        $.ajax({
            type: 'GET',
            url: '/quotes'
        })
            .then(function (response) {
                console.log(response);
                $('#randomQuotes').text(response.quote);
            });

    });

}

function getAllQuotes() {
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            console.log('my response', response);
            $('#listOfQuotes').empty();
            response.forEach(function (loopQuotes) {
                console.log(loopQuotes);
                $('#listOfQuotes').append('<li>' + loopQuotes.quote + '</li>')

            });
        });
}

function addNewQuote() {
    console.log('add new quote');
    const newQuote = {
        quote: $('#newQuote').val(),
        author: $('#newQuoteAuthor').val()
    };
    console.log('New author: ', newQuote);
    $.ajax({
        method: 'POST',
        url: '/add-quotes',
        data: newQuote //the object
    })
        .then(function (response) {
            console.log('my repose: ', response);
            getAllQuotes();
        });
}