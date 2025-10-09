---
sidebar_label: _pxam events
sidebar_position: 1
id: Instrumentation option 2 - pushing into _pxam array
toc_min_heading_level: 2
toc_max_heading_level: 4
title: legacy instrumentation
---
To send an event with CDL properties use the 'classic' pixall instrumentation,
and add all CDL properties into the `cdl` object.

:::warning
Using this option the developer is fully responsible for all data inside the `cdl` object.
To be fully compliant to the CDL schema and have the all features use the
<span style={{fontStyle: 'italic'}}>[instrumentation option 1](../cdl-instrumentation/getting-started.mdx).</span>
:::

#### Generic example

```js
_pxam.push({
  type: 'event',
  eventType: 'other',
  cdl: {
    application: {
      name: 'TestApp',
      version: '1.0',
      isProduction: false
    },
    eventProperties: {
      action: 'click',
      element: 'button'
    }
  }
});
```

#### Example for vlp page-view

```js
_pxam.push({
  type: 'meta-data',
  pageType: 'vlp',
  label: 'classlistnew',
  pageId: 'classlistnew',
  searchFacetZipCode: 30301,
  experimental: {
    boost: 5
  },
  cdl: {
    application: {
      componentId: 'www.kbb.com',
      name: 'KBB',
      version: '1.0',
      isProduction: true
    },
    page: {
      hierarchy: ['vlp'],
      name: 'classlistnew',
      id: 'classlistnew',
      url: 'https://www.kbb.com/cars-for-sale/all',
      referrerUrl: 'https://www.kbb.com/',
      title: 'Cars for Sale (Test Drive at Home) - Kelley Blue Book'
    },
    search: {
      zipCode: 30301
    },
    experimental: {
      boost: 5
    },
    eventProperties: {
      action : 'pageView',
      element: 'page'
    }
  }
});
```

#### Example for vlp subsequent page-view (ajax page-view)

```js
_pxam.push({
  type: 'event',
  eventType: 'ajaxPageView',
  pageType: 'vlp',
  label: 'classlistnew',
  pageId: 'classlistnew',
  searchFacetZipCode: 30301,
  experimental: {
    boost: 5
  },
  cdl: {
    application: {
      componentId: 'www.kbb.com',
      name: 'KBB',
      version: '1.0',
      isProduction: true
    },
    page: {
      hierarchy: ['vlp'], // or ['Atlanta GA', 'vlp']
      name: 'classlistnew',
      id: 'classlistnew',
      url: 'https://www.kbb.com/cars-for-sale/all/atlanta-ga?isNewSearch=true&zip=30301',
      referrerUrl: 'https://www.kbb.com/',
      title: 'Cars for Sale in Atlanta, GA (Test Drive at Home) - Kelley Blue Book'
    },
    search: {
      zipCode: 30301
    },
    experimental: {
      boost: 5
    },
    eventProperties: {
      action : 'pageView',
      element: 'page'
    }
  }
});
```
