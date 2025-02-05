// import { SIGN_IN, SIGN_UP } from "./ActionType";
// import axios from 'axios';

// export const signInAction = (data) => async (dispatch) => {
//     try {
//         const res = await axios.get("http://localhost:8080/signin", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Basic " + btoa(`${data.email}:${data.password}`),
//             }
//         });

//         if (!res.ok) {
//             throw new Error('Sign in failed: ' + res.statusText);
//         }

//         const token = res.headers.get("Authorization");
//         if (token) {
//             localStorage.setItem("token", token);
//             dispatch({ type: SIGN_IN, payload: token });
//             console.log("Signed in user: " + token);
//         } else {
//             throw new Error('No token received');
//         }
//     } catch (error) {
//         console.error("Sign in error: ", error.message);
//     }
// }

// export const signupAction = (data) => async (dispatch) => {
//     try {
//         const res = await fetch("http://localhost:8080/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data)
//         });

//         if (!res.ok) {
//             throw new Error('Sign up failed: ' + res.statusText);
//         }

//         const user = await res.json();
//         console.log("Signed up user: ", user);
//         dispatch({ type: SIGN_UP, payload: user });
//     } catch (error) {
//         console.error("Sign up error: ", error.message);
//     }
// }
import { SIGN_IN, SIGN_UP } from "./ActionType";
import axios from 'axios';

// export const signInAction = (data) => async (dispatch) => {
//     try {
    //     const res = await axios.post("http://localhost:8080/signin", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Basic " + btoa(`${data.email}:${data.password}`),
    //         }
    //     });

    //     if (!res.ok) {
    //         throw new Error('Sign in failed: ' + res.statusText);
    //     }

    //     const token = res.headers.get("Authorization");
    //     if (token) {
    //         localStorage.setItem("token", token);
    //         dispatch({ type: SIGN_IN, payload: token });
    //         console.log("Signed in user: " + token);
    //     } else {
    //         throw new Error('No token received');
    //     }
    // } catch (error) {
    //     console.error("Sign in error: ", error.message);
    // }


    export const signInAction = (data) => async (dispatch) => {
        try {
          const res = await axios.post("http://localhost:8080/signin", {
            email: data.email,
            password: data.password
          }, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          
          if (res.data) {
            const token = res.headers.get["Authorization"];
            if (token) {
              localStorage.setItem("token", token);
              dispatch({ type: SIGN_IN, payload: token });
              console.log("Signed in user:", token);
            } else {
              throw new Error('No token received');
            }
          }
        } catch (error) {
          if (error.response) {
            // Server responded with error
            console.error("Sign in error:", error.response.data);
            throw new Error(error.response.data.message || "Sign in failed");
          } else {
            // Network error or other issues
            console.error("Sign in error:", error.message);
            throw error;
          }
        }
      };


export const signupAction = (data) => async (dispatch) => {
    try {
        const res = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('Sign up failed: ' + res.statusText);
        }

        const user = await res.json();
        console.log("Signed up user: ", user);
        dispatch({ type: SIGN_UP, payload: user });
    } catch (error) {
        console.error("Sign up error: ", error.message);
    }
}
