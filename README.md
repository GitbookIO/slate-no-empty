# slate-no-empty

[![NPM version](https://badge.fury.io/js/slate-no-empty.svg)](http://badge.fury.io/js/slate-no-empty)
[![Linux Build Status](https://travis-ci.org/GitbookIO/slate-no-empty.png?branch=master)](https://travis-ci.org/GitbookIO/slate-no-empty)

A Slate plugin to prevent the document from being empty.

### Install

```
npm install slate-no-empty --save
```

### Usage

```js
import NoEmpty from 'slate-no-empty'

const plugins = [
  NoEmpty('paragraph')
  // or NoEmpty(Block.create({ type: 'image', isVoid: true }))
]
```
