
Ext.define('ExFrm.view.test.FileDivDetail', {
    extend: 'Ext.form.Panel',
    alias:'widget.filedivdetail',
    //xtype:'filedivdetail',
    layout:{
        type:'vbox',
        align:'stretch'
    },
    items:[{
        xtype:'textfield',
        fieldLabel:'이름',
        labelAlign:'right',
        name:'name',
        reference:'name'
    },{
        xtype:'textfield',
        fieldLabel:'이메일',
        labelAlign:'right',
        name:'email',
        reference:'email'
    },{
        xtype:'textfield',
        fieldLabel:'전화번호',
        labelAlign:'right',
        name:'phone',
        reference:'phone'
    },{
        xtype:'container',
        layout:'hbox',
        items:[{
            xtype:'container',
            flex:1
        },{
            xtype:'button',
            text:'폼서밋',
            handler:'onSubmitForm'
        }]
    }]
});