


  document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var sidebar = document.getElementById('sidebar');

    toggleButton.addEventListener('click', function() {
      // Check if the sidebar is currently hidden
      var isSidebarHidden = window.getComputedStyle(sidebar).display === 'none';

      // Toggle the sidebar's display based on its current state
      if (isSidebarHidden) {
        sidebar.style.display = 'block';
      } else {
        sidebar.style.display = 'none';
      }
    });
  });
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
