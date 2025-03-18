document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:5000/characters") 
        .then(response => response.json())
        .then(data => {
            const characterList = document.getElementById("character-list");
            characterList.innerHTML = ""; 

            data.forEach(character => {
                const characterDiv = document.createElement("div");

                // Adiciona as classes do Tailwind para estilizar como card
                characterDiv.className = "bg-gray-700 p-4 rounded-lg shadow-md text-white flex flex-col justify-between";

                characterDiv.innerHTML = `
                    <div>
                        <h3 class="text-lg font-bold">${character.name}</h3>
                        <p class="text-sm text-gray-300"><strong>Level:</strong> ${character.level}</p>
                        <p class="text-sm text-gray-300"><strong>Classe:</strong> ${character.class.name}</p>
                        <p class="text-sm text-gray-300"><strong>Servidor:</strong> ${character.server.name}</p>
                        
                        <div class="mt-2 text-sm">
                            <p><strong>Shielding:</strong> ${character.shielding}</p>
                            <p><strong>Axe:</strong> ${character.axe}</p>
                            <p><strong>Sword:</strong> ${character.sword}</p>
                            <p><strong>Club:</strong> ${character.club}</p>
                            <p><strong>Distance:</strong> ${character.distance}</p>
                            <p><strong>Magic:</strong> ${character.magic}</p>
                        </div>
                    </div>

                    <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded"
                        onclick="deleteCharacter('${character._id}', this)">
                        Deletar
                    </button>
                `;

                characterList.appendChild(characterDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar personagens:", error);
        });
});

// Função para deletar o personagem
function deleteCharacter(id, button) {
    if (!confirm("Tem certeza que deseja deletar este personagem?")) {
        return;
    }

    fetch(`http://localhost:5000/characters/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao deletar personagem");
        }
        return response.json();
    })
    .then(() => {

        const card = button.parentElement;
        card.remove();
    })
    .catch(error => {
        console.error("Erro:", error);
    });
}
