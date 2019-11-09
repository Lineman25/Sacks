function mewki(){
	var ms = []; // количество  мешков
	var perfectResult = 0; // Результат идеального варианта
	var result = 0; // результат
	var diff = 0; // разница результатов
	var otvet = 0; // номер мешка
	let value = prompt("Введите число мешков", 0);
	for(let i=1;i<=value;i++){
		ms.push(i);
	}
	for (let m of ms) {
    perfectResult += 100/m;
  }
  var rand = 0;
  var xrand = 0;
  rand = Math.random() * ms.length;
  xrand = Math.round(rand);
  if(xrand == 0){
	  xrand++;
  }
  result = perfectResult + 90/xrand;
  var otvetx = 0;
  diff = result - perfectResult;
  otvetx = 90/diff;
  otvet = Math.round(otvetx);
  console.info(xrand);
  console.info(perfectResult);
  console.info(result);
  console.info(diff);
  console.info(otvet);
}
