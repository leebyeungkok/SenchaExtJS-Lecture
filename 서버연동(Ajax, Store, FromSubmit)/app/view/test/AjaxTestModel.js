/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExFrm.view.test.AjaxTestModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ajaxtest',
    stores:{
        personalInfo:{
            data:[
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
                { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
                { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
                { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
            ],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        },
    }

});
