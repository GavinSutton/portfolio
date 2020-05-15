console.log("connected")

const portfolio = {}



// IDEAS

// add music?
// add konami code
// change portfolio into cool images
// add labels for social

AOS.init({
    duration: 1200,
});

portfolio.init = function () {

    // burger menu open and close
    $(`.burger`).on(`click`, function(){
        $(`.navBar`).toggleClass(`hide`)
        $(`.burger`).toggleClass(`blue`)
    })

    // simple toggle to show credits of icons used
    $(`.toggleCredits`).on(`click`, function(){
        $(`.credits`).toggleClass(`hide`)
    })

}

$(document).ready(function () {
    portfolio.init();
});