import { Header } from "@/components/header";
import { HomePage } from "@/components/home-page";
import { Footer } from "@/components/footer";


export const HomePageLayout = ()=> {
  return (
    <>
      <Header/>
       <main>
           <HomePage/>
       </main>
        <Footer/>
    </>
  );
}
