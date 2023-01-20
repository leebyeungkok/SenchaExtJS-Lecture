/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExFrm.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ExFrm.view.main.MainController',
        'ExFrm.view.main.MainModel',
        'ExFrm.view.main.List',
        'ExFrm.view.menu.LeftMenu'
    ],
    controller: 'main',
    viewModel: 'main',
    layout:'border',
    items:[{
        region:'north',
        height:50,
        bodyStyle:'background-color:black',
        html:'<h2><font color="white">&nbsp;&nbsp;타이틀</font></h2>'
    },{
        region:'west',
        width:200,
        xtype:'leftmenu'
    },{
        region:'center',
        xtype:'tabpanel',
        name:'mainbar',
        items:[{
            title:'화면1',
            xtype:'panel'
        }]
    }]


});
