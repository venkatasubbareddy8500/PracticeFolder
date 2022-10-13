import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {

     bookList = ["Apex","LWC","Admin","Integration","Deployment","SalesforceDevops"]

     ceoList = [
        {
            id: 1,
            company: "Google",
            name:"Sundar pichai"
        },
        {
            id: 2,
            company: "Apple Inc",
            name:"tim Cook"
        },
        {
            id: 2,
            company: "Apple Inc",
            name:"tim Cook"
        },
        {
            id: 3,
            company: "Facebook",
            name:"Mark Zuckerburg"
        },
        {
            id: 4,
            company: "Amazon",
            name:"Jeff Bezos"
        }
     ]
}