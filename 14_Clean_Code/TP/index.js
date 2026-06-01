async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrderDetails(orderId, token);

        displayOrderModal(order, token);

    } catch (error) {
        console.error('Error:', error);
    }
}

async function getOrderDetails(orderId, token) {
    const response = await fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            Authorization: token
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}

function displayOrderModal(order, token) {
    const modal = document.getElementById('orderModal');
    const detailsDiv = modal.querySelector('#orderDetails');

    clearOrderDetails(detailsDiv);

    renderOrderHeader(detailsDiv, order);
    renderOrderStatus(detailsDiv, order);

    setupCloseButton(modal);
    setupConfirmButton(modal, order, token);

    modal.style.display = 'block';
}

function clearOrderDetails(detailsDiv) {
    detailsDiv.innerHTML = '';
}

function renderOrderHeader(detailsDiv, order) {
    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;
    detailsDiv.appendChild(header);
}

function renderOrderStatus(detailsDiv, order) {
    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;
    detailsDiv.appendChild(status);
}

function setupCloseButton(modal) {
    const closeBtn = modal.querySelector('.close');

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
}

function setupConfirmButton(modal, order, token) {
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
        return;
    }

    confirmBtn.style.display = 'block';

    confirmBtn.onclick = () => {
        confirmOrder(order.id, token);
    };
}