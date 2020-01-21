$(function() {
  
    /*ACITVE LI*/
    $('.aside-navbar__menu li a').on('click', function () {
        $('.fa-chevron-right').css({'display':'none'});
        $('.aside-navbar__menu li a').removeClass('active');
        $(this).addClass('active');
        
        $(this).parent('li').children('.fa-chevron-right').css({'display':'inline'});
        if (screen.width < 992) {
          let asideMenu = document.querySelector('aside.aside');
          
          asideMenu.style.transform = 'translateX(-150%)';
       
        }
    })
        /*SMOTH ANIMATION ANCHOR*/ 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
              
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
            });
        });

        /*COUNTERS*/
        $(document).ready(function() {

            let counters = $(".count");
            let countersQuantity = counters.length;
            let counter = [];
          
            for (i = 0; i < countersQuantity; i++) {
              counter[i] = parseInt(counters[i].innerHTML);
            }
          
            let count = function(start, value, id) {
              let localStart = start;
              setInterval(function() {
                if (localStart < value) {
                  localStart++;
                  counters[id].innerHTML = localStart;
                }
              }, 40);
            }
          
            for (j = 0; j < countersQuantity; j++) {
              count(0, counter[j], j);
            }
          });

          /*SKILLS SCRIPT*/

        /*--------------------------------------*/
        let timelineSwiper = new Swiper ('.timeline .swiper-container', {
          direction: 'vertical',
          loop: false,
          speed: 1600,
          pagination: '.swiper-pagination',
          paginationBulletRender: function (swiper, index, className) {
            let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
            return '<span class="' + className + '">' + year + '</span>';
          },
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          breakpoints: {
            768: {
              direction: 'horizontal',
            }
          }
        });

        /*CLOSE-OPEN MENU*/
        let closeBtn = document.querySelector('.aside > i.fa-window-close');
        let openBtn = document.querySelector('main > i.fa-bars');
        let topScroll = window.pageYOffset;
        
        let asideMenu = document.querySelector('aside.aside');
        closeBtn.addEventListener('click', () => {
         asideMenu.style.transform = 'translateX(-150%)';
        });
        openBtn.addEventListener('click', () => {
          asideMenu.style.transform = 'translateX(0%)';
         })
         
         /*window.addEventListener('scroll', function() {
           //console.log(window.pageYOffset);
           if (window.screen > 420) {
            if (window.pageYOffset > 480) {
              openBtn.style.color = 'black';
              openBtn.style.left = '1%';
            } else {
              openBtn.style.color = 'white';
              openBtn.style.left = '5%';
            }
           } else {
            if (window.pageYOffset > 860) {
              openBtn.style.color = 'black';
              openBtn.style.left = '1%';
            } else {
              openBtn.style.color = 'white';
              openBtn.style.left = '5%';
            }
           }
         
        });*/
        
        let typeI = 0;
        let txt = "console.log('Hello, world!');";
        let speed = 50;
        
        function typeWriter() {
          if (typeI < txt.length) {
            document.getElementById("alert-type").innerHTML += txt.charAt(typeI);
            typeI++;
            setTimeout(typeWriter, speed);
          }
        }
        typeWriter();
    });
