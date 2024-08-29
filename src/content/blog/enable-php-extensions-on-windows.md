---
title: Enable PHP extensions on Windows
date: 2024-08-29
status: published
postNumber: 13
tags: [php, windows]
---

I wanted to create Symfony project on Windows 10, but got error:

```console
 The openssl extension is required for SSL/TLS protection but is not available. If you can not en
  able the openssl extension, you can disable this error, at your own risk, by setting the 'disabl
  e-tls' option to true.
```

Then I enabled the extension by removing the `;` in front of this line: `;extension=openssl` so it becomes `extension=openssl`, but it still didn't work.

Finaly I've found [answer on Stack Overflow](https://stackoverflow.com/a/42285957/1079002) to also setup folder path with php extensions on Windows. We need to remove `;` here also:

```console
; Directory in which the loadable extensions (modules) reside.
; https://php.net/extension-dir
;extension_dir = "./"
; On windows:
;extension_dir = "ext"
```

so the line becomes:

```console
extension_dir = "ext"
```
