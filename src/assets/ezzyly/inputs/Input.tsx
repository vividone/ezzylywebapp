import React, { FC, SVGProps, useState } from 'react';
import EyeIcon from '../assets/inputs/EyeIcon';
import EyeSlashIcon from '../assets/inputs/EyeSlash';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'primary' | 'labeled';
  labelName: string;
  name:string;
  error: boolean; // boolean
  errorIcon: SVGProps<SVGSVGElement> | any;
  lefticon: SVGProps<SVGSVGElement> | any;
  activelefticon: SVGProps<SVGSVGElement> | any;
  righticon: SVGProps<SVGSVGElement> | any;
  activerighticon: SVGProps<SVGSVGElement> | any;
  containerClassName: string;
  autoComplete: string;
}

export const Input: FC<Partial<Props>> = ({
  className,
  containerClassName,
  // so it does not throw a warning of dom elm
  labelName,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const {
    variant,
    lefticon,
    activelefticon,
    error,
    errorIcon,
    righticon,
    activerighticon,
    ...rest
  } = props;
  switch (props.variant) {
    case 'primary':
      return (
        <div
          className={`flex items-center   rounded-lg h-12 gap-x-3  px-4 border transition-all ease-in duration-100 
        ${
          props.error
            ? 'border-[#FFAFAF] shadow-glow'
            : focus
            ? 'bg-[#FEFEFE]  border text-[#CFD9DE] border-[#6FAEF6] shadow-focus-xl'
            : 'bg-[#FCFDFD]  border-[#CFD9DE] '
        }
        ${containerClassName}
        `}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          {(props.lefticon || false) && !props.error && !focus && (
            <props.lefticon />
          )}
          {(props.activelefticon || false) && !props.error && focus && (
            <props.activelefticon />
          )}
          {props.error && props.errorIcon ? <props.errorIcon /> : <> </>}
          <input
            className={`!outline-none bg-transparent  transition-all duration-300 ease-in-out  text-[#356075] w-full placeholder:text-base
            ${className ? className : ''}
            ${
              focus
                ? ' placeholder:text-[#86A0AC4D]'
                : '  placeholder:text-[#869FAC]'
            }
            placeholder:text-[15px] lg:placeholder:text-base
            `}
            {...rest}
          />
          {props.righticon && !focus && <props.righticon />}
          {props.activerighticon && !focus && <props.activerighticon />}
        </div>
      );
    default:
      return (
        <div className="flex flex-col space-y-3 " role="searchbox">
          <p
            className={`text-sm transition-all ease-in duration-100 ${
              focus ? 'text-[#147AF0]' : 'text-[#869FAC]'
            }`}
          >
            {labelName}
          </p>
          <div
            className={`flex items-center rounded-lg h-12 gap-x-3  px-4 border transition-all ease-in duration-100 
            ${
              props.error
                ? 'border-[#FFAFAF] shadow-glow'
                : focus
                ? 'bg-[#FEFEFE]  border text-[#CFD9DE] border-[#6FAEF6] shadow-focus-xl'
                : 'bg-[#FCFDFD]  border-[#CFD9DE] '
            }
        ${containerClassName}
        `}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          >
            {(props.lefticon || false) && !props.error && !focus && (
              <props.lefticon />
            )}
            {(props.activelefticon || false) && !props.error && focus && (
              <props.activelefticon />
            )}
            {props.error && props.errorIcon ? <props.errorIcon /> : <> </>}
            <input
              className={`outline-none 
              bg-transparent  transition-all duration-300 ease-in-out
               w-full   ${
                 focus
                   ? ' placeholder:text-[#86A0AC4D]'
                   : '  placeholder:text-[#869FAC]'
               }
            ${focus ? 'text-[#171A1C]' : 'text-[#356075]'}
            placeholder:text-[15px] lg:placeholder:text-base
            ${className}
            `}
              {...rest}
            />
            {props.righticon && !focus && <props.righticon />}
            {props.activerighticon && !focus && <props.activerighticon />}
          </div>
        </div>
      );
  }
};

// password field would have to be kind of different i did not want to use variant to seperate it

export const PasswordInput: FC<Partial<Props>> = ({
  className,
  containerClassName,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    error,
    errorIcon,
    activelefticon,
    activerighticon,
    lefticon,
    righticon,
    ...rest
  } = props;
  return (
    <div
      className={`flex items-center   rounded-lg h-12 gap-x-3  px-4 border transition-all ease-in duration-100 
      ${
        props.error
          ? 'border-[#FFAFAF] shadow-glow'
          : focus
          ? 'bg-[#FEFEFE]  border text-[#CFD9DE] border-[#6FAEF6] shadow-focus-xl'
          : 'bg-[#FCFDFD]  border-[#CFD9DE] '
      }
    ${containerClassName}
    `}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {(props.lefticon || false) && !props.error && !focus && (
        <props.lefticon />
      )}
      {(props.activelefticon || false) && !props.error && focus && (
        <props.activelefticon />
      )}
      {props.error && props.errorIcon ? <props.errorIcon /> : <> </>}
      <input
        type={`${showPassword ? 'text' : 'password'}`}
        className={`${
          showPassword ? 'text-base' : 'text-xl'
        } outline-none bg-transparent  w-full placeholder:text-[15px] lg:placeholder:text-base
        ${
          focus
            ? ' placeholder:text-[#86A0AC4D]'
            : '  placeholder:text-[#869FAC]'
        }
        ${className}
        `}
        {...rest}
      />
      {!showPassword && (
        <EyeIcon
          onClick={() => setShowPassword(true)}
          style={{ cursor: 'pointer' }}
        />
      )}
      {showPassword && (
        <EyeSlashIcon
          onClick={() => setShowPassword(false)}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
};
