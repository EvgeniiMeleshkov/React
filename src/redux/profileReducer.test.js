import profileReducer, {addNewLike, addPostCreator, deletePost} from "./profileReducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It`s my first post', likesCount: 19}
    ]
}

test('length of posts should be incremented', () => {
    // 1. start test data
    let action = addPostCreator('It KAMASUTRA')

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect (newState.posts.length).toBe(3)
})

test('message value is expected value', () => {
    // 1. start test data
    let action = addPostCreator('It KAMASUTRA')

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect (newState.posts[2].message).toBe('It KAMASUTRA')
})
test('after deleting length should decrement', () => {
    // 1. start test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect (newState.posts.length).toBe(1)
})
test('after adding new post, id should increment', () => {
    //1. start test data
    let action = addPostCreator('Some message')
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts[2].id).toBe(3)
})
test('likesCount increment', () => {
    //1. start test data
    let action = addNewLike(1)
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts[0].likesCount).toBe(13)
})
