(function () {
    'use strict';
  
    // A class for building sliders from it
    class Slider {
      constructor(id, mediaQueries) {
        // Get HTML elements
        this.slider = document.querySelector(`#${id}`);
        this.sliderList = this.slider.querySelector('.slider-list');
        this.sliderItems = this.slider.querySelectorAll('.slider-item');
        this.sliderNext = this.slider.querySelector('.slider-arrow-next');
        this.sliderPrev = this.slider.querySelector('.slider-arrow-prev');
  
        // Get media queries
        this.mediaQueryList = [window.matchMedia(`screen and (max-width:${mediaQueries[0] - 1}px)`)];
        mediaQueries.forEach((mediaQuery) => {
          this.mediaQueryList.push(window.matchMedia(`screen and (min-width:${mediaQuery}px)`));
        });
  
        // Define global variables
        this.numberOfVisibleItems = null;
        this.currentItemIndex = null;
        this.sliderItemsLength = this.sliderItems.length;
        this.mediaQueryLength = this.mediaQueryList.length;
  
        // Add event listener: to call the run function again when screen resized
        this.mediaQueryList.forEach((mediaQuery) => {
          mediaQuery.addEventListener('change', () => {
            this.run();
          });
        });
  
        // Add event listener: to go to next slide
        this.sliderNext.addEventListener('click', () => {
          if (this.currentItemIndex < this.sliderItemsLength - this.numberOfVisibleItems) {
            this.currentItemIndex++;
            this.shiftSlides();
          }
        });
  
        // Add event listener: to go to previous slide
        this.sliderPrev.addEventListener('click', () => {
          if (this.currentItemIndex > 0) {
            this.currentItemIndex--;
            this.shiftSlides();
          }
        });
  
        // Disable focus on all slides links
        this.sliderItems.forEach((item) => {
          const elements = item.querySelectorAll('a');
          elements.forEach((element) => {
            element.tabIndex = '-1';
          });
        });
  
        // Add event listener: to scroll down to slider when previous arrow focused
        this.sliderPrev.addEventListener('focusin', () => {
          this.slider.scrollIntoView();
        });
  
        // Add event listener: to scroll down to slider when next arrow focused
        this.sliderNext.addEventListener('focusin', () => {
          this.slider.scrollIntoView();
        });
      }
  
      // Run the slider
      run() {
        let index = this.mediaQueryLength - 1;
        while (index >= 0) {
          if (this.mediaQueryList[index].matches) {
            // Set number of visible slides
            this.numberOfVisibleItems = index + 1;
  
            // Reset the slider
            this.currentItemIndex = 0;
            this.sliderList.style.transform = 'translateX(0%)';
  
            // Set slider list width
            this.sliderList.style.width = `calc(${(100 / this.numberOfVisibleItems) * this.sliderItemsLength}% + ${(this.sliderItemsLength / this.numberOfVisibleItems) * 16}px)`;
  
            // Set slides width
            this.sliderItems.forEach((item) => {
              item.style.width = `${100 / this.numberOfVisibleItems}%`;
            });
  
            // Exit the loop
            break;
          }
          index--;
        }
      }
  
      // A function to shift slides left and right
      shiftSlides() {
        this.sliderList.style.transform = `translateX(-${(100 / this.sliderItemsLength) * this.currentItemIndex}%)`;
      }
    }
  
    /* 
    Note about creating new slider:
    First parameter is the id of the HTML slider-container element of each slider.
    Second parameter is an array of the media queries (breaking points) where the number of slides increases.
    */
  
    new Slider('prdct-slider', [576, 768, 992]).run();
  })();




  // CHECK BOX ORDER//
  function activateButton(element) {
    if (element.checked) {
        document.getElementById("submit").disabled = false;
        document.getElementById("warning").style.display = "none";
    } else {
        document.getElementById("submit").disabled = true;
        document.getElementById("warning").style.display = "block";
    }
}



// diferenta pretului 

function showDiv() {
  document.getElementById('myDiv').style.display = 'block';
}

function hideDiv() {
  document.getElementById('myDiv').style.display = 'none';
}

// arata si ascunde 

function convertCurrency() {
  const currency = document.getElementById('currency').value;
  const prices = document.querySelectorAll('.price');

  prices.forEach(price => {
      const value = price.getAttribute(`data-${currency.toLowerCase()}`);
      price.textContent = ` ${value} ${currency === 'EUR' ? '€' : currency === 'USD' ? '$' : 'MDL'}`;
  });
}

// Curency convertor

const validCode = "darius80"; // Codul corect

    function validateDiscountCode() {
        const discountInput = document.getElementById("discount").value; // Valoarea introdusă
        const message = document.getElementById("discount-message"); // Mesajul de feedback
        const submitButton = document.getElementById("submit"); // Butonul de trimitere

        // Verificare cod introdus
        if (discountInput === "") {
            message.textContent = ""; // Mesaj gol dacă nu se introduce nimic
            submitButton.disabled = false; // Permite plasarea comenzii
        } else if (discountInput === validCode) {
            message.textContent = "This code is valid"; // Mesaj de validare
            message.style.color = "green"; // Textul va fi verde
            submitButton.disabled = false; // Permite plasarea comenzii
        } else {
            message.textContent = "The code is incorrect or expired"; // Mesaj de eroare
            message.style.color = "red"; // Textul va fi roșu
            submitButton.disabled = true; // Blochează plasarea comenzii
        }
    }

    function activateButton(termsCheckbox) {
        const submitButton = document.getElementById("submit");
        submitButton.disabled = !termsCheckbox.checked; // Activează sau dezactivează butonul în funcție de bifarea Termenilor
    }




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
