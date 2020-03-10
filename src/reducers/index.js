function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                card: {
                    name: action.name, // 使用action携带的新name
                    picture: state.card.picture  // 不需要修改，使用旧state的值
                },
                dialog: state.dialog  // 不需要修改，使用旧state的值
            }

        case 'SHOW_DIALOG':
            return {
                card: state.card,  // 不需要修改，使用旧state的值
                dialog: {
                    status: true
                }
            }

        case 'CLOSE_DIALOG':
            return {
                card: state.card,  // 不需要修改，使用旧state的值
                dialog: {
                    status: false
                }
            }

        default:
            return state  // 没有匹配的action type，返回原来的state
    }
}