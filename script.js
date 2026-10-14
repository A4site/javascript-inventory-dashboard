// Pre-existing inventory items
let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("Initializing Inventory System");

// 1. Data & Input Initialization (Prompt and explicit type conversion)
let userInputName = prompt("Enter new product name (e.g., Monitor):");
let userInputPrice = prompt("Enter product price (e.g., 150):");

let parsedPrice = Number(userInputPrice);

// 2 & 3. Control Flow & Validation using if...else
if (userInputName && userInputName.trim() !== "" && !isNaN(parsedPrice) && parsedPrice >= 0) {
    inventory.push({ name: userInputName.trim(), price: parsedPrice });
    console.log(`[Prompt executed: User adds "${userInputName.trim()}" at "$${parsedPrice}"]`);
} else {
    console.log("Invalid input! Skipping new product addition.");
}

console.log("Processing Inventory Roster (forEach)");

// 5. Array Methods & Conditional Evaluation (Category assignment)
inventory.forEach(item => {
    let category = "";
    
    // Switch or If-else logic for pricing thresholds
    if (item.price < 50) {
        category = "Budget";
    } else if (item.price >= 50 && item.price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

// 4. Functions & Scope (Arrow function to calculate total inventory statistics)
const calculateTotalValue = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
};

console.log("--- Financial Analytics");
console.log(`Total Inventory Value: $${calculateTotalValue(inventory)}`);

// Filter affordable items under $200
let filteredItems = inventory.filter(item => item.price < 200);
console.log("Filtered Affordable Items (Under $200):");
console.log(filteredItems.map(item => item.name));

// Map to produce a transformed report summary
let formattedReport = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log("Formatted Report List:", formattedReport);