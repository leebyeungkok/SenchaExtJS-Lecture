/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MvcApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    //alias: 'widget.main',
    title:'MVC 아키텍쳐',
    layout:{
        type:'vbox'
    },
    bodyPadding:'10 10 10 10',
    items:[{
        xtype:'textfield',
        fieldLabel:'제목' ,
        name:'subject1'
    },{
        xtype:'button',
        text:'전달',
        name:'btnSend'
    },{
        xtype:'textfield',
        fieldLabel:'전달받은제목' ,
        name:'subject2'
    },{
        xtype:'grid',
        width:300,
        height:300,
        flex:1,
        store:'Personnel',
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
