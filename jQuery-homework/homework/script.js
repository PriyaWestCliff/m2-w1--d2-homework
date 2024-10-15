$(document).ready(function(){
     // $('#load-data').click(function(){
          $('#btn').click(function(){
        $.getJSON('data.json', function(data) {
            console.log('Data loaded', data);
            // Set the table title and headings
            $('#title').text(data.title);
            $('#heading').text(data.heading);
            $('#head1').text(data.head1);
            $('#head2').text(data.head2);
            $('#head3').text(data.head3);
            $('#head4').text(data.head4);

            // Set the table rows
            $('#subheadcal').text(data.subheadcal);
            $('#cal1').text(data.cal1);
            $('#cal2').text(data.cal2);
            $('#cal3').text(data.cal3);
            $('#cal4').text(data.cal4);

            $('#subheadfat').text(data.subheadfat);
            $('#fat1').text(data.fat1);
            $('#fat2').text(data.fat2);
            $('#fat3').text(data.fat3);
            $('#fat4').text(data.fat4);

            $('#subheadven').text(data.subheadven);
            $('#ven1').text(data.ven1);
            $('#ven2').text(data.ven2);
            $('#ven3').text(data.ven3);
            $('#ven4').text(data.ven4);

            $('table').show();// Show the table after loading the data
        });
    });
});
