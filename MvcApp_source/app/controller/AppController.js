Ext.define('MvcApp.controller.AppController', {
    extend:'Ext.app.Controller',
    refs:{
        subject1: 'main textfield[name=subject1]',
        subject2: 'main textfield[name=subject2]',
    },
    control:{
        'main button[name=btnSend]':{
            click:'onSendClick'
        }
    },
    onSendClick:function(){
        console.log('arguments', arguments);
        
        let value = this.getSubject1().getValue();
        this.getSubject2().setValue(value);
        Ext.getStore('Personnel').add(
            { name: '홍길동', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },)
    }
})