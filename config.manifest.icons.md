# Icons

## Icons update

The [create-vxt](https://www.npmjs.com/package/create-vxt) cli provides a script to update icons on your icon input.

```shell
npm run update-icons
```

* This will try to use icon.png from `/public/images/` directory as default input
* If no such a file exits, it will use icon-128.png as image input
* Sizes with `16/32/48/128` will be outputted to `public/images/`
* The default filename format is `icon-[size].png` (Be sure to keep the same format in your manifest file)

## References

More about icons, see [manifest/icons](https://developer.chrome.google.cn/docs/extensions/reference/manifest/icons).