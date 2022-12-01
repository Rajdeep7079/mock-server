let getdata=async(e)=>{
    let form=document.getElementById("form")
    e.preventDefault()

    let name=form.name
    let brand=form.brand
    let price=form.price
    let image=form.image

    let product={
 name:name.value,
 brand:brand.value,
 price:+price.value,
 image:image.value,


    }
    console.log(product)
let url="https://serverd.onrender.com/products"
    await fetch(url,{
        method:"POST",
        body:JSON.stringify(product),
        headers:{
            "Content-Type":"appplication/json"
        },
    })
    form.reset()
}