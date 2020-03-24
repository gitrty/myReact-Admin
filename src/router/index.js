import { curriculumRoutes } from './modules/curriculum'
import { educationalRoutes } from './modules/educational'
import { marketingRoutes } from './modules/marketing'
import { operateRoutes } from './modules/operate'
import { orderRoutes } from './modules/order'
import { overViewRoutes } from './modules/overview'
import { setRoutes } from './modules/set'
import { systemRoutes } from './modules/system'
import { userRoutes } from './modules/user'

export const routes = [
    ...curriculumRoutes,
    ...educationalRoutes,
    ...marketingRoutes,
    ...operateRoutes,
    ...orderRoutes,
    ...overViewRoutes,
    ...setRoutes,
    ...systemRoutes,
    ...userRoutes
]