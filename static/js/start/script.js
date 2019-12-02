login.keyup(() => {
    initialState.login = login.val();
    console.log(initialState.login);
});

password.keyup(() => {
    initialState.password = password.val()
    console.log(initialState.password)
})

signin.click((e) => {
    if(initialState.login == '' || initialState.password == ''){
        e.preventDefault()
    }
})
