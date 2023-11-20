import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/monokai-sublime.css';

// ----------------------------------------------------------------------

hljs.configure({
    languages: ['javascript', 'jsx', 'sh', 'bash', 'html', 'scss', 'css', 'json'],
});

if (typeof window !== 'undefined') {
    window.hljs = hljs;
}
