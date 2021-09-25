const tombolWarna = document.getElementById('tombol-ubah-warna');

tombolWarna.onclick = function() {
    // document.body.style.backgroundColor = 'yellow';
    document.body.classList.toggle('biru-muda');
}


const tombolRandom = document.createElement('button');
const textTombol = document.createTextNode('Acak warna');
tombolRandom.appendChild(textTombol);

tombolRandom.setAttribute('type', 'button');
tombolWarna.after(tombolRandom);

tombolRandom.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})


const sMerah = document.querySelector('input[name=sliderMerah]');
const sHijau = document.querySelector('input[name=sliderHijau]');
const sBiru = document.querySelector('input[name=sliderBiru]');

sMerah.addEventListener('input', function(){
    r = sMerah.value;
    g = sHijau.value;
    b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
    r = sMerah.value;
    g = sHijau.value;
    b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    r = sMerah.value;
    g = sHijau.value;
    b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100 )'
})











