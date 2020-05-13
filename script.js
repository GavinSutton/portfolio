console.log("connected")

const portfolio = {}

// IDEAS

// add music?
// add konami code
// fade in icons
// change portfolio into cool images

portfolio.init = function () {
    $(`.toggleCredits`).on(`click`, function(){
        $(`.credits`).toggleClass(`hide`)
        // alert(`you clicked`)
    })

    $(`.skillsList li`).mouseenter(function(){
        $(this).addClass(`yellow`)
        // alert(`hovered`)
    }).mouseleave(function(){
        $(this).removeClass(`yellow`)
    })
}

$(document).ready(function () {
    portfolio.init();
});