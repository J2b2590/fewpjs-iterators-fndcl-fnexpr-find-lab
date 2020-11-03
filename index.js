const testVar = {}

function testFunc() {
  return "hi"
}

testFunc()


function superbowlWin(w){
  
  let result = w.find( w => w.result === "W" )
  return !!result ? result.year : undefined
  
  
}