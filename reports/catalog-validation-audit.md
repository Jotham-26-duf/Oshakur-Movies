# Catalog validation issue report

Audit of the current `data/movies.ts`, `data/series.ts`, and `data/episodes.ts` using `npm run validate:catalog` (62 reported issues). No catalog records were changed during this audit.

## Duplicate movie slugs

Each pair has different metadata and/or watch links but shares a route slug. Movie detail lookup uses the first matching slug, so both cards open the same first record. This affects record-specific watch/download links, metadata, and slug-keyed favourite/view metrics.

| Slug | Conflicting records | Impact |
| --- | --- | --- |
| `blood-brothers` | Movie ID `58` “Blood Brothers”; ID `291` “BLOOD BROTHERS” | Navigation collision. The cards cannot open their distinct records. Record 58 has stream links; record 291 has different download links and no stream links. |
| `from-paris-with-love` | Movie ID `88` “From Paris with Love”; ID `306` “FROM PARIS WITH LOVE” | Navigation collision. The cards cannot open their distinct records; watch/download sources differ. |
| `the-unborn` | Movie ID `197`; ID `279` | Navigation collision. Both cards open the first record. Their dates/metadata differ; they share the same download URL. |

## Duplicate series slugs

Series detail lookup also selects the first matching slug. Both cards therefore open the same detail record. Episode lookup uses `seriesSlug`, so episodes for these slugs are shared by both duplicate cards; their distinct descriptions/metadata cannot be navigated to independently. Favorites and metrics are keyed by slug and therefore shared.

| Slug | Conflicting records | Episode/playback impact |
| --- | --- | --- |
| `a-bona-fide-killer` | Series ID `10` and ID `150` | Cards collide on detail route. 29 episodes reference this slug and appear under whichever duplicate record is found first. |
| `lady-voyeur` | Series ID `123` and ID `128` | Cards collide on detail route. 20 episodes reference this slug and are shared by the first matching detail record. |
| `squid-game` | Series ID `127` and ID `144` | Cards collide on detail route. 16 episodes reference this slug and are shared by the first matching detail record. |

## Duplicate episode IDs

These are repeated IDs in `data/episodes.ts`; each pair was compared on ID, title, series slug, episode number, description, and stream/download fields. “Exact” means those fields match. The `shadow-love` pairs differ because the later entry fills in `downloadUrl` with the same URL used by `streamUrl`, while the earlier entry leaves it empty. The episode page keys React rows by episode ID, so duplicate IDs can produce duplicate-key reconciliation issues, though both entries render and their playback URLs remain available.

| ID | Records | Assessment |
| --- | --- | --- |
| 1544 | GANGS OF MANILA S2 E56 (2 entries) | Exact duplicate; same download URL. |
| 1545 | GANGS OF MANILA S2 E57 (2 entries) | Exact duplicate; same download URL. |
| 1546 | GANGS OF MANILA S2 E58 (2 entries) | Exact duplicate; same download URL. |
| 1547 | GANGS OF MANILA S2 E59 (2 entries) | Exact duplicate; same download URL. |
| 1548 | GANGS OF MANILA S2 E60 (2 entries) | Exact duplicate; same download URL. |
| 1549 | GANGS OF MANILA S2 E61 (2 entries) | Exact duplicate; same download URL. |
| 1550 | GANGS OF MANILA S2 E62 (2 entries) | Exact duplicate; same download URL. |
| 1551 | GANGS OF MANILA S2 E63 (2 entries) | Exact duplicate; same download URL. |
| 1552 | GANGS OF MANILA S2 E67 (2 entries) | Exact duplicate; same download URL. |
| 1553 | GANGS OF MANILA S2 E68 (2 entries) | Exact duplicate; same download URL. |
| 1554 | GANGS OF MANILA S2 E69 (2 entries) | Exact duplicate; same download URL. |
| 1555 | GANGS OF MANILA S2 E70 (2 entries) | Exact duplicate; same download URL. |
| 1556 | GANGS OF MANILA S2 E71 (2 entries) | Exact duplicate; same download URL. |
| 1557 | GANGS OF MANILA S2 E72 (2 entries) | Exact duplicate; same download URL. |
| 1558 | GANGS OF MANILA S2 E73 (2 entries) | Exact duplicate; same download URL. |
| 1559 | GANGS OF MANILA S2 E74 (2 entries) | Exact duplicate; same download URL. |
| 1636 | SHADOW LOVE E1 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1637 | SHADOW LOVE E2 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1638 | SHADOW LOVE E3 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1639 | SHADOW LOVE E4 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1640 | SHADOW LOVE E5 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1641 | SHADOW LOVE E6 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1642 | SHADOW LOVE E7 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1643 | SHADOW LOVE E8 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1644 | SHADOW LOVE E9 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1645 | SHADOW LOVE E10 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1646 | SHADOW LOVE E11 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1647 | SHADOW LOVE E12 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1648 | SHADOW LOVE E13 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1649 | SHADOW LOVE E14 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1650 | SHADOW LOVE E15 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1651 | SHADOW LOVE E16 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1652 | SHADOW LOVE E17 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1653 | SHADOW LOVE E18 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1654 | SHADOW LOVE E19 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1655 | SHADOW LOVE E20 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1656 | SHADOW LOVE E21 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1657 | SHADOW LOVE E22 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1658 | SHADOW LOVE E23 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1659 | SHADOW LOVE E24 (2 entries) | Same stream URL; second entry also has it as download URL. |
| 1660 | SHADOW LOVE E25 (2 entries) | Same stream URL; second entry also has it as download URL. |

## Episodes referencing absent series slugs

The series detail page calls `notFound()` when its series slug is absent, and episodes are only loaded after finding a series. Therefore the listed episodes have no reachable series detail/episode page through the current catalog. Their stored stream/download URLs are present but cannot be reached through the website's episode UI until the intended series mapping is established.

| Missing `seriesSlug` | Episode IDs and titles | Potential candidate and confidence |
| --- | --- | --- |
| `true-story` | 365–371: Episode 1 through Episode 6; Episode 7 - Finale | There is a series record titled “false Story” with slug `false-story`, but available names conflict (“TRUE_STORY” in links versus “false Story” in catalog). Do not remap without owner confirmation/source verification. |
| `coven-academy` | 1628–1635: COVEN ACADEMY - Season 1 Episodes 1–8 | A series record titled “COVEN ACADEMY SEASON 1” exists under slug `coven-academy-season-1`; this is a strong candidate, but changing the reference still requires confirmation that these records belong together. |

## Counts and impact summary

- Movies: 341 records; no duplicate movie IDs reported.
- Series: 155 records; no duplicate series IDs reported.
- Episodes: 2,210 records; 41 duplicated ID values, each appearing twice.
- Duplicate movie slug groups: 3.
- Duplicate series slug groups: 3.
- Missing series references: 15 episodes across 2 absent slugs.
- Total validator issues: 62 (6 duplicate-slug groups + 41 duplicate episode ID groups + 15 missing references).
- The duplicate slug groups cause real detail-route collisions. The duplicate episode IDs do not remove the rows but can destabilize React rendering. The missing references make those 15 episodes unreachable from series detail pages.
- No IDs, slugs, records, or watch/download links were changed. Live Supabase verification is separate; this report is based on the checked-out catalog files.
