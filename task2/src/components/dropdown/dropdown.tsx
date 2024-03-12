import { useEffect, useRef, useState } from "react";
import { OptionType } from "../../types/types";
import arrow from "../../icons/arrow.svg";

interface IDropdown {
  initialValue?: OptionType;
  onValueUpdate?: (value: any) => void;
  options: OptionType[];
  placeholder?: string;
  disabled?: boolean;
  id?: string;
}

const Dropdown = ({
  placeholder,
  disabled,
  initialValue,
  options,
  onValueUpdate,
  id,
}: IDropdown) => {
  const [dropdown, setDropdown] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<OptionType | null>(
    initialValue || null
  );

  const ref = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (onValueUpdate !== undefined && selected) {
      onValueUpdate(selected.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (dropdown && ulRef.current && selected) {
      (
        ulRef.current.childNodes[options.indexOf(selected)] as HTMLLIElement
      ).focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdown]);

  // handle outside clicks
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // callback function for event listener
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdown((prev) => (prev ? false : null));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      // cleanup callback function
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleItemClick = (option: OptionType) => {
    setSelected(option);
    setDropdown(!dropdown);
  };

  const getStyle = () => {
    if (selected) {
      return "text-[#BAC1CC] border hover:border-[rgba(84, 244, 223, 1)] cursor-pointer";
    }
    if (disabled) {
      return "border-slate-slate-300 text-[#BAC1CC] cursor-not-allowed";
    }
    return "text-[#BAC1CC] cursor-pointer";
  };

  return (
    <>
      <div ref={ref} className="w-60 relative">
        <button
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={dropdown ? dropdown : false}
          aria-controls={`${id}-listbox`}
          aria-label={selected ? selected.label : placeholder || "ACCOUNT"}
          disabled={disabled}
          id={id}
          onClick={handleClick}
          className={`w-60 text-[#BAC1CC] bg-[#34C4F61A] font-mono border border-[#54F4DF] 
          transition-all rounded focus:outline-2 ${getStyle()}`}
        >
          <div className="flex flex-row justify-center items-center h-[34px]">
            <p>{selected ? selected.label : placeholder || "ACCOUNT"}</p>
          </div>
        </button>

        {dropdown && (
          <ul
            ref={ulRef}
            role="listbox"
            className="bg-[#2B2C36] rounded mt-1.5 font-mono max-h-34 overflow-y-auto z-50 absolute w-full"
          >
            {options &&
              options.map((option: OptionType) => (
                <li
                  role="option"
                  aria-selected={selected === option}
                  key={option.label}
                  aria-label={option.label}
                  tabIndex={dropdown ? 0 : -1}
                  className={`w-full flex flex-row justify-between items-center text-[#BAC1CC] p-5 border-t border-t-sky-50 cursor-pointer hover:bg-neutral-300/25 focus:outline-2
                        ${selected === option && "bg-neutral-300/15"}
                `}
                  onClick={() => handleItemClick(option)}
                >
                  {option.label}
                  <div
                    className={`bg-[url(${arrow})] bg-no-repeat bg-center w-[15px] h-[15px]`}
                  />
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
