// Add your functions here

function map(array,func){
  let r = []
  array.forEach(elem => {
    r.push( func(elem) )
  })
  return r
}

function reduce(array, func, start){
  let r = !!start ? start : array[0]
  let i = !!start ? 0 : 1

  for (i; i < array.length; i++){
    r = func(array[i], r)
  }

  return r
}