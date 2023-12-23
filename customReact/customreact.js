function customRender(reactElement, container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }
}


const reactElement = {
    type : 'a',
    props : {
            href: 'http://google.com',
            target:'_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
