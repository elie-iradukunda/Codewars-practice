function getMichaelLastName(inputText) {
  let regex=/Michael\s([A-Z][a-z]+)/g;
  let array=[]
  
  for(const letters of inputText.matchAll(regex)){
      array.push(letters[1])
      
     
      
  }
  
   return array
}
const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
console.log(getMichaelLastName(inputText)); 



