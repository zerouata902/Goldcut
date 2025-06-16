document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});




// كود لعرض العناصر عند التمرير
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".staff-member");

    function showOnScroll() {
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // حتى يظهر مباشرة عند التحميل
});
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".staff-member");

    function showOnScroll() {
        elements.forEach((el, index) => {
            let position = el.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                setTimeout(() => {
                    el.classList.add("show");
                }, index * 300); // تأخير 300ms لكل عنصر
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // حتى يظهر مباشرة عند التحميل
});





document.addEventListener("DOMContentLoaded", function() {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.querySelector(".menu-btn");
    let closeBtn = document.createElement("span");

    // ✅ إنشاء زر الإغلاق
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close-btn");
    sidebar.appendChild(closeBtn);

    // ✅ تشغيل القائمة
    menuBtn.addEventListener("click", function() {
        sidebar.classList.add("active");
    });

    // ✅ إغلاق القائمة عند الضغط على الزر
    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });

    // ✅ إغلاق القائمة عند الضغط خارجها
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && event.target !== menuBtn) {
            sidebar.classList.remove("active");
        }
    });
});























document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const scrollTopBtn = document.getElementById("scrollTop");
    const services = document.querySelectorAll(".service");

    menuToggle.addEventListener("click", function() {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }

        services.forEach(service => {
            const rect = service.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                service.classList.add("visible");
            }
        });
    });

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.85;

        elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                el.classList.add("show");
            } else {
                el.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    let autoSlideInterval;

    function showImage() {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage();
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextImage, 2000); // تغيير الصورة كل 3 ثواني
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    nextBtn.addEventListener("click", () => {
        nextImage();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevImage();
        resetAutoSlide();
    });

    showImage();
    startAutoSlide(); // بدء التشغيل التلقائي
});

document.addEventListener("DOMContentLoaded", () => {
    const days = document.querySelectorAll(".day");
    days.forEach((day, index) => {
        setTimeout(() => {
            day.style.opacity = "1";
            day.style.transform = "translateY(0)";
        }, index * 200);
    });
});
















document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photos img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    let autoSlideInterval;

    function showImage() {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage();
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextImage,2000 ); // تغيير الصورة كل 3 ثواني
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    nextBtn.addEventListener("click", () => {
        nextImage();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevImage();
        resetAutoSlide();
    });

    showImage();
    startAutoSlide(); // بدء التشغيل التلقائي
});


document.addEventListener("DOMContentLoaded", function () {
    let loader = document.querySelector(".loader");

    window.onload = function () {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 500); // يخفي اللودر بعد 1 ثانية
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector('.fade-in-video');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.classList.add('fade-in-visible');
          observer.unobserve(video);
        }
      });
    }, {
      threshold: 0.5
    });
  
    observer.observe(video);
  })