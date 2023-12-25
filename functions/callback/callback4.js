function science() {
  console.log("I am science student");
}

function commerce() {
  console.log("I am commerce student");
}
function arts() {
  console.log("I am arts student");
}

function admission(cb) {
  cb(); //science()
}

var per = 65;
if (per >= 80) {
  admission(science);
} else if (per >= 60) {
  admission(commerce);
} else {
  admission(arts);
}
