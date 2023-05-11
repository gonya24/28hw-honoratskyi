function table(listDelivery, listProduct) {
    const tableProduct = document.createElement('table')
    const titleProduct = document.createElement('h2')
    titleProduct.innerHTML = 'Інформація про товар';
    titleProduct.style.textAlign = 'center'
    const titleDelivery = document.createElement('h2')
    titleDelivery.innerHTML = 'Інформація про доставку';
    titleDelivery.style.textAlign = 'center'
    const tableDelivery = document.createElement('table')
    tableProduct.classList.add('table-style')
    tableDelivery.classList.add('table-style')
    for (let i = 0; i < listProduct.length; i++) {
        const tr = document.createElement('tr');
        for (let j in listProduct[i]) {
            const tdTitle = document.createElement('td')
            const tdData = document.createElement('td')
            tdTitle.innerHTML = `${j}`;
            tdData.innerHTML = `${(listProduct[i])[j]}`
            tr.appendChild(tdTitle);
            tr.appendChild(tdData);
        }
        tableProduct.appendChild(tr);
    }


    for (let i = 0; i < listDelivery.length; i++) {
        const tr = document.createElement('tr');
        for (let j in listDelivery[i]) {
            if ((listDelivery[i])[j] == '') {
                continue;
            }
            const tdTitle = document.createElement('td')
            const tdData = document.createElement('td')
            tdTitle.innerHTML = `${j}`;
            tdData.innerHTML = `${(listDelivery[i])[j]}`
            tr.appendChild(tdTitle);
            tr.appendChild(tdData);
        }
        tableDelivery.appendChild(tr);
    }
    document.forms.orderForm.style.display = "none"
    document.forms.orderForm.insertAdjacentElement('afterend', titleProduct)
    titleProduct.insertAdjacentElement('afterend', tableProduct);
    tableProduct.insertAdjacentElement('afterend', titleDelivery)
    titleDelivery.insertAdjacentElement('afterend', tableDelivery)

}