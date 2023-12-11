import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import constant from "../../constant";
import ProductTable from "../shared/ProductTable";

const getProducts = async (query) => {
  try {
    const response = await axios
      .get(constant.fakeProductApiUrl, { params: { q: query } });
    return response?.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

function throttle(func, limit) {
  let inThrottle = false;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const withAPICalls = (WrappedComponent) => {
  return function WithAPICalls(props) {
    const [data, setData] = useState(null);
    const [inputValueThrottle, setInputValueThrottle] = useState("");
    const [inputValueDebounce, setInputValueDebounce] = useState("");

    const throttledAPICall = useCallback(
      throttle(async (inputValueThrottle) => {
        const data = await getProducts(inputValueThrottle);
        setData(data.products);
      }, 1000),
      []
    );

    useEffect(() => {
      throttledAPICall(inputValueThrottle);
    }, [inputValueThrottle, throttledAPICall]);

    useEffect(() => {
      const getData = setTimeout(async () => {
        const data = await getProducts(inputValueDebounce);
        setData(data.products);
      }, 1000);

      return () => clearTimeout(getData);
    }, [inputValueDebounce]);

    const handleThrottleChange = (e) => {
      setInputValueThrottle(e.target.value);
    };

    const handleDebounceChange = (e) => {
      setInputValueDebounce(e.target.value);
    };

    return (
      <WrappedComponent
        {...props}
        inputValueThrottle={inputValueThrottle}
        inputValueDebounce={inputValueDebounce}
        handleThrottleChange={handleThrottleChange}
        handleDebounceChange={handleDebounceChange}
        data={data}
      />
    );
  };
};

const HRC = ({ inputValueThrottle, inputValueDebounce, handleThrottleChange, handleDebounceChange, data }) => {
  return (
    <div>
      <label>
        Throttle Input:
        <input
          type="text"
          placeholder="Type for throttled API call"
          value={inputValueThrottle}
          onChange={handleThrottleChange}
        />
      </label>
      <br />
      <label>
        Debounce Input:
        <input
          type="text"
          placeholder="Type for debounced API call"
          value={inputValueDebounce}
          onChange={handleDebounceChange}
        />
      </label>
      <ProductTable products={data} />
    </div>
  );
};

export default withAPICalls(HRC);