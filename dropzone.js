function addRowTable(firstName, lastName, email, phone) {

    const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = phone;
}



// Dropzone.js

Dropzone.options.myDropzone = {
    url: "#", // dosyalari sunucuya yukleme kapali
    autoProcessQueue: false, // avtomotik yukleme devre disi
    clickable: true, // dropzone alani tiklanabilir
    addRemoveLinks: true,
    init: function () {

        console.log("dropzone init");
        this.on('addedfile', (file) => {

            // doya yuklendiginde yapilacak islemler
            const reader = new FileReader();
            reader.onload = (e) => {

                const content = e.target.result;
                const lines = content.split('\n');
                lines.forEach(line => {
                    const [firstName, lastName, email, phone] = line.split(",");
                    addRowTable(firstName, lastName, email, phone);
                    // console.log(line);
                });

            }

            reader.readAsText(file);

            console.log('addedfile event');
        })
    }
}
