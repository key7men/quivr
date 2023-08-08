import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ConfirmationDeleteModal from "../ConfirmationDeleteModal";

describe("ConfirmationDeleteModal", () => {
  it("should render delete modal", () => {
    const isOpen = true;
    const setOpen = vi.fn();
    const onDelete = vi.fn();
    const { getByTestId } = render(
      <ConfirmationDeleteModal
        isOpen={isOpen}
        setOpen={setOpen}
        onDelete={onDelete}
      />
    );

    expect(getByTestId("modal-description")).toBeDefined();
    expect(getByTestId("return-button")).toBeDefined();
    expect(getByTestId("delete-brain")).toBeDefined();
  });

  it("should call onDelete when delete-brain is clicked", () => {
    const isOpen = true;
    const setOpen = vi.fn();
    const onDelete = vi.fn();
    const { getByTestId } = render(
      <ConfirmationDeleteModal
        isOpen={isOpen}
        setOpen={setOpen}
        onDelete={onDelete}
      />
    );

    getByTestId("delete-brain").click();
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
