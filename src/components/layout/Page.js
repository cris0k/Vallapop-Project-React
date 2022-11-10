import { Fragment } from 'react';

const Page = ({ title, children }) => {
  return (
    <Fragment>
        <h1>{title}</h1>
        <section>{children}</section>
    </Fragment>
  );
};

export default Page;