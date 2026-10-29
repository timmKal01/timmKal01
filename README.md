# Hi,

I build small, pay-per-use [Apify](https://apify.com/m_ctim) actors that turn public data into something you can use: local business leads with website audits, jobs from company career boards, website tech stacks, SEC filings and official US government data. You run one, you pay per result, no subscription.

[Apify Store](https://apify.com/m_ctim) · [DEV](https://dev.to/timmkal01) · [X](https://x.com/TechTimmydcz) · [Build log](https://tidefeed.vercel.app)

## How I build them

- Official APIs and public data first. No logins, no proxies, and no getting around bot protection.
- API requests say which tool sent them, instead of pretending to be a browser.
- Rows carry a `rowType`, so a script or an AI agent can tell data from notes and errors.
- An empty input runs a working example instead of failing.

## Actors

<!-- CATALOG:START -->

**Multiple actors** live on the Apify Store. Each link opens its Store page, where you can run it.

### Leads and websites

- [Local Business Leads: Phones, Emails & Websites by City](https://apify.com/m_ctim/local-business-leads) · [code](https://github.com/timmKal01/local-business-leads)
- [Website Gap Finder: Businesses Without Websites + Audit](https://apify.com/m_ctim/website-gap-finder) · [code](https://github.com/timmKal01/website-gap-finder)
- [Tech Stack Lead Finder: Shopify, Klaviyo & 120+ Technologies](https://apify.com/m_ctim/tech-stack-lead-finder) · [code](https://github.com/timmKal01/tech-stack-lead-finder)
- [Website Tech Stack Detector: Wappalyzer Alternative](https://apify.com/m_ctim/website-tech-stack-detector) · [code](https://github.com/timmKal01/website-tech-stack-detector)
- [Website Email & Phone Extractor for Lead Gen](https://apify.com/m_ctim/website-lead-extractor) · [code](https://github.com/timmKal01/website-lead-extractor)

### Social media and trends

- [Viral Tweets Tracker: X (Twitter) Posts, Videos & Articles](https://apify.com/m_ctim/viral-tweets-tracker) · [code](https://github.com/timmKal01/viral-tweets-tracker)

### Jobs and hiring

- [ATS Jobs Scraper: Workday, Greenhouse, Lever, Ashby](https://apify.com/m_ctim/ats-jobs-aggregator) · [code](https://github.com/timmKal01/ats-jobs-aggregator)
- [Remote Jobs Scraper: Remote OK + Jobicy](https://apify.com/m_ctim/remoteok-job-scraper) · [code](https://github.com/timmKal01/remoteok-job-scraper)
- [HN Who's Hiring Scraper: Hacker News Jobs Parsed](https://apify.com/m_ctim/hn-whos-hiring-parser) · [code](https://github.com/timmKal01/hn-whos-hiring-parser)
- [Salary Data by Occupation: BLS Wages by State](https://apify.com/m_ctim/bls-occupation-wage-lookup) · [code](https://github.com/timmKal01/bls-occupation-wage-lookup)

### SEC filings and funding

- [Startup Funding Tracker: New SEC Form D Filings](https://apify.com/m_ctim/form-d-fundraising-tracker) · [code](https://github.com/timmKal01/form-d-fundraising-tracker)
- [SEC 8-K Tracker: M&A, Bankruptcy & Exec Changes](https://apify.com/m_ctim/sec-8k-material-event-tracker) · [code](https://github.com/timmKal01/sec-8k-material-event-tracker)
- [SEC Full-Text Search: Any Filing, Any Keyword](https://apify.com/m_ctim/sec-filing-full-text-search) · [code](https://github.com/timmKal01/sec-filing-full-text-search)
- [Reg A+ Offering Tracker: New SEC 1-A Filings](https://apify.com/m_ctim/sec-reg-a-offering-tracker) · [code](https://github.com/timmKal01/sec-reg-a-offering-tracker)

### US government data

- [Federal Contract Awards: GovCon Leads & Intel](https://apify.com/m_ctim/federal-contract-award-tracker) · [code](https://github.com/timmKal01/federal-contract-award-tracker)
- [Nonprofit 990 Lookup: Revenue & Expenses by EIN](https://apify.com/m_ctim/nonprofit-990-tracker) · [code](https://github.com/timmKal01/nonprofit-990-tracker)
- [NPI Lookup: Verify Healthcare Providers](https://apify.com/m_ctim/npi-registry-lookup) · [code](https://github.com/timmKal01/npi-registry-lookup)
- [GSA Per Diem Rates: Lodging & Meals by City](https://apify.com/m_ctim/gsa-per-diem-rate-lookup) · [code](https://github.com/timmKal01/gsa-per-diem-rate-lookup)
- [US Economic Calendar: CPI, NFP, GDP & FOMC Dates](https://apify.com/m_ctim/us-economic-calendar) · [code](https://github.com/timmKal01/us-economic-calendar)

### Monitoring and alerts

- [Hacker News Mention Tracker by Keyword](https://apify.com/m_ctim/hacker-news-keyword-tracker) · [code](https://github.com/timmKal01/hacker-news-keyword-tracker)
- [Blog & RSS Feed Monitor: New Post Alerts](https://apify.com/m_ctim/rss-feed-tracker) · [code](https://github.com/timmKal01/rss-feed-tracker)
- [App Store Review Tracker: New Ratings & Reviews](https://apify.com/m_ctim/app-store-review-tracker) · [code](https://github.com/timmKal01/app-store-review-tracker)
- [SSL Certificate Monitor: New Certs & Subdomains](https://apify.com/m_ctim/certificate-transparency-monitor) · [code](https://github.com/timmKal01/certificate-transparency-monitor)

### Developer and research data

- [New GitHub Repos Finder by Topic & Language](https://apify.com/m_ctim/github-repo-discovery-tracker) · [code](https://github.com/timmKal01/github-repo-discovery-tracker)
- [PyPI Download Stats: Python Package Trends](https://apify.com/m_ctim/pypi-download-stats-tracker) · [code](https://github.com/timmKal01/pypi-download-stats-tracker)
- [arXiv Paper Tracker: New Preprints by Topic](https://apify.com/m_ctim/arxiv-preprint-tracker) · [code](https://github.com/timmKal01/arxiv-preprint-tracker)
- [PubMed Alert: New Papers by Keyword & Author](https://apify.com/m_ctim/pubmed-research-alert) · [code](https://github.com/timmKal01/pubmed-research-alert)

### Weather and hazards

- [US Weather Forecast & Alerts API (NWS)](https://apify.com/m_ctim/us-weather-tracker) · [code](https://github.com/timmKal01/us-weather-tracker)
- [Field Ops Risk Briefing: Weather & GPS Conditions](https://apify.com/m_ctim/field-operations-risk-briefing) · [code](https://github.com/timmKal01/field-operations-risk-briefing)
- [Space Weather Alerts: Aurora & Radio Blackout](https://apify.com/m_ctim/space-weather-alert) · [code](https://github.com/timmKal01/space-weather-alert)
- [Tsunami Warning Tracker: Active NOAA Alerts](https://apify.com/m_ctim/noaa-tsunami-warning-tracker) · [code](https://github.com/timmKal01/noaa-tsunami-warning-tracker)

### Sports

- [Sports Betting Odds: Pinnacle & Bovada + Arbitrage](https://apify.com/m_ctim/sports-odds-comparison) · [code](https://github.com/timmKal01/sports-odds-comparison)
- [Live Football Scores: Bundesliga, Champions League & More](https://apify.com/m_ctim/live-football-scores) · [code](https://github.com/timmKal01/live-football-scores)

<!-- CATALOG:END -->
