let t=document.getElementById('button')
let tt=document.getElementById('container1')
let input=document.getElementById('input')
function update(){
    tt.innerHTML=""
    let arr=[]
    for(let y=0;y<localStorage.length;y++){
        let ro=localStorage.key(y);
      
     
        arr.push(JSON.parse(localStorage.getItem(ro)))
    }
        arr.map((curr)=>{
    console.log(curr.id)
            let score=0
            let div=document.createElement('div')
            div.style.display="flex"
        div.style.justifyContent="space-between"
        
        div.style.border="2px solid white"
        let div4=document.createElement('div')
        let number=document.createElement('h3')
        number.style.color="white"
        number.innerText=`${curr.id}`
        div4.append(number)
        let div0=document.createElement('div')
        div0.innerText=`${curr.information}`
        let div1=document.createElement('div')
        div1.style.width="150px"
            let text1=document.createElement('h1')
            let div2=document.createElement('div')
            let checkbox=document.createElement('input')
            let div3=document.createElement('div3')   
            let button2=document.createElement('button')
            button2.onclick=()=>{
                let parent=button2.parentElement.parentElement
                let child1=parent.firstChild
                let r=child1.innerText
                let child2=child1.nextElementSibling
                let child3=child2.nextElementSibling
                let child4=child3.nextElementSibling
                child1.innerHTML=""
              child2.innerHTML=""
              child3.innerHTML=""
              child4.innerHTML=""
     for(let u=0;u<localStorage.length;u++){
         let l=localStorage.key(u)
         if(l==r){
             localStorage.removeItem(l)
         }
     }
    }
            checkbox.type="checkbox"
            checkbox.onclick=()=>{
                score++
                if(score%2!=0){
                    text1.style.textDecoration="line-through"
                    text1.style.textDecorationColor="black"
                    text1.style.textDecorationThickness="3px"
                }
                else{
                    text1.style.textDecoration="none"
                }
            }
          text1.innerText=`${curr.description}`
          text1.style.color="white"
          text1.style.fontSize="20px"
          text1.style.wordBreak="break-word"
          button2.innerText="DELETE"
          button2.style.color="white"
          button2.style.backgroundColor="yellowgreen"
          button2.style.borderRadius="10px"
            div1.append(text1)
            // div.append(checkbox)
            div2.append(checkbox)
            div3.append(button2);
            div.append(div4)
            div.append(div1)
            div.append(div2)
            div.append(div3)
        
        tt.appendChild(div)
        })
}

let arr=[]
for(let y=0;y<localStorage.length;y++){
    let ro=localStorage.key(y);
 

    arr.push(JSON.parse(localStorage.getItem(ro)))
 
  
}
console.log(arr)
    arr.map((curr)=>{

        let score=0
        let div=document.createElement('div')
        div.style.display="flex"
    div.style.justifyContent="space-between"
    
    div.style.border="2px solid white"
    let div4=document.createElement('div')
    let number=document.createElement('h1')
    number.innerText=`${curr.id}`
    div4.append(number)
    div.append(div4)
    let div1=document.createElement('div')
    div1.style.width="150px"
        let text1=document.createElement('h1')
        let div2=document.createElement('div')
        let checkbox=document.createElement('input')
        let div3=document.createElement('div3')   
        let button2=document.createElement('button')
        button2.onclick=()=>{
           let parent=button2.parentElement.parentElement
           let child1=parent.firstChild
           let r=child1.innerText
           let child2=child1.nextElementSibling
           let child3=child2.nextElementSibling
           let child4=child3.nextElementSibling
           child1.innerHTML=""
         child2.innerHTML=""
         child3.innerHTML=""
         child4.innerHTML=""
for(let u=0;u<localStorage.length;u++){
    let l=localStorage.key(u)
    if(l==r){
        localStorage.removeItem(l)
    }
}
        }
        checkbox.type="checkbox"
        checkbox.onclick=()=>{
            score++
            if(score%2!=0){
                text1.style.textDecoration="line-through"
                text1.style.textDecorationColor="black"
                text1.style.textDecorationThickness="3px"
            }
            else{
                text1.style.textDecoration="none"
            }
        }
      text1.innerText=`${curr.description}`
      text1.style.color="white"
      text1.style.fontSize="20px"
      text1.style.wordBreak="break-word"
      button2.innerText="DELETE"
      button2.style.color="white"
      button2.style.backgroundColor="yellowgreen"
      button2.style.borderRadius="10px"
        div1.append(text1)
        // div.append(checkbox)
        div2.append(checkbox)
        div3.append(button2);
        // div.append(div4)
        div.append(div1)
        div.append(div2)
        div.append(div3)
    
    tt.appendChild(div)
    })
  


let max=0;
for(let p=0;p<localStorage.length;p++){
    let op=parseInt(localStorage.key(p))
  if(op>max){
    max=op
  }
}
// localStorage.clear()
let y=max+1;
t.onclick=()=>{
    if(input.value!=""){
   let item={
    id:y,
    description:`${input.value}`
   }
   localStorage.setItem(`${y}`,JSON.stringify(item))
   update()
    y++;
    input.value=""
}
}

