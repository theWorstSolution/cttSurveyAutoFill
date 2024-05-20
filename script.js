var inputs = document.querySelectorAll(".dxeIRadioButton_Mulberry input");
var i = 0;
for (let input of inputs){
    if((i-2)%5 == 0){
        input.click();
    }
    i = i + 1;
}
var submitBtn = document.querySelectorAll(".dxbButton input")[0];
submitBtn.click();