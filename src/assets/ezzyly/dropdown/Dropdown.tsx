import React, { useState } from "react";
import Select, {
  components,
  ControlProps,
  DropdownIndicatorProps,
  OptionProps,
  Props,
  StylesConfig,
} from "react-select";
import TickCircle from "../assets/dropdown/TickCircle";
import ArrowDown from "../assets/dropdown/ArrowDown";
import ActiveArrowDownIcon from "../assets/dropdown/ActiveArrowDown";

interface SelectOptions {
  readonly value: string;
  readonly label: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
  readonly Icon?: React.ReactElement;
  readonly ActiveIcon?: React.ReactElement;
}

//Select main from react-select
const Control = ({ ...props }: ControlProps<SelectOptions, false>) => {
  const { Icon, ActiveIcon } = props.selectProps as any;
  return (
    <components.Control
      className={
        (props.menuIsOpen ? "!shadow-focus-xl border !border-[#6FAEF6]" : "") +
        " h-12"
      }
      {...props}
    >
      {(!props || !props.isFocused) && Icon ? (
        <>
          <Icon />{" "}
        </>
      ) : (
        <></>
      )}
      {props.isFocused && ActiveIcon ? (
        <>
          <ActiveIcon />{" "}
        </>
      ) : (
        <></>
      )}
      <>{props.children}</>
    </components.Control>
  );
};

// options that is values
const Option = ({ children, ...props }: OptionProps<SelectOptions>) => {
  return (
    <components.Option className="!bg-transparent" {...props}>
      <div
        className={`flex max-w-[100%] px-3 cursor-pointer rounded-lg py-4 ml-2 items-center justify-between
                ${
                  props.isSelected
                    ? "bg-[#F5FEFB]  text-[#147AF0] font-bold"
                    : "text-[#3D4043] hover:bg-[#F5FEFB]"
                }
                `}
      >
        <p>{props.label}</p>
        {props.isSelected && <TickCircle />}
      </div>
    </components.Option>
  );
};

const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOptions, false>
) => {
  return (
    <components.DropdownIndicator {...props}>
      {!props.selectProps.menuIsOpen ? <ArrowDown /> : <ActiveArrowDownIcon />}
    </components.DropdownIndicator>
  );
};
type DropdownType = {
  Icon: React.ReactElement | any;
  ActiveIcon: React.ReactElement | any;
  error: any;
  value: any;
} & Props<SelectOptions>;
export const Dropdown = ({ error, ...props }: Partial<DropdownType>) => {
  const styles: StylesConfig<SelectOptions, false> = {
    control: (css) => ({
      ...css,
      fontWeight: 400,
      paddingLeft: "1rem",
      background: "#FCFDFD",
      border: "1px solid #EEF4F6",
      "&:hover": {
        background: "#FCFDFD",
        border: "1px solid #EEF4F6",
      },
      "&::placeholder": {
        fontWeight: 400,
        color: "red !important",
      },
      "&:focused": {
        background: "red",
      },
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "1em",
      color: "#869FAC",
      fontWeight: 400,
    }),
    menu: (base) => ({
      ...base,
      boxShadow: "0px -1px 8px 0px #C6CBCD4D",
      maxWidth: "95%",
      marginLeft: "5%",
    }),
    menuList: (base) => ({
      ...base,

      "::-webkit-scrollbar": {
        width: "8px",
        height: "auto",
      },
      "::-webkit-scrollbar-track": {
        background: "white",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#F4F8F9",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#F4F8F9",
      },
    }),
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Select
      {...props}
      // @ts-ignore
      Icon={props.Icon || null} // serves as the icon
      // @ts-ignore
      ActiveIcon={props.ActiveIcon || null} // serves as the icon
      components={{
        Control,
        IndicatorSeparator: () => null,
        Option,
        DropdownIndicator,
      }}
      isSearchable
      onMenuOpen={() => setMenuOpen(true)}
      onMenuClose={() => setMenuOpen(false)}
      name={props.name}
      menuIsOpen={menuOpen}
      options={props.options}
      styles={styles}
    />
  );
};
