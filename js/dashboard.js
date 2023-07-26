// // JavaScript to handle the button click and show all hidden divs
// document.getElementById('viewAllButton').addEventListener('click', function() {
//     var divs = document.getElementsByClassName('list')[0].children;
//     for (var i = 0; i < divs.length; i++) {
//       divs[i].classList.toggle('show');
//     }
//   });
  

// JavaScript to handle the button click and show/hide all hidden divs
document.getElementById('viewAllButton').addEventListener('click', function() {
    var divs = document.getElementsByClassName('list')[0].children;
    var viewAllButton = document.getElementById('viewAllButton');
  
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].classList.contains('show')) {
        divs[i].classList.remove('show');
      } else {
        divs[i].classList.add('show');
      }
    }
  
    // Toggle the button label
    if (viewAllButton.textContent === 'Hide') {
        viewAllButton.textContent = 'view All';
    } else {
        viewAllButton.textContent = 'Hide';
    }
  });
  

  // ##### toggle button #####
  function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-expanded');
  }
