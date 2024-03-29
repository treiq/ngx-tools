# ngx-tools

Angular command line tool to facilitate application development and build.

## Install
``npm i -D @treiq/ngx-tools``

## Usage
In root fo your Angular project you can run ``ng generate @treiq/ngx-tools:<command>`` or alias ``ng g @treiq/ngx-tools:<command>`` where `<commands>` are list of commands enumerated below.
Example : ``ng generate @treiq/ngx-tools:i18n-merge`` or alias ``ng g @treiq/ngx-tools:i18n-merge``

## Commands
### i18n-merge
Merge i18n JSON files in one.
`ng g @treiq/ngx-tools:i18n-merge`
#### Arguments
| Name          	| Description                                   	| Default value |
|-----------------	|--------------------------------------------------	|--------------------------------|
| cwd           	| The current working directory in which to search. |./src/app/|
| pattern       	| File pattern selection.                           |.i18n.json$|
| output         	| Output file path that will contain all merged value.|./src/assets/i18n/en.json|

## Testing
In your project, link the @treiq/ngx-tools we just built:

``npm link $PATH_TO_SCHEMATIC_PROJECT``

Replace **$PATH_TO_SCHEMATIC_PROJECT** with the path to the **@treiq/ngx-tools** project’s root. Note that users will install instead of linking, this is just to iterate faster locally while developing.
Note that users will install instead of linking, this is just to iterate faster locally while developing.
Once your schematic project is linked, you can use ng generate to call your schematics:

`ng g @treiq/ngx-tools:i18n-merge`
