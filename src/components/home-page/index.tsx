import css from './index.module.scss'
import cn from "classnames";
import Image from "next/image";
import dashboardPageImage from "../../../public/assets/home/dashboard_page.png";
import illustration_1 from "../../../public/assets/home/illustration_1.svg";
import illustration_2 from "../../../public/assets/home/illustration_2.svg";
import illustration_3 from "../../../public/assets/home/illustration_3.svg";
import illustration_4 from "../../../public/assets/home/illustration_4.svg";
import flow_line from "../../../public/assets/home/flow_line.svg";
import classNames from "classnames";
import { Button } from "@/components/ui/button";
import { SignUpDialog } from "@/components/dialogs/sign-up-dialog";
import { useState } from "react";

export const HomePage = () => {
    const [signUpDialogOpened, setSignUpDialogOpened]= useState<boolean>(false);

  return (
    <div className={cn(css.main_container)}>
       <section className={cn(css.title_block)}>
           <h1 className={cn(css.title)}>Unlocking your money
               for today&apos;s needs!</h1>
           <p className={cn(css.description)}>We create a unique opportunity to access your employer benefits to unlock no risk, no obligation cash for our clients.</p>

           <div className={classNames(css.buttons)}>
               <Button onClick={()=> {setSignUpDialogOpened(true)}}>Sign up</Button>

               <Button variant={'outline'}>Log in</Button>
           </div>

           <Image
               data-aos="zoom-in"
               className={cn(css.dashboard_page_image)}
               priority
               src={dashboardPageImage}
               alt="dashboardPageImage"
           />
       </section>

        <section className={cn(css.how_works_block)}>
            <h1 className={cn(css.how_works_title)}>How it works</h1>

            <div className={cn(css.explanation_block_list)}>

                <div className={cn(css.explanation_block)}>
                    <div className={cn(css.explanation_left_block)}>
                        <div className={cn(css.explanation_number_block)}>
                            <div className={cn(css.explanation_number)}>01</div>
                            <Image
                                className={cn(css.flow_line)}
                                priority
                                src={flow_line}
                                alt="flow_line_1"
                            />
                        </div>
                        <div className={cn(css.explanation_info)}>
                            <div className={cn(css.explanation_title)}>Create an account</div>
                            <p className={cn(css.explanation_description)}>Set your account by creating a username and password. Then Provide us with some quick and simple employment and personal information for verification and we are on our way to funding</p>
                        </div>
                    </div>
                    <Image
                        data-aos-offset="300"
                        data-aos="fade-left"
                        className={cn(css.explanation_image)}
                        priority
                        src={illustration_1}
                        alt="illustration_1"
                    />
                </div>

                <div className={cn(css.explanation_block, css.explanation_reversed)}>
                    <div className={cn(css.explanation_left_block)}>
                        <div className={cn(css.explanation_number_block)}>
                            <div className={cn(css.explanation_number)}>02</div>
                            <Image
                                className={cn(css.flow_line,css.flow_line_reversed)}
                                priority
                                src={flow_line}
                                alt="flow_line_1"
                            />
                        </div>
                        <div className={cn(css.explanation_info)}>
                            <div className={cn(css.explanation_title)}>Calculate cash eligibility</div>
                            <p className={cn(css.explanation_description)}>We use your eligible participation amount + our algorithmic calculated rate of return to determine your payout eligibility.</p>
                        </div>
                    </div>
                    <Image
                        data-aos="fade-right"
                        data-aos-offset="300"
                        className={cn(css.explanation_image_reversed)}
                        priority
                        src={illustration_2}
                        alt="illustration_2"
                    />


                </div>

                <div className={cn(css.explanation_block)}>
                    <div className={cn(css.explanation_left_block)}>
                        <div className={cn(css.explanation_number_block)}>
                            <div className={cn(css.explanation_number)}>03</div>
                            <Image
                                className={cn(css.flow_line)}
                                priority
                                src={flow_line}
                                alt="flow_line_1"
                            />
                        </div>
                        <div className={cn(css.explanation_info)}>
                            <div className={cn(css.explanation_title)}>Get paid!</div>
                            <p className={cn(css.explanation_description)}>We put your eligible cash out value in your profile escrow.  You can cash out to your bank account whenever you need your money!</p>
                        </div>
                    </div>
                    <Image
                        data-aos="fade-left"
                        data-aos-offset="300"
                        className={cn(css.explanation_image)}
                        priority
                        src={illustration_3}
                        alt="illustration_3"
                    />
                </div>

                <div className={cn(css.explanation_block, css.explanation_reversed)}>
                    <div className={cn(css.explanation_left_block)}>
                        <div className={cn(css.explanation_number_block)}>
                            <div className={cn(css.explanation_number)}>04</div>
                        </div>
                        <div className={cn(css.explanation_info)}>
                            <div className={cn(css.explanation_title)}>You transfer stock following the
                                vesting period</div>
                            <p className={cn(css.explanation_description)}>At the end of the ESOP maturity period, you transfer the individual stocks purchased to us.</p>
                        </div>
                    </div>
                    <Image
                        data-aos="fade-right"
                        data-aos-offset="300"
                        className={cn(css.explanation_image_reversed)}
                        priority
                        src={illustration_4}
                        alt="illustration_4"
                    />
                </div>
            </div>
        </section>
        <SignUpDialog  open={signUpDialogOpened} onClose={()=>{
            setSignUpDialogOpened(false)
        }}/>
    </div>
  );
}
