import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { ReactElement } from 'react';
import React from 'react';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render(): ReactElement {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
