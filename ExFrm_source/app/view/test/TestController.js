/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExFrm.view.test.TestController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.test',
    onSendClick:function(){
        let value = this.lookupReference('subject1').getValue();
        this.lookupReference('subject2').setValue(value);
        this.getViewModel().getStore('personalInfo').add(
            { name: '홍길동', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" })
    }

});
