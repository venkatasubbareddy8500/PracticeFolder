import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ["john", "smith", "nik", "mike"]
    fetchDetailsHandler(){
        const elem = this.template.querySelector('h1')
        const userElements = this.tempalte.querySelectorAll('.name')
        console.log(elem.innerText)
        Array.form(userElements).forEach(item=>{
            console.log(item.innerText)
        })

    }
}