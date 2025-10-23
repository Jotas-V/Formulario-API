document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    sessionStorage.setItem("cep", cepInformado)


    if(cepInformado.length !== 8)
        return;


    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resposta => resposta.json())
    .then(data => {

        if(!data.erro){
        document.getElementById("logradouro").value = data.logradouro; 
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("estado").value = data.estado;
        }else{
            console.log("Cep não encontrado!");
        }
        
    })
    .catch(error => console.error("Erro ao buscar CEP: "))
})

document.addEventListener("DOMContentLoaded", () =>{
    const cepAtual = sessionStorage.getItem("cep")

    document.getElementById("cep").value = cepAtual;
})

