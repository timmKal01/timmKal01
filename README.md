# Hi,

I build small, pay-per-use [Apify](https://apify.com/m_ctim) actors that turn public data into something you can use: local business leads with website audits, jobs from company career boards, website tech stacks, SEC filings and official US government data. You run one, you pay per result, no subscription.

[Apify Store](https://apify.com/m_ctim) · [DEV](https://dev.to/timmkal01) · [X](https://x.com/TechTimmydcz) · [Build log](https://tidefeed.vercel.app)

## How I build them

- Official APIs and public data first. Google Maps is the exception: it turns away cloud servers, so Google Maps Leads and Website Gap Finder read it through Apify's residential proxies, and that cost is in the price.
- No account logins or session cookies. The X actor runs on the official X API with your own key.
- Requests to official APIs say which tool sent them.
- Rows carry a `rowType`, so a script or an AI agent can tell data from notes and errors.
- An empty input runs a working example instead of failing.

## Actors

<!-- CATALOG:START -->

**Multiple actors** live on the Apify Store. Each link opens its Store page, where you can run it.

### Leads and websites

- [Website Gap Finder: Businesses Without Websites + Audit](https://apify.com/m_ctim/website-gap-finder) · [code](https://github.com/timmKal01/website-gap-finder)
- [Tech Stack Detector & Lead Finder: Wappalyzer Alternative](https://apify.com/m_ctim/tech-stack-lead-finder) · [code](https://github.com/timmKal01/tech-stack-lead-finder)

### Events

- [Eventbrite, Meetup & Luma Events Scraper by City](https://apify.com/m_ctim/events-scraper) · [code](https://github.com/timmKal01/events-scraper)

### Social media and trends

- [Viral Tweets Tracker: X (Twitter) Posts, Videos & Articles](https://apify.com/m_ctim/viral-tweets-tracker) · [code](https://github.com/timmKal01/viral-tweets-tracker)

### Jobs and hiring

- [ATS & Remote Jobs Scraper: Workday, Greenhouse, Lever, Ashby](https://apify.com/m_ctim/ats-jobs-aggregator) · [code](https://github.com/timmKal01/ats-jobs-aggregator)
- [HN Who's Hiring Scraper: Hacker News Jobs Parsed](https://apify.com/m_ctim/hn-whos-hiring-parser) · [code](https://github.com/timmKal01/hn-whos-hiring-parser)
- [Salary Data by Occupation: BLS Wages by State](https://apify.com/m_ctim/bls-occupation-wage-lookup) · [code](https://github.com/timmKal01/bls-occupation-wage-lookup)

### SEC filings and funding

- [Startup Funding Tracker: New SEC Form D Filings](https://apify.com/m_ctim/form-d-fundraising-tracker) · [code](https://github.com/timmKal01/form-d-fundraising-tracker)
- [SEC 8-K Tracker: M&A, Bankruptcy & Exec Changes](https://apify.com/m_ctim/sec-8k-material-event-tracker) · [code](https://github.com/timmKal01/sec-8k-material-event-tracker)
- [SEC Full-Text Search: Any Filing, Any Keyword](https://apify.com/m_ctim/sec-filing-full-text-search) · [code](https://github.com/timmKal01/sec-filing-full-text-search)
- [Reg A+ Offering Tracker: New SEC 1-A Filings](https://apify.com/m_ctim/sec-reg-a-offering-tracker) · [code](https://github.com/timmKal01/sec-reg-a-offering-tracker)

### US government data

- [SAM.gov Open Bids & Federal Contract Awards: GovCon Leads](https://apify.com/m_ctim/federal-contract-award-tracker) · [code](https://github.com/timmKal01/federal-contract-award-tracker)
- [Nonprofit 990 Lookup: Revenue & Expenses by EIN](https://apify.com/m_ctim/nonprofit-990-tracker) · [code](https://github.com/timmKal01/nonprofit-990-tracker)
- [NPI Lookup: Verify Healthcare Providers](https://apify.com/m_ctim/npi-registry-lookup) · [code](https://github.com/timmKal01/npi-registry-lookup)
- [GSA Per Diem Rates: Lodging & Meals by City](https://apify.com/m_ctim/gsa-per-diem-rate-lookup) · [code](https://github.com/timmKal01/gsa-per-diem-rate-lookup)
- [US Economic Calendar: CPI, NFP, GDP & FOMC Dates](https://apify.com/m_ctim/us-economic-calendar) · [code](https://github.com/timmKal01/us-economic-calendar)

### Monitoring and alerts

- [Hacker News Mention Tracker by Keyword](https://apify.com/m_ctim/hacker-news-keyword-tracker) · [code](https://github.com/timmKal01/hacker-news-keyword-tracker)
- [Blog & RSS Feed Monitor: New Post Alerts](https://apify.com/m_ctim/rss-feed-tracker) · [code](https://github.com/timmKal01/rss-feed-tracker)
- [SSL Certificate Monitor: New Certs & Subdomains](https://apify.com/m_ctim/certificate-transparency-monitor) · [code](https://github.com/timmKal01/certificate-transparency-monitor)

### Developer and research data

- [New GitHub Repos Finder by Topic & Language](https://apify.com/m_ctim/github-repo-discovery-tracker) · [code](https://github.com/timmKal01/github-repo-discovery-tracker)
- [PyPI Download Stats: Python Package Trends](https://apify.com/m_ctim/pypi-download-stats-tracker) · [code](https://github.com/timmKal01/pypi-download-stats-tracker)
- [arXiv Paper Tracker: New Preprints by Topic](https://apify.com/m_ctim/arxiv-preprint-tracker) · [code](https://github.com/timmKal01/arxiv-preprint-tracker)
- [PubMed Alert: New Papers by Keyword & Author](https://apify.com/m_ctim/pubmed-research-alert) · [code](https://github.com/timmKal01/pubmed-research-alert)

### Weather and hazards

- [US Weather Forecast & Alerts API (NWS)](https://apify.com/m_ctim/us-weather-tracker) · [code](https://github.com/timmKal01/us-weather-tracker)
- [Space Weather Alerts: Aurora & Radio Blackout](https://apify.com/m_ctim/space-weather-alert) · [code](https://github.com/timmKal01/space-weather-alert)
- [Tsunami Warning Tracker: Active NOAA Alerts](https://apify.com/m_ctim/noaa-tsunami-warning-tracker) · [code](https://github.com/timmKal01/noaa-tsunami-warning-tracker)

### Sports

- [Sports Betting Odds: Pinnacle & Bovada + Arbitrage](https://apify.com/m_ctim/sports-odds-comparison) · [code](https://github.com/timmKal01/sports-odds-comparison)

### More

- [Company Buying Signals: Hiring, Tech & Contacts](https://apify.com/m_ctim/company-buying-signal-report) · [code](https://github.com/timmKal01/company-buying-signal-report)

<!-- CATALOG:END -->
