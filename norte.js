let Brasil = [

    {
        sigla: "AC",
        estado: "Acre",
        capital: "Rio Branco",
        bandeira: "<img src = images/AC.PNG>",
    },

    {
        sigla: "AP",
        estado: "Amapá",
        capital: "Macapá",
        bandeira: "<img src = images/AP.PNG>",
    },

    {
        sigla: "AM",
        estado: "Amazonas",
        capital: "Manaus",
        bandeira: "<img src = images/AM.PNG>",
    },

    {
        sigla: "PA",
        estado: "Pará",
        capital: "Belém",
        bandeira: "<img src = images/PA.PNG>",
    },

    {
        sigla: "RO",
        estado: "Rondônia",
        capital: "Porto Velho",
        bandeira: "<img src = images/RO.PNG>",
    },
    
    {
        sigla: "RR",
        estado: "Roraima",
        capital: "Boa Vista",
        bandeira: "<img src = images/RR.PNG>",
    },
    
    {
        sigla: "TO",
        estado: "Tocantins",
        capital: "Palmas",
        bandeira: "<img src = images/TO.PNG>",
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
