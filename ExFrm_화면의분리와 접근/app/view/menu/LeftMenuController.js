Ext.define('ExFrm.view.menu.LeftMenuController',{
    extend:'Ext.app.ViewController',
    alias:'controller.leftmenu',
    onMenuClick:function(obj, selItem){
        //Ext.Msg.alert('선택', selItem.data.url);
        let appController = ExFrm.app.getController('AppController');
        appController.setMainBar(selItem.data.url, selItem.data.name);
    }

})