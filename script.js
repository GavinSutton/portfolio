console.log("connected")

const portfolio = {}



// IDEAS

// add music?
// add konami code
// fade in icons
// change portfolio into cool images

portfolio.init = function () {

    // fadeIn on scroll function start
    // thanks to  Kevin Powell on youtube for the tutorial on IntersectionObserver & how to utilize it to have this cool animation on scroll (https://www.youtube.com/watch?v=huVJW23JHKQ)
    const fadeIn = document.querySelectorAll(`.project`)

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    }

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry =>{
            if (!entry.isIntersecting){
                // return;
                entry.target.classList.remove(`in`)
            } else {
                entry.target.classList.add(`in`)
                // appearOnScroll.unobserve(entry.target)
            }
        })
    }, appearOptions)

    fadeIn.forEach((project) => {
        appearOnScroll.observe(project)
    })
    // fadeIn on scroll function end

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