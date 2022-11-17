const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        
  
        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
          tabContent.classList.remove('tab-content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
      
      })
    })
  })