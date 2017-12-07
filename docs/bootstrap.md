# Use bootstrap in project

We're using bootstrap 3.3.7 in this angular scss project.

**angular-cli.json**:

```diff
"styles": [
+  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.scss"
],
```

**styles.scss**:

```diff
+ @import '~bootstrap/dist/css/bootstrap.min.css';
```

## reference

<https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/>