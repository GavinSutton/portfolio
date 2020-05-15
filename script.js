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

    $(`.burger`).on(`click`, function(){
        $(`.navBar`).toggleClass(`hide`)
        $(`.burger`).toggleClass(`blue`)
    })

    // simple toggle to show credits of icons used
    $(`.toggleCredits`).on(`click`, function(){
        $(`.credits`).toggleClass(`hide`)
    })

    // changes all of the font-awesome icons yellow on mouseenter (and back to normal on mouseleave)
    $(`.skillsList li`).mouseenter(function(){
        $(this).addClass(`yellow`)
    }).mouseleave(function(){
        $(this).removeClass(`yellow`)
    })

    // While font-awesome icons are easy to turn yellow on hover, png icons are more tricky. This function watches for mouseenter/mouseleave to swap images of the four pngs in the skills section.
    $(`.iconSwap`).mouseenter(function () {
        if ($(this.firstElementChild).attr(`src`) === "assets/icons/jQuery.png"){
            $(`.jQueryIcon`).attr('src', "assets/icons/jQueryYellow.png")
        } else if ($(this.firstElementChild).attr(`src`) === "assets/icons/firebase.png") {
            $(`.firebaseIcon`).attr('src', "assets/icons/firebaseYellow.png")
        } else if ($(this.firstElementChild).attr(`src`) === "assets/icons/responsive.png"){
            $(`.responsiveIcon`).attr('src', "assets/icons/responsiveYellow.png")
        } else if ($(this.firstElementChild).attr(`src`) === "assets/icons/vscode.png"){
            $(`.vscodeIcon`).attr('src', "assets/icons/vscodeYellow.png")
        }
    }).mouseleave(function () {
        $(`.jQueryIcon`).attr('src', "assets/icons/jQuery.png")
        $(`.firebaseIcon`).attr('src', "assets/icons/firebase.png")
        $(`.responsiveIcon`).attr('src', "assets/icons/responsive.png")
        $(`.vscodeIcon`).attr('src', "assets/icons/vscode.png")
    })
}

$(document).ready(function () {
    portfolio.init();
});