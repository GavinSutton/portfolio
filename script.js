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


    $(`.iconSwap`).mouseenter(function () {
        // const icon = $(this.firstElementChild).attr(`src`)
        // console.log(icon)
        if ($(this.firstElementChild).attr(`src`) === "assets/icons/jQuery.png"){
            $(`.jQueryIcon`).attr('src', "assets/icons/jQueryYellow.png")
        } else if ($(this.firstElementChild).attr(`src`) === "assets/icons/firebase.png") {
            $(`.firebaseIcon`).attr('src', "assets/icons/firebaseYellow.png")
        } else if ($(this.firstElementChild).attr(`src`) === "assets/icons/responsive.png"){
            $(`.responsiveIcon`).attr('src', "assets/icons/responsiveYellow.png")
        } else if (){

        }
        // $(`.jQueryIcon`).attr('src', "assets/icons/jQueryYellow.png")
        // alert(`hovered`)
    }).mouseleave(function () {
        $(`.jQueryIcon`).attr('src', "assets/icons/jQuery.png")
        $(`.firebaseIcon`).attr('src', "assets/icons/firebase.png")
        $(`.responsiveIcon`).attr('src', "assets/icons/responsive.png")
        $(`.vsCodeIcon`).attr('src', "assets/icons/responsive.png")
    })
}

$(document).ready(function () {
    portfolio.init();
});