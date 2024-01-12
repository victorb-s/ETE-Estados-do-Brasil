let Brasil = [

    {
        sigla: "DF",
        estado: "Distrito Federal",
        capital: "Brasília",
        bandeira: "<img src = images/DF.PNG>",
    },

        {
        sigla: "GO",
        estado: "Goiás",
        capital: "Goiânia",
        bandeira: "<img src = images/GO.PNG>",
    },

    {
        sigla: "MT",
        estado: "Mato Grosso",
        capital: "São Luís",
        bandeira: "<img src = images/MT.PNG>",
    },

    {
        sigla: "MS",
        estado: "Mato Grosso do Sul",
        capital: "Campo Grande",
        bandeira: "<img src = images/MS.PNG>",
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
