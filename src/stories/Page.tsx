import React from 'react';

import Link from 'next/link';
import Form from "next/form";

export const Page: React.FC = () => {
  return (<>
    <Link href="/">Test-Link</Link>
    <Form action="/">
      <input type="text" name="test" id="test" />
      <button type="submit">Submit</button>
    </Form>
  </>
  );
};
