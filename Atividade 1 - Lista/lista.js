document.addEventListener('DOMContentLoaded', () => {
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            const ul = document.createElement('ul');

            produtos.forEach(produto => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}" style="width:100px;height:auto;">
                    <div>
                        <h2>${produto.nome}</h2>
                        <p>${produto.preco}</p>
                    </div>
                `;
                ul.appendChild(li);
            });

            container.appendChild(ul);
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
});