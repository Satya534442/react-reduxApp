const selectors = (state=state, action) => {
  switch (action.type) {
    case 'HELLO': return Object.assign({}, {showText:"Hello Guys!! Welcome to my first Example"});
    case 'BYE': return Object.assign({}, {showText:"Bye Guys!!I hope you like my first Example"});
    case 'MEAN': return Object.assign({}, {showText:"Welcome to mean group"});
    case 'LOVE': return Object.assign({}, {showText:"Hello Guys!! Welcome to my first Lovely Example"});
    default: return state;
  }
}

export default selectors;
