document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const scrollThreshold = 100; // Khoảng cách cuộn để kích hoạt (pixel)

    window.addEventListener("scroll", () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselExampleIndicators");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");
    const indicators = carousel.querySelectorAll(".carousel-indicators button");
    let currentIndex = 0;
    const intervalTime = 5000; // Thời gian chuyển ảnh tự động (miliseconds)
    let carouselInterval;

    function showSlide(index) {
        // Ẩn tất cả các ảnh và gỡ bỏ class 'active'
        items.forEach((item) => {
            item.classList.remove("active");
        });
        // Cập nhật lại các nút indicators
        indicators.forEach((indicator) => {
            indicator.classList.remove("active");
        });

        // Hiển thị ảnh mới và thêm class 'active'
        items[index].classList.add("active");
        indicators[index].classList.add("active");

        // Cập nhật lại currentIndex
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    // Tự động chuyển ảnh sau mỗi 5 giây
    function startCarousel() {
        carouselInterval = setInterval(nextSlide, intervalTime);
    }

    // Dừng tự động chuyển khi người dùng tương tác
    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Gắn sự kiện cho nút Prev/Next
    nextBtn.addEventListener("click", () => {
        stopCarousel();
        nextSlide();
        startCarousel();
    });
    prevBtn.addEventListener("click", () => {
        stopCarousel();
        prevSlide();
        startCarousel();
    });

    // Gắn sự kiện cho các nút indicators
    indicators.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });

    // Khởi động carousel khi trang web tải xong
    startCarousel();
});

document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const body = item.querySelector('.acc-body');
        const isOpen = item.classList.contains('open');

        // đóng tất cả
        document.querySelectorAll('.acc-item').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.acc-body').style.display = 'none';
        });

        if (!isOpen) {
            item.classList.add('open');
            body.style.display = 'block';
        }
    });
});


// TrangChu.js

document.addEventListener("DOMContentLoaded", function () {
    // Lấy tên file hiện tại (ví dụ: TrangChu.html, tintuc.html)
    // Nếu URL là http://localhost/ thì currentPath sẽ là ""
    const currentPath = window.location.pathname.split('/').pop().toLowerCase();

    // Lấy tất cả các thẻ <a> trong menu
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').toLowerCase();
        const navItem = link.closest('.nav-item');

        // 1. Luôn xóa class 'active' trước khi kiểm tra
        navItem.classList.remove('active');

        // 2. Kiểm tra nếu link khớp với trang hiện tại
        if (currentPath === linkPath) {
            navItem.classList.add('active');
        }
        // 3. Xử lý trường hợp Trang Chủ: 
        // Nếu đang ở URL gốc (currentPath == "") VÀ link là TrangChu.html
        else if (currentPath === "" && linkPath === "trangchu.html") {
            navItem.classList.add('active');
        }
    });
});