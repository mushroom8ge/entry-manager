import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import useDebounce from "../useDebounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("should debounce value", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("initial");
  });
});
