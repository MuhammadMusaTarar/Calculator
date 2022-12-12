function press(bu) {
  var obj = (document.getElementById('textBox').value += bu);
}

function isClear() {
  var obj = (document.getElementById('textBox').value = '0');
}

function isEquals() {
  var obj = document.getElementById('textBox');
  var textBox = obj.value;
  obj.value = eval(textBox);
}

function mouseOver(press) {
  if (press == 'calcButtonC') {
    document.getElementById(press).style.color = '#292929bb';
    document.getElementById(press).style.backgroundColor = 'red';
  } else if (press == 'calcButton/') {
    document.getElementById(press).style.color = '#292929bb';
    document.getElementById(press).style.backgroundColor = 'yellowGreen';
  } else if (press == 'calcButton*') {
    document.getElementById(press).style.color = '#292929bb';
    document.getElementById(press).style.backgroundColor = 'yellowGreen';
  } else if (press == 'calcButton-') {
    document.getElementById(press).style.color = '#292929bb';
    document.getElementById(press).style.backgroundColor = 'yellowGreen';
  } else if (press == 'calcButton+') {
    document.getElementById(press).style.color = '#292929bb';
    document.getElementById(press).style.backgroundColor = 'yellowGreen';
  } else if (press == 'calcButton=') {
    document.getElementById(press).style.color = '#292929bb';
    document.getElementById(press).style.backgroundColor = 'red';
  } else {
    document.getElementById(press).style.color = '#292929bb';
    document.getElementById(press).style.backgroundColor = 'rgb(68, 187, 235)';
  }
}

function mouseOut(press) {
  if (press == 'calcButtonC') {
    document.getElementById(press).style.color = 'red';
    document.getElementById(press).style.backgroundColor = '#292929bb';
  } else if (press == 'calcButton/') {
    document.getElementById(press).style.color = 'yellowGreen';
    document.getElementById(press).style.backgroundColor = '#292929bb';
  } else if (press == 'calcButton*') {
    document.getElementById(press).style.color = 'yellowGreen';
    document.getElementById(press).style.backgroundColor = '#292929bb';
  } else if (press == 'calcButton-') {
    document.getElementById(press).style.color = 'yellowGreen';
    document.getElementById(press).style.backgroundColor = '#292929bb';
  } else if (press == 'calcButton+') {
    document.getElementById(press).style.color = 'yellowGreen';
    document.getElementById(press).style.backgroundColor = '#292929bb';
  } else if (press == 'calcButton=') {
    document.getElementById(press).style.color = 'red';
    document.getElementById(press).style.backgroundColor = '#292929bb';
  } else {
    document.getElementById(press).style.color = 'rgb(68, 187, 235)';
    document.getElementById(press).style.backgroundColor = '#292929bb';
  }
}
