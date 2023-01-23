
Ext.define('ExFrm.view.test.StoreTestController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.storetest',
    onSendClick:function(){
        let me = this;
        let params = {
            subject1: this.lookupReference('subject1').getValue()
        }
        this.getViewModel().getStore('personalInfo').load({
            params: params,
            callback:function(records, operation, success){
                Ext.Msg.alert('확인', '콜백함수');
            }
        });
    }

});
