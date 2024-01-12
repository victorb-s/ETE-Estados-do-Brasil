let Brasil = [
    
    {
        sigla: "ES",
        estado: "Espírito Santo",
        capital: "Vitória",
        bandeira: "<img src = images/ES.PNG>",
    },

    {
        sigla: "MG",
        estado: "Minas Gerais",
        capital: "Belo Horizonte",
        bandeira: "<img src = images/MG.PNG>",
    },

    {
        sigla: "RJ",
        estado: "Rio de Janeiro",
        capital: "Rio de Janeiro",
        bandeira: "<img src = images/RJ.PNG>",
    },

    {
        sigla: "SP",
        estado: "São Paulo",
        capital: "São Paulo",
        bandeira: "<img src = images/SP.PNG>",
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
