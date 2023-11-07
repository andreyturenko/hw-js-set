// // // Tasks: JS. Set

// // Створіть колекцію Set із початковими значеннями 1, 2, 3.
const collectionSet = new Set([1, 2, 3]);
console.log(collectionSet);

// // За допомогою методу has перевірте наявність елемента зі значенням 3, а потім елемента зі значенням 4.
console.log("collectionSet.has(3) :>> ", collectionSet.has(3));
console.log("collectionSet.has(4) :>> ", collectionSet.has(4));

// // Додати ще кілька елементів.
console.log(collectionSet.add(5).add(10).add(15));

// // За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
for (const item of collectionSet) {
  console.log("item :>> ", item);
}

// // Знайдіть суму цих значень.
let sum = 0;
for (const item of collectionSet) {
  sum += item;
}
console.log(sum);

// // Видаліть елемент 2.
console.log(collectionSet.delete(2));

// // Очистіть усю колекцію.
collectionSet.clear();

// // З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];

const arrChange = [...new Set(arr1)];
console.log(arrChange);

// // З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const arr2 = [5, 10, 11];

const arrUniqueValues = [...new Set([...arr1, ...arr2])];
console.log(arrUniqueValues);

// // * З масиву
// // створити:
// // 1) масив імен користувачів (унікальних)
// // 2) мапу вигляду
// // Map (2) {
// // Ivo => [{message, date}, {message, date}],
// // Wally => [{message, date}, {message, date}]
// // }тобто в мапі імені користувача має співставлятися масив його повідомлень,
// // де кожне повідомлення представлене об'єктом з текстом повідомлення і його датою.

const messages = [
  { id: 1, name: "Ivo", message: "hello", date: new Date() },
  { id: 2, name: "Ivo", message: "how are you", date: new Date() },
  { id: 3, name: "Wally", message: "hi)", date: new Date() },
  { id: 4, name: "Wally", message: "fine)", date: new Date() },
];

const uniqueUserNames = [...new Set(messages.map((m) => m.name))];

const messagesByUser = new Map();

uniqueUserNames.forEach((name) => {
  const userMessages = messages
    .filter((m) => m.name === name)
    .map(({ message, date }) => ({ message, date }));
  messagesByUser.set(name, userMessages);
});
console.log(messagesByUser);
