(function(){

  let toggler = document.querySelector('.navbar-toggler');
  let navbarCollapse = document.querySelector('.navbar-collapse');
  let navbarCollapseList = document.querySelectorAll('.navbar-collapse ul li');

  // When you scroll the page
  window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    let windowPageYOffset = window.pageYOffset;
    let navbarOffsetTop = navbar.offsetTop;

    // Navbar fixed -----------------------------------
    if (windowPageYOffset > navbarOffsetTop) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }

    // show to-top button automatically ---------------
    let toTopBtn = document.querySelector('.to-top');
    if(windowPageYOffset > 500) {
      toTopBtn.classList.add('show');
      navbarCollapseList[0].classList.remove('active');
    } else {
      toTopBtn.classList.remove('show');
    }
  }

  function navbarCollapseShow(){
    navbarCollapse.classList.toggle('show');
  }

  navbarCollapseList.forEach(function(link){

    // When the link is click
    link.onclick = function(){

      // Get the first item on the nodelist
      let linkFirst = navbarCollapseList[0];

      // Remove the class on the active list
      while(linkFirst){
        if(linkFirst.tagName === 'LI') {
          linkFirst.classList.remove('active');
        }
        linkFirst = linkFirst.nextSibling;
      }

      // add class after clicked
      this.classList.add('active');
    }
  })

  toggler.addEventListener('click', navbarCollapseShow)


  // Home Page Tabbed Image Navigation ------------------------------------------------------
  let showcaseGalleryWrap = document.querySelector('.showcase-gallery-wrap');
  let images = document.querySelectorAll('.showcase-img-wrap');

  let galleryItem = document.querySelectorAll('.showcase-gallery-wrap .gallery-item');
  galleryItem.forEach(function(list){
    // When the link is click
    list.onclick = function(){
      // Get the first item on the nodelist
      let listFirst = galleryItem[0];
      // Remove the class on the active list
      while(listFirst){
        if(listFirst.tagName === 'DIV') {
          listFirst.classList.remove('active');
        }
        listFirst = listFirst.nextSibling;
      }
      // add class after clicked
      this.classList.add('active');
    }
  });

  showcaseGalleryWrap.addEventListener('click', e => {
    if(e.target.tagName == 'DIV') {
      let targetImage = document.querySelector(e.target.dataset.target);

      // Loop in the images nodelist
      images.forEach(image => {
        if(image == targetImage) {
          image.classList.add('show');
        } else {
          image.classList.remove('show');
        }
      })
    }
  })


  // Product Detail Tabbed Image Navigation -----------------------------------------
  let thumbnailItemWrap = document.querySelector('.thumbnail-item-wrap');
  let pictures = document.querySelectorAll('.picture');

  let thumbnailItems = document.querySelectorAll('.thumbnail-item');
  thumbnailItems.forEach(item => {
    item.onclick = function(){
      let firstItem = thumbnailItems[0];
      while(firstItem){
        if(firstItem.tagName === 'DIV'){
          firstItem.classList.remove('active');
        }
        firstItem = firstItem.nextSibling;
      }
      this.classList.add('active');
    }
  })

  thumbnailItemWrap.addEventListener('click', (e) => {
    if(e.target.tagName == 'DIV') {
      let targetPicture = document.querySelector(e.target.dataset.target);

      // Loop in the pictures nodelist
      pictures.forEach(picture => {
        if(picture == targetPicture) {
          picture.classList.add('show');
        } else {
          picture.classList.remove('show');
        }
      })
    }
  })


  // Product Detail Tab Menu -----------------------------------------------------------------------
  let tabs = document.querySelector('.tab');
  let panels = document.querySelectorAll('.tab-info');
  
  let tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(function(tabLinkItem){
    tabLinkItem.onclick = function() {
      let firstItem = tabLinks[0]
      while(firstItem) {
        if(firstItem.tagName == "BUTTON"){
          firstItem.classList.remove('active');
        }
        firstItem = firstItem.nextSibling;
      }
      this.classList.add('active');
    }
  });

  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON'){
      let targetPanel = document.querySelector(e.target.dataset.target);

      // Loop through the panels
      panels.forEach(panel => {
        if(panel == targetPanel){
          panel.classList.add('show');
        } else {
          panel.classList.remove('show');
        }
      })
    }
  });

})()