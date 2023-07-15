document.getElementById("btnRedirect").addEventListener("click", function() {

    const newP = document.createElement('p');
    newP.innerText = 'Sabia que dirias que si, vistase guapa que vamos a loquear';
    document.getElementById('action2').appendChild(newP)

    const newh2 = document.createElement('h5');
    newh2.innerText = 'Te dedico esta canciocita \n Te amo guapa'
    document.getElementById('action').appendChild(newh2)

    const newimg = document.createElement('img');
    newimg.src = 'https://i.pinimg.com/564x/7c/e7/3c/7ce73c4e4e8171e4647ce1441aa23a8b.jpg'
    document.querySelectorAll('.imague')[1].appendChild(newimg)


    const newbtn = document.createElement('button');
    newbtn.innerText = 'Ir a la musica <3'
    newbtn.addEventListener('click',function(){
        window.open("https://www.youtube.com/watch?v=trUZwHvMflU", '_blank');
    })
    document.getElementById('action').appendChild(newbtn)
    document.getElementById("btnRedirect").disabled = true
    document.getElementById('btnRedirect').innerText = 'Es una cita :D'
});
