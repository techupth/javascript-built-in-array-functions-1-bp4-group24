const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  if (todos.completed === true){
      return `topic ${todos.topic},completed: ${todos.completed}`;
  }
};


let completedTodo = todos.filter(getCompletedTodo);
console.log(completedTodo);

/* 
    Output:
    [
        { topic: 'Doing pre-work', completed: true },
      { topic: 'Playing computer games', completed: true },
      { topic: 'Clean the room', completed: true }
    ]
*/