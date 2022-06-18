var cont = document.querySelector(".content > div");
var dieTemp = document.querySelector("template#dieUI");
var dieBagTemp = document.querySelector("template#dieBagUI");

var ids = {
  die: 0,
  bag: 0
};
function addDie(ctx, int, name, count) {
  ctx.innerHTML += dieTemp.innerHTML
    .replace("{RAND_ID}", "die" + ids.die)
    .replace("{TITLE_DIE}", name ?? "")
    .replace("{DIE_SIDES}", int ?? "6")
    .replace("{IS_COUNTER}", count ? " counter" : "")
    .replace("{DIE_VALUE}", Math.round(Math.random() * ((int ?? 6) - 1)) + 1);
  ids.die++;
}
function addDieBag(ctx) {
  ctx.innerHTML += dieBagTemp.innerHTML
    .replace("{RAND_ID}", "dieBag" + ids.bag)
    .replace("{TITLE_DIE}", "");
  ids.bag++;
}
function rollDie(thisObj) {
  var val = thisObj.querySelector('.die-value');
  var sides = thisObj.querySelector('.die-sides');
  val.innerHTML = Math.round(Math.random() * (sides.value - 1)) + 1;
}
function rollAllDie(ctx) {
  var allDies = ctx.querySelectorAll(".rollable");
  console.log(allDies, ctx);
  allDies.forEach((v) => {
    rollDie(v);
  })
}

function cutVal(thisObj) {
  var val = thisObj.parentElement.querySelector('.die-value');
  var sides = thisObj.parentElement.querySelector('.die-sides');
  sides.value = val.innerHTML;
}

function changeVal(thisObj, int) {
  var val = thisObj.parentElement.querySelector('.die-value');
  val.innerHTML = parseInt(val.innerHTML) + int;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("element", ev.target.id);
}

function drop(ev) {
  if (!ev.target.classList.contains("dropHere")) return;
  ev.preventDefault();
  var data = ev.dataTransfer.getData("element");
  ev.target.appendChild(document.getElementById(data));
}

var tp = (t) => {return $(t).parent().parent()};
var tpp = (t) => {return $(t).parent().parent().parent()};
var ht = (t) => {return t.get(0)};