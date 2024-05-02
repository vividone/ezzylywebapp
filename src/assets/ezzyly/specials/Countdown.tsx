import React, { FC, HTMLAttributes } from "react";
import ReactCountdown from "react-countdown";

interface ICountdownrender {
  seconds: any;
  completed?: any;
  className?: string;
  onClick?: any;
  children: React.ReactNode;
}

interface ICountdownProps extends HTMLAttributes<HTMLDivElement> {
  seconds: any;
  completed: any;
  date: Date | number;
}

// Renderer callback with condition
const Renderer = ({
  seconds,
  completed,
  className,
  ...rest
}: ICountdownrender) => {
  if (completed) {
    // Render a completed state
    return <div onClick={rest.onClick}>{rest.children}</div>;
  } else {
    // Render a countdown
    return (
      <div
        className={`bg-[#D4E7FC] w-full text-[#0D4059] rounded-2xl py-3 flex min-h-[34px] max-h-[34px] items-center justify-center min-w-[56px] max-w-[56px]
      ${className}
      `}
      >
        <span>{seconds}s</span>
      </div>
    );
  }
};

export const Countdown: FC<Partial<ICountdownProps>> = (props) => {
  return (
    <div>
      <ReactCountdown
        date={props.date}
        renderer={({ seconds, completed }) => (
          <Renderer
            completed={completed}
            seconds={seconds}
            children={props.children}
            onClick={props.onClick}
          />
        )}
      />
    </div>
  );
};
