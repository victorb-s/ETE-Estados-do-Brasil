let Brasil = [

    {
        sigla: "AL",
        estado: "Alagoas",
        capital: "Maceió",
        bandeira: "<img src = images/AL.PNG>",
    },

    {
        sigla: "BA",
        estado: "Bahia",
        capital: "Salvador",
        bandeira: "<img src = images/BA.PNG>",
    },

    {
        sigla: "CE",
        estado: "Ceará",
        capital: "Fortaleza",
        bandeira: "<img src = images/CE.PNG>",
    },

    {
        sigla: "MA",
        estado: "Maranhão",
        capital: "São Luís",
        bandeira: "<img src = images/MA.PNG>",
    },

    {
        sigla: "PB",
        estado: "Paraíba",
        capital: "João Pessoa",
        bandeira: "<img src = images/PB.PNG>",
    },

    {
        sigla: "PE",
        estado: "Pernambuco",
        capital: "Recife",
        bandeira: "<img src = images/PE.PNG>",
    },

    {
        sigla: "PI",
        estado: "Piauí",
        capital: "Teresina",
        bandeira: "<img src = images/PI.PNG>",
    },

    {
        sigla: "RN",
        estado: "Rio Grande do Norte",
        capital: "Natal",
        bandeira: "<img src = images/RN.PNG>",
    },

    {
        sigla: "SE",
        estado: "Sergipe",
        capital: "Aracaju",
        bandeira: "<img src = images/SE.PNG>",
    },
];

let estadosBrasileiros = Brasil.map(function(item, indice){
    return `<tr>
                <td>${indice + 1}</td>
                <td>${item.sigla}</td>
                <td>${item.estado}</td>
                <td>${item.capital}</td>
                <td>${item.bandeira}</td>
            </tr>`;
});

document.querySelector("#tbEstados tbody").innerHTML = estadosBrasileiros.join("");
