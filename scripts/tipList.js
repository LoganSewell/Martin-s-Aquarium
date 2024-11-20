import { database } from './aquariumData.js';

export const tipList = () => {
    const tipsArray = database.tips;

    // Generate HTML for the list of tips
    const tipsHTML = tipsArray.map(tip => {
        
    }).join(""); // Combine all <li> elements
    

    // Wrap the tips in a <ul> element
    return `<ul class="tips">${tipsHTML}</ul>`;
};

// Inject tips into the #tipList section
const tipListContainer = document.querySelector("#tipList");
if (tipListContainer) {
    tipListContainer.innerHTML = tipList();
}
