# 1: export / import vs module.exports / require

## import/export is the new way to share cpode in javascript. It loads things before the code runs which makes it faster and better for removing unused code

## require/module.exports is the older way, mostly used in Node.js. It loads things while the code is running (at runtime), so its more flexible but less optimized.

# 2: Why choose ES modules for modern Node projects?

## Better Performance because ESM is loaded at compile time, it supports optimizations like tree-stacking , which can reduce bundle size.