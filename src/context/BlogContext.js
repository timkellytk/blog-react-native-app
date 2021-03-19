import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          title: `Blog Post #${state.length + 1}`,
          id: Math.floor(Math.random() * 9999),
        },
      ];
    case "delete_blogpost":
      return state.filter((item) => action.payload !== item.id);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => dispatch({ type: "add_blogpost" });
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
