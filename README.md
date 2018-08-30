# Gitlab Collapse Diffs Bookmarklet

A bookmarklet that allows you to collapse all diffs with one click on Gitlab commit and merge request pages.


## Installation

On your browser's bookmark bar, create a new bookmark, name it something reasonable (like "collapse diffs"), and set the following as the bookmark location:

```js
javascript:(function(){for(var e=document.querySelectorAll(".diff-toggle-caret.ic-chevron-down, .diff-toggle-caret.fa-caret-down"),c=0,l=e.length;c<l;c++)e[c].dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))})();
```

Now, you can click on the bookmark to collapse all diffs on a page with one click. It may take a few moments if you have a lot of diffs on the page.

![Usage demo](/docs/img/usage-demo.gif)

That's it!

Tested on Gitlab 11.2.3. [Source](/src/gitlab-collapse-diffs.js).
