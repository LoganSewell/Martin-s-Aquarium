import { database } from './aquariumData.js';

export const fishList = () => {
    const fishArray = database.fish;

    const fishHTML = fishArray.map(fish => {
        return `
            <div class="fish-card">
                <img src="${fish.image}" alt="${fish.name}" class="fish-image" />
                <h2>${fish.name}</h2>
                <p><strong>Species:</strong> ${fish.species}</p>
                <p><strong>Length:</strong> ${fish.length} inches</p>
                <p><strong>Location:</strong> ${fish.location}</p>
                <p><strong>Diet:</strong> ${fish.diet}</p>
            </div>
        `;
    }).join("");

    return fishHTML;
};

// Inject fish cards into the #fishList section
const fishListContainer = document.querySelector("#fishList");
if (fishListContainer) {
    fishListContainer.innerHTML = fishList();
}
