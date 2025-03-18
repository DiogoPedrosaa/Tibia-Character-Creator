document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:5000/characters") 
        .then(response => response.json())
        .then(data => {
            const characterList = document.getElementById("character-list");
            characterList.innerHTML = ""; // Limpa a lista antes de adicionar os personagens

            data.forEach(character => {
                const characterDiv = document.createElement("div");

                // Adiciona as classes do Tailwind para estilizar como card
                characterDiv.className = "bg-gray-700 p-4 rounded-lg shadow-md text-white";

                characterDiv.innerHTML = `
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
                `;

                characterList.appendChild(characterDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar personagens:", error);
        });
});
