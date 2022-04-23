let cont = document.querySelector('.container')
let form = document.forms.adder
let inputs = form.querySelectorAll('input')
let main = document.querySelector('.main')
let find = document.querySelector('.finder')
let head = document.querySelector('.heading')

main.classList.add('main')

let tasks = [
    
]

form.onsubmit = (event) => {
    event.preventDefault()

    submit()
}

function submit() {
    let user = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    tasks.push(user);
    reload(tasks)
}

reload(tasks)



function reload(arr) {
    main.innerHTML = ""
    
    for(let item of arr) {
        let div = document.createElement('div')
        let h4 = document.createElement('h4')
        let span = document.createElement('span')
        let remove = document.createElement('img')
        let left = document.createElement('div')
        let right = document.createElement('div')
        let isDone = document.createElement('img')

        isDone.classList.add('nope')
        remove.classList.add('remove')
        isDone.setAttribute('src', './assets/svg/unactive.svg')
        left.classList.add('info')
        right.classList.add('actions')
        remove.setAttribute('src', './assets/svg/Group 14.svg')
        div.classList.add('box')
        div.setAttribute('id', item.id)
        h4.innerHTML = item.task
        span.innerHTML = item.time

        main.append(div)
        find.append(head)
        left.append(h4, span)
        right.append(remove, isDone)
        div.append(left, right)
        cont.append(find, main)

        remove.onclick = (e) => {
            let id = e.target.parentNode.id

            let idx = tasks.findIndex(item => item.id == id)

            tasks.splice(idx, 1)

            reload(tasks)
        }
        isDone.onclick = () => {
            if (isDone.classList.contains('nope')) {
                h4.classList.add('done')
                isDone.classList.add('done')
                h4.classList.remove('nope')
                isDone.classList.remove('nope')
            } else if (isDone.classList.contains('done')) {
                h4.classList.add('nope')
                isDone.classList.add('nope')
                h4.classList.remove('done')
                isDone.classList.remove('done')
            }
        }
    }
}