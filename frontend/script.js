document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:5000/characters") 
        .then(response => response.json())
        .then(data => {
            const characterList = document.getElementById("character-list");
            data.forEach(character => {
                const characterDiv = document.createElement("div");
                characterDiv.classList.add("character");

                characterDiv.innerHTML = `
                    <h3>${character.name}</h3>
                    <p><strong>Level:</strong> ${character.level}</p>
                    <p><strong>Classe:</strong> ${character.class.name}</p>
                    <p><strong>Servidor:</strong> ${character.server.name}</p>
                    <p><strong>Shielding:</strong> ${character.shielding}</p>
                    <p><strong>Axe:</strong> ${character.axe}</p>
                    <p><strong>Sword:</strong> ${character.sword}</p>
                    <p><strong>Club:</strong> ${character.club}</p>
                    <p><strong>Distance:</strong> ${character.distance}</p>
                    <p><strong>Magic:</strong> ${character.magic}</p>
                `;

                characterList.appendChild(characterDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar personagens:", error);
        });
});
