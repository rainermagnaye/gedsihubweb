function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(content => content.style.display = 'none');
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

function toggleTable(tableId) {
    const tables = document.querySelectorAll('.activity-table');
    tables.forEach(table => table.style.display = 'none');

    const selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.style.display = 'block';
    }
}

// Modal functions
function showModal() {
    document.getElementById('activityModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('activityModal').style.display = 'none';
}

document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission logic here
    alert('Activity saved successfully!');
    closeModal();
});

// Open the first tab by default
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click();
});
