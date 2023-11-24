const todos = [
    { id: 1, title: "take rest" },
    { id: 2, title: "Lunch" },
    { id: 3, title: "study" },
    { id: 4, title: "sleep" }
]

let reqObj = todos.find(todo => todo.id === 3);
console.log(reqObj);

// -------------------------//

