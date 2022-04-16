import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MoonVoca from "../public/MoonVoca.svg";
import Text from "../public/text.svg";

const Home: NextPage = () => {
  return (
    <div className='px-[2rem]'>
      <Head>
        <title>MoonVoca</title>
        <meta name='description' content='Made by AIDEN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-[100vh] flex-1 flex flex-col'>
        <div className='relative pt-4 lg:pt-4 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200'>
          <div className='flex justify-center items-center w-[230px]'>
            <Image src={MoonVoca} width='80' height='60' />
            <Image
              src={Text}
              width='110'
              height='70'
              style={{
                marginLeft: "-20px",
                marginTop: "5px",
              }}
            />
          </div>
          <div className='flex items-center'>
            <button
              type='button'
              className='text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300'>
              <span className='sr-only'>Search</span>
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                aria-hidden='true'>
                <path d='m19 19-3.5-3.5'></path>
                <circle cx='11' cy='11' r='6'></circle>
              </svg>
            </button>
            <div className='-my-1 ml-2 -mr-1 md:hidden'>
              <button
                type='button'
                className='text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'>
                <span className='sr-only'>Navigation</span>
                <svg width='24' height='24' fill='none' aria-hidden='true'>
                  <path
                    d='M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'></path>
                </svg>
              </button>
            </div>
            <div className='hidden md:flex items-center'>
              <nav>
                <ul className='flex items-center space-x-8'>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/docs/installation'>
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://tailwindui.com'
                      className='hover:text-sky-500 dark:hover:text-sky-400'>
                      Components
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/blog'>
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <div className='flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800'>
                <a
                  href='https://github.com/tailwindlabs/tailwindcss'
                  className='block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'>
                  <span className='sr-only'>Github</span>
                  <svg
                    viewBox='0 0 16 16'
                    className='w-5 h-5'
                    fill='currentColor'
                    aria-hidden='true'>
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='flex flex-1 p-[2rem] border-t-[#eaeaea] border-t border-solid justify-center items-center'>
        <a
          className='flex justify-center items-center flex-grow'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Made by{" "}
          <span className='ml-[0.5rem] font-bold text-[16px]'>AIDEN</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
