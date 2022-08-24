
const tabel_list =document.querySelector('.tabel_list');

const sohrabi =fetch("https://jsonplaceholder.typicode.com/users").then(ret => ret.json()).then((sohrabi)=>{
    sohrabi.forEach((sohrabi,index) => {
        tabel_list.innerHTML +=(`<tr>
                <td>${sohrabi.id}</td>
                <td>${sohrabi.name}</td>
                <td>${sohrabi.username}</td>
                <td>${sohrabi.email}</td>
        `)
    });
})