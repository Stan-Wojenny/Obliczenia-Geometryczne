const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const c1 = document.getElementById('c1');
const pp = document.getElementById('opt1-PP');
const obj = document.getElementById('opt1-OBJ');
const pp1 = document.getElementById('opt2-PP');
const obj1 = document.getElementById('opt2-OBJ');
const prze = document.getElementById('opt1-PRZE');
const alertMessage = document.getElementById('alert');
const alertMessage2 = document.getElementById('alert2');
const alertMessage3 = document.getElementById('alert3');
const Prostall = document.getElementById('opt1-content');
const Stozall = document.getElementById('opt2-content');
const all = document.getElementById('all');
const all2 = document.getElementById('all2');
const info = document.querySelector('.info');
const butt1 = document.querySelector('.opt1');
const butt2 = document.querySelector('.opt2');
const anim1 = document.getElementById('anim1');
const static1 = document.getElementById('static1');
const anim2 = document.getElementById('anim2');
const static2 = document.getElementById('static2');
//Prostopadłościan
function ProstPolePowierzchni(x, y, z) {
    return 2 * (x * y + x * z + y * z);
};

function ProstObjetosc(x, y, z) {
    return x * y * z;
};

function ProstPrzekatna(x, y, z) {
    return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
};

function ProstOutPut() {
    const aValue = parseFloat(a.value);
    const bValue = parseFloat(b.value);
    const cValue = parseFloat(c.value);

    if( aValue>0 && bValue>0 && cValue>0){
        let ProstPP = ProstPolePowierzchni(aValue, bValue, cValue);
        let ProstOBJ = ProstObjetosc(aValue, bValue, cValue);
        let ProstPRZE = ProstPrzekatna(aValue, bValue, cValue);

        pp.innerText = ProstPP;
        obj.innerText = ProstOBJ;
        prze.innerText = ProstPRZE.toFixed(3);
    }else if(aValue<=0 || bValue<=0 || cValue<=0){
        alertMessage2.style.display="block";
         all.style.pointerEvents="none"
    }else{
        alertMessage.style.display="block";
        all.style.pointerEvents="none"
    }
};

//Stożek
function StozPolePowierzchni(x, z) {
    return Math.PI * x * (x * z);
};

function StozObjetosc(x, y) {
    return (Math.PI * x ** 2 * y) /3
};


function StozOutPut() {
    const a1Value = parseFloat(a1.value);
    const b1Value = parseFloat(b1.value);
    const c1Value = parseFloat(c1.value);

    if( a1Value>0 && b1Value>0 && c1Value>0){
        if (c1Value < b1Value) {
            alertMessage3.style.display = "block";
            all.style.pointerEvents="none"
        }else{
            let StozPP = StozPolePowierzchni(a1Value, c1Value);
            let StozOBJ = StozObjetosc(a1Value, b1Value);
    
            pp1.innerText = StozPP.toFixed(3);
            obj1.innerText = StozOBJ.toFixed(3);
        }
       
    }else if(a1Value<=0 || b1Value<=0 || c1Value<=0){
        alertMessage2.style.display="block";
        all.style.pointerEvents="none"
    }
    else{
        alertMessage.style.display="block";
        all.style.pointerEvents="none"
    }
};


function StartObliczenia() {
    alertMessage.style.display = "none";
    alertMessage2.style.display = "none";
    alertMessage3.style.display = "none";
    all.style.pointerEvents="auto"
};

function clearInputs() {
    a.value = '';
    b.value = '';
    c.value = '';
    a1.value = '';
    b1.value = '';
    c1.value = '';
    pp.innerText = '';
    obj.innerText = '';
    prze.innerText = '';
    pp1.innerText = '';
    obj1.innerText = '';
    
};
function resetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = '';
};
function Show1() {
    Prostall.style.display = "flex";
    Stozall.style.display = "none";
    all2.style.background = "linear-gradient(to bottom right, #8093ffa2, #ffffff)";
    resetAnimation(all);
    all.style.animationName = "all_anim";
    info.style.display="none";
    butt2.style.scale="0.9";
    butt1.style.scale="1";

};

function Show2() {
    Stozall.style.display = "flex";
    Prostall.style.display = "none";
    all2.style.background = "linear-gradient(to bottom left, #ff67b880, #ffffff)";
    resetAnimation(all);
    all.style.animationName = "all_anim";
    info.style.display="none";
    butt2.style.scale="1";
    butt1.style.scale="0.9";
};

butt1.addEventListener("mouseover", () =>{
    anim1.style.display="block"
    static1.style.display="none"
});
butt1.addEventListener("mouseout", () =>{
    anim1.style.display="none"
    static1.style.display="block"
});
butt2.addEventListener("mouseover", () =>{
    anim2.style.display="block"
    static2.style.display="none"
});
butt2.addEventListener("mouseout", () =>{
    anim2.style.display="none"
    static2.style.display="block"
});
