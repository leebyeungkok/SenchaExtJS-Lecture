Ext.onReady(function(){

    let textField = Ext.create('Ext.form.TextField',{
        fieldLabel:'위에서 추가된 텍스트'
    })
    Ext.create('Ext.panel.Panel', {
        title:'My Panel', 
        renderTo:document.body,
        width:600,
        height:600,
        rootView:true,
        scrollable:true,
        items:[
            textField
        ,{
            xtype:'panel',
            width:100,
            height:50,
            html:'aaa'
        },{
            xtype:'textfield',
            fieldLabel:'제목',
            labelWidth:60,
            width:160
        },{
            xtype:'datefield',
            fieldLabel:'날짜',
            labelWidth:60,
            width:200
        },{
            xtype:'combobox',
            fieldLabel:'선택',
            labelWidth:60,
            width:200,
            valueField:'value',
            displayField:'display',
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
                }]
            }
        },{
            xtype:'button',
            text:'버튼',
            width:100,
            handler:function(){
                this.up('[rootView=true]').add(
                    Ext.create('Ext.form.TextField',{
                        fieldLabel:'추가된 텍스트'
                    })
                )
                let window = Ext.create('Ext.window.Window',{
                    title:'윈도우',
                    width:400,
                    height:300,
                    items:[{
                        xtype:'textfield',
                        fieldLabel:'텍스트'
                    }]
                });
                window.show();
            }
        },{
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
        },{
            xtype:'treepanel',
            width:300,
            height:300,
            store:{
                root:{
                    expanded:true,
                    children:[
                        {text:'일', leaf:true},
                        {text:'이', leaf:true},
                        {text:'삼', leaf:false,
                            children:[{text:'삼-일', leaf:true},
                            {text:'삼-이', leaf:true}]
                        }
                    ]
                }
            },
            rootVisible:false,
        }]
    })
})