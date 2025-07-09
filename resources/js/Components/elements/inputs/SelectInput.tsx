import Select from 'react-select';
import makeAnimated from 'react-select/animated';

interface SelectInputProps {
    options: { label: string; value: string }[];
    isFocused?: boolean;
    className?: string;
    selectedOption?: any;
    setData?: any;
    placeholder?: string;
}

const SelectInput = ({
    options,
    selectedOption,
    className = '',
    isFocused = false,
    setData,
    placeholder,
    ...props
}: SelectInputProps) => {
    const animatedComponents = makeAnimated();

    const handleChange = (selectedOption: any) => {
        setData(selectedOption ? selectedOption.value : null);
    };

    const customStyles = {
        clearIndicator: (provided: any) => ({
            ...provided,
            cursor: 'pointer',
        }),
        menuPortal: (base: any) => ({
            ...base,
            zIndex: 9999,
        }),
        menu: (provided: any) => ({
            ...provided,
            maxHeight: '200px',
            overflowY: 'auto',
        }),
        control: (provided: any) => ({
            ...provided,
            minHeight: "40px" ,
            zIndex: '100px',
        }),
        menuList: (styles: any) => ({
            ...styles,
            maxHeight: "200px",
            overflowY: "auto",
        }),

    };
    const filterOption = (candidate: any, input: string) => {
        const lowerInput = input.toLowerCase();
        return candidate.data.label.toLowerCase().includes(lowerInput);
    };

    return (
        <Select
            className={` ${className} rounded !outline-transparent !ring-transparent border-hidden`}
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            components={animatedComponents}
            isClearable
            styles={customStyles}
            menuPortalTarget={document.body}
            filterOption={filterOption}
        />
    );
};

export default SelectInput;
