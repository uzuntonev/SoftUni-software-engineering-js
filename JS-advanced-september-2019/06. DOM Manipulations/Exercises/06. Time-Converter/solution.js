function attachEventsListeners() {
    function fromDays(days){
        days = Number(days);
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
    function fromHours(hours){
        hours = Number(hours);
        const days = hours / 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
    function fromMins(minutes){
        minutes = Number(minutes);
        const hours = minutes / 60;
        const days = hours / 24;
        const seconds = minutes * 60;
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
    function fromSecs(seconds){
        seconds = Number(seconds);
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    const timeMap = {
        days: fromDays,
        hours: fromHours,
        minutes: fromMins,
        seconds: fromSecs,
    };

    function convert(ev){
        const convertFrom = ev.target.parentNode.children[1];
        const results = timeMap[convertFrom.id](convertFrom.value);

        Array.from(document.querySelectorAll('input[type="text"]')).map(e => {
            e.value = results[e.id];
        });
    }

    Array.from(document.querySelectorAll('input[type="button"]'))
        .forEach(e => e.addEventListener('click', convert));
}


