import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export function useQuery(param: string) {
  let searchString = useLocation().search.substring(1);
  let [paramVal, setParamVal] = useState<string | null>(
    new URLSearchParams(searchString).get(param)
  );
  useEffect(() => {
    setParamVal(new URLSearchParams(searchString).get(param));
  }, [searchString, setParamVal, param]);

  let history = useHistory();
  /* If null is given for newParamVal, delete the param */
  function setParam(newParamVal: string | null) {
    let allParams = new URLSearchParams(searchString);
    if (newParamVal == null) {
      allParams.delete(param);
    } else {
      allParams.set(param, newParamVal);
    }
    history.push({
      search: `${allParams.toString() ? "?" + allParams.toString() : ""}`,
    });
  }

  let setCallback = useCallback(setParam, [param, searchString]);
  return [paramVal, setCallback] as const;
}
