


// // get the element to animate
// var element = document.getElementById('nums');
// var elementHeight = element.clientHeight;

// // listen for scroll event and call animate function
// document.addEventListener('scroll', animate);

// // check if element is in view
// function inView() {
//   // get window height
//   var windowHeight = window.innerHeight;
//   // get number of pixels that the document is scrolled
//   var scrollY = window.scrollY || window.pageYOffset;
  
//   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//   var scrollPosition = scrollY + windowHeight;
//   // get element position (distance from the top of the page to the bottom of the element)
//   var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
//   // is scroll position greater than element position? (is element in view?)
//   if (scrollPosition > elementPosition) {
//     return true;
//   }
  
//   return false;
// }

// // animate element when it is in view
// function animate() {
//   // is element in view?
//   if (inView()) {
//       // element is in view, add class to element
//         const counters = document.querySelectorAll('.counter');
//         const speed = 10; // The lower the slower


//         counters.forEach(counter => {
//             const updateCount = () => {
//                 const target = +counter.getAttribute('data-target');
//                 const count = +counter.innerText;

//                 // Lower inc to slow and higher to slow
//                 const inc = target / speed;

//                 console.log(inc);
//                 console.log(count);

//                 // Check if target is reached
//                 if (count < target) {
//                     // Add inc to count and output in counter
//                     counter.innerText = Math.ceil(count + inc);
//                     // Call function every ms
//                     setTimeout(updateCount, 1000);
//                 } else {
//                     counter.innerText = target;
//                 }
//             };

//             updateCount();
//         });
//   }
// }


