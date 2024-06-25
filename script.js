// JavaScript code integrated with C++ logic
const bankForm = document.getElementById('bank-form');
const transactionForm = document.getElementById('transaction-form');
const bankListContainer = document.getElementById('bank-list');
const transactionListContainer = document.getElementById('transaction-list');
const outputSection = document.getElementById('output-section');
const outputDiv = document.getElementById('output');
const submitButton = document.getElementById('submit-btn'); // Added submit button reference

let banks = [];
let transactions = [];

bankForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const numBanks = parseInt(document.getElementById('num-banks').value);
    banks = []; // Clear previous data
    bankListContainer.innerHTML = ''; // Clear previous list items
    for (let i = 0; i < numBanks; i++) {
        const bankItem = document.createElement('div');
        bankItem.className = 'bank-item';

        const bankNameInput = document.createElement('input');
        bankNameInput.type = 'text';
        bankNameInput.placeholder = 'Bank Name';
        bankNameInput.required = true;
        bankItem.appendChild(bankNameInput);

        const numTypesInput = document.createElement('input');
        numTypesInput.type = 'number';
        numTypesInput.placeholder = 'Number of Payment Modes';
        numTypesInput.required = true;
        bankItem.appendChild(numTypesInput);

        const paymentModesInput = document.createElement('input');
        paymentModesInput.type = 'text';
        paymentModesInput.placeholder = 'Payment Modes (comma separated)';
        paymentModesInput.required = true;
        bankItem.appendChild(paymentModesInput);

        bankListContainer.appendChild(bankItem);

        banks.push({
            name: '',
            numTypes: 0,
            types: new Set(),
        });
    }
});

transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const numTransactions = parseInt(document.getElementById('num-transactions').value);
    transactions = []; // Clear previous data
    transactionListContainer.innerHTML = ''; // Clear previous list items
    for (let i = 0; i < numTransactions; i++) {
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';

        const debtorInput = document.createElement('input');
        debtorInput.type = 'text';
        debtorInput.placeholder = 'Debtor Bank';
        debtorInput.required = true;
        transactionItem.appendChild(debtorInput);

        const creditorInput = document.createElement('input');
        creditorInput.type = 'text';
        creditorInput.placeholder = 'Creditor Bank';
        creditorInput.required = true;
        transactionItem.appendChild(creditorInput);

        const amountInput = document.createElement('input');
        amountInput.type = 'number';
        amountInput.placeholder = 'Amount';
        amountInput.required = true;
        transactionItem.appendChild(amountInput);

        transactionListContainer.appendChild(transactionItem);

        transactions.push({
            debtor: '',
            creditor: '',
            amount: 0,
        });
    }
});

bankForm.addEventListener('change', () => {
    banks = [];
    const bankItems = document.querySelectorAll('.bank-item');
    bankItems.forEach((item, index) => {
        const bankNameInput = item.querySelector('input[type="text"]');
        const numTypesInput = item.querySelector('input[type="number"]');
        const paymentModesInput = item.querySelector('input[type="text"]');

        banks.push({
            name: bankNameInput.value,
            numTypes: parseInt(numTypesInput.value),
            types: new Set(paymentModesInput.value.split(',').map(mode => mode.trim())),
        });
    });
});

transactionForm.addEventListener('change', () => {
    transactions = [];
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach((item, index) => {
        const debtorInput = item.querySelector('input[placeholder="Debtor Bank"]');
        const creditorInput = item.querySelector('input[placeholder="Creditor Bank"]');
        const amountInput = item.querySelector('input[placeholder="Amount"]');

        transactions.push({
            debtor: debtorInput.value,
            creditor: creditorInput.value,
            amount: parseInt(amountInput.value),
        });
    });
});

submitButton.addEventListener('click', () => {
    // Prepare data to send to server
    const bankDetails = JSON.stringify(banks);
    const transactionDetails = JSON.stringify(transactions);

    // Send data to server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'minimize_cash_flow.cpp', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if (xhr.status === 200) {
            outputDiv.textContent = xhr.responseText;
            outputSection.style.display = 'block';
        } else {
            outputDiv.textContent = 'Error: ' + xhr.statusText;
            outputSection.style.display = 'block';
        }
    };
    xhr.send(JSON.stringify({ bankDetails: banks, transactionDetails: transactions }));
});
