Ext.define('ExFrm.controller.AppController',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            mainBar:'main tabpanel[name=mainbar]'
        },
    },
    setMainBar:function(url, title){
        let mainBar = this.getMainBar();
        var findTitle = false;
        for(i=0; i < mainBar.getTabBar().items.items.length; i++){
            console.log('find!!!');
            console.log(mainBar.getTabBar(i));
            if(title == mainBar.getTabBar(i).items.items[i].title){
                mainBar.getLayout().setActiveItem(i);
                findTitle = true;
                break;
            }
        } 
        if(findTitle == false){
            var panel = Ext.create(url,{
                autoShow:true,
                title:title,
                autoDestroy:true
            });
            mainBar.add(panel);
            mainBar.getLayout().setActiveItem(panel);
        }
        
    }
})