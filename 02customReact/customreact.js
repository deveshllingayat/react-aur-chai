
function customRender(element,container){
const domElement = document.createElement(element.type);
domElement.innerHTML = element.children;
// domElement.setAttribute('href',element.props.href);
// domElement.setAttribute('target',element.props.target);
//making above code modular
for (const prop in element.props){
    if(prop==="children") continue;

    domElement.setAttribute(prop,element.props[prop])
}
container.appendChild(domElement);
}
//jsx component is parsed into a tree like below in react and then passed to rendering environment
//react fiber is a algorithm that is used to update virtual dom, it can abort,pause,assign priority or reuse the work 
//it increasess suitability for areas like animation,gestures and layout
//its main feature is to do only main main updation in the tree
//hydration means after rendering web layout when JS is injected then this process is known as hydration which enables functionality of animation,buttons,etc
//basically reconciliation is an algo. that decides which part needs to be changed in the tree by diff. between two trees and it as usually called as virtual DOM
//fiber is a ground up rewrite of reconciler

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children:"click me to visit google"
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);
