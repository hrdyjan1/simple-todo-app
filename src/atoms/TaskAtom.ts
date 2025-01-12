import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { getStorage } from '../storage/Storage';

type TaskType = {
  id: string;
  date: number;
  title: string;
  status: 'DONE' | 'PENDING';
};

const content = {} as Record<string, TaskType>;
const storage = getStorage<Record<string, TaskType>>();
const taskListAtom = atomWithStorage('tasks', content, storage);

const createTaskAtom = atom(null, (_get, set, value: TaskType) => {
  set(taskListAtom, async prev => {
    const list = await prev;
    return { ...list, [value.id]: value };
  });
});

const removeTaskAtom = atom(null, (_get, set, id: string) => {
  set(taskListAtom, async prev => {
    const list = await prev;
    const { [id]: _, ...rest } = list;

    return rest;
  });
});

const toggleStatusTaskAtom = atom(null, (_get, set, id: string) => {
  set(taskListAtom, async prev => {
    const list = await prev;
    const task = list[id];

    return {
      ...list,
      [task.id]: {
        ...task,
        status: task.status === 'DONE' ? 'PENDING' : 'DONE',
      },
    };
  });
});

export {
  createTaskAtom,
  removeTaskAtom,
  taskListAtom,
  toggleStatusTaskAtom,
  type TaskType,
};
