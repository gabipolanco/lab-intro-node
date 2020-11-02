class SortedList {
  constructor() {
    this.items= [];
    this.length= this.items.length;
   }

  add(item) {
    this.items.push(item)
    this.items.sort((a , b)=> a - b )
    this.length= this.items.length
  }

  get(pos) {
    if (pos > this.items.length) {
    throw new Error('OutOfBounds');
  } 
  else{
    return this.items[pos]
  }
  }

  max() {
    if(this.length > 0)
    {
   return this.items.reduce((a,b)=> {
      return Math.max(a,b)
    })
    }
    else { 
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.length > 0 )
    {
      return this.items.reduce((a,b)=>{
        return Math.min(a,b)
      })
      }
      else{
        throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((a, b) => { return a + b},0)
  }

  avg() {
    if(this.length > 0){
     return this.items.reduce((a,b)=> {return a + b},0) / this.length
  } else {
    throw new Error('EmptySortedList');
  }
}
}

module.exports = SortedList;
