const addBreak = (sec)=>{
    localStorage.setItem('time',JSON.stringify(sec))
}
const showBreak=()=>{
    const showBreakTime = localStorage.getItem('time');
    let showTime = {};
    if(showBreakTime){
        showTime = JSON.parse(showBreakTime);
    }
    return showTime;
   
}
export {
    addBreak,
    showBreak
}