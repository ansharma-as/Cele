document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img[data-spread-x]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const spreadX = element.getAttribute('data-spread-x') || '0px';

        element.style.setProperty('--spread-x', spreadX);

        element.classList.add('animate-spread');
        element.classList.add('animate-rotate-in');

        observer.unobserve(element); 
      }
    });
  });

  // Observe all images
  images.forEach(image => observer.observe(image));
});


setTimeout(() => {
  const textElements = document.querySelectorAll('.circle-text span');
  textElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.animation = 'merge-text 1s forwards';
    }, index * 100); 
  });
}, 3000);

function toggleFAQ(element) {
  document.querySelectorAll(".faq-answer").forEach((el) => {
    if (el !== element.nextElementSibling) {
      el.classList.add("hidden");
      el.previousElementSibling
        .querySelector(".faq-chevron path")
        .setAttribute("d", "M19 9l-7 7-7-7"); 
    }
  });

  const answer = element.nextElementSibling;
  answer.classList.toggle("hidden");

  const chevronPath = element.querySelector(".faq-chevron path");
  if (answer.classList.contains("hidden")) {
    chevronPath.setAttribute("d", "M19 9l-7 7-7-7"); 
  } else {
    chevronPath.setAttribute("d", "M19 15l-7-7-7 7"); 
  }
}

function hoverFAQ(element) {
  const answer = element.nextElementSibling;
  const chevronPath = element.querySelector(".faq-chevron path");

  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    chevronPath.setAttribute("d", "M19 15l-7-7-7 7");
  }
}

function resetFAQ(element) {
  const answer = element.nextElementSibling;
  const chevronPath = element.querySelector(".faq-chevron path");

  if (!answer.classList.contains("hidden")) {
    answer.classList.add("hidden");
    chevronPath.setAttribute("d", "M19 9l-7 7-7-7");
  }
}


// // Typewriter effect
// let i = 0;
// let j = 0;
// let text = ["Premium", "Beautiful"];
// let speed = 300; // Adjust speed for typing
// let deleteSpeed = 150; // Adjust speed for deleting
// let pauseBetweenWords = 400; // Adjust pause before starting to delete

// function typeWriter() {
//     if (i < text[j].length) {
//         // Typing the word
//         document.getElementById("typewriter").innerHTML += text[j].charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     } else {
//         // Pause before starting to delete
//         setTimeout(function() {
//             deleteWord();
//         }, pauseBetweenWords);
//     }
// }

// function deleteWord() {
//     if (i > 0) {
//         // Deleting the word
//         document.getElementById("typewriter").innerHTML = text[j].substring(0, i - 1);
//         i--;
//         setTimeout(deleteWord, deleteSpeed);
//     } else {
//         // Move to the next word in the array
//         j++;
//         if (j >= text.length) j = 0; // Loop back to the first word
//         setTimeout(typeWriter, speed); // Start typing the next word
//     }
// }

// window.onload = typeWriter;




let j = 0;
let text = ["Premium", "Beautiful"];
let toggleSpeed = 2000; 

function toggleWords() {
    document.getElementById("typewriter").innerHTML = text[j];
    j = (j + 1) % text.length; // Alternate between 0 and 1
}

window.onload = function() {
    toggleWords(); // Showing the first word immediately
    setInterval(toggleWords, toggleSpeed); 
};


// Function to handle the fade-in effect
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.text-fade');

  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight; 

      if (elementTop < windowHeight * 0.9) { 
          element.style.opacity = 1;
      } else {
          element.style.opacity = 0;
      }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const svgContainer = document.getElementById('svg-container');
  const demo = document.getElementById('demo');

  window.addEventListener('scroll', function() {
      const rect = svgContainer.getBoundingClientRect();
      
      const startTrigger = window.innerHeight * 0.2; 
      const endTrigger = window.innerHeight * 0.8;  
      
      if (rect.top < endTrigger && rect.top > -rect.height) {
          let scrollProgress = 1 - (rect.top / window.innerHeight);
          let scale = Math.max(0.2, Math.min(1, 0.2 + scrollProgress * 0.8));
          
          demo.style.transform = `scale(${scale})`;
      }
  });
});


document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const maxShift = 50; 

  document.getElementById("image3").style.transform = `translateX(${Math.min(scrollPosition * 0.4, maxShift)}px)`;
  document.getElementById("image2").style.transform = `translateX(${Math.min(scrollPosition*0.7 * -0.45, maxShift)}px)`;
  document.getElementById("image1").style.transform = `translateX(${Math.min(scrollPosition*1.5 * -0.4, maxShift)}px)`;
});



document.addEventListener("DOMContentLoaded", () => {
  const slideUpElements = document.querySelectorAll('.slideUp-target');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  slideUpElements.forEach((el) => observer.observe(el)); 
});
