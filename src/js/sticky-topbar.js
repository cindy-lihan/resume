!function(){
    var view = View('#topNavBar')
    var controller = {
        view :view,
        init : function(){
            var view = this.view
            this.bindEvent() //this.bindEvent().call(this)
                       
    },
    bindEvent:function(){
        var view = this.view
        window.addEventListener('scroll',(event) => { 
            window.scrollY > 0 ? this.active() : this.deactive()
        })
        //箭头函数没有this，但是会继承上一级的this，也可以用bind函数去绑定，事件监听的this为绑定事件的元素
    },
    active:function(){
        this.view.classList.add('sticky')

    },
    deactive:function(){
        this.view.classList.remove('sticky')

    },
    

}
 controller.init(view)  //controller.init.call(controller,view)
}.call()