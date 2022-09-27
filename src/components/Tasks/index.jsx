import { Task } from "../Task";
import "./ContentList.scss";
export function Tasks({ tasks, onDelete }) {
  return (
    <div className="content-list">
      <div className="add-tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
           
          />
        ))}
      </div>
    </div>
  );
}
