import Head from "next/head";
import { ReactNode } from "react";

import { theme } from '@/constants/themes'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";


type Props = {
  children: ReactNode;
};

export default function GlobalLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>The movie index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
