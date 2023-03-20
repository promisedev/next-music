import Head from 'next/head'

const Seo=({title,description,og})=>{

 return(
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 )   
}

export default Seo