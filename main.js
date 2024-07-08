let btn=document.getElementById('btn');
let inp=document.getElementById('inp');
let boxs=document.querySelectorAll('.box');
let drag=null;
btn.onclick = function(){
    if(inp.value!=''){
        boxs[0].innerHTML+=`
        <p class="itme" drggble="ture">${inp.value}</p>
        `
        inp.value='';
    }
    dragItme();
}
function dragItme(){
    let itmes=document.querySelectorAll('.itme');
    itmes.forEach(itme=>{
        itme.addEventListener('dragstart', function(){ 
        drag=itme;
        itme.style.opacity='0.5'; })
        itme.addEventListener('dragend', function(){
        drag=null;
        itme.style.opacity='1'; })

        boxs.forEach(box=>{
            box.addEventListener('dragover', function(e){
                e.preventDefault()
                this.style.background='green';
                this.style.color='#fff';

            })
            box.addEventListener('dragleave', function(){
                this.style.background='#fff';
                this.style.color='#000';
            })
            box.addEventListener('drob', function(){
                this.append(drag);
                this.style.background='#fff';
                this.style.color='#000';
            })
        })
    } )

        
    
}