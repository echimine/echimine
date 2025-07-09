import clsx from "clsx";

import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "link"
    | "body-base"
    | "body-sm"
    | "date";
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "a"
    | "div";
  href?: string;
  weight?: "light" | "regular" | "medium" | "bold" | "black";
  className?: string;
  theme?: "primary" | "secondary" | "tercery";
  fontChoice?: "font-archivo" | "font-excon" | "font-sentient";
  children: React.ReactNode;
}

export const Typographie = forwardRef<HTMLElement, Props>(
  (
    {
      variant = "body-base",
      component: Component = "div",
      weight = "regular",
      theme = "primary",
      fontChoice = "font-archivo",
      className,
      href,
      children,
      ...rest
    },
    ref
  ) => {
    let variantStyles = "";
    let colorStyles = "";
    let weightStyles = "";

    switch (theme) {
      case "primary":
        colorStyles = "text-primary";
        break;
      case "secondary":
        colorStyles = "text-white";
        break;
      case "tercery":
        colorStyles = "text-tercery";
        break;
    }

    switch (weight) {
      case "light":
        weightStyles = "font-light";
        break;
      case "regular":
        weightStyles = "font-normal";
        break;
      case "medium":
        weightStyles = "font-medium";
        break;
      case "bold":
        weightStyles = "font-bold";
        break;
      case "black":
        weightStyles = "font-black";
        break;
    }

    switch (variant) {
      case "h1":
        variantStyles = "text-6xl";
        break;
      case "h2":
        variantStyles = "text-3xl";
        break;
      case "h3":
        variantStyles = "text-2xl";
        break;
      case "h4":
        variantStyles = "text-xl";
        break;
      case "h5":
        variantStyles = "text-md";
        break;
      case "h6":
        variantStyles = "text-lg";
        break;
      case "link":
        variantStyles = "text-link";
        break;
      case "body-base":
        variantStyles = "text-base";
        break;
      case "body-sm":
        variantStyles = "text-sm";
        break;
      case "date":
        variantStyles = "text-date";
        break;
    }

    const linkStyles =
      Component === "a"
        ? "underline decoration-[#fcd309] hover:text-[#fcd309] transition"
        : "";

    const classes = clsx(
      variantStyles,
      colorStyles,
      weightStyles,
      fontChoice,
      linkStyles,
      className
    );

    if (Component === "a" && href) {
      const isInternal = href.startsWith("/");

      return isInternal ? (
        <Link ref={ref as any} to={href} className={classes} {...rest}>
          {children}
        </Link>
      ) : (
        <a
          ref={ref as any}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Component ref={ref as any} className={classes} {...rest}>
        {children}
      </Component>
    );
  }
);

Typographie.displayName = "Typographie";
