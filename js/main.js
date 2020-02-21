siteWelcome.classList.remove('active')
let specialTags = document.querySelectorAll('[data-menu]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(() => {
    highlight()
}, 200);
window.onscroll = function (event) {
    window.scrollY > 0 ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky')
    highlight()
}
function highlight() {
    // 滚动到相应位置目录高亮
    let minIndex = 0;
    // 获取滚动当前位置最近的元素索引
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let li = document.querySelector('a[href="#' + id + '"]').parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}
// let liTags = document.getElementsByClassName('menuTigger')
let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (event) {
        let li = event.currentTarget.classList.add('active')
        // 注意：若与下一个元素间存在文本（例如：回车），nextSibling会是Text_Node类型
    }

    liTags[i].onmouseleave = function (event) {
        let li = event.currentTarget.classList.remove('active')
    }
}
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('nav.menu >ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
        event.preventDefault()
        let aTag = event.currentTarget
        let href = aTag.getAttribute('href')  //#siteAbout
        let element = document.querySelector(href)
        let top = element.offsetTop
        let currentY = window.scrollY   //当前位置
        let targetY = top - 80    //目标位置
        // 使用tweenjs缓动效果
        const coords = { y: currentY };
        const tween = new TWEEN.Tween(coords)
            .to({ y: targetY }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}
			var mySwiper = new Swiper ('.swiper-container', {
			  // Optional parameters
			//   direction: 'vertical',
			  loop: true,
			  // Navigation arrows
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
			})
