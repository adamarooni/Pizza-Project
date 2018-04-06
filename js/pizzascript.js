function getReceipt() {
    var text = "<strong>Your Order:</strong><br>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
        }
    }    
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    text = text+selectedSize+" $"+ sizeTotal + ".00 <br>";
    runningTotal = sizeTotal
    console.log('runningTotal: ', runningTotal);
    
    [runningTotal, text] = getMeat(runningTotal, text); 
    console.log('runningTotal: ', runningTotal);
    
    [runningTotal, text] = getVeg(runningTotal, text);

    [runningTotal, text] = getCheese(runningTotal, text);
    console.log('text', text);

    [runningTotal, text] = getCrust(runningTotal, text);
  
    [runningTotal, text] = getSauce(runningTotal, text);
    console.log('runningTotal: ', runningTotal)
}

function getMeat(runningTotal, text) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meat");
    var counter = 0;
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            var meatCost = 0;
            if (counter > 0) {
                meatCost = 1;
                counter++;
          } else {
            counter++; 
          }
          text = text+meatArray[j].value + " $" + meatCost + ".00 <br>";
        }
    }
    var meatCount = selectedMeat.length
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text: "+text);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    return [runningTotal, text];
};   

function getVeg(runningTotal, text) {
    var vegTotal = 0;
    var selectedVeg = [];
    var vegArray = document.getElementsByClassName("veg");
    var counter = 0
    for (var k = 0; k < vegArray.length; k++) {
        if (vegArray[k].checked) {
            selectedVeg.push(vegArray[k].value);
            console.log("selected veg item: ("+vegArray[k].value+")");
            var vegCost = 0;
            if (counter > 0) {
                vegCost = 1;
                counter++;
          } else {
            counter++; 
          }
          text = text+vegArray[k].value + " $" + vegCost + ".00 <br>";
        }
    }    
    var vegCount = selectedVeg.length
    if (vegCount > 1) {
        vegTotal = (vegCount - 1);
    }  else {
        vegTotal = 0;
    }    
    runningTotal = (runningTotal + vegTotal);
    console.log('runningTotal: ', runningTotal);
    return [runningTotal, text];
}

function getCheese(runningTotal, text) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    for (l = 0; l < cheeseArray.length; l++) {
        if (cheeseArray[l].checked) {
            var selectedCheese = cheeseArray[l].value;
        }
    }
    if (selectedCheese === "Extra Cheese") {
        var cheeseTotal = 3;        
    } else {
        cheseTotal = 0;
    }
    text = text+selectedCheese + " $" + cheeseTotal + ".00 <br>";
    runningTotal = (runningTotal + cheeseTotal);
    console.log('runningTotal: ', runningTotal);
    return [runningTotal, text]
}

function getCrust(runningTotal, text) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (m = 0; m < crustArray.length; m++) {
        if (crustArray[m].checked) {
            var selectedCrust = crustArray[m].value;
        }
    }
    if (selectedCrust === "Cheese Stuffed Crust") {
        var crustTotal = 3;        
    } else {
        crustTotal = 0;
    }
    text = text+selectedCrust+" $" + crustTotal + ".00 <br>";
    runningTotal = (runningTotal + crustTotal);
    console.log('runningTotal: ', runningTotal);
    return [runningTotal, text]
}

function getSauce(runningTotal, text) {
    var sauceTotal = 0
    var sauceArray = document.getElementsByClassName("sauce");
    for (s = 0; s < sauceArray.length; s++) {
        if (sauceArray[s].checked) {
            var selectedSauce = sauceArray[s].value;
            text = text+selectedSauce+" $" + sauceTotal + ".00 <br>";
        }
    }
    runningTotal = (runningTotal + sauceTotal);
    console.log('selected sauce:', selectedSauce);
    document.getElementById("showText").innerHTML=text;
    document.getElementById("totalPrice").innerHTML="<strong>Total Price: $"+runningTotal+".00"+"</strong>";
    return [text]
}

function resetMenu() {
    document.getElementById("showText").innerHTML="";
    document.getElementById("totalPrice").innerHTML="";
}