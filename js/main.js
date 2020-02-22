$(function(){
    const rule = /[0-9][^a-z]/;
    $('#test_input').blur(function(){
        const test_input = $('#test_input').val();
        if(rule.test(test_input)){
            alert('true');
        }else{
            alert('false')
        }
    })
    
})


