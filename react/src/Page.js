import React from 'react';
import Options from './Options';
import Main from './Main';

const Page = ({ matches }) => (
  <div class="uk-container uk-text-center">
    <div>
      <ul class="uk-subnav uk-subnav-pill" uk-switcher="">
        <li>
          <a>Main</a>
        </li>
        <li>
          <a>Options</a>
        </li>
      </ul>

      <ul class="uk-switcher uk-margin">
        <li>
          <Main matches={matches} />
        </li>
        <li>
          <Options />
        </li>
      </ul>
    </div>
  </div>
);

export default Page;
