import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

/**
 * Starlight puts a synthetic "Overview" entry at the top of every table of
 * contents, pointing at the page title (`#_top`). The developer articles open
 * with a real "Overview" section, as Apple's sample-code pages do, so the two
 * would appear twice. Drop the synthetic entry: the table of contents then
 * lists exactly the sections on the page.
 */
export const onRequest = defineRouteMiddleware((context) => {
  const { toc } = context.locals.starlightRoute;
  if (toc && toc.items[0]?.slug === '_top') {
    toc.items.shift();
  }
});
