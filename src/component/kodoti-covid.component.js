import kodotiCovidProxy from "./kodoti-covid.component.proxy";
import template from "./kodoti-covid.component.template";

class KodotiCovidComponent extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        kodotiCovidProxy.get().then(items => {
            this.innerHTML = template(items);
        });
    }
}

customElements.define('kodoti-covid', KodotiCovidComponent);