window.Controller = function(options){
    var init = options.init // B
    

    var object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            // init是对象外面的initB
            init.call(this, view, model)  //此处的this是object，因为调用它的是controller，返回的是object
            this.bindEvents.call(this)
        }

    }
    for(let key in options){
        if(key != 'init'){
            object[key] = options[key]
        }
    }
return object
}