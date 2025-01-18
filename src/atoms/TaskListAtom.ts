/* eslint-disable no-case-declarations */
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { getStorage } from '../storage/Storage';

function toggleTaskStatus(task: TaskType): TaskType {
  return { ...task, status: task.status === 'DONE' ? 'PENDING' : 'DONE' };
}

type TaskType = {
  id: string;
  date: number;
  title: string;
  status: 'DONE' | 'PENDING';
};

const content = {} as Record<string, TaskType>;
const storage = getStorage<Record<string, TaskType>>();
const taskListAtom = atomWithStorage('tasks', content, storage);

type TaskAction =
  | { type: 'CREATE'; payload: TaskType }
  | { type: 'EDIT'; payload: TaskType }
  | { type: 'REMOVE'; payload: string }
  | { type: 'TOGGLE_STATUS'; payload: string };

const taskManagerAtom = atom(null, (_get, set, action: TaskAction) => {
  set(taskListAtom, async prev => {
    const list = await prev;

    switch (action.type) {
      case 'CREATE':
      case 'EDIT':
        return { ...list, [action.payload.id]: action.payload };

      case 'REMOVE':
        const { [action.payload]: _, ...rest } = list;
        return rest;

      case 'TOGGLE_STATUS':
        const task = list[action.payload];
        return { ...list, [task.id]: toggleTaskStatus(task) };

      default:
        return list;
    }
  });
});

const getTaskByIdAtom = atom(async get => {
  const taskList = await get(taskListAtom);
  return (id: string) => taskList[id];
});

export { getTaskByIdAtom, taskListAtom, taskManagerAtom, type TaskType };
