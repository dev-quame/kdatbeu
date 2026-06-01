import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router";
import { cn } from "./ui/utils";

type SmartLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  }
>;

export function SmartLink({
  href,
  className,
  children,
  target,
  rel,
  ...props
}: SmartLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const isAnchor = href.startsWith("#");

  if (isExternal || isAnchor) {
    return (
      <a
        href={href}
        target={isExternal ? target ?? "_blank" : target}
        rel={isExternal ? rel ?? "noreferrer" : rel}
        className={cn(className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={cn(className)} {...props}>
      {children}
    </Link>
  );
}
