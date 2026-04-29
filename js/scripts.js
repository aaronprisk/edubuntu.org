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
        const siteBasePath = getSiteBasePath();
        const indexResponse = await fetch(`${siteBasePath}news/index.json`, { cache: 'no-store' });
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
            const postResponse = await fetch(`${siteBasePath}news/${fileName}`, { cache: 'no-store' });
            if (!postResponse.ok) {
                return null;
            }

            const markdown = await postResponse.text();
            const parsed = parseFrontMatter(markdown);

            return {
                fileName,
                id: fileNameToId(fileName),
                title: parsed.meta.title || fileName,
                date: parsed.meta.date || '',
                summary: parsed.meta.summary || '',
                html: renderMarkdown(parsed.content, `${siteBasePath}news/${fileName}`),
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

        const hasHash = Boolean(window.location.hash.slice(1));

        newsList.innerHTML = validPosts.map((post, index) => {
            const formattedDate = formatDate(post.date);
            const openByDefault = index === 0 && !hasHash;
            return `
                <article class="news-card" id="${post.id}">
                    <header class="news-header">
                        <h3 class="news-title">
                            ${escapeHtml(post.title)}
                            <a class="news-permalink" href="#${post.id}" aria-label="Permalink to ${escapeHtml(post.title)}">&#x1F517;</a>
                        </h3>
                        ${formattedDate ? `<p class="news-date">${formattedDate}</p>` : ''}
                        ${post.summary ? `<p class="news-summary">${escapeHtml(post.summary)}</p>` : ''}
                    </header>
                    <details class="news-details"${openByDefault ? ' open' : ''}>
                        <summary>Read update</summary>
                        <div class="news-body">${post.html}</div>
                    </details>
                </article>
            `;
        }).join('');

        activateHashedPost();

        newsList.querySelectorAll('.news-details').forEach((details) => {
            details.addEventListener('toggle', () => {
                if (details.open) {
                    const article = details.closest('article[id]');
                    if (article) {
                        history.replaceState(null, '', `#${article.id}`);
                    }
                }
            });
        });
    } catch (error) {
        newsLoading.textContent = 'Unable to load news right now.';
    }
}

