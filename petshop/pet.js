let id = 1;

const form =
document.getElementById("formPet");

const tabelaBody = 
document.querySelector("#tabelaPetstbody");

form.addEventListener("submit", 
function (e) {
    e.preventDefault();

    const nomePet = 
document.querySelector("nomePet").value.trim();
    const racaPet =
document.querySelector("racaPet").value.trim();
    const donoPet =
document.querySelector("donoPet").value.trim();
    const telefone =
document.querySelector("nomePet").value.trim(); 

    if (nomePet === ""|| racaPet ==="" || donoPet ==="" || telefone ==="") {
        alert("Preencha todos os campos");
        return;
        }
    
    const newRow =
document.createElement("tr");    
        newRow.innerHTML = `
        <td>${id++}</td> <!-- Incrementa o ID -->
        <td>${nomePet}</td>
        <td>${racaPet}</td>
        <td>${donoPet}</td>
        <td>${telefone}</td>
    <td><button class="remover-btn"></button></td>
    `;

        tabelaBody.appendChild("newRow");


    newRow.querySelector(".remover-btn")
    .addEventListener("click", function
    () {
            newRow.remove();
        });

        form.reset();
        });
