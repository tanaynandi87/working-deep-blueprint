# Working Deep · Stage 2 Blueprint

Web app for the Stage 2 blueprint (Draft 1). Private client work: do not make this repository public.

## Run
Double-click `start.command` (or `docker compose up -d`), then open http://localhost:8108.
Stop with `stop.command` (or `docker compose down`).

## Edit
- `site/data.js`: the blueprint content (pieces, system design, decisions, scope, price)
- `site/data-visual.js`: workflows as flowcharts, piece dependencies, week view, Gantt dates
- `site/app.js`: how it's drawn
- `site/style.css`: look and feel

The `site` folder is mounted into the container, so you can edit and refresh without a rebuild.

`13_STAGE2_BLUEPRINT_DRAFT1.md` is a markdown export of the content.
