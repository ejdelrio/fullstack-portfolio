let initState = {};

module.exports = (state=initState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'SWITCHBOARD_UPDATE':
      return {...state, payload};
    case 'SWITCHBOARD_RESET':
      return initState;
    default:
      return state;
  }
}
