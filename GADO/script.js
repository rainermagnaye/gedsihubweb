const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipient = document.getElementById('recipient').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (recipient && subject && message) {
            const messageItem = document.createElement('div');
            messageItem.classList.add('message');
            messageItem.innerHTML = `<strong>To:</strong> ${recipient}<br>
                                     <strong>Subject:</strong> ${subject}<br>
                                     <p>${message}</p>`;
            messageList.appendChild(messageItem);

            messageForm.reset();
            alert('Message sent!');
        } else {
            alert('All fields are required!');
        }
    });
});
