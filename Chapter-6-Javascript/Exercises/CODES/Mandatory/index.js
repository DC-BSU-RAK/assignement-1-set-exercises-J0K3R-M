// Select elements
const costPerLiterInput = document.getElementById('costPerLiter');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculateBtn');
const totalCostDisplay = document.getElementById('totalCost');

// Add event listener to the button
calculateBtn.addEventListener('click', () => {
    // Get input values
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const liters = parseFloat(litersInput.value);

    // Validate inputs
    if (isNaN(costPerLiter) || isNaN(liters) || costPerLiter < 0 || liters < 0) {
        totalCostDisplay.textContent = 'Please enter valid positive numbers.';
        return;
    }

    // Calculate total cost
    const totalCost = costPerLiter * liters;

    // Display total cost
    totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});