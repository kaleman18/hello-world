
function askName(){
    let userName=prompt('Hello! What is your name?');
            document.write('Hello, '+ userName +'.');
}


function likePlants(){
    let usrPlant=prompt('Do you like Plants, Yes or No?');
            if (usrPlant == 'yes'){
                document.write("Well, here's some plants for you.")
            }else if (usrPlant == 'Yes'){
                document.write("Well, here's some plants for you.")
            }else if (usrPlant == 'no') {
                usrPlant=prompt('Do you like food, Yes or No')
            }else if (usrPlant == 'No') {
                usrPlant=prompt('Do you like food, Yes or No')
            }if (usrPlant == 'yes'){
                document.write("Well, plants are food so, here's some plants for you.")
            }else {
                document.write(' Well, you are still getting plants :). ')
            }
}

function howManyPlants(){
    let usrPlantAmount=prompt('How many plants do you have?');
            if(usrPlantAmount > 5){
                document.write('You could use one more :).')
            } else if(usrPlantAmount < 3){
                document.write('You could use a few plants.')
            } else {
                document.write('You could use a couple plants.')
            }
}