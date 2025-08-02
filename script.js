


$(document).ready(function() {
    // Navbar sticky effect
    $(window).scroll(function() {
        // Sticky navbar
        $('.navbar').toggleClass("sticky", this.scrollY > 20);
        
        // Scroll-up button show/hide
        $('.scroll-up-btn').toggleClass("show", this.scrollY > 500);
    });

    // Scroll to top
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({scrollTop: 0}, 'smooth');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        let target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 'smooth');
        }
    });

    // Mobile menu toggle
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("fa-times");
    });

    // Close mobile menu when clicking a link
    $('.navbar .menu li a').click(function() {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("fa-times");
    });

    // Typing animations
    const typed = new Typed(".typing", {
        strings: ["Frontend Developer", "Web Developer", "MERN Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const typed2 = new Typed(".typing-2", {
        strings: ["Frontend Developer", "Web Developer", "MERN Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Resume download
    $("a[href='Maryam_Akbar_Resume.pdf']").click(function(e) {
        e.preventDefault(); 
        const link = document.createElement('a');
        link.href = "Maryam_Akbar_Resume.pdf";
        link.download = "Maryam_Akbar_Resume.pdf"; 
        link.click();
    });
    
    // Hire me button
    $(".home-content a").click(function(e) {
        e.preventDefault();
        window.location.href = "mailto:maryamakbarcu@gmail.com?subject=Hiring Inquiry&body=Hello Maryam,%0D%0A%0D%0AWe would like to discuss an opportunity to hire you. Please share your availability for a conversation.";
    });

    // Contact form submission
    $(".contact form").submit(function(e) {
        e.preventDefault();
        const name = $(".contact .name input").val();
        const email = $(".contact .email input").val();
        const subject = $(".contact .field input").val();
        const message = $(".contact .textarea textarea").val();

        const mailToLink = `mailto:maryamakbarcu@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
        window.location.href = mailToLink;
    });

    // Dark mode toggle
    const toggleBtn = $("#theme-toggle");
    const body = $("body");
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.addClass("dark-mode");
        toggleBtn.text("Light Mode");
    }

    toggleBtn.click(function() {
        body.toggleClass("dark-mode");
        const isDarkMode = body.hasClass("dark-mode");
        toggleBtn.text(isDarkMode ? "Light Mode" : "Dark Mode");
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode);
    });
});

