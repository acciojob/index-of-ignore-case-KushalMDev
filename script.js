function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 let s1InLower=s1.toLowerCase()
    let s2InLower=s2.toLowerCase()
    let index=-1
    let j=0
   for(let i=0;i<s1.length;i++){
    let char=s1InLower[i]
    if(char===s2InLower[0]){
        // j=1;
        let k=i+1;
        let z=1;
        for( z=1;z<s2.length;z++){
            if(s2InLower[z]!=s1InLower[k]){
                break;
            }
            else{
                k++;
            }
        }
        if(z==s2.length)return i
    }
   }
   return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
