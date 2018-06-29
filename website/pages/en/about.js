/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}


class About extends React.Component {
    render() {

  
      return (
        <div className="docMainWrapper wrapper">
          <Container className="mainContainer documentContainer postContainer">
            <div className="post">
              <header className="postHeader">
                <h1>About me</h1>
              </header>
              <li><a href="https://github.com/web1992">Github</a></li>
              <li> web1992 at foxmail.com</li>
              <li>QQ:554933654</li>
            </div>
          </Container>
        </div>
        
      );
    }
  }
  
  module.exports = About;