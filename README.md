# Getting Started with React Open Market

To get started, clone this repository:

`git clone https://github.com/ofernandoavila/react-open-market`

Pull request are welcome!

## For deploy into a Apache server

To deploy this project into an Apache server, there is a couple config to change. Add into `package.json`: 
`"homepage" : "http://YOUR_DOMAIN.com"`

And change into `App.tsx`, add into `<Router>` a property call `basename` with the root path of your project. E.g.:

`<Router basename={"/"} />`
 
 To turn everything on, is advertise to add a `.htaccess` file by the side of `index.html`, with the following rules:

```htaccess
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

## (Optional) PHP API in development

There is an API avaible to use while development in apache server. You can easily find in [react-open-market-api-php](https://github.com/ofernandoavila/react-open-market-php-api), just need to clone into your `www` or `htdocs` repository.