document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
})

const fetchData = async () => {

    try {
        const res = await fetch('api.json')
        const data = await res.json()
        pintarProductos(data)
    } catch (error) {
        console.log(error)
    }
}

const contenedorProductos=document.getElementById('contenedor-productos')
const pintarProductos= (data) =>{
const template = document.querySelector('#template-productos').content
const fragment = document.createDocumentFragment()
console.log(template)
data.forEach(producto => {
template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
template.querySelector('h5').textContent = producto.title
template.querySelector('span').textContent = producto.precio
template.querySelector('button').dataset.id = producto.id



const clone = template.cloneNode(true)
fragment.appendChild(clone)
});
contenedorProductos.appendChild(fragment)

}
