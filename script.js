const open = document.getElementById("open")
const close = document.getElementById('close')
const container = document.querySelector(".container")


open.addEventListener("click",()=>container.classList.add("show-nav"))
close.addEventListener("click",()=>container.classList.remove("show-nav"))


const reveal = document.getElementById('select-box1')
const reveal2 = document.getElementById('select-box2')
const reveal3 = document.getElementById('select-box3')

const hometab = document.querySelector('#hometab')
const bgtab = document.querySelector('#bgtab')
const cntab = document.querySelector('#cntab')

reveal.addEventListener("click",()=> {
	hometab.style.display = 'block';
	bgtab.style.display = 'none';
	cntab.style.display = 'none';
});

reveal2.addEventListener("click",()=> {
	hometab.style.display = 'none';
	bgtab.style.display = 'block';
	cntab.style.display = 'none';
});
reveal3.addEventListener("click",()=> {
	hometab.style.display = 'none';
	bgtab.style.display = 'none';
	cntab.style.display = 'block';
});
