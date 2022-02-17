$counter=0;
displayC();


function increaseC(){
    $counter +=1;
    displayC();
}


function decreaseC(){
    if($counter == 0){
    $counter =0;
    }
    else{
        $counter -=1;
    }

    displayC();
}


function displayC(){
    document.getElementById("counter").innerHTML=$counter;
}