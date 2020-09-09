/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Send us a email at [joran@qreate.io.](${docUrl(
        'mailto:joran@qreate.io',
      )})`,
      title: 'Send us a message',
    },
    {
      content: 'Create a issue on our [Github page for the mobile app](https://github.com/qreate/qreate-newstime-mobile)',
      title: 'Open a mobile issue',
    },
    {
      content: 'Create a issue on our [Github page for the API](https://github.com/qreate/qreate-newstime-api)',
      title: 'Open a api issue',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This product was created by qreate apps in Amsterdam, you can contact us/ask questions via the following methods.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
