var siteName = document.getElementById('siteName');
var url = document.getElementById('siteUrl');
var index = document.getElementById('index');
var button = document.getElementById('button');

   var siteArr =[]

   siteArr =JSON.parse(localStorage.getItem('websites')) || [];
   display();

function submit(){

    var site ={
        name : siteName.value,
        url : url.value 
    }

    siteArr.push(site)
    display()
    localStorage.setItem('websites', JSON.stringify(siteArr))
    siteName.value = '';
    url.value = '';
}

function display(){
    var box =""
    for(i = 0 ; i< siteArr.length ; i++){
        box += `
         <tr>
          <td>${i+1}</td>
          <td>${siteArr[i].name}</td>
          <td><button onclick ="visit(${i})" class=" visit"><i class="fa-solid fa-eye"></i> Visit</button></td>
          <td><button onclick ="deleteItem(${i})" class="delete"><i class="fa-solid fa-trash"></i> Delete</button></td> 
          </tr>
        `
    }
        document.getElementById('table').innerHTML = box

}

function deleteItem(index){
    siteArr.splice(index , 1);
    localStorage.setItem('websites', JSON.stringify(siteArr))
    display()
}
function visit(url){
    window.location.href = url.value = siteArr[url].url  ;
    localStorage.setItem('websites', JSON.stringify(siteArr))

}
