import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

const state = {
  postsData: [
    {id: 1, message: 'Hello!', likeCount: 5},
    {id: 2, message: `I'm happy!`, likeCount: 15},
  ]
};
it('new length of postData should be update', () => {
  let action = addPostActionCreator('testing post');
  let newState = profileReducer(state, action);

  expect (newState.postsData.length).toBe(3)
})

it('new post should be added', () => {
  let action = addPostActionCreator('testing post');
  let newState = profileReducer(state, action);

  expect (newState.postsData[2].message).toBe('testing post')
})
it('after deleting length should be update', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  expect (newState.postsData.length).toBe(1)
})
it(`after deleting length shouldn't be update if id not correct`, () => {
  let action = deletePost(3);
  let newState = profileReducer(state, action);

  expect (newState.postsData.length).toBe(2)
})
