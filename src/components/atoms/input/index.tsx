 type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    disabled: boolean;
    type: string;
 };
 
 const Input = ({value, type, placeholder, disabled, onChange}: InputProps) => {

    return (
        <input
        type={type}
        className="bg-transparent text-light-on-surface border w-full px-[8px] py-[8px] min-h-[px] text-[16px] border-light-on-surface-dark"
        value={value}
        onChange={(e) =>{
         onChange(e.target.value);
      }}
        placeholder={placeholder}
        disabled={disabled}
        />
    )
 };
 export default Input;