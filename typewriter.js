const sentence = "hello there from lighthouse labs";

for (let i=0;i <sentence.length;i++){
  setTimeout(() => {
    if (i<sentence.length-1){
      process.stdout.write(sentence.charAt(i));
    }
    else{
      process.stdout.write(sentence.charAt(i));
      console.log("");
    }
  },50*i);
};


  
