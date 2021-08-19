const fs = require('fs');

//read
fs.readFile('employees.json','utf8',(err,data)=>
 {if(err)console.log(err)
     console.log(data)
     console.log("dosya okundu")
 })

 fs.writeFile('employees.json',name="değiştirfln",'utf8',(err)=>
{
 if(err)console.log(err)
 console.log("dosya başarılı bir şekilde oluşturuldu")
})




// //delete
// fs.rmdir('Ödev 4-FS Modül Çalışması',{recursive:true},(err)=>{
//     if(err)console.log(err)
//     console.log('Klasörler silindi')
// })
