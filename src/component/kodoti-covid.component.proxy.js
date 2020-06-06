class KodotiCovidProxy {
    static get() {
        return fetch('https://api.covid19api.com/summary')
            .then(r => r.json())
            .then(r => r.Countries);
    }
}

export default KodotiCovidProxy;