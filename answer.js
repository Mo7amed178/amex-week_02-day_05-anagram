let wordlist  = ["enlists" , "google" , "inlets" , "banana" ,  "istlen"];

function printAnagrams (wordToCheck) {
   wordToCheck = wordToCheck.split('').sort().join('');

   for (var word of wordlist){
       let wordSorted = word.split('').sort().join('');

       if (wordToCheck === wordSorted){
           console.log(wordToCheck);
       }
   }
}

printAnagrams("listen");