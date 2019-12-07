const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
    Route.post('user/signup','UserController.signUp').validator('SignUp');
    Route.post('user/signin','UserController.signIn').validator('SignIn');
  }).prefix('api/v1');

Route.group(() => {
    Route.post('create/post','PostController.createPost').validator('CreatePost');
    Route.get('user/post','UserController.userPosts');
  }).prefix('api/v1')
  // .middleware(['tokenValidator']);


