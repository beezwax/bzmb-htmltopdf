# bzmb-he

A [bzBond-server](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#bzbond-server) microbond to create PDF from HTML code using [puppeteer](https://www.npmjs.com/package/puppeteer).

## Installation

On a FileMaker server with bzBond-server installed run the following command:

`/var/www/bzbond-server/bin/install-microbond.sh bzmb-htmltopdf https://github.com/beezwax/bzmb-htmltopdf`

See the [bzBond-server documentation](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#installing-microbonds) for more details on installation.

## Usage

The bzmb-htmltopdf microbond provides one route

### bzmb-htmltopdf-convert

In a server-side FileMaker script run `bzBondRelay` script with parameters in the following format:

```
{
  "mode": "PERFORM_JAVASCRIPT",

  "route": "bzmb-htmltopdf-convert",

  "customMethod": "POST",

  "customBody": {

    // Required. The html to convert
    "html": "string",

    // Opitonal. PDF options, see https://pptr.dev/api/puppeteer.pdfoptions
    "options": "object"
  }
}

```

The base64 encoded PDF can be accessed via `Get ( ScriptResult )`:
`JSONGetElement ( Get ( ScriptResult ); "response.result" )`
