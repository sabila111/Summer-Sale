let total = 0;

function kitchenSpace(clickedElement) {
    const parentDiv = clickedElement.closest('.card');
    const selectedItemsContainer= document.querySelector('#selected-items ol');
    const itemName = parentDiv .childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);
    const price = parentDiv .childNodes[7].innerText;
    total = parseInt(total) + parseInt(price);
     document.getElementById('total').innerText= total;
}
