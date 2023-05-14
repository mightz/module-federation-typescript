# Example of using module federation with typescript in monorepo
 
1. Create remote app. Configure webpack with ModuleFederationPlugin, set exposed components
2. In tsconfig.json set __declaration__ to _true_ and __declarationDir__ to _"#MONOREPO_ROOT\_#/node_modules/@types/#REMOTE\_MODULE\_NAME#"_
3. Create host app. Configure webpack with ModuleFederationPlugin, set remote module