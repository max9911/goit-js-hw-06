const allList = document.querySelector('#categories')
console.log(`Number of categories: ${allList.children.length}`)

const arr = Array.from(allList.children)
arr.forEach(element => {
    const title = element.querySelector('h2').textContent
    console.log(`Category: ${title}`)
    const qty = element.querySelector('ul').children.length
    console.log(`Elements: ${qty}`)



    
});