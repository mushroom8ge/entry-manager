import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { useFormValidation } from "../useFormValidation";
import { fieldsConfig } from "../../components/ModalForm/formConfig";

const mockStore = configureStore([]);

describe("useFormValidation", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      entries: { entries: [] },
    });
  });

  it("should validate fields correctly", () => {
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(
      () => useFormValidation({}, fieldsConfig, null),
      { wrapper }
    );

    act(() => {
      result.current.validateField("id", "abc");
    });

    expect(result.current.errors.id).toBe(
      "ID: ID must be a positive integer without a decimal point."
    );
  });
});
