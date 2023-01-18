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
                name:'subject1',
                width:150,
                listeners:{
                    el:{
                        click:function(){
                            Ext.Msg.alert('확인', '클릭')
                        }
                    } 
                }
            },{
                xtype:'textfield',
                fieldLabel:'제목2',
                labelAlign:'right',
                name:'subject2',
                width:150,
            },{
                xtype:'container',
                flex:1,
            },{
                xtype:'button',
                text:'조회',
                listeners:{
                    click:function(){
                        //let text1 = this.up('panel').down('[name=subject1]');
                        //let text2 = this.up('panel').down('[name=subject2]');
                        //let text1 = this.previousSibling('[name=subject1]')
                        //let text2 = this.previousSibling('[name=subject2]')
                        //let text1 = Ext.ComponentQuery.query('textfield[name=subject1]')[0];
                        //let text2 = Ext.ComponentQuery.query('textfield[name=subject2]')[0];
                        //text2.setValue(text1.getValue());
                        //text2.addListener('focus', function(){
                        //    Ext.Msg.alert('확인', '포커스');
                        //});

                        let grid = this.up('panel').down('grid');
                        grid.getStore().removeAll();
                        grid.getStore().add({
                            value:'1', display:'을지문덕'
                        });
                        grid.getStore().add({
                            value:'1', display:'을지문덕2'
                        });
                    }
                }
            }]
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