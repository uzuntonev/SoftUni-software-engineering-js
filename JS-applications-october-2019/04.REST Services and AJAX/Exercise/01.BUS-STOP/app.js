function getInfo() {
    const stopId = document.querySelector('#stopId');
    const stopName = document.querySelector('#stopName');
    const busesList = document.querySelector('#buses');
    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;
    
    stopName.textContent = '';
    busesList.innerHTML = '';

    fetch(url)
        .then(res => {
            if(!res.ok){
                stopName.textContent = 'Error';
                throw new Error(`Stop ID: ${stopId.value} is wrong!`);
            }
            return res.json();
        })
        .then(data => {
            const { name, buses } = data;
            stopName.textContent = name;
            Object.entries(buses)
                .forEach(([ id, time ]) => {
                    const li = document.createElement('li');
                    li.textContent = `Bus ${id} arrives in ${time}`;
                    busesList.appendChild(li);
                });
        });
    // .catch(err => stopName.textContent = 'Error');
}
