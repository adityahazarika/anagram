let str1 = "stressed";
let str2 = "desserts";

function anagram(str1,str2) {
    if(str1.length==str2.length){
        let str1Arr = str1.split("");
        let str2Arr = str2.split("");
        let count = 0
        for (let i = 0; i < str1Arr.length; i++) {
            if(str2Arr.includes(str1Arr[i])){
                count +=1;
                str2Arr.splice(str2Arr.indexOf(str1Arr[i]),1);
            }
            else{
                console.log("Strings are not anagram");
                break;
            }
        }
        if(str1.length==count){
            console.log("Strings are anagram");
        }
        else{
            console.log("strings are not anagram");
        }
    }
    else{
        console.log("Strings are not anagram")
    }
}

anagram(str1,str2)
