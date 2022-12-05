// Code your solutions in this file
function writeCards (names,event){
    const messages = [];
    for (let i = 0; i <names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
function countDown (){
    var answ = '';
    let i=0;
    while (--i>=0){
        answ = answ + i + '';
        i--
    }
    return answ;
}
console.log(coundown(10));
