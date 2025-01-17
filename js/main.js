const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityInput = document.getElementById('quantity');

// 감소 버튼
decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

// 증가 버튼
increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

// 입력 필드의 최소값을 보장
quantityInput.addEventListener('input', () => {
    if (quantityInput.value < 1) {
        quantityInput.value = 1;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });

    const menuItems = document.querySelectorAll(".mgnb");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            ham.classList.remove("active");
            mgnb.classList.remove("active");
        });
    });
});


const review_txt = new Swiper('.review_txt', {
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween: 140,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true
        },
        780: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: true
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 50,
            centeredSlides: true
        },

        1200: {
            slidesPerView: 2,
            spaceBetween: 140,
            centeredSlides: true
        },


    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});

const resean_list = new Swiper('.resean_list', {
    slidesPerView: 1,
    spaceBetween: 20,
    //loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        freeMode: false
    }
});

/* 수량 */
document.addEventListener("DOMContentLoaded", () => {
    // 모든 .plus와 .minus 버튼 선택
    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");

    // "+" 버튼 클릭 이벤트 등록
    plusButtons.forEach((plus) => {
        plus.addEventListener("click", () => {
            // 해당 버튼과 연결된 result 값 찾기
            const result = plus.closest(".re_num").querySelector("#result");
            let i = parseInt(result.textContent, 10); // 현재 수량을 숫자로 변환
            i++; // 1 증가
            result.textContent = i; // 증가한 값 업데이트
        });
    });

    // "-" 버튼 클릭 이벤트 등록
    minusButtons.forEach((minus) => {
        minus.addEventListener("click", () => {
            // 해당 버튼과 연결된 result 값 찾기
            const result = minus.closest(".re_num").querySelector("#result");
            let i = parseInt(result.textContent, 10); // 현재 수량을 숫자로 변환
            if (i > 0) { // 0 이상일 때만 감소
                i--; // 1 감소
                result.textContent = i; // 감소한 값 업데이트
            } else {
                alert("수량은 0보다 작을 수 없습니다."); // 알림 메시지
            }
        });
    });
});
