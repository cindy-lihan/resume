!function () {
    var view = document.querySelector('section.message')
    var model = {
        init: function () {
            var APP_ID = '4PGrkAmEKCjaQBdX8IEPn42o-MdYXbMMI'
            var APP_KEY = 'c8fE75IG3XatEvEDh61yWT5H'
            var SERVER_URL = 'https://us.leancloud.cn'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY,
                serverURLs: SERVER_URL,
            })
        },
        fetch: function () {
            var query = new AV.Query('Message')
            return query.find()  //Promise
        },
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            // 数据内容 '列名':值
            // message.set({
            //     'name': name,
            //     'content': content
            // });
            return message.save({
                'name': name,
                'content': content
            })
        }
    }
    var controller = {
        view: null,
        messageList: null,
        model: null,
        myForm: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessage')
            this.loadMessages()
            this.bindEvents()
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
            model.save(name, content).then(function (message) {
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
    }
    controller.init(view, model)
}.call()


