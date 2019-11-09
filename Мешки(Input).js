function mewki(){
	var ms = []; // количество  мешков
	var perfectResult = 0; // Результат идеального варианта
	var result = 0; // результат
	var diff = 0; // разница результатов
	var otvet = 0; // номер мешка
	let value = prompt("Введите число мешков", 0);
    let valuex = prompt("Введите номер 90-килограммового мешка", 0);
	for(let i=1;i<=value;i++){
		ms.push(i);
	}
	for (let m of ms) {
    perfectResult += 100/m;
  }
  result = perfectResult + 90/valuex;
  var otvetx = 0;
  diff = result - perfectResult;
  otvetx = 90/diff;
  otvet = Math.round(otvetx);
  console.info(perfectResult);
  console.info(result);
  console.info(diff);
  console.info(otvet);
}
