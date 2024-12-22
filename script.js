window.addEventListener('scroll', reveal);

            function reveal() {
                var reveals = document.querySelectorAll('.reveal');

                for(var i = 0; i < reveals.length; i++){

                    var windowheight = window.innerHeight;
                    var revealtop = reveals[i].getBoundingClientRect().top;
                    var revealpoint = 150;

                    if(revealtop < windowheight - revealpoint){
                        reveals[i].classList.add('active');
                    }else{
                        reveals[i].classList.remove('active');
                    }
                }
            }

var menu = document.getElementById("bar");
var item = document.getElementById("item");

item.style.right = '-300px';

menu.onclick = function() {
    if (item.style.right == '-300px') {
        item.style.right = '0';
    }else {
        item.style.right = '-300px';
    }
}