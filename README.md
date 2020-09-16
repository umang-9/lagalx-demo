## yb-website

Next.js Website for yunban.co powered by [Prismic](https://prismic.io).

## Development

```
yarn dev
```

## Structure

### `Page` type

A `Page` type should explicitly map to a page in the `/pages` dir.

The `UID` of the `Page` Document should match the file url / slug itself.

For example:

The `Page` Document for `/pages/terms-of-use.jsx` has a UID of 'terms-of-use' in Prismic.

## Environment Variables

### Runtime

| Env Var        | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `ALLOW_ROBOTS` | Set to `'1'` to serve a robots.txt that allows SEO indexing. |
