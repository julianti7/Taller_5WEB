

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttps = new XMLHttpRequest();
    xhttps.open('GET', 'users.json', true);
    xhttps.send();
    xhttps.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            
            console.log(datos);

            let res = document.querySelector('#respuesta');
            res.innerHTML = '';

            for(let item of datos){

                res.innerHTML += `

                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                    </tr>
                
                `
            }

        }
    }
};