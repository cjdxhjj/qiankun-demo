const taskRouter = {
  path: '/task',
  component: () => import('@/views/index'),
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/views/task/list/index')
    },
  ],
};
export default taskRouter;
