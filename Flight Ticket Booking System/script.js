// Working with function

// First Class Price

document.getElementById('first-class-plus').addEventListener('click', function () {
    handleTicketPrice('first-class', true);
})

document.getElementById('first-class-minus').addEventListener('click', function () {
    handleTicketPrice('first-class', false);
})

//Economy Class Price

document.getElementById('economy-class-plus').addEventListener('click', function () {
    handleTicketPrice('economy-class', true);
})

document.getElementById('economy-class-minus').addEventListener('click', function () {
    handleTicketPrice('economy-class', false);
})

// Common function for both Class ticket

function handleTicketPrice(ticket, isIncrease) {
    let currentTicketNumber = document.getElementById(ticket + '-ticket-number').value;
    currentTicketNumber = parseInt(currentTicketNumber);

    let newTicketNumber = currentTicketNumber;

    if (isIncrease == true) {

        newTicketNumber = currentTicketNumber + 1;
    }

    if (isIncrease == false && currentTicketNumber > 0) {
        newTicketNumber = currentTicketNumber - 1;
    }

    document.getElementById(ticket + '-ticket-number').value = newTicketNumber;

    let ticketPrice = 0;

    if (ticket == 'first-class') {
        ticketPrice = newTicketNumber * 150;
    } else if (ticket == 'economy-class') {
        ticketPrice = newTicketNumber * 100;
    }

    console.log(ticketPrice);
    calculateTotal();
}

//Total Price
function calculateTotal() {
    const firstClassTicket = document.getElementById('first-class-ticket-number');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);

    const economyClassTicket = document.getElementById('economy-class-ticket-number');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);

    const totalTicketPrice = firstClassTicketNumber * 150 + economyClassTicketNumber * 100;
    document.getElementById('price-subtotal').innerText = totalTicketPrice;

    const totalVat = 0.1 * totalTicketPrice;
    document.getElementById('price-vat').innerText = totalVat;

    const priceTotal = totalTicketPrice + totalVat;
    document.getElementById('price-total').innerText = priceTotal;

    document.getElementById('confirmation-price-total').value = priceTotal;

}

// Get the departure date input element
const departureDateInput = document.getElementById('departure-date');

// Add event listener for departure date change
departureDateInput.addEventListener('change', function () {
    // Get the selected departure date value
    const departureDateValue = new Date(this.value);

    // Update the minimum selectable date for return date to be after the selected departure date
    const returnDateInput = document.getElementById('return-date');
    returnDateInput.min = formatDate(departureDateValue);
});

// Function to format date in YYYY-MM-DD format
function formatDate(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}

// Set the minimum selectable date for departure date to today's date
const today = new Date();
const minDepartureDate = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

// Set the minimum selectable date for departure date input field
document.getElementById('departure-date').min = minDepartureDate;


// Confirmation form

document.getElementById('book-now-button').addEventListener('click', function () {

    const firstClassTicket = document.getElementById('first-class-ticket-number');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);

    const economyClassTicket = document.getElementById('economy-class-ticket-number');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);

    const depatureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;

    const flyingFrom = document.getElementById('flying-from').value;
    const flyingTo = document.getElementById('flying-to').value

    if ((firstClassTicketNumber > 0 || economyClassTicketNumber > 0) && (depatureDate.length > 0 && returnDate.length > 0) && (flyingFrom.length >0 && flyingTo.length>0)) {

        document.getElementById('booking-input').style.display = 'none';
        document.getElementById('booking-confirmation').style.display = 'block';
        document.getElementById('confirmation-flying-from').value = flyingFrom;
        document.getElementById('confirmation-flying-to').value = flyingTo;
        document.getElementById('confirmation-departure').value = depatureDate;
        document.getElementById('confirmation-return').value = returnDate;

    } else {

        alert('Please provide travel location, date and ticket number');

    }


})

//End - Thank you