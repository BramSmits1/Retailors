/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */

 //Script to copy header field(s) to line field(s)
 //Copyright, do not make changes to this script.
 //Script created by and owned by Rsult ERP.
 //
 //01-03-2019 Initial version of script by 050-IT
 //07-04-2022 Changes made to fit Retailors Europe Journal Entry
 //08-04-2022 Changes made to fit Retailors Europe Vendor Bill
 //


define(['N/record','N/search'],
    function(record,search) {
    //try
    {
        function beforeSubmit(context) 
        {
            
            var cur = context.newRecord; //currentRecord; 
			var memo = cur.getValue({
            fieldId: "memo"
        	});
            var check = cur.getValue({
                fieldId: "custbody_ret_copy_memo_lines"
                });
          //log.debug({
           //             title: 'memo header',
           //             details: memo
           //             }); 

            var itemcount = cur.getLineCount({sublistId: 'expense'});
            log.debug({
                        title: 'expense',
                        details: itemcount
                        });    
                                                         
                if(check == true) {
                for(var k=0;(itemcount >= 0) && (k < itemcount);k++)
                {
                    
                    var memoLine = cur.getSublistValue({
                                                        sublistId: 'expense',
                                                        fieldId: 'memo',
                                                        line: k
                                                        });
                    
                    
                                              
                    cur.setSublistValue({
                                                        sublistId: 'expense',
                                                        fieldId: 'memo',
                                                        line: k,
                                                        value: memo
                                                        });
                                                                                      
                    }
                }                                    
            }
        }
        return {
            beforeSubmit: beforeSubmit
        };
    
    });