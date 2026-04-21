import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string;
  helperText?: string;
  textarea?: boolean;
}

export const FormField = ({
  label,
  name,
  id,
  placeholder,
  required,
  value,
  onChange,
  error,
  helperText,
  textarea,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
      {required && <p className="text-red-500 text-xs">*</p>}
      </Label>

      {textarea ? (
        <Textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      ) : (
        <Input
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      )}

      {helperText && <p className="text-xs">{helperText}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};