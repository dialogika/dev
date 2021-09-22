$(document).on('click','.send_form', function(){
    var input_blanter = document.getElementById('names');

    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6282137760669',
        walink2 = 'Salam Hangat, Saya melihat *Website Dialogika* dan saya tertarik untuk tahu lebih lanjut.' + '%0A %0A' 
                + 'Sebelumnya perkenalkan saya: ',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }

    if("" != input_blanter.value){

     /* Call Input Form */
    var input_programs = $("#programs :selected").text(), 
        input_names = $("#names").val(),
        input_emails = $("#emails").val(),
        input_works = $("#works").val(),
        input_locations = $("#locaitions").val(),
        input_ages = $("#ages").val(),
        input_messages = $("#messages").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name* : ' + input_names + '%0A' +
        '*Program* : ' + input_programs + '%0A' +
        '*Job* : ' + input_jobs + '%0A' +
        '*Domisili* : ' + input_locations + '%0A' +
        '*Isi Message* : ' + input_messages + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
});