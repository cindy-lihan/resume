!function () {
    var view = View('section.message')

    var model = Model({resourceName:'Message'})

    var controller = Controller({
        messageList: null,
        form: null,
        init:function(view, model){
        this.messageList = view.querySelector('#messageList')
        this.form = view.querySelector('#postMessage')
        this.loadMessages()
    },
    loadMessages: function () {      
        // 获取留言数据
        this.model.fetch().then((messages) => {  //此处箭头函数是为了确保this.messageList的this指向外面
            messages.forEach(e => {
                let content = e.get('content')
                let name = e.get('name')
                let li = document.createElement('li')
                li.innerText = name + ':' + content
                this.messageList.append(li)
            });
        })
    },
    saveMessage: function () {
        let content = this.form.querySelector('input[name=content]').value
        let name = this.form.querySelector('input[name=name]').value
        model.save({'name':name, 'content':content}).then(function (message) {
        }).then(function (object) {
            let li = document.createElement('li')
            li.innerText = name + ':' + content
            this.messageList.append(li)
            this.form.querySelector('input[name=content]').value = ''
            this.form.querySelector('input[name=name]').value = ''
        })
    },
    bindEvents: function () {
        // 表单提交监听submit,会刷新页面
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.saveMessage()
        })
    },
    })
     controller.init(view, model)
}.call()


