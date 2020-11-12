console.log('-------1-------');

    let arrNum = [1,2,8,4,5];
    for(let i = 0; i < arrNum.length; i++) {
        console.log(arrNum[i])
    }

console.log('-------2-------');

    let arrNum1 = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];
    for(let i = 0; i < arrNum1.length; i++) {
        if(arrNum1[i] < -3 && arrNum1[i] > -10)
        console.log(arrNum1[i])
    }

console.log('-------3-------');

    let arrNum3 = [],
        result = 0;
        for(let i = 23; i <= 57; i++){
            arrNum3.push(i)
        }
        console.log(arrNum3)
        for(let i = 0; i < arrNum3.length; i++){
            result += arrNum3[i]
        }
        console.log(result)

console.log('-------4-------');

    let arrStr =  ['10', '20', '30', '50', '235', '3000'];
        for(let i = 0; i < arrStr.length; i++){
            if(arrStr[i][0] == '1' || arrStr[i][0] == '2' || arrStr[i][0] == '5')
                console.log(arrStr[i])
        }

console.log('-------5-------');

    let arrWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        for(let i = 0; i < arrWeek.length; i++){
            if(arrWeek[i] == 'Сб' || arrWeek[i] == 'Вс'){
                document.write(`<strong>${arrWeek[i]}.</strong>`)
            }else{
                document.write(arrWeek[i] + '.')
            }
        }

console.log('-------6-------');

    let arrRandom =  [123, true, 'Текст', 8, 12, -65, 'fu'],
        getLast;
        arrRandom.push('456');
        getLast = arrRandom[arrRandom.length-1];
        console.log(getLast);

console.log('-------7-------');

    let arrPrompt = [],
        numPrompt;
        for(let i = 0;; i++){
            numPrompt = prompt('Введите число!');
            if(numPrompt != +numPrompt || numPrompt == ' '){
                break;
            }else{
                arrPrompt.push(numPrompt);
            }
        }
        arrPrompt.sort(function(a, b){
            return a - b
        });
        console.log(arrPrompt);

console.log('-------8-------');

    let arrNum4 = [12, false, 'Текст', 4, 2, -5, 0]
        arrNum4New = [],
        count = 0,
        k = 0;

        while(k < arrNum4.length){
            k++;
        }
        while(k > 0){
            k--;
            arrNum4New.push(arrNum4[k]);
        }
        console.log(arrNum4New);

        arrNum4.reverse();
        console.log(arrNum4);

console.log('-------9-------');

    let arrNum5 =  [5, 9, 21, , , 9, 78, , , , 6]
        counter = 0;
        for(let i = 0; i < arrNum5.length; i++){
            if(arrNum5[i] == undefined){
                counter++;
            }
        }
        console.log(counter);

console.log('-------10-------');

    let arrNum6 =  [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
        firstItem = arrNum6.indexOf(0),
        lastItem = arrNum6.lastIndexOf(0),
        sum1 = 0;
        for(let i = firstItem; i < lastItem; i++){
            sum1 += arrNum6[i] 
        }
        console.log(sum1);