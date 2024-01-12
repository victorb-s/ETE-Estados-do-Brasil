let Brasil = [

    {
        sigla: "PR",
        estado: "Paraná",
        capital: "Curitiba",
        bandeira: "<img src = images/PR.png>",
    },

    {
        sigla: "RS",
        estado: "Rio Grande do Sul",
        capital: "Porto Alegre",
        bandeira: "<img src = images/RS.PNG>",
    },

    {
        sigla: "SC",
        estado: "Santa Catarina",
        capital: "Florianópolis",
        bandeira: "<img src = images/SC.PNG>",
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
