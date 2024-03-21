import css from './index.module.scss'
import Image from 'next/image'
import cn from "classnames";
import logo from "../../../public/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className={cn(css.footer)}>
        <div className={cn(css.copyrights)} >
            <div className={cn(css.copyrights_header)}>
                <Image
                    src={logo}
                    alt="copyrights"
                />
            </div>
            <div className={cn(css.copyrights_desc)}>© 2023 Connectives Financial.</div>
            <div className={cn(css.copyrights_desc)}>All rights reserved</div>
        </div>

        <nav className={cn(css.nav_menu)}>
            <div className={cn(css.nav_block)}>
                <h3 className={cn(css.nav_block_title)}>Resources</h3>
                <a className={cn(css.nav_block_link)}>About Us</a>
                <a className={cn(css.nav_block_link)}>Terms & Conditions</a>
                <a className={cn(css.nav_block_link)}>Privacy Policy</a>
            </div>

            <div className={cn(css.nav_block)}>
                <h3 className={cn(css.nav_block_title)}>Support</h3>
                <a className={cn(css.nav_block_link)}>Support Center</a>
                <a className={cn(css.nav_block_link)}>24/7 Chat Support</a>
                <a className={cn(css.nav_block_link)}>Contact us</a>
                <a className={cn(css.nav_block_link)}>FAQ</a>
            </div>

            <div className={cn(css.nav_block)}>
                <h3 className={cn(css.nav_block_title)}>Community</h3>
                <a className={cn(css.nav_block_link)}>Discord</a>
                <a className={cn(css.nav_block_link)}>Facebook</a>
                <a className={cn(css.nav_block_link)}>Twitter</a>
                <a className={cn(css.nav_block_link)}>Instagram</a>
            </div>
        </nav>
    </footer>
  );
}
