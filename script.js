window.addEventListener('scroll', function() {
    // スクロール位置の取得
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const section1 = document.getElementById('section1').offsetTop;
    const section2 = document.getElementById('section2').offsetTop;
    const section3 = document.getElementById('section3').offsetTop;

    if (scrollY >= section1 && scrollY < section2) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'; //
    } else if (scrollY >= section2 && scrollY < section3) {
        document.body.style.backgroundColor = '#ffefd5';
        document.body.style.color = 'black';
    } else if (scrollY >= section3) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});