
// pages drop down menu
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('a');
    toggle.addEventListener('mouseover', () => {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

// collection drop down menu
const collectionLink=document.getElementById('collectionLink');
const collection=document.getElementById('collection');


collectionLink.addEventListener('mouseover',()=>{
    collection.classList.add('open-collection');
    collectionLink.setAttribute('aria-expanded', 'true');

});

collection.addEventListener('mouseleave',()=>{
    collection.classList.remove('open-collection');
    collectionLink.setAttribute('aria-expanded', 'false');


});

// side navbar 
const collectionDropdown = document.getElementById('collectionDropdown');
            const collectionIcon = document.getElementById('collectionIcon');
            const featureProduct = document.getElementById('featureProduct');
            const featureMenu = document.getElementById('featureMenu');
            const featureIcon = document.getElementById('featureIcon');
            const trendingProduct = document.getElementById('trendingProduct');
            const trendingMenu = document.getElementById('trendingMenu');
            const trendingIcon = document.getElementById('trendingIcon');
            
            // Toggle collection dropdown and reset nested menus when clicked
            collectionDropdown.addEventListener('click', function() {
                // Close all nested menus when collection is clicked
                featureMenu.classList.remove('show');
                trendingMenu.classList.remove('show');
                featureIcon.classList.remove('rotate-icon');
                featureIcon.classList.add('reset-icon');
                trendingIcon.classList.remove('rotate-icon');
                trendingIcon.classList.add('reset-icon');
                
                // Toggle collection icon
                if (collectionIcon.classList.contains('rotate-icon')) {
                    collectionIcon.classList.remove('rotate-icon');
                    collectionIcon.classList.add('reset-icon');
                } else {
                    collectionIcon.classList.remove('reset-icon');
                    collectionIcon.classList.add('rotate-icon');
                }
            });
            
            // Toggle feature product menu
            featureProduct.addEventListener('click', function(e) {
                e.stopPropagation();
                featureMenu.classList.toggle('show');
                
                // Toggle icon
                if (featureIcon.classList.contains('rotate-icon')) {
                    featureIcon.classList.remove('rotate-icon');
                    featureIcon.classList.add('reset-icon');
                } else {
                    featureIcon.classList.remove('reset-icon');
                    featureIcon.classList.add('rotate-icon');
                }
                
                // Close trending menu if open
                trendingMenu.classList.remove('show');
                trendingIcon.classList.remove('rotate-icon');
                trendingIcon.classList.add('reset-icon');
            });
            
            // Toggle trending product menu
            trendingProduct.addEventListener('click', function(e) {
                e.stopPropagation();
                trendingMenu.classList.toggle('show');
                
                // Toggle icon
                if (trendingIcon.classList.contains('rotate-icon')) {
                    trendingIcon.classList.remove('rotate-icon');
                    trendingIcon.classList.add('reset-icon');
                } else {
                    trendingIcon.classList.remove('reset-icon');
                    trendingIcon.classList.add('rotate-icon');
                }
                
                // Close feature menu if open
                featureMenu.classList.remove('show');
                featureIcon.classList.remove('rotate-icon');
                featureIcon.classList.add('reset-icon');
            });
            
            // Close all menus when clicking outside
            document.addEventListener('click', function() {
                featureMenu.classList.remove('show');
                trendingMenu.classList.remove('show');
                featureIcon.classList.remove('rotate-icon');
                featureIcon.classList.add('reset-icon');
                trendingIcon.classList.remove('rotate-icon');
                trendingIcon.classList.add('reset-icon');
                collectionIcon.classList.remove('rotate-icon');
                collectionIcon.classList.add('reset-icon');
            });

// shop category
const swiperSlides= document.querySelectorAll('.swiper-slide');
// const arrowDiv=document.querySelector('.arrow-div');

swiperSlides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        slide.querySelector('.arrow-div').style.display = 'block';
        // slide.style.opacity = '.5';
       
    });
    slide.addEventListener('mouseout', () => {
        slide.querySelector('.arrow-div').style.display = 'none';
        // slide.style.opacity = '1';
    });

});
   

// add to cart
// Get all circle icons
const circles = document.querySelectorAll('.circle-icon');
// const bikeImage=document.getElementById('bikeImage');
// const purpleBubble=document.getElementById('purpleBubbles');

circles.forEach(circle => {
    const checkIcon = circle.querySelector('i');
    const bubble =circle.querySelector('.speech-bubble');
    
    // Show check on hover
    circle.addEventListener('mouseover', () => {
        checkIcon.style.display = 'block';
        bubble.style.display = 'block';
        
    });
    
    // Hide check when not hovering
    circle.addEventListener('mouseout', () => {
        checkIcon.style.display = 'none';
        bubble.style.display = 'none';
    });
});

// products
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
const image = card.querySelector('img');
card.addEventListener('mouseover', () => {
card.querySelector('.toggle').style.opacity = '1';
image.style.opacity = '0';
    });
card.addEventListener('mouseout', () => {
    card.querySelector('.toggle').style.opacity = '0';
    image.style.opacity = '1';
    });
});


// change image on click

document.addEventListener('DOMContentLoaded', function() {
    const bikeImage = document.getElementById('bikeImage');
    const greenBubble = document.getElementById('greenBubble');
    const purpleBubble = document.getElementById('purpleBubble');
    const blueBubble = document.getElementById('blueBubble');

    greenBubble.addEventListener('click', function() {
        bikeImage.setAttribute('src', 'images/ev-bike-pro-13.jpg');
    });

    purpleBubble.addEventListener('click', function() {
        bikeImage.setAttribute('src', 'images/ev-bike-pro-13-a.jpg');
    });

    blueBubble.addEventListener('click', function() {
        bikeImage.setAttribute('src', 'images/ev-bike-pro-13-b.webp');
    });
});
   

    
    



// scroll to top

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
   'use strict';

   
   if(window.pageYOffset >= 1000) {
    scrollToTopBtn.style.display = "block";
   } else { 
    scrollToTopBtn.style.display = "none";
   }
};

scrollToTopBtn.onclick = function() {
   'use strict';
   window.scrollTo({
    top: 0,
    behavior: 'smooth'
   });
}