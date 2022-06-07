function compute()
{
    var principal = document.getElementById("principal").value; //This declares the variable "principal"
    if (principal < 1)
    {
        alert("Enter a positive number")
        return false; // This prevents the code from producing output if any number less than 1 is inputted
    }
    var rate = document.getElementById("rate").value; //This declares the variable "rate"
    var years = document.getElementById("years").value; //This declares the variable "years"
    var interest = principal * years * rate /100; //This declares the variable "interest" which is the product of the principal,rate and years divided by 100
    console.log(interest) // This prints the interest
    var year = new Date().getFullYear()+parseInt(years); //This gives the code to get the year one gets the amount 
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>" // This prints out default messages depending on the input given
}
        
function updateRate() // This is used to update the rate as it is being moved or changed
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
