const posts = (states = { posts: [] }, action) => {

    switch (action.type) {
        case "FETCH_ALL":
            return {
                ...states,
                posts: {postName: "this is post title", id: "3435"},
            };
        case "CREATE": {
            return "something"
        }
        default:
            return states;
    }
};
export default posts;