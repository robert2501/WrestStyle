const colorSelect = document.getElementById('produs1');
const priceDisplay = document.querySelector('.price-nmbr');

colorSelect.addEventListener('change', () => {
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    priceDisplay.textContent = `${price} €`;
});
