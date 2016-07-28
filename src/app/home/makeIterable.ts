export function makeIterable(arr:string[]): any {
  return {
    rotateLeft: function () {
      var t = arr.shift();
      arr.push(t);
      return t;
    },
    rotateRight: function () {
      var t = arr.pop();
      arr.unshift(t);
      return t;
    },
    source: arr
  };
}