// Initialize Stripe with your publishable key
var stripe = Stripe('pk_test_51O6oDfJqKdxPvDjGQvaVwPpdFcnlNIqYhSVd7fviDvY3ziApD3eLEkqnTuw5bxA2WcQD92ABQQiffk3khVRwKoJX003MvQsiQv');

// Create a Payment Intent on your server (server-side code not shown)
// Fetch the client secret from the server
var clientSecret = 'sk_test_51O6oDfJqKdxPvDjGQtTpmiVfLU0Bku7PPnXuvJEYNDeCLfomwV61BIRxd1E9nC0OYDgv3w33Xj1OBI7PJXvWGYJM00tafTFX7x';

// Create an instance of Elements
var elements = stripe.elements();

// Create an instance of the card Element
var card = elements.create('card');

// Add an instance of the card Element into the `card-element` div
card.mount('#card-element');

// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Disable the submit button to prevent multiple submissions
  form.querySelector('button').disabled = true;

  stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
    },
  }).then(function (result) {
    if (result.error) {
      // Display error message to the user
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
      form.querySelector('button').disabled = false;
    } else {
      // Payment is successful, handle it on your server
      // Send payment data to your server for processing
    }
  });
});
