
// 550 taka, 8 seats left, seat 0, tola price, grand total, parent-div, seat

const seatPerPriceElement = document.getElementById("seat-per-price");
const seatPerPriceElementText = seatPerPriceElement.innerText;
const seatPrice = parseInt(seatPerPriceElementText);

const totalSeatElement = document.getElementById("total-seat");
const totalSeatElementText = totalSeatElement.innerText;
let totalSeat = parseInt(totalSeatElementText);

const seatCountElement = document.getElementById("seat-count");
const seatCountElementText = seatCountElement.innerText;
let seatCount = parseInt(seatCountElementText);

const totalPriceElement = document.getElementById("total-price");
const totalPriceElementText = totalPriceElement.innerText;
let totalPrice = parseInt(totalPriceElementText);

const grandTotalPriceElement = document.getElementById("grand-total");
const grandTotalPriceElementText =  grandTotalPriceElement.innerText;
const grandTotal = parseInt(grandTotalPriceElementText);

const parentDiv = document.getElementById("parent-div");

const seats = document.getElementsByClassName("seat");

const nextBtn = document.getElementById("next-btn");

let count = 1;

for(const seat of seats){

    seat.addEventListener("click", function(){
        // this code part of total seat theke ak komano
        if(seatCount === 4){
            count = 0;
            alert("You already bought 4 tickets")
            return;
            
        }

       

        //1 - seat er color and background change kora
        this.style.backgroundColor = "green";
        this.style.color = "white";

        // 2 - total seat theke ak komano
        // if(seatCount === 4){
        //     count = 0;
        //     return;
            
        // }
        totalSeat = totalSeat - count;
        totalSeatElement.innerText = totalSeat;

        // 3 - seat count ak barano

        seatCount = seatCount + count;
        seatCountElement.innerText = seatCount;

        // this code remove disbled attribute from next button
         if(seatCount > 0){
                nextBtn.removeAttribute("disabled", true);
            }

        // 4 - create Element and push start
        const singleDiv = document.createElement("div");
        singleDiv.classList.add("flex", "justify-between", "py-3");
    
        const p = document.createElement("p");
        p.innerText = this.innerText;
        singleDiv.appendChild(p);
    
        const p2 = document.createElement("p");
        p2.innerText = "Economy";
        singleDiv.appendChild(p2);
    
        const p3 = document.createElement("p");
        p3.innerText = seatPrice;
        singleDiv.appendChild(p3);
    
        parentDiv.appendChild(singleDiv);
        // 4 - create Element and push end

        // Total price update
        let singleSeatPrice = seatPrice * seatCount;
        totalPrice = singleSeatPrice;
        // totalPrice = totalPrice + seatPrice;
        totalPriceElement.innerText = totalPrice ;

        // Grand total price update
        grandTotalPriceElement.innerText = totalPrice;   

    })


}
// ----------------------------------------------
const couponBox = document.getElementById("coupon-box");
const applyBtn = document.getElementById("apply");

applyBtn.addEventListener("click", function(){
    const coupon = couponBox.value.toUpperCase();
    if(seatCount === 4 && coupon === "NEW15"){
        const updatedGrandTotalPrice = totalPrice - (totalPrice * 15 / 100);
        grandTotalPriceElement.innerText = updatedGrandTotalPrice;
        couponBox.style.display = "none";
        applyBtn.style.display = "none";

    }   
    else if(seatCount === 4 && coupon === "COUPLE 20"){
        const updatedGrandTotalPrice = totalPrice - (totalPrice * 20 / 100);
        grandTotalPriceElement.innerText = updatedGrandTotalPrice;
        couponBox.style.display = "none";
        applyBtn.style.display = "none";

    }
})


