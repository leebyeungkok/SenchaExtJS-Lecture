
Ext.define('ExFrm.view.test.AjaxTestController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.ajaxtest',
    onSendClick:function(){
        var me = this;
        Ext.Ajax.request({
            url:'./service/ajax.json',
            params:{

            },
            scope:me,
            success:function(res){
                console.log('res', res);
                let resObj = Ext.JSON.decode(res.responseText);
                // JSON.decode, JSON.strigify()
                if(resObj.success == true){
                    let data = resObj.data.personnelInfo;
                    console.log('this는 누구', this);
                    this.getViewModel().getStore('personalInfo').add(data);
                } else if (resObj.success == false){
                    Ext.Msg.alert('오류', resObj.msg);
                }

            },
            failure:function(res){
                console.log('arguments', arugmets);
                Ext.Msg.alert('오류', resObj.data.msg);
            }
        })
        //this.getViewModel().getStore('personalInfo').add(
        //    { name: '홍길동', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" })
    }

});
