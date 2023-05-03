import classNames from "classnames";

type ButtonSize = "md" | "lg";

type ButtonColor = "white" | "primary" | "disabled" | "dark" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specifies the size of the button.
   * @type {ButtonSize}
   */
  size: ButtonSize;

  /**
   * Specifies the color of the button.
   * @type {ButtonColor}
   */
  color: ButtonColor;

  /**
   * Optional whether the button is processing a long task.
   * @type {boolean}
   */
  loading?: boolean;

  /**
   * Optional disabled the button .
   * @type {boolean}
   */
  disabled?: boolean;
}

const buttonSize = {
  md: ["h-10", "w-20", "text-sm"],
  lg: ["h-12", "w-28", "text-base"],
};

const buttonColor = {
  white: ["text-gray-400", "bg-white", "hover:bg-gray-50"],
  primary: ["text-white", "bg-primary-500", "hover:bg-blue-400"],
  ghost: [
    "text-secondary",
    "bg-secondary",
    "hover:shadow dark:shadow-gray-600",
  ],
  disabled: ["bg-blue-400", "text-white", "cursor-not-allowed"],
  dark: ["text-white", "bg-300", "hover:bg-500"],
};

export function Button({
  color,
  children,
  disabled,
  loading,
  size,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      className={classNames(
        props.className,
        "rounded-md flex items-center justify-center gap-2 ",
        buttonSize[size],
        buttonColor[disabled ? "disabled" : color]
      )}
    >
      <span>{children}</span>
    </button>
  );
}

Button.defaultProps = {
  color: "primary",
  disabled: false,
  loading: false,
  size: "md",
};
