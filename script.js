function checkVowels(){
	
	let t = document.getElementById("inputText").value;
	let vowelCount=0;
	
	t = t.toLowerCase();
	
	for(let i =0; i<t.length;i++){
		
		let char = t.charAt(i);
		if(isVowel(char)){
			vowelCount++;
		   }
		}
		
 const result = document.getElementById("result");
 result.textContent = "Total Vowels: "+vowelCount;
}

function isVowel(char){
	const vowels = ["a","e","i","o","u"];
	return vowels.includes(char);
}