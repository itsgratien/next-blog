import Head from "next/head";

const Error = () => {
  return (
    <>
      <Head>
        <title>Server Error</title>
      </Head>
      <div className="errorPage">
        <style jsx>{`
          .errorPage {
            display: flex;
            min-height: 100vh;
            justify-content: center;
            align-items: center;
          }
          .error {
            font-weight: bold;
          }
        `}</style>
        <div className="error">An Error Occurred</div>
      </div>
    </>
  );
};
export default Error;
