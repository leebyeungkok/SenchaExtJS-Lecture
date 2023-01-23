/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExFrm.view.test.StoreTestModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.storetest',
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
