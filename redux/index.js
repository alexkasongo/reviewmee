import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Alert } from "react-native";
import firebase from "../database/firebase";

//  actions - dispatches/commits object
export const onUserLogin = ({ email, password }) => {
  console.log(`index.js - 1 👀 ✅ 🔥`, { email, password });
  return (dispatch) => {
    // firebase
    if (email === "" && password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      //   this.setState({
      //     isLoading: true,
      //   });

      dispatch({ type: "IS_LOADING", payload: true });

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          console.log("🌎 User logged-in successfully!");
          //   this.setState({
          //     isLoading: false,
          //     email: "",
          //     password: "",
          //   });
          dispatch({ type: "IS_LOADING", payload: false });
          this.props.navigation.navigate("Home");
        })
        .catch((error) => {
          dispatch({ type: "IS_LOADING", payload: false });
          console.log(`login.js - 54 - 🍎`, error.message);
          dispatch({ type: "ON_ERROR", payload: error });
        });
    }

    dispatch({ type: "DO_LOGIN", payload: Response.data });
  };
};

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_PRODUCTS", payload: Response.data });
    } catch (error) {
      dispatch({ type: "ON_ERROR", payload: error });
    }
  };
};

// reducers - similar to mutations in vuex, used for storing the data in state
const userReducer = (state = {}, action) => {
  //   console.log(`index.js - 2 🙏🏾 🍎 we made it here!!!`, action.payload);
  switch (action.payload) {
    case "DO_LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "ON_ERROR":
      return {
        ...state,
        appError: action.payload,
      };
    default:
      return {
        state,
      };
  }

  //   if (action.type === "DO_SIGNIN") {
  //     if (action.payload.email === "" && action.payload.password === "") {
  //       Alert.alert("Enter details to signin!");
  //     } else {
  //       this.setState({
  //         isLoading: true,
  //       });
  //       firebase
  //         .auth()
  //         .signInWithEmailAndPassword(
  //           action.payload.email,
  //           action.payload.password
  //         )
  //         .then((res) => {
  //           console.log(res);
  //           console.log("User logged-in successfully!");
  //           this.setState({
  //             isLoading: false,
  //             email: "",
  //             password: "",
  //           });
  //           this.props.navigation.navigate("Home");
  //         })
  //         .catch((error) => {
  //           this.setState({ isLoading: false });
  //           console.log(`login.js - 54 - 🍎`, error.message);
  //           this.setState({ errorMessage: error.message });
  //         });
  //     }
  //   }
  //   return state;
};

// root reducer - combines multiple reducers into one single units
export const rootReducer = combineReducers({
  userReducer,
});

// store
export const store = createStore(rootReducer, applyMiddleware(thunk));
