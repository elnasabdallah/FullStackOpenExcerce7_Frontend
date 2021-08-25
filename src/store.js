import { createStore, combineReducers, applyMiddleware } from "redux";
import alertReducer from "./redux/reducers/alertReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogsReducer from "./redux/reducers/blogsReducer";
import userReducer from "./redux/reducers/userReducer";

const reducers = combineReducers({
  alert: alertReducer,
  blogs: blogsReducer,
  user: userReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
