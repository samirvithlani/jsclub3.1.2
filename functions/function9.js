const checkName = (name) => name.startsWith("a") ? name.length>3 ? "valid" : "invalid" : "invalid"
var ans = checkName("abc")
console.log(ans);