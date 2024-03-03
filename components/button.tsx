import ButtonSvg from "@/app/assets/svg/ButtonSvg";
import Link from "next/link";

interface ButtonProps {
    style: string;
    href?: string;
    white: boolean;
    px: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({style, href, white, px, children}: ButtonProps) => {

    const classes = `button relative inline-flex items-center justify-center h-11 tracking-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${style || ''}`

    const spanClasses = "relative z-10"

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const renderLink = () => (
        <Link href={href ? href : ""} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </Link>
    )

    return href ? renderLink() : renderButton()
}
 
export default Button;