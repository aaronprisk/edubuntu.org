/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const newsList = document.getElementById('news-list');
    const newsLoading = document.getElementById('news-loading');

    if (newsList && newsLoading) {
        loadNews(newsList, newsLoading);
    }

});

async function loadNews(newsList, newsLoading) {
    try {
        const indexResponse = await fetch('news/index.json', { cache: 'no-store' });
        if (!indexResponse.ok) {
            throw new Error('Could not load news index.');
        }

        const indexData = await indexResponse.json();
        const files = Array.isArray(indexData.posts) ? indexData.posts : [];

        if (files.length === 0) {
            newsLoading.textContent = 'No news posts yet.';
            return;
        }

        const posts = await Promise.all(files.map(async (fileName) => {
            const postResponse = await fetch(`news/${fileName}`, { cache: 'no-store' });
            if (!postResponse.ok) {
                return null;
            }

            const markdown = await postResponse.text();
            const parsed = parseFrontMatter(markdown);

            return {
                fileName,
                title: parsed.meta.title || fileName,
                date: parsed.meta.date || '',
                summary: parsed.meta.summary || '',
                html: renderMarkdown(parsed.content),
            };
        }));

        const validPosts = posts.filter(Boolean).sort((a, b) => {
            const dateA = new Date(a.date || 0).getTime();
            const dateB = new Date(b.date || 0).getTime();
            return dateB - dateA;
        });

        newsLoading.remove();

        if (validPosts.length === 0) {
            newsList.innerHTML = '<p class="news-status text-muted">No news posts could be loaded.</p>';
            return;
        }

        newsList.innerHTML = validPosts.map((post) => {
            const formattedDate = formatDate(post.date);
            return `
                <article class="news-card">
                    <header class="news-header">
                        <h3 class="news-title">${escapeHtml(post.title)}</h3>
                        ${formattedDate ? `<p class="news-date">${formattedDate}</p>` : ''}
                        ${post.summary ? `<p class="news-summary">${escapeHtml(post.summary)}</p>` : ''}
                    </header>
                    <details class="news-details">
                        <summary>Read update</summary>
                        <div class="news-body">${post.html}</div>
                    </details>
                </article>
            `;
        }).join('');
    } catch (error) {
        newsLoading.textContent = 'Unable to load news right now.';
    }
}

function parseFrontMatter(markdown) {
    const frontMatterMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
    if (!frontMatterMatch) {
        return { meta: {}, content: markdown };
    }

    const meta = {};
    const frontMatter = frontMatterMatch[1];
    frontMatter.split('\n').forEach((line) => {
        const separatorIndex = line.indexOf(':');
        if (separatorIndex <= 0) {
            return;
        }

        const key = line.slice(0, separatorIndex).trim().toLowerCase();
        const value = line.slice(separatorIndex + 1).trim();
        meta[key] = value;
    });

    return {
        meta,
        content: markdown.slice(frontMatterMatch[0].length),
    };
}

function renderMarkdown(content) {
    if (window.marked && typeof window.marked.parse === 'function') {
        return window.marked.parse(content);
    }

    return `<p>${escapeHtml(content).replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>')}</p>`;
}

function formatDate(value) {
    if (!value) {
        return '';
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}
