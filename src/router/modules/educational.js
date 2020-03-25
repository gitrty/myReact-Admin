import Evaluate from '@/components/index/educational/evaluate'
import Answering from '@/components/index/educational/answering'
import Task from '@/components/index/educational/task'

export const educationalRoutes = [
    {
        path: "/evaluate",
        component: Evaluate
    },
    {
        path: "/answering",
        component: Answering
    },
    {
        path: "/task",
        component: Task
    },
]