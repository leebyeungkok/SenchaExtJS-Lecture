
Ext.define('ExFrm.view.test.FileDivController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.filediv',
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
    },
    onGridClick:function(panel, record){
        console.log('arguments', arguments);
        let name = record.get('name');
        let email = record.get('email');
        let phone = record.get('phone');
        this.lookupReference('name').setValue(name);
        this.lookupReference('email').setValue(email);
        this.lookupReference('phone').setValue(phone);
        
    },
    onSubmitForm:function(){
        let form = this.lookupReference('detailPanel').getForm();
        form.url = './service/form.json',
        form.submit({
            success:function(form, action){
                console.log(action);
                Ext.Msg.alert('확인', '변경했습니다.')
            },
            failure:function(form, aciton){

            }
        })
    }

});
