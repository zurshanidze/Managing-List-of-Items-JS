let allPersonObj = [
    // { id:1, name: "John", sting1: "example1" }, 
    { ids: {id:1, secondId: 47}, names: {name: "John", abr: "Jn"}}, 
    { ids: {id:2, secondId: 87}, names: {name: "Sara", abr: "Sr"} },
    { ids: {id:3, secondId: 57}, names: {name: "Victoria", abr: "Vic"}},
    { ids: {id:4, secondId: 74}, names: {name: "Bruce", abr:"Brc"}},
    { ids: {id:5, secondId: 73}, names: {name: "Cristina", abr: "Cr"}}
];


let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")
let btn4 = document.getElementById("4")
const personList = document.getElementById("person-list");


let btns = [btn1, btn2, btn3, btn4]

let myEachPersonObj = [];





btns.map((button) => 
  button.addEventListener("click", () => {

      const currentPerson = allPersonObj.filter((eachPerson) => {
        return eachPerson.ids.id == button.id
    })

    console.log(allPersonObj, "allPersonObj")
    console.log(currentPerson, "currentPerson")







      currentPerson.filter(person => {
      console.log(person, "person")

            if (!myEachPersonObj.includes(person)) {
              
              myEachPersonObj.push(person)
              console.log(myEachPersonObj, "addedMyEachPersonObj")
              

                let personName = document.createElement('div');
                    personName.classList.add("person-name");
                    personName.id = person.ids.secondId;
                    personName.innerText = person.names.name;
                personList.appendChild(personName)
                        
            }
            else{
                myEachPersonObj = myEachPersonObj.filter((obj) => obj != person);
                                           
                let removedItem = [...personList.childNodes].map(item => {
                    if(item.id == person.ids.secondId){
                      return personList.removeChild(item)
                    }
                })

                console.log(removedItem, "test2")                              
            }

          })


      }))
