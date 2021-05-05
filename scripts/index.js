const modal = {
    toggle() {
        document.querySelector('.modal-overlay').classList.toggle('active');
    }
}

const transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const transactions = [{
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Criação de website',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
];

const dom = {
    transactionContainer: document.querySelector('#data-table tbody'),
    addtransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = dom.innerHTMLTransaction(transaction);

        dom.transactionContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction) {
        const cssClass = transaction.amount > 0 ? "income" : "expense";
        const amount = "";

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${cssClass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
            `
        return html;
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";
        value = Number(value) / 100;

        value = String(value).toLocaleString("pt-BR", {
            style:"currency",
            currency: "BRL"
        })

        console.log(signal + value)


    }
}

transactions.forEach(transaction => {
    dom.addtransaction(transaction);
});
