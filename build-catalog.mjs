// Rebuilds the catalog in this folder's README.md (the timmKal01/timmKal01 GitHub profile README) from the account's
// own actor records, which carry the current title even when the public Store search is still showing an old one.
// Only public actors are listed. Read only on Apify; writes README.md between the CATALOG markers.
//   node github-profile/build-catalog.mjs
import fs from 'fs';
import os from 'os';
import path from 'path';

const token = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.apify', 'auth.json'), 'utf8')).token;
const h = { Authorization: `Bearer ${token}` };
const readme = new URL('./README.md', import.meta.url);

// Section order and membership. A public actor missing from here still gets listed, under "More".
const SECTIONS = [
    ['Leads and websites', ['local-business-leads', 'website-gap-finder', 'tech-stack-lead-finder', 'website-tech-stack-detector', 'website-lead-extractor']],
    ['Social media and trends', ['viral-tweets-tracker']],
    ['Jobs and hiring', ['ats-jobs-aggregator', 'remoteok-job-scraper', 'hn-whos-hiring-parser', 'bls-occupation-wage-lookup']],
    ['SEC filings and funding', ['form-d-fundraising-tracker', 'sec-8k-material-event-tracker', 'sec-filing-full-text-search', 'sec-reg-a-offering-tracker']],
    ['US government data', ['federal-contract-award-tracker', 'nonprofit-990-tracker', 'npi-registry-lookup', 'gsa-per-diem-rate-lookup', 'us-economic-calendar']],
    ['Monitoring and alerts', ['hacker-news-keyword-tracker', 'rss-feed-tracker', 'app-store-review-tracker', 'certificate-transparency-monitor']],
    ['Developer and research data', ['github-repo-discovery-tracker', 'pypi-download-stats-tracker', 'arxiv-preprint-tracker', 'pubmed-research-alert']],
    ['Weather and hazards', ['us-weather-tracker', 'field-operations-risk-briefing', 'space-weather-alert', 'noaa-tsunami-warning-tracker']],
    ['Sports', ['sports-odds-comparison', 'live-football-scores']],
];

const list = (await (await fetch('https://api.apify.com/v2/acts?my=true&limit=200', { headers: h })).json()).data.items;
const pub = {};
for (const a of list) {
    // The list endpoint doesn't report isPublic reliably, so read each actor's own record.
    const d = (await (await fetch(`https://api.apify.com/v2/acts/${a.id}`, { headers: h })).json()).data;
    if (d.isPublic) pub[d.name] = d.title;
}

const line = (name) => `- [${pub[name]}](https://apify.com/m_ctim/${name}) · [code](https://github.com/timmKal01/${name})`;
const placed = new Set();
// No count here: the user changed it to "Multiple actors" on GitHub (2026-10-28).
const parts = ['**Multiple actors** live on the Apify Store. Each link opens its Store page, where you can run it.'];
for (const [title, names] of SECTIONS) {
    const live = names.filter((n) => pub[n]);
    live.forEach((n) => placed.add(n));
    if (live.length) parts.push(`### ${title}\n\n${live.map(line).join('\n')}`);
}
const rest = Object.keys(pub).filter((n) => !placed.has(n)).sort();
if (rest.length) parts.push(`### More\n\n${rest.map(line).join('\n')}`);

const text = fs.readFileSync(readme, 'utf8');
const start = '<!-- CATALOG:START -->';
const end = '<!-- CATALOG:END -->';
if (!text.includes(start) || !text.includes(end)) throw new Error('README.md is missing the CATALOG markers');
const next = `${text.slice(0, text.indexOf(start) + start.length)}\n\n${parts.join('\n\n')}\n\n${text.slice(text.indexOf(end))}`;
fs.writeFileSync(readme, next);
console.log(`${Object.keys(pub).length} public actors, ${rest.length} under "More"${rest.length ? `: ${rest.join(', ')}` : ''}`);
