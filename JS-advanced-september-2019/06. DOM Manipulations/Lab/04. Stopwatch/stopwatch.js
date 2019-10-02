function stopwatch() {
    const time = document.querySelector('#time');
    let [ min, sec ] = time.innerHTML.split(':');
    min = Number(min);
    sec = Number(sec);
    const stop = $('#stopBtn').click(() => {
        $('#startBtn').removeAttr('disabled');
        $('#stopBtn').attr('disabled', 'true');
     

    });
    const start = $('#startBtn').click(() => {
        $('#stopBtn').removeAttr('disabled');
        $('#startBtn').attr('disabled', 'true');

    });
    console.log(min, sec); 
}
