// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// Testimonials Section Ends
 document.querySelector('.footer-col-4 .col-contents .newsletter-btn').addEventListener('click',()=>{
    document.querySelector('.footer-col-4 .col-contents input').value =''
    document.querySelector('.footer-col-4 .col-contents textarea').value = ''
   alert('Your message is recieved')
 })
// Function to highlight course after search
document.getElementById('search-input').addEventListener('input', function () {
    let searchTerm = this.value.toLowerCase();
    let courseCards = document.querySelectorAll('.course-card');
    
    // Remove previous highlights
    courseCards.forEach(card => {
        card.classList.remove('highlight', 'partial-highlight');
    });

    // Loop through each course card to check if it matches the search term
    courseCards.forEach(card => {
        let courseTitle = card.querySelector('.course-title').innerText.toLowerCase();
        
        // Check for exact match
        if (courseTitle === searchTerm) {
            // Full match - Highlight yellow
            card.classList.add('highlight');
            setTimeout(() => {
                card.classList.remove('highlight');
            }, 5000);
        } 
        // Check for partial match
        else if (courseTitle.includes(searchTerm)) {
            // Partial match - Highlight green
            card.classList.add('partial-highlight');
            setTimeout(() => {
                card.classList.remove('partial-highlight');
            }, 5000);
        }
    });
});

