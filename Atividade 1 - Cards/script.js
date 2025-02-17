fetch('produtos.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('product-container');
        data.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.preco}</p>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao carregar os produtos:', error));