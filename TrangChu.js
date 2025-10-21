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
