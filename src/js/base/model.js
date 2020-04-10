window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = '4PGrkAmEKCjaQBdX8IEPn42o-MdYXbMMI'
            var APP_KEY = 'c8fE75IG3XatEvEDh61yWT5H'
            var SERVER_URL = 'https://us.leancloud.cn'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY,
                serverURLs: SERVER_URL,
            })
        },
        fetch:function(){
            var query = new AV.Query(resourceName)
            return query.find()  //Promise

        },
        save:function(object){
            var Resource = AV.Object.extend(resourceName);
            var resource = new Resource();
            return resource.save(object)

        }
    }
}