import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import cn from "classnames";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

interface Props {
    open: boolean;
    onClose: (event?: 'sda')=>void
}

const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    confirmPassword: z.string().min(2).max(50),
})

export const SignUpDialog = ({open, onClose}: Props) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

    const handleSubmit = (event: any) => {
        console.log(event);
    }
  return (
      <Dialog open={open} onOpenChange={(open)=> {onClose()}}>
          <DialogContent>
              <DialogHeader>
                  <DialogTitle className={cn('sm:text-center','mb-6')}>Sign up</DialogTitle>
                  <Separator className={cn('w-[calc(100%+3rem)]','-ml-6','mt-0')}/>
              </DialogHeader>
              <Form {...form}>
                 <form onSubmit={form.handleSubmit(handleSubmit)}>
                     <div className={cn('flex flex-col gap-5')}>
                         <FormField
                             control={form.control}
                             name={'email'}
                             render={({field}) => (
                                 <FormItem>
                                     <FormLabel className={cn('text-text-5')}>Enter your work email</FormLabel>
                                     <FormControl>
                                         <Input {...field} placeholder={'Enter your work email'}></Input>
                                     </FormControl>
                                 </FormItem>
                             )}
                         />

                         <FormField
                             control={form.control}
                             name={'password'}
                             render={({field}) => (
                                 <FormItem>
                                     <FormLabel >Enter your password</FormLabel>
                                     <FormControl>
                                         <Input  {...field} placeholder={'Enter your password'}></Input>
                                     </FormControl>
                                 </FormItem>
                             )}
                         />

                         <FormField
                             control={form.control}
                             name={'confirmPassword'}
                             render={({field}) => (
                                 <FormItem>
                                     <FormLabel>Re-enter your password</FormLabel>
                                     <FormControl>
                                         <Input {...field} placeholder={'Re-enter your password'}></Input>
                                     </FormControl>
                                 </FormItem>
                             )}
                         />
                     </div>

                     <div className={cn('text-text-4 text-xs text-center mt-8')}>
                         By continuing, you agree to the <a className={cn('text-text-3 text-xs p-0 cursor-pointer') } >Terms of Use</a> and <a className={cn('text-text-3 text-xs p-0 cursor-pointer')}>Privacy Policy</a>
                     </div>

                   <div className={cn('mt-4 flex justify-center')}>
                       <Button type={"submit"} disabled={!form.formState.isValid}>Continue</Button>
                   </div>

                     <div className={cn('text-text-1 font-medium text-sm text-center mt-8')}>
                         Have an account?  <a className={cn('text-text-3 p-0 cursor-pointer') } >Sign in</a>
                     </div>
                 </form>
              </Form>
          </DialogContent>
      </Dialog>
  );
}
