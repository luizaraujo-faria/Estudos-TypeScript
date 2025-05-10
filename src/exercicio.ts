interface Task{
    id: number;
    title: string;
    completed: boolean;
};

const tasks: Task[] = [
    {id: 1, title: 'Comprar pão', completed: false },
    {id: 2, title: 'Limpar a casa', completed: false },
    {id: 3, title: 'Estudar TypeScript', completed: false }
];

function addTask(title: string): void{
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const task: Task = {
        id: newId,
        title,
        completed: false 
    };

    tasks.push(task);
};

function completeTask(id: number): void{
    const task = tasks.find(t => t.id === id);

    if(task){
        task.completed = true;
        console.log(`Tarefa "${task.title}" concluída com sucesso!`);
    } 
    else{
        console.log('\nNenhuma tarefa encontrada!');
    };
};

function listTasks(): void{
    if(tasks){
        tasks.forEach(task => {
            console.log(`\nTarefa N° ${task.id}:`)
            console.log(`Titulo - ${task.title}`);
        });
    }
    else{
        console.log('\nNenhuma tarefa encontrada!');
    };
};

function listPendingTasks(): void{
    if(tasks){
        console.log('\nTarefas pendentes:\n');

        tasks.forEach(task => {
            if(task.completed === false){
                console.log(`Tarefa N° ${task.id} - ${task.title}`);
            };
        });
    }
    else{
        console.log('\nNenhuma tarefa encontrada!');
    };
};

addTask('Treinar');
completeTask(2);
listTasks();
listPendingTasks();