let table = `
<table class="table is-fullwidth">
    <thead>
        <tr>
            <th style="width:20px;"></th>
            <th>Country</th>
            <th style="width:150px;">Total Confirmed</th>
            <th class="has-text-right" style="width:150px;">Total Deaths</th>
            <th class="has-text-right" style="width:150px;">Total Recovered</th>
        </tr>
    </thead>
    <tbody>
        {{rows}}
    </tbody>
</table>
`;

function render(items) {
    let rows = [];

    items.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
        .forEach(item => {
            rows.push(`
            <tr>
                <td>
                    <span class="flag-icon flag-icon-${item.CountryCode.toLowerCase()}"></span>
                </td>
                <td>${item.Country}</td>
                <td class="has-text-right">${numberFormat(item.TotalConfirmed)}</td>
                <td class="has-text-right">${numberFormat(item.TotalDeaths)}</td>
                <td class="has-text-right">${numberFormat(item.TotalRecovered)}</td>
            </tr>
        `);
        });

    return table.replace('{{rows}}', rows.join(' '));
}

function numberFormat(number) {
    return new Intl.NumberFormat("es-PE").format(number)
}

export default render;