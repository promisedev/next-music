import Layout from "../src/components/layout2";
import Styles from '../styles/about.module.css'
import Header from "../src/components/headers";
import Seo from '../src/components/seo'

const Terms = () => {
  return (
    <Layout>
      <Seo title="Cookie | Prophegos Music" description="Welcome to prophegos cookies policy." og=""/>
      <Header />
      <section className={Styles.cookies_cont}>
        <article className={Styles.cookies_body}>
          <h2>Prophegos Cookie Policy</h2>
          <p>Effective as of March 07, 2023</p>
          {/* ---- */}
          <ol>
            <li> What are cookies?</li>

            <li> How does Prophegos use cookies?</li>

            {/* <li> Updates to this Policy</li> */}
          </ol>
          {/* ---------------------- */}

          <p> Hello, and welcome to Prophegos&apos;s Cookie Policy (&quot;Policy&quot;).</p>
          <p>
            {" "}
            The objective of this Policy is to provide you, as a user of
            Prophegos&apos;s services, with clear and accessible information about
            the cookies that Prophegos uses, the role they play in helping us
            provide the best possible user experience to you.
          </p>
          {/* ----------------------------- */}
          <h3>1. What are cookies?</h3>
          <p>
            Cookies are text files which are downloaded to your device when you
            visit a website. They are useful because they allow a website to
            recognise a user&apos;s device. Cookies are also use to You can find more
            information about cookies at: <a href="www.allaboutcookies.org">www.allaboutcookies.org</a> or <a href="www.youronlinechoices.eu"> www.youronlinechoices.eu</a>.
          </p>

          {/* ----------------------------- */}
          <p>
            {" "}
            Cookies do lots of different jobs, like letting you navigate between
            pages efficiently, remembering your preferences, and generally
            improving your user experience. They can also help to ensure that
            ads you see online are more relevant to you and your interests.
          </p>
          {/* ------------------------------- */}
          <p style={{ fontWeight: "bold" }}>
            There are a few different categories of cookies, including:
          </p>
          {/* ---------------------------------------- */}
          <p>
            <strong>Session and Persistent Cookies</strong>{" "}
            <decscription>
              Session Cookies - these are cookies which expire once you close
              your web browser; and Persistent Cookies - these are cookies
              which stay on your device for a set period of time or until you
              delete them.
            </decscription>
          </p>
          {/* -------------------------------------- */}
          
          {/* ------------------------------------- */}
          <p>
            <strong>First and Third Party Cookies</strong>{" "}
            <decscription>
              <p><strong>First-party cookies</strong> - these are cookies set by the website that
              you are visiting at that time, either by us, or by a third party
              at our request;</p> 
              <p> <strong>Third-party cookies</strong> - these are cookies that
              are set by a party other than that of the website you are
              visiting. If you visit the Spotify website or use the Prophegos
              Service and another party sets a cookie through that website this
              would be a third-party cookie.</p>
            </decscription>
          </p>
          {/* ---------------*********---------------------- */}
          <h3>1. How does Prophegos use cookies?</h3>
          <p> We use cookies to improve our users Experience -  for example we use cookies to keep track of your favorite musics, and list of your playlists.</p>




        </article>
      </section>
    </Layout>
  );
};

export default Terms;





// First and Third Party Cookies

// 