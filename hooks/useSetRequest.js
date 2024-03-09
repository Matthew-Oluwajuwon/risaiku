import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllAppKeys } from "../store";

const useSetRequest = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.app;
  });

  const onChangeText = useCallback(
    (key, value) => {
      dispatch(
        setAllAppKeys({
          ...state,
          request: {
            ...state.request,
            [key]: value,
          },
        })
      );
    },
    [dispatch, state]
  );

  return { onChangeText };
};

export default useSetRequest;
