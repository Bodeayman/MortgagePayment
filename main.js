let button1 = document.querySelector(".butCon input");
let form = document.querySelector(".form");
let photo1 = document.querySelector(".photo");
let validation1 = document.querySelector(".amountMor input");
let validation2 = document.querySelector(".term input");
let validation3 = document.querySelector(".rate input");
let span1 = document.querySelectorAll("input[type='text'] ~ span");

let valids = [validation1, validation2, validation3];


document.forms[0].onsubmit = function (e) {
    let emptyForm = validation1.value === "" || validation2.value === "" || validation3.value === "";
    let invalidForm = isNaN(validation1.value) || isNaN(validation2.value) || isNaN(validation3.value);
    if (emptyForm || invalidForm) {

        for (let i = 0; i < 3; i++) {
            valids[i].style.borderColor = "red";
            span1[i].innerHTML = "Invalid Field";
            span1[i].style.cssText = "font-weight:bold;color:red;margin-top:10px;";

        }
        let timer = setTimeout(function () {
            for (let i = 0; i < 3; i++) {
                valids[i].style.borderColor = "hsl(202, 55%, 16%)";
                span1[i].innerHTML = "";
            }
        }, 3000);

        e.preventDefault();

    }


    else {
        e.preventDefault();
        for (let i = 0; i < photo1.children.length; i++) {
            photo1.children[i].style.display = "none";
        }
        let loadingballs = document.createElement("div");
        loadingballs.className = "waiting";
        loadingballs.style.cssText = "width:50px;height:50px;border-radius:40px;text-align:center;position:relative;left:43%;bottom:45%;background-color:hsl(202, 55%, 16%);border-top:2px solid hsl(203, 41%, 72%);"
        loadingballs.style.animationName = "loading";
        loadingballs.style.animationDuration = "0.3s";
        loadingballs.style.animationTimingFunction = "linear";
        loadingballs.style.animationIterationCount = "10";
        // fixed this iteration and it will be good
        photo1.appendChild(loadingballs);
        setTimeout(function () {
            loadingballs.style.display = "none";
            let result = document.createElement("div");
            let headRes = document.createElement("h2");
            let pResT = document.createTextNode("Your results that shown below is based on the results that your provided , To adjust the information please edit the form and click Calculate Repayments agains");
            let headResT = document.createTextNode("Your results");
            let pRes = document.createElement("p");
            result.className = "result";
            pRes.style.cssText = "font-weight:bold;font-size:15px;word-spacing:5px;"


            pRes.appendChild(pResT);
            headRes.appendChild(headResT);
            result.appendChild(headRes);
            result.appendChild(pRes);
            photo1.appendChild(result);
            let priceCon = document.createElement("div");
            let priceHeader = document.createElement("h3");
            let priceHeaderT = document.createTextNode("Your monthly Paid");
            let priceP = document.createElement("p");
            let priceT = document.createTextNode(CalculateMonthly(validation1, validation2, validation3));

            let paymentFather = document.createElement("div");
            paymentFather.className = "PayF";
            paymentFather.style.cssText = "border-top:2px solid #d7da2f; background-color: hsl(202, 49%, 10%) ;display:flex;justify-content:flex-start;flex-direction:column;";
            priceP.appendChild(priceT);
            priceHeader.appendChild(priceHeaderT);
            priceCon.appendChild(priceHeader);
            priceCon.appendChild(priceP);
            priceP.style.cssText = "color:#d7da2f; font-weight:bold; font-size:2.7em;";
            priceCon.style.cssText = "color:white;display:flex;flex-direction:column;justify-content: flex-start;";
            priceCon.className = "priceCon";
            paymentFather.appendChild(priceCon);
            ////////////////////////////////////////////////////
            let hr = document.createElement("hr");
            hr.setAttribute("color", "white");
            hr.setAttribute("width", "80%");
            hr.setAttribute("size", "0.1");
            paymentFather.appendChild(hr);
            let priceCon2 = document.createElement("div");
            let priceHeader2 = document.createElement("h3");
            let priceHeaderT2 = document.createTextNode("Total you will pay over the term");
            let priceP2 = document.createElement("p");
            let priceT2 = document.createTextNode(CalculateMonthly(validation1, validation2, validation3));

            priceP2.appendChild(priceT2);
            priceHeader2.appendChild(priceHeaderT2);
            priceCon2.appendChild(priceHeader2);
            priceCon2.appendChild(priceP2);
            priceCon2.style.cssText = "color:white;"
            priceCon2.className = "priceCon2";
            paymentFather.appendChild(priceCon2);






            //The appending of the payment Father should be the last step
            photo1.appendChild(paymentFather);



        }, 3000)
        // revise this after finsihing the code and make the time 3000 ms again
    }
}
let documentRe = document.querySelector(".re");
let documentin = document.querySelector(".in");
let radioCheck2 = document.querySelector(".in input[id='in']");
let radioCheck = document.querySelector(".re input[id='re']");
console.log(radioCheck);
radioCheck.onclick = function () {
    documentin.style.backgroundColor = "white";
    documentRe.style.backgroundColor = "#d7da2f";
    console.log(documentRe.backgroundColor);

}
radioCheck2.onclick = function () {
    documentRe.style.backgroundColor = "white";

    documentin.style.backgroundColor = "#d7da2f";
    console.log(documentin.backgroundColor);

}

function CalculateMonthly(v1, v2, v3) {
    let num = (v1.value / 12 / v2.value) + ((v1.value * v3.value * 0.01) / 12 / v2.value);
    let n = num.toFixed(3);
    return n;
}
let MFA = document.querySelector(".amountMor input[type='text']");
MFA.onmousemove = function () {

    MFA.style.border = "2px solid black";
}
MFA.onmouseout = function () {

    MFA.style.border = "2px solid hsl(200, 24%, 40%)";
}
// Mortgage Field Amount