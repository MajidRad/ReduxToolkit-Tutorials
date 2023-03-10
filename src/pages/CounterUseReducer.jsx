import React, { useReducer } from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  ButtonGroup,
} from "@mui/material";

/* --------------- WHEN SHOULD USEREDUCER INSTEAD OF USESTATE --------------- */
//useReducer is alternate to use state
//useReducer and useState not commanly use together
//useReducer useful when you have several different closly-related piece of state
//useReducer useful when future state values depends on the current state

/* ---------------------------- Implement reducer --------------------------- */
//state is a object useReducer
//useReducer get a state and action
//reducer and {initialState}

/* ------------------------------ Reducer function Rule ------------------------------ */
//whatever you return will be your new state
//if you return nothing then your state will be undefined
//no request no async await  no promise no outside variable

/* ---------------------- Bad Practice To Update State ---------------------- */
/* 
const reducer=(state,action){
  state.count= state.count+1;
    return state;
  }
  */

/* ------------------------------ Dispatch Rule ----------------------------- */
// dispatch function can call without argument
// but whattt th hell!!!  wait a minute how reducer findout which way should update the state
//React comunity convention is Use action object OKAY???
//What is Action object?!
/* action object
dispatch({
  type:'increment Count', ****always be a string 
  payload:value
}); 
*/

/* ------------------------ Protect from typo mistake ----------------------- */
const INCREMENTC_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE = "change-value";
const ADD_BY_RANGE = "add-by-range";
const DECREMENT_BY_RANGE = "decrement-by-range";

//explain ...state reason
//explain business logic why should be in reducer not in action
//with immer just mutate state and  do empty return
//state.count= state.count-1; and then next line return ;
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENTC_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_BY_RANGE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
      };
    case DECREMENT_BY_RANGE:
      return {
        ...state,
        count: state.count - state.valueToAdd,
      };
    default:
      return state;
  }
};
//@ts-nocheck
const CounterUseReducer = () => {
  const initialCount = 0;
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    // @ts-ignore
    dispatch({ type: INCREMENTC_COUNT });
  };
  const decrement = () => {
    //@ts-ignore
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // @ts-ignore
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //@ts-ignore
    dispatch({ type: ADD_BY_RANGE });
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        component="form"
        onSubmit={handleSubmit}
      >
        <Box
          display="flex"
          flexDirection="column"
          height="60vh"
          boxShadow={1}
          p={4}
          borderRadius="10px"
        >
          <Typography variant="h2" color="primary">
            Counter Page
          </Typography>
          <Box
            height="30vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Typography variant="h4">
                Current Count :{state.count}{" "}
              </Typography>
              <ButtonGroup fullWidth>
                <Button onClick={decrement}>Decrement </Button>
                <Button onClick={increment}>Increment </Button>
              </ButtonGroup>
            </Box>
            <TextField
              fullWidth
              type="number"
              value={state.valueToAdd}
              onChange={handleChange}
            />
            <Button type="submit">Add Range</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default CounterUseReducer;
