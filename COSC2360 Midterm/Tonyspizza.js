
// Created by Tony Dyer
// started 10/3/2024
//COSC2360 Midterm Project

document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    // function to calc and update the total price
    function calculateTotalPrice() {
        const crustSelect = document.getElementById('crust');
        const crustPrice = parseFloat(crustSelect.options[crustSelect.selectedIndex].getAttribute('data-price')) || 0;

        console.log(`Selected crust price: ${crustPrice}`); // debugging

        // get selected toppings and calc their total price
        let toppingsPrice = 0;
        document.querySelectorAll('input[name="topping"]:checked').forEach(function(topping) {
            const toppingPrice = parseFloat(topping.getAttribute('data-price'));
            toppingsPrice += toppingPrice;
            console.log(`Added topping price: ${toppingPrice}`); // debugging
        });

        // calculate total price
        const totalPrice = crustPrice + toppingsPrice;

        console.log(`Total Price: ${totalPrice}`); // debugging

        // update the displayed total price
        document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    }

    // attach event listeners to form elements to update the total price dynamically
    document.getElementById('crust').addEventListener('change', calculateTotalPrice);
    document.querySelectorAll('input[name="topping"]').forEach(function(topping) {
        topping.addEventListener('change', calculateTotalPrice);
    });

    // handle form validation and submission
    document.getElementById('pizzaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // prevent default form submission

        const name = document.getElementById('name').value;
        const crustSelect = document.getElementById('crust');
        const crust = crustSelect.value;
        const crustPrice = parseFloat(crustSelect.options[crustSelect.selectedIndex].getAttribute('data-price')) || 0;
        const payment = document.querySelector('input[name="payment"]:checked');
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = ''; // clear previous errors

        if (!name) {
            errorMessage.textContent = 'Please enter your name.';
            return;
        }

        if (!crust) {
            errorMessage.textContent = 'Please select a crust type.';
            return;
        }

        if (!payment) {
            errorMessage.textContent = 'Please select a payment method.';
            return;
        }

        // get selected toppings and calc their total price
        const toppings = [];
        let toppingsPrice = 0;
        document.querySelectorAll('input[name="topping"]:checked').forEach(function(topping) {
            toppings.push(topping.value);
            toppingsPrice += parseFloat(topping.getAttribute('data-price'));
        });

        // calc total price
        const totalPrice = crustPrice + toppingsPrice;

        // display the order summary with the total price
        alert(`Order Summary:
Name: ${name}
Crust: ${crust} - $${crustPrice.toFixed(2)}
Toppings: ${toppings.join(', ') || 'None'} - $${toppingsPrice.toFixed(2)}
Total Price: $${totalPrice.toFixed(2)}
Payment: ${payment.value}`);
        // this.submit();
    });
});