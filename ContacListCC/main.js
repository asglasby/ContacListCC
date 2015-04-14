var Contact = function (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

var contacts = [];
contacts.push(new Contact("Tom", "tom@gmail.com", "973-562-1234"));
contacts.push(new Contact("Jerry", "jerry@gmail.com", "302-123-4523"));
contacts.push(new Contact("Daffy", "daffy@gmail.com", "201-292-7211"));
contacts.push(new Contact("Micky", "micky@gmail.com", "443-123-4523"));
contacts.push(new Contact("Superman", "superman@gmail.com", "410-568-7211"));
contacts.push(new Contact("Spidey", "spidey@gmail.com", "803-123-4523"));

var listContacts = function () {
    document.getElementById('displayContacts').innerHTML = " ";
    for (var i = 0; i < contacts.length; i++) {
        document.getElementById('displayContacts').innerHTML += '<tr><td>' + contacts[i].name + '</td><td>' + contacts[i].email + '</td><td>' + contacts[i].phone + '</td></tr>';
    }
}


listContacts();