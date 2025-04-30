<<<<<<< HEAD
const tables = Array.from({ length: 30 }, (_, i) => {
    const cap = i % 3 === 0 ? 2 : 4;
    if ([1, 4, 9, 13, 18].includes(i)) {
        return {
            id: `T${i + 1}`,
            name: `Reserved ${i + 1}`,
            status: 'reserved',
            time: '8:30',
            capacity: cap
        };
    }
    return {
        id: `T${i + 1}`,
        name: 'Vacant',
        status: 'vacant',
        capacity: cap
    };
});

let selectedTable = null;

function renderTables() {
    const grid = document.getElementById('tableGrid');
    grid.innerHTML = '';

    tables.forEach((table, index) => {
        const div = document.createElement('div');
        div.className = `table ${table.status}`;
        div.onclick = () => {
            if (table.status === 'vacant') {
                openModal(index);
            } else {
                alert(`${table.name} (${table.status})${table.time ? ' at ' + table.time : ''}`);
            }
        };

        div.innerHTML = `
        <div class="table-name">${table.id}</div>
        <div class="status">
          ${table.status === 'reserved' ? `Reserved<br>${table.time}` : table.status.charAt(0).toUpperCase() + table.status.slice(1)}
        </div>
        <div class="seating-capacity">${table.capacity}</div>
      `;

        grid.appendChild(div);
    });

    updateSummary();
}

function updateSummary() {
    const reserved = tables.filter(t => t.status === 'reserved').length;
    const vacant = tables.filter(t => t.status === 'vacant').length;
    document.getElementById('availabilitySummary').innerText = `Reserved: ${reserved} | Vacant: ${vacant}`;
}

function openModal(index) {
    selectedTable = index;
    const modal = document.getElementById('reservationModal');
    const selector = document.getElementById('tableSelect');

    selector.innerHTML = '';
    tables.forEach((table, i) => {
        if (table.status === 'vacant') {
            const opt = document.createElement('option');
            opt.value = i;
            opt.text = `${table.id} (${table.capacity} people)`;
            selector.appendChild(opt);
        }
    });

    if (selector && index !== null && tables[index].status === 'vacant') {
        selector.value = index;
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('reservationModal').style.display = 'none';
    document.getElementById('resName').value = '';
    document.getElementById('resTime').value = '';
    selectedTable = null;
}

window.onclick = function (event) {
    const modal = document.getElementById('reservationModal');
    if (event.target === modal) closeModal();
};

function submitReservation() {
    const name = document.getElementById('resName').value.trim();
    const time = document.getElementById('resTime').value;
    const selector = document.getElementById('tableSelect');

    if (!name || !time || selector.value === '') {
        alert('Please fill all fields.');
        return;
    }

    const tableIndex = parseInt(selector.value);
    tables[tableIndex].name = name;
    tables[tableIndex].time = time;
    tables[tableIndex].status = 'reserved';
    renderTables();
    closeModal();
}

=======
const tables = Array.from({ length: 30 }, (_, i) => {
    const cap = i % 3 === 0 ? 2 : 4;
    if ([1, 4, 9, 13, 18].includes(i)) {
        return {
            id: `T${i + 1}`,
            name: `Reserved ${i + 1}`,
            status: 'reserved',
            time: '8:30',
            capacity: cap
        };
    }
    return {
        id: `T${i + 1}`,
        name: 'Vacant',
        status: 'vacant',
        capacity: cap
    };
});

let selectedTable = null;

function renderTables() {
    const grid = document.getElementById('tableGrid');
    grid.innerHTML = '';

    tables.forEach((table, index) => {
        const div = document.createElement('div');
        div.className = `table ${table.status}`;
        div.onclick = () => {
            if (table.status === 'vacant') {
                openModal(index);
            } else {
                alert(`${table.name} (${table.status})${table.time ? ' at ' + table.time : ''}`);
            }
        };

        div.innerHTML = `
        <div class="table-name">${table.id}</div>
        <div class="status">
          ${table.status === 'reserved' ? `Reserved<br>${table.time}` : table.status.charAt(0).toUpperCase() + table.status.slice(1)}
        </div>
        <div class="seating-capacity">${table.capacity}</div>
      `;

        grid.appendChild(div);
    });

    updateSummary();
}

function updateSummary() {
    const reserved = tables.filter(t => t.status === 'reserved').length;
    const vacant = tables.filter(t => t.status === 'vacant').length;
    document.getElementById('availabilitySummary').innerText = `Reserved: ${reserved} | Vacant: ${vacant}`;
}

function openModal(index) {
    selectedTable = index;
    const modal = document.getElementById('reservationModal');
    const selector = document.getElementById('tableSelect');

    selector.innerHTML = '';
    tables.forEach((table, i) => {
        if (table.status === 'vacant') {
            const opt = document.createElement('option');
            opt.value = i;
            opt.text = `${table.id} (${table.capacity} people)`;
            selector.appendChild(opt);
        }
    });

    if (selector && index !== null && tables[index].status === 'vacant') {
        selector.value = index;
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('reservationModal').style.display = 'none';
    document.getElementById('resName').value = '';
    document.getElementById('resTime').value = '';
    selectedTable = null;
}

window.onclick = function (event) {
    const modal = document.getElementById('reservationModal');
    if (event.target === modal) closeModal();
};

function submitReservation() {
    const name = document.getElementById('resName').value.trim();
    const time = document.getElementById('resTime').value;
    const selector = document.getElementById('tableSelect');

    if (!name || !time || selector.value === '') {
        alert('Please fill all fields.');
        return;
    }

    const tableIndex = parseInt(selector.value);
    tables[tableIndex].name = name;
    tables[tableIndex].time = time;
    tables[tableIndex].status = 'reserved';
    renderTables();
    closeModal();
}

>>>>>>> 15b02fae3e4dbf8ee2d042ec04c0a02a3b7d179b
renderTables();