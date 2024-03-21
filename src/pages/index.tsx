import Head from "next/head";
import { HomePageLayout } from "@/layouts/home-page-layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>El platform</title>
        <meta name="description" content="El platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageLayout></HomePageLayout>
    </>
  );
}
