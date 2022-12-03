

let getdata=async(e)=>{
   let  url="https://server-products.onrender.com/products"

    let form=document.getElementById("form")
    e.preventDefault()

    let name=form.name.value
    let brand=form.brand.value
    let price=+form.price.value
    let image=form.image.value

    let product={
 name,
 brand,
 price,
 image,
 isbuyed:"false"


    }
    console.log(product)
    await fetch(url,{
        method:"POST",
        body:JSON.stringify(product),
        headers:{
            "Content-Type":"application/json"
        },
    })
    form.reset()
    mydata()
}
let mydata=async()=>{
    let res=await fetch(`https://server-products.onrender.com/products`)
    res=await res.json()
    console.log(res)
    append(res)
}

mydata()

let append=(data)=>{

let cont=document.getElementById("container")
cont.innerHTML=null
    data.forEach((e)=>{
        let div=document.createElement("div")
        let name=document.createElement("h2")
        name.textContent=e.name
        let brand=document.createElement("h2")
        brand.textContent=e.brand
        let price=document.createElement("p")
        price.textContent=e.price
        let image=document.createElement("img")
        image.src=e.image
        let p=document.createElement("p")
        p.textContent=e.isbuyed
    let remove=document.createElement("button")
    remove.textContent="remove"
    let toggle=document.createElement("button")
    toggle.textContent="toggle"

toggle.addEventListener("click",async()=>{
 var isbuyed=!isbuyed
 
  await fetch(`https://server-products.onrender.com/products/${e.id}`,{
      method:"PATCH",
      body:JSON.stringify(isbuyed),
      headers:{
          "Content-Type":"application/json"
      },
  })
  mydata()
  

})

    remove.addEventListener("click",async()=>{
        let res=await fetch(`https://server-products.onrender.com/products/${e.id}`,{method:"DELETE"})
        console.log(e.id)
        mydata()

    })

        div.append(image,name,brand,price,p,remove,toggle)
        cont.append(div)
    
    })

  
 
}

