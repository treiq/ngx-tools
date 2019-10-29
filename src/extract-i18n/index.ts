import {chain, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';

export default function extractI18n(_options: any): Rule {
  return chain([
    (tree: Tree, _context: SchematicContext) => {
      let i18n: any = {};
      const pathContext: string = _options.path || './src/app/';
      const fileSuffix: string = _options.fileSuffix || '.i18n.json';
      const outFile: string = _options.outFile || './src/assets/i18n/en.json';
      tree.getDir(pathContext)
      .visit((filePath) => {
        if (!filePath.endsWith(fileSuffix)) {
          return;
        }
        _context.logger.info(filePath);
        const buffer: Buffer = tree.read(filePath)!;
        i18n = {
          ...i18n,
          ...JSON.parse(buffer.toString())
        }
      });
      if (tree.exists(outFile)) {
        tree.overwrite(outFile, JSON.stringify(i18n))
      } else {
        tree.create(outFile, JSON.stringify(i18n))
      }
      console.log(i18n);
      return tree;
    }
  ]);
}
