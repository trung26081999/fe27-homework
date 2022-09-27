import { useEffect, useState } from "react";
import { MainContent } from "../MainContent/index"
import { Tasks } from "../Tasks/index"
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header"

const LOCAL_STORAGE_KEY = "todoapp";

function Add() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle, taskRemindDate) {
    setTasksAndSave([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        remindDate: taskRemindDate,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function complete(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header />
      <MainContent handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={complete}
      />
    </>
  );
}

export default Add;
