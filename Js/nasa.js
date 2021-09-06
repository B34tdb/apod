 let data = document.getElementById('data');
 let button = document.getElementById('btt');
 let foto =document.getElementById ('src');
 let titulo= document.getElementById('titulo');
 let texto= document.getElementById("texto")


button.addEventListener("click",function(){
  
    let result = data.value
    let Api = `https://api.nasa.gov/planetary/apod?api_key=mczn2zBZvgJ5El2at31vU3KbJsZqeEP7QBNqFHzv${result}`

    $.ajax({
        url: Api,
        method: 'GET',
        success: function(result){
             newResult = result
            foto.scr = newResult.url
            titulo.innerText = newResult.title
            texto.innerHTML = newResult.explanation
           
        }
    })
})  



