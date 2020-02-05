// Add your functions here

function map(array,func){
  let r = []
  array.forEach(elem => {
    r.push( func(elem) )
  })
  return r
}

function reduce(array, func, start = false){
  array.forEach(elem => {
    start = func(elem, start)
  })
  return start
}