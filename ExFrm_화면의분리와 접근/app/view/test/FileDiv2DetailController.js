
Ext.define('ExFrm.view.test.FileDiv2DetailController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.filediv2detail',
    getParams:function(record){
        console.log('arguments', arguments);
        let name = record.get('name');
        let email = record.get('email');
        let phone = record.get('phone');
        this.lookupReference('name').setValue(name);
        this.lookupReference('email').setValue(email);
        this.lookupReference('phone').setValue(phone);
        
    },
});