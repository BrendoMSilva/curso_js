
// Cria um novo elemento vazio
// sem ID, atributos ou conteúdo
var sp1 = document.createElement("span");

// Adiciona um ID 'newSpan' para o elemento
sp1.setAttribute("id", "newSpan");

// Adiciona contéudo para o elemento
var sp1_content = document.createTextNode("new replacement span element.");

// Coloca o conteúdo no elemento
sp1.appendChild(sp1_content);

// Procura o elemento que será substituído
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// Substituí o elemento que já existe (sp2) por o novo elemento (sp1)
parentDiv.replaceChild(sp1, sp2);