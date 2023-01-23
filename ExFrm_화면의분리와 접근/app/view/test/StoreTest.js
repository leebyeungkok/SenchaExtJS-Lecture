/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExFrm.view.test.StoreTest', {
    extend: 'Ext.panel.Panel',
    requires:['ExFrm.view.test.StoreTestController', 
            'ExFrm.view.test.StoreTestModel'],
    controller:'storetest',
    viewModel:{
        type:'storetest'
    },
    xtype: 'storetest',
    //alias: 'widget.main',
    title:'MVVC 아키텍쳐',
    layout:{
        type:'vbox',
        align:'stretch'
    },
    bodyPadding:'10 10 10 10',
    closable:true,
    items:[{
        bodyPadding:10,
        layout:{
            type:'hbox',
        },
        items:[{
            xtype:'textfield',
            fieldLabel:'제목' ,
            name:'subject1',
            reference:'subject1'
        },{
            xtype:'container',
            flex:1
        },{
            xtype:'button',
            text:'조회',
            //name:'btnSend',
            handler:'onSendClick'
        }]
    },{
        xtype:'grid',
        flex:1,
        bind:{
            store:'{personalInfo}'
        },
        columns:[{
            text:'이름',
            dataIndex:'name',
            with:100
        },{
            text:'이메일',
            dataIndex:'email',
            flex:1
        },{
            text:'전화번호',
            dataIndex:'phone',
            flex:1
        }]
    }]

});
