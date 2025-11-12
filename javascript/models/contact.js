window.addEventListener('load', () => {
    const contactTitel = document.getElementById('titel');
    const contactNaam = document.getElementById('naam');
    const contactEmail = document.getElementById('email');
    const contactBericht = document.getElementById('bericht');
    const contactForm = document.getElementById('verzenden');
    const contactStatus = document.getElementById('statusbericht');
    const backButton = document.getElementById('back');

    contactForm.addEventListener('click', () => {
        const titel = contactTitel.value.trim();
        const naam = contactNaam.value.trim();
        const email = contactEmail.value.trim();
        const bericht = contactBericht.value.trim();

        if (naam === '' || email === '' || bericht === '' || titel === '') {
            // alert('Vul alstublieft alle velden in voordat u het formulier verzendt.');
            contactStatus.innerHTML = '';
            contactStatus.innerHTML = '<p class="error">Vul alstublieft alle velden in voordat u het formulier verzendt.</p>';
        }
        else {
            emailjs.send("service_arlagip", "template_xmvhwmx", {
                from_title: titel,
                name: naam,
                from_email: email,
                message: bericht
            });

            contactStatus.innerHTML = '';
            contactStatus.innerHTML = '<p class="success">Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.</p>';

            contactTitel.value = '';
            contactNaam.value = '';
            contactEmail.value = '';
            contactBericht.value = '';
        }
    })

    backButton.addEventListener('click', () => {
        window.location.href = 'juwelenwinkel.html';
    })
})