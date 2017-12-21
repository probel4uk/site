$(document).ready(function(){
    
//�������
$('#small a').click(function(eventObject){
    if($('#big img').attr('src')!= $(this).attr('href')){
    $('#big img').hide().attr('src', $(this).attr('href'));
    $('#big img').load(function(){
        $(this).fadeIn(2000);
        });
    }
    eventObject.preventDefault();
});
$('#small a').click(function(){
    $('#small a').fadeTo(1000,1);
    $(this).fadeTo(1000, 0.6);
})


//�������� ������ ������������
var myEmail = $('#email');
var regV=/[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
myEmail.focus(function(){
    if($(this).val() == $(this).attr('Value')){
        $(this).val("");
        
    };
    
});

myEmail.blur(function(){
    var userEmail = $(this).val()
    if(userEmail == ""){
        $(this).val($(this).attr('Value'));
        $(this).css('border', '2px solid #808080');
    }
    else if(userEmail.search(regV) == -1){
        $(this).css('border', '2px solid #cc0000');
    }
    else {
        $(this).css('border', '2px solid green');
    }
    
});

// ���������� ������ ���������

$('#my_button').click(function(){
    $(this).attr('disabled','disabled');
    $(this).attr('value', '���������...');
    })
//����������� ���������
jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: '�������',
		prevText: '&#x3C;����',
		nextText: '����&#x3E;',
		currentText: '�������',
		monthNames: ['������','�������','����','������','���','����',
		'����','������','��������','�������','������','�������'],
		monthNamesShort: ['���','���','���','���','���','���',
		'���','���','���','���','���','���'],
		dayNames: ['�����������','�����������','�������','�����','�������','�������','�������'],
		dayNamesShort: ['���','���','���','���','���','���','���'],
		dayNamesMin: ['��','��','��','��','��','��','��'],
		weekHeader: '���',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});



}); // ����� ready!!!!!!!!!!!!!!!!!! 