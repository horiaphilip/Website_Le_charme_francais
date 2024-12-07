document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.image img').forEach(img => {
        img.style.border = '2px solid #333';
    });

    const gallery = document.querySelector('.gallery');
    const newSection = document.createElement('section');
    newSection.id = 'dynamicSection';
    newSection.innerHTML = '<h2>Devino patiser francez!</h2><p>Alege opțiunea 1 și selecteaza produsele pe care să le ștergi pentru a rămâne doar cele 3 preparate preferate sau alege opțiunea 2 pentru a afla cel mai cunoscut preparat specific francez!</p>';
    gallery.parentNode.insertBefore(newSection, gallery.nextSibling);

    const button = document.createElement('button');
    button.textContent = 'Sterge poza';
    document.body.appendChild(button); 

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = 'Scrie...';
    document.body.appendChild(inputText); 

    const select = document.createElement('select');
    const option1 = document.createElement('option');
    option1.value = 'option1';
    option1.textContent = 'Option 1';
    const option2 = document.createElement('option');
    option2.value = 'option2';
    option2.textContent = 'Option 2';
    select.appendChild(option1);
    select.appendChild(option2);
    document.body.appendChild(select);

    select.addEventListener('change', function() {
        if (select.value === 'option1') {
            inputText.style.display = 'inline-block'; 
            button.style.display = 'inline-block'; 
        } else {
            inputText.style.display = 'none'; 
            button.style.display = 'none'; 
            const images = document.querySelectorAll('.image');
            let index = images.length - 1;
            const interval = setInterval(function() {
                if (index >= 1) {
                    images[index].remove();
                    index--;
                } else {
                    clearInterval(interval);
                }
            }, 1000);
        }
    });

    button.addEventListener('click', function() {
        const searchTerm = inputText.value.trim().toLowerCase();
        const images = document.querySelectorAll('.image img');
        images.forEach(image => {
            const altText = image.alt.trim().toLowerCase();
            if (altText === searchTerm) {
                image.parentElement.remove(); 
            }
        });
    });

    gallery.addEventListener('mouseover', function() {
        gallery.style.backgroundColor = 'rgb(208, 195, 182)';
    });
    gallery.addEventListener('mouseout', function() {
        gallery.style.backgroundColor = 'rgb(228, 215, 202)';
    });

    const header = document.querySelector('header');
    header.style.backgroundColor = '#ffdebe';

    inputText.addEventListener('input', function() {
        if (inputText.value.length > 18) {
            alert('Ati depasit limita admisa');
        }
    });

    document.body.appendChild(inputText); 

 
    const images = [
        'croissant.jpg',
        'baguette.jpg',
        'pain-au-chocolat.jpg',
        'macarons.jpg',
        'eclair.jpg',
        'tartine.jpg'
    ];

    localStorage.setItem('images', JSON.stringify(images));

    const storedImages = JSON.parse(localStorage.getItem('images'));
    console.log('Stored images:', storedImages);
});


setTimeout(function() {
    const message = document.getElementById('message');
    message.textContent = 'Bon Appetit!';
    message.style.display = 'block';
}, 3000); 