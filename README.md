# test_case
test case for A1-PRO

### Задача 1. Передвинуть нули в конец массива
Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок других элементов.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

## Решение:
```javascript
const moveZeros = array => {
  let nonZeroIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      if (i !== nonZeroIndex) {
        [array[nonZeroIndex], array[i]] = [array[i], array[nonZeroIndex]];
      }
      nonZeroIndex++;
    }
  }

  return array;
};
```
### Задача 2. [Ссылка](https://task2-two-psi.vercel.app/)
### Задача 3. [Ссылка](https://task3-blue-theta.vercel.app/)
