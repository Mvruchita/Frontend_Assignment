
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
    0: { 
        items: 1
    },
    600: {
            items: 2,
            stagePadding: 40
    },
    1000: { 
        items: 4 
    }
    }
});
});

/*porfolio Section*/
//all dropdown items
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Loop each item
dropdownItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
    event.preventDefault(); // stop the link from jumping

    const targetId = this.getAttribute('data-bs-target'); // tab content id
    const tabContent = document.querySelector(targetId); // tab content element

    // Hide all tab contents
    document.querySelectorAll('.tab-pane').forEach(function(pane) {
        pane.classList.remove('active', 'show');
    });

    // Show the selected tab content
    if (tabContent) {
        tabContent.classList.add('active', 'show');
    }
    });
});
/*Haeder*/
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Only close if it is in collapsed mode
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: true
      });
      bsCollapse.hide();
    }
  });
});
