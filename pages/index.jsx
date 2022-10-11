import React, { Fragment } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Corehub</title>
      </Head>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-poppins font-semibold text-slate-600">
          Welcome to Corehub!
        </h1>
      </div>
    </Fragment>
  );
}

export default Index;

