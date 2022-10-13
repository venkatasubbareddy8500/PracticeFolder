import { LightningElement, track } from 'lwc';

export default class SubbaWorld extends LightningElement {
    // name //undefined
    // age=30
    // fullName = "subbareddy Venkata"
    // showData = false
    // details={
    //     name:"dummy",
    //     place:"india"
    // }

    // userList =['A','B','c']

    // fullName = "subbareddy venkata rama bollapu"
    // users = ['a','b']
    // obj={name:'subba'
    // }

    //method

    // getName(){
        //perform the logic

        // fullName = "Zero to Hero"

        // title = "Aura"

        // changeHandler(event){
        //     this.title = event.target.value
        // }
        fullname ='pramod' 

  designation = 'Developer' 

  changeHandler(event){ 

     this.designation = event.target.value 

  }
   address= { 

    city:'Hyderabad', 

    state:'Telangana', 

    pin:560037 

   }  

   trackHandler(event){ 

    this.address = {...this.address, "city":event.target.value} 

   } 

   //get method

   users =["subbareddy","hemanth","kmpl"]
   num1 = 10
   num2 = 20

   get firstUser(){
         return this.users[0]

   }

   get multiple(){
      return this.num1*this.num2
   }
}