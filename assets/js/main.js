/*===== Screen Loder  =====*/
var preloder = document.getElementById('Loading');

function screenLoad() {
    preloder.style.display = 'none';
}


/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle', 'navbar', 'body-pd')

/*===== Scroll Auto Setect MENU  =====*/
$('#nav_ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});

/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    })
}

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

/*===== My Work Menu ACTIVE  =====*/
const MyMenuLinkColor = document.querySelectorAll('.mix_itup_menu')

function MyWorkMenuColorLink() {
    MyMenuLinkColor.forEach(l => l.classList.remove('nActive'))
    this.classList.add('nActive')
}
MyMenuLinkColor.forEach(l => l.addEventListener('click', MyWorkMenuColorLink))

/*===== Wow  =====*/
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();

//PORTFOLIO effect



var containerEl = document.querySelector('.gallery');

var mixer = mixitup(containerEl, {
    animation: {
        effects: 'fade scale stagger(50ms)'
    },
    load: {
        filter: 'none'
    }

});

containerEl.classList.add('mixitup-ready');

mixer.show()
    .then(function() {

        mixer.configure({
            animation: {
                effects: 'fade scale'
            }
        });
    });