/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExFrm.view.test.FileDivModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.filediv',
    stores:{
        personalInfo:{
            fields:['aaa'],
            proxy:{
                type:'ajax',
                url:'./service/store.json',
                params:{

                },
                reader:{
                    type:'json',
                    rootProperty:'data.list'
                }
            },
            autoLoad:false
        }
        
    }

});
