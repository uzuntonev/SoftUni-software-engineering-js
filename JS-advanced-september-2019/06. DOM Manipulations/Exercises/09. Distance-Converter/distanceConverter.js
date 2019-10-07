function attachEventsListeners() {
    function convert() {
        const inputUnit = document.querySelector('#inputUnits');
        const outputUnit = document.querySelector('#outputUnits');
        const input = document.querySelector('#inputDistance');
        const output = document.querySelector('#outputDistance');
        if (inputUnit === null ||
            outputUnit === null ||
            input === null ||
            output === null) {
            throw new Error('missing element !!');
        }
        const map = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        };
        output.value = (Number(input.value) * map[inputUnit.value]) / map[outputUnit.value];
    }

    document.querySelector('#convert').addEventListener('click', convert);
}
