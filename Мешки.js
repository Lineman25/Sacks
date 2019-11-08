function mewki(){
	var msPerf = []; // количество идеальных мешков
	var ms = []; // количество мешков
	var perfectResult = 0; // Результат идеального варианта
	var result = 0; // результат
	var diff = 0; // разница результатов
	var otvet = 0; // номер мешка
	let value = prompt("Введите число", 0);
	for(let i=1;i<=value;i++){
		msPerf.push(i);
	}
	for (let m of msPerf) {
    perfectResult += 100/m;
  }
  var rand = 0;
  var xrand = 0;
  rand = Math.random() * msPerf.length;
  xrand = Math.round(rand);
  if(xrand == 0){
	  xrand++;
  }
  for(let i=1;i<=value;i++){
		ms.push(i);
	}
	for (let m of ms) {
    result = result + 100/m + 90/xrand;
  }
  var otvetx = 0;
  diff = result - perfectResult;
  otvetx = 90/(diff/ms.length);
  otvet = Math.round(otvetx);
  console.info(xrand);
  console.info(perfectResult);
  console.info(result);
  console.info(diff);
  console.info(otvet);
}
