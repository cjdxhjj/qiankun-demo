const portraitRouter = {
  path: '/portrait',
  component: () => import('@/views/index'),
  children: [
    {
      path: 'category',
      component: () => import('@/views/portrait/category/index'),
      name: 'category'
    },
  ],
};
export default portraitRouter;
