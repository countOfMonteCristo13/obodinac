// MALO MENU DUGME




let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('#menu-bar');
console.log(menuBtn);

const showMenuBar = () =>{

	if (menuBar.style.visibility === 'visible') {
		menuBar.style.visibility = 'hidden';
	}else{
		menuBar.style.visibility = 'visible';
	}
}

 const hideMenuBar = () =>{
 	let sirinaProzora = window.innerWidth;
 	if (sirinaProzora > 769) {
		menuBar.style.visibility = 'hidden';
	}
	console.log(sirinaProzora);
 }

menuBtn.addEventListener('click',showMenuBar);
window.addEventListener('resize',hideMenuBar);

// NASA PONUDA DROP MENU

let nasaPonudaDugme = document.querySelector('#nasa-ponuda-nav');

console.log(nasaPonudaDugme);

// FUNKCIJA STISKANJA DUGMETA

const dropPonuda = () => {

	const linkovi = document.getElementsByClassName('link-nav');
	let ponudaOpcije = document.querySelector("#nasa-ponuda-opcije");
	let navLista = document.querySelector('#nav-lista');
	if (ponudaOpcije.style.display === 'flex') {
		ponudaOpcije.style.display = 'none';
		navLista.style.justifyContent = 'space-between';
		for(let i =0; i<linkovi.length;i++){
				linkovi[i].style.display = 'flex';
		}
	}else{
		ponudaOpcije.style.display = 'flex';
		for(let i =0; i<linkovi.length;i++){
			if (i!==2) {
				linkovi[i].style.display = 'none';
			}
		}

		navLista.style.justifyContent = 'center';
		// linkovi.forEach(item => {
		// 	item.style.display = 'none';
		// 	console.log(item);
		// });

	}

}

nasaPonudaDugme.addEventListener('click',dropPonuda);

