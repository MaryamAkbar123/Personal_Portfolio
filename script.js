$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky"); 
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Frontend Developer", "Programmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

// Download CV functionality
$("a[href='Maryam_Akbar_Resume.pdf']").click(function(e) {
    e.preventDefault(); // Prevent the default action
    
    const link = document.createElement('a');
    link.href = "Maryam_Akbar_Resume.pdf"; // Adjust the path if needed
    link.download = "Maryam_Akbar_Resume.pdf"; // Optional: Specify the downloaded file name
    link.click(); // Programmatically click the link
});
    
    // Hire me functionality
    $(".home-content a").click(function(e) {
        e.preventDefault();
        window.location.href = "mailto:maryamakbarcu@gmail.com?subject=Hiring Inquiry&body=Hello Maryam,\nWe would like to discuss an opportunity to hire you. Please share your availability for a conversation.";
    });

    // Send message functionality
    $(".contact form").submit(function(e) {
        e.preventDefault();
        const name = $(".contact .name input").val();
        const email = $(".contact .email input").val();
        const subject = $(".contact .field input").val();
        const message = $(".contact .textarea textarea").val();

        const mailToLink = `mailto:maryamakbarcu@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
        window.location.href = mailToLink;
    });
});
