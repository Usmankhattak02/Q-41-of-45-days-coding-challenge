// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the
//  manipulation or display of their contents in a centralized manner. 
// This is useful for handling lists of data.

let magicians : string[]=["leena","Alice","devil"];
function show_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);
        
    })}
    show_magician(magicians);