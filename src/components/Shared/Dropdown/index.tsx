import { FC } from "react";
import Select, {
  components,
  StylesConfig,
  OptionProps,
  SingleValueProps,
  SingleValue as SingleValueType,
  ActionMeta,
  PropsValue,
} from "react-select";
import styles from "./Dropdown.module.scss";

export interface OptionType {
  label: string;
  value: string;
}

interface DropdownProps {
  options: OptionType[];
  handleChange: (
    newValue: SingleValueType<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => void;
  value: PropsValue<OptionType>;
  isLoading?: boolean;
}

const selectStyles: StylesConfig<OptionType, false> = {
  control: (base) => ({
    ...base,
    backgroundColor: "#f2f5f8",
    border: "none",
    borderRadius: "10px",
    minWidth: "220px",
    cursor: "pointer",
  }),
  multiValue: (base) => ({
    ...base,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "black",
  }),
  singleValue: (styles) => ({
    ...styles,
    textTransform: "capitalize",
  }),
  option: (styles) => ({
    ...styles,
    textTransform: "capitalize",
  }),
};

const Option: FC<OptionProps<OptionType, false>> = (props) => (
  <components.Option {...props} className={styles["custom-option"]}>
    {props.data.label}
  </components.Option>
);

const SingleValue: FC<SingleValueProps<OptionType, false>> = ({
  children,
  ...props
}) => (
  <components.SingleValue {...props} className={styles["selected-option"]}>
    {children}
  </components.SingleValue>
);

const Dropdown: FC<DropdownProps> = ({
  options,
  handleChange,
  value,
  ...props
}) => {
  return (
    <div>
      <Select<OptionType>
        className={styles["select"]}
        value={value}
        options={options}
        onChange={handleChange}
        components={{
          Option,
          SingleValue,
          IndicatorSeparator: () => null,
        }}
        styles={selectStyles}
        isClearable
        {...props}
      />
    </div>
  );
};

export default Dropdown;
