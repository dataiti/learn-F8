const content = document.querySelector('.content ul')
const input = document.querySelector('.content ul input')
const btnremoveAll = document.querySelector('.btn-removeAll')
var tags = ['nodejs', 'reactjs']

function render() {
    const htmls = tags.map((tag, index) => {
        return `
            <li>${tag}
                <i class="uit uit-multiply" onclick="removeTag(${index})"></i>
            </li>
            `
    })
    content.innerHTML = htmls.join('')
    content.appendChild(input)
    input.focus()
} 

render()

input.addEventListener('keypress', (e) => {
    if(tags.indexOf(input.value.trim()) == -1) {
        if(e.which == '13') {
            tags.push(input.value.trim())
            render()
            input.value = ''
        }
    } else input.value = ''
})

function removeTag(index) {
    tags.splice(index, 1)
    render()
}
btnremoveAll.addEventListener('click', () => {
    tags.splice(0, tags.length)
    render()
})