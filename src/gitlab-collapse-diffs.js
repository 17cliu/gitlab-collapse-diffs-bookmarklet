function foldAll () {
    // As of Gitlab 11.2.3, diffs on a commit page use `.fa-caret-down`,
    // whereas diffs on a merge request page use `.ic-chevron-down`.
    var els = document.querySelectorAll('.diff-toggle-caret.ic-chevron-down, .diff-toggle-caret.fa-caret-down');

    for (var i = 0, n = els.length; i < n; i++) {
        els[i].dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    }
}
