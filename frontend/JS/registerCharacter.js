document.addEventListener("DOMContentLoaded", () => {

    function loadServers() {
        fetch("http://localhost:5000/servers")
            .then(response => response.json())
            .then(data => {
                const serverSelect = document.getElementById("server");
                data.forEach(server => {
                    const option = document.createElement("option");
                    option.value = server._id; // Assuming the server model has a unique _id
                    option.textContent = server.name; // Assuming the server has a 'name' field
                    serverSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Erro ao carregar servidores:", error));
    }


    function loadClasses() {
        fetch("http://localhost:5000/classes")
            .then(response => response.json())
            .then(data => {
                const classSelect = document.getElementById("class");
                data.forEach(characterClass => {
                    const option = document.createElement("option");
                    option.value = characterClass._id; // Assuming the class model has a unique _id
                    option.textContent = characterClass.name; // Assuming the class has a 'name' field
                    classSelect.appendChild(option);
                });
            })
            .catch(error => console.error("Erro ao carregar classes:", error));
    }

    loadServers();
    loadClasses();


    document.getElementById("register-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const level = document.getElementById("level").value;
        const server = document.getElementById("server").value;
        const characterClass = document.getElementById("class").value;
        const magic = document.getElementById("magic").value;
        const distance = document.getElementById("distance").value;
        const axe = document.getElementById("axe").value;
        const sword = document.getElementById("sword").value;
        const club = document.getElementById("club").value;
        const shielding = document.getElementById("shielding").value;

        const characterData = {
            name,
            level,
            server,
            class: characterClass,
            magic: magic || 0,
            distance: distance || 0,
            axe: axe || 0,
            sword: sword || 0,
            club: club || 0,
            shielding: shielding || 0
        };

        fetch("http://localhost:5000/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(characterData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Personagem registrado com sucesso!");
            window.location.href = "index.html"; 
        })
        .catch(error => {
            console.error("Erro ao registrar personagem:", error);
        });
    });
});
