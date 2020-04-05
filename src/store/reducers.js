export default function (state = [], action) {
  switch (action.type) {
    case "LOAD_EMPLOYEES":
      return action.payload;
    default:
      return state;
  }
}
