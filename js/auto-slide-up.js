!function (){
    // 添加offset
let specialTags = document.querySelectorAll('[data-menu]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(() => {
    highlight()
}, 200);

window.addEventListener('scroll',function(e){
    highlight()
})

/* helper*/
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
}.call()
