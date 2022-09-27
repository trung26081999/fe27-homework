import "./Task.scss";
export function Task({ task, onDelete }) {
  return (
    <div className="content-item">
      <p className="content-date">
        <span className="content-date-label">Ngày nhắc:</span>
        {task.remindDate}
      </p>
      <p className="content-title">{task.remindDate}</p>
      <button className="icon-close" onClick={() => onDelete(task.id)}>X</button>
    </div>
  );
}