function fileNameToId(fileName) {
    return fileName
        .replace(/\.md$/i, '')
        .replace(/[\/\\]/g, '-')
        .replace(/[^a-z0-9-]/gi, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();
}

function activateHashedPost() {
    const hash = window.location.hash.slice(1);
    if (!hash) {
        return;
    }

    const target = document.getElementById(hash);
    if (!target) {
        return;
    }

    const details = target.querySelector('.news-details');
    if (details) {
        details.open = true;
    }

    setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

window.addEventListener('hashchange', activateHashedPost);

function getSiteBasePath() {
    const pathName = window.location.pathname;
    if (pathName.endsWith('/')) {
        return pathName;
    }

    const lastSlashIndex = pathName.lastIndexOf('/');
    return lastSlashIndex >= 0 ? pathName.slice(0, lastSlashIndex + 1) : '/';
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

function renderMarkdown(content, postUrl) {
    const fallbackHtml = `<p>${escapeHtml(content).replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>')}</p>`;

    if (window.marked && typeof window.marked.parse === 'function') {
        window.marked.setOptions({ gfm: true });
        const alignmentBlocks = [];
        const contentWithTokens = extractAlignmentBlocks(content, alignmentBlocks);
        let html = window.marked.parse(contentWithTokens);
        html = replaceAlignmentBlockTokens(html, alignmentBlocks);
        html = rewriteImageUrls(html, postUrl);
        html = styleTables(html);
        return html;
    }

    return fallbackHtml;
}

function styleTables(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    doc.querySelectorAll('table').forEach((table) => {
        table.classList.add('table', 'table-bordered', 'table-striped');
        const wrapper = doc.createElement('div');
        wrapper.classList.add('table-responsive', 'news-table-wrapper');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
    return doc.body.innerHTML;
}

function rewriteImageUrls(html, postUrl) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = doc.querySelectorAll('img');

    images.forEach((image) => {
        const rawSrc = image.getAttribute('src');
        const resolvedSrc = resolveRelativeUrl(rawSrc, postUrl);
        if (resolvedSrc) {
            image.setAttribute('src', resolvedSrc);
        }

        image.setAttribute('loading', 'lazy');
        image.classList.add('news-image');
        applyImageSizing(image);
    });

    return doc.body.innerHTML;
}

function applyImageSizing(image) {
    const alt = image.getAttribute('alt') || '';
    const title = image.getAttribute('title') || '';
    const hints = [];

    const pipeIndex = alt.lastIndexOf('|');
    if (pipeIndex > -1) {
        const candidate = alt.slice(pipeIndex + 1).trim();
        if (looksLikeImageSizeHints(candidate)) {
            hints.push(candidate);
            image.setAttribute('alt', alt.slice(0, pipeIndex).trim());
        }
    }

    if (looksLikeImageSizeHints(title)) {
        hints.push(title.trim());
        image.removeAttribute('title');
    }

    if (hints.length === 0) {
        return;
    }

    const tokens = hints
        .flatMap((hint) => hint.split(','))
        .map((token) => token.trim())
        .filter(Boolean);

    let imageAlignment = '';

    tokens.forEach((token) => {
        const normalizedToken = token.toLowerCase();
        if (normalizedToken === 'left' || normalizedToken === 'center' || normalizedToken === 'right') {
            imageAlignment = normalizedToken;
            return;
        }

        const percentOrPx = token.match(/^(\d{1,4}(?:\.\d+)?)\s*(%|px)$/i);
        if (percentOrPx) {
            image.style.width = `${percentOrPx[1]}${percentOrPx[2].toLowerCase()}`;
            image.style.height = 'auto';
            return;
        }

        const dimensions = token.match(/^(\d{1,5})\s*x\s*(\d{1,5})$/i);
        if (dimensions) {
            const width = dimensions[1];
            const height = dimensions[2];
            image.setAttribute('width', width);
            image.setAttribute('height', height);
            image.style.width = `${width}px`;
            image.style.height = 'auto';
        }
    });

    image.classList.remove('news-image-align-left', 'news-image-align-center', 'news-image-align-right');
    if (imageAlignment) {
        image.classList.add(`news-image-align-${imageAlignment}`);
    }
}

function looksLikeImageSizeHints(value) {
    if (!value) {
        return false;
    }

    return value
        .split(',')
        .map((token) => token.trim())
        .filter(Boolean)
        .every((token) => /^(\d{1,4}(?:\.\d+)?\s*(%|px)|\d{1,5}\s*x\s*\d{1,5}|left|center|right)$/i.test(token));
}

function extractAlignmentBlocks(content, alignmentBlocks) {
    const blockPattern = /(^|\n)::: ?(left|center|right)\s*\n([\s\S]*?)\n:::(?=\n|$)/gi;

    return content.replace(blockPattern, (match, linePrefix, alignment, blockContent) => {
        const token = `%%ALIGN_BLOCK_${alignmentBlocks.length}%%`;
        const parsedBlock = window.marked.parse(blockContent.trim());
        alignmentBlocks.push({
            token,
            alignment: alignment.toLowerCase(),
            html: parsedBlock,
        });

        return `${linePrefix}${token}`;
    });
}

function replaceAlignmentBlockTokens(html, alignmentBlocks) {
    let output = html;

    alignmentBlocks.forEach((block) => {
        const wrapper = `<div class="news-align news-align-${block.alignment}">${block.html}</div>`;
        output = output.replace(`<p>${block.token}</p>`, wrapper);
        output = output.replace(block.token, wrapper);
    });

    return output;
}

function resolveRelativeUrl(rawUrl, baseUrl) {
    if (!rawUrl) {
        return '';
    }

    const trimmedUrl = rawUrl.trim();
    if (/^(javascript|data):/i.test(trimmedUrl)) {
        return '';
    }

    try {
        // Make `images/...` in posts always resolve to the shared news/images folder.
        if (trimmedUrl.startsWith('images/')) {
            const siteBasePath = getSiteBasePath();
            return new URL(`news/${trimmedUrl}`, window.location.origin + siteBasePath).toString();
        }

        return new URL(trimmedUrl, window.location.origin + baseUrl).toString();
    } catch (error) {
        return trimmedUrl;
    }
}

function formatDate(value) {
    if (!value) {
        return '';
    }

    // YYYY-MM-DD strings are parsed as UTC midnight by the Date constructor,
    // which shifts the displayed date back one day in timezones behind UTC.
    // Replace hyphens with slashes so the string is treated as local time.
    const localValue = String(value).trim().replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$1/$2/$3');
    const date = new Date(localValue);
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
