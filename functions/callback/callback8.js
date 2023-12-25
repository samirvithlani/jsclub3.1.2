const siri = (name) => {
  console.log("siri");
  return name + " hi message from siri";
};
const alexa = (name) => {
  console.log("alexa");
  return name + " hi message from alexa";
};
const google = (name) => {
  console.log("google");
  return name +" hi message from google";
};

function call(cb) {
  var x = cb("amit");
  console.log(x);
}

var choice = "google";

switch (choice) {
  case "siri":
    call(siri);
    break;
  case "alexa":
    call(alexa);
    break;
    case "google":
    call(google);
    break;
    default:
    console.log("invalid choice")

}
