// code your solution here
function superbowlWin (array){
    function test(element){
        return (element.result==="W")
    }
    if (array.find (test)){
        return array.find (test).year
    }
}