import React, { FC, useState } from "react";
import InActiveCheckbox from "../assets/inputs/InActiveCheckbox";
import ActiveCheckbox from "../assets/inputs/ActiveCheckbox";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
}
export const Checkbox: FC<Partial<CheckboxProps>> = ({
  labelName,
  onChange,
  ...rest
}) => {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    onChange && onChange(e);
  };
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        onChange={handleCheckbox}
        className="hidden"
        {...rest}
      />
      {checked ? (
        <ActiveCheckbox className="cursor-pointer" />
      ) : (
        <InActiveCheckbox className="cursor-pointer" />
      )}
      <span className="ml-2">{labelName || ""}</span>
    </label>
  );
};
