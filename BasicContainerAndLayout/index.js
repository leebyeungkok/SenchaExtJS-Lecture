Ext.onReady(function(){
    let panel = Ext.create('Ext.panel.Panel',{
        title:'Container and Layout',
        width:600,
        height:600,
        layout:'border',
        items:[{
            region:'north',
            xtype:'container',
            padding:10,
            layout:'hbox',
            items:[
            {
                xtype:'textfield',
                fieldLabel:'제목1',
                labelAlign:'right',
                width:100,
            },{
                xtype:'textfield',
                fieldLabel:'제목2',
                labelAlign:'right',
                width:100,
            },{
                xtype:'container',
                flex:1,
            },{
                xtype:'button',
                text:'조회',
            }]
        },{
            region:'south',
            xtype:'container',
            width:100,
            split:true
        },{
            region:'center',
            xtype:'grid',
            width:300,
            height:300,
            store:{
                field:['value', 'display'],
                data:[{
                    value:'1', display:'홍길동'
                },{
                    value:'2', display:'임꺽정'
                },{
                    value:'3', display:'유관순'
                },{
                    value:'4', display:'이순신'
                },{
                    value:'5', display:'강감찬'
                },{
                    value:'1', display:'홍길동'
                },{
                    value:'2', display:'임꺽정'
                },{
                    value:'3', display:'유관순'
                },{
                    value:'4', display:'이순신'
                },{
                    value:'5', display:'강감찬'
                },{
                    value:'1', display:'홍길동'
                },{
                    value:'2', display:'임꺽정'
                },{
                    value:'3', display:'유관순'
                },{
                    value:'4', display:'이순신'
                },{
                    value:'5', display:'강감찬'
                },{
                    value:'1', display:'홍길동'
                },{
                    value:'2', display:'임꺽정'
                },{
                    value:'3', display:'유관순'
                },{
                    value:'4', display:'이순신'
                },{
                    value:'5', display:'강감찬'
                }]
            },
            columns:[{
                text:'값',
                dataIndex:'value',
                with:100
            },{
                text:'보여주는항목',
                dataIndex:'display',
                flex:1
            }]
        }],
        renderTo:document.body
    })
})