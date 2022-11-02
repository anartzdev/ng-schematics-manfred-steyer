import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { MenuOptions } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function nav(_options: MenuOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
