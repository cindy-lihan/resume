!function () {
    var view = document.querySelector('nav.menu')
    var controller = {
        view : null,
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvent()
        },
        scrollToElement: function (element) {
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
        },

        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvent: function () {
            let aTags = this.view.querySelectorAll('ul > li > a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].addEventListener('click', (event) => {
                    event.preventDefault()
                    let aTag = event.currentTarget
                    let href = aTag.getAttribute('href')  //#siteAbout
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                })
            }
            let liTags = this.view.querySelectorAll('ul > li')
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function (event) {
                    let li = event.currentTarget.classList.add('active')
                    // 注意：若与下一个元素间存在文本（例如：回车），nextSibling会是Text_Node类型
                }
                liTags[i].onmouseleave = function (event) {
                    let li = event.currentTarget.classList.remove('active')
                }
            }
        }
    }
    controller.init(view)
}.call()

