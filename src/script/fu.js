function FU() {
  this.count = 0;
}

FU.prototype = {
  get_count: function() {
    return this.count;
  },
  set_count: function(num) {
    this.count = num;
  },
  increment: function() {
    this.count++;
  },
  decrement: function() {
    if(this.count > 0) {
      this.count--;
    }
  },
  reset: function() {
    this.count = 0;
  }
}

const fu = new FU();

export {
  FU,
  fu
}
