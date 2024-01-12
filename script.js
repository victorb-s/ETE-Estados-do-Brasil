let Brasil = [

    {
        sigla: "AC",
        estado: "Acre",
        capital: "Rio Branco",
        bandeira: "<img src = images/AC.PNG>",
    },

    {
        sigla: "AL",
        estado: "Alagoas",
        capital: "Maceió",
        bandeira: "<img src = images/AL.PNG>",
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
        sigla: "DF",
        estado: "Distrito Federal",
        capital: "Brasília",
        bandeira: "<img src = images/DF.PNG>",
    },

    {
        sigla: "ES",
        estado: "Espírito Santo",
        capital: "Vitória",
        bandeira: "<img src = images/ES.PNG>",
    },
    
        {
        sigla: "GO",
        estado: "Goiás",
        capital: "Goiânia",
        bandeira: "<img src = images/GO.PNG>",
    },

    {
        sigla: "MA",
        estado: "Maranhão",
        capital: "São Luís",
        bandeira: "<img src = images/MA.PNG>",
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

    {
        sigla: "MG",
        estado: "Minas Gerais",
        capital: "Belo Horizonte",
        bandeira: "<img src = images/MG.PNG>",
    },

    {
        sigla: "PA",
        estado: "Pará",
        capital: "Belém",
        bandeira: "<img src = images/PA.PNG>",
    },

    {
        sigla: "PB",
        estado: "Paraíba",
        capital: "João Pessoa",
        bandeira: "<img src = images/PB.PNG>",
    },

    {
        sigla: "PR",
        estado: "Paraná",
        capital: "Curitiba",
        bandeira: "<img src = images/PR.png>",
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
        sigla: "RJ",
        estado: "Rio de Janeiro",
        capital: "Rio de Janeiro",
        bandeira: "<img src = images/RJ.PNG>",
    },

    {
        sigla: "RN",
        estado: "Rio Grande do Norte",
        capital: "Natal",
        bandeira: "<img src = images/RN.PNG>",
    },

    {
        sigla: "RS",
        estado: "Rio Grande do Sul",
        capital: "Porto Alegre",
        bandeira: "<img src = images/RS.PNG>",
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
        sigla: "SC",
        estado: "Santa Catarina",
        capital: "Florianópolis",
        bandeira: "<img src = images/SC.PNG>",
    },

    {
        sigla: "SP",
        estado: "São Paulo",
        capital: "São Paulo",
        bandeira: "<img src = images/SP.PNG>",
    },

    {
        sigla: "SE",
        estado: "Sergipe",
        capital: "Aracaju",
        bandeira: "<img src = images/SE.PNG>",
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
