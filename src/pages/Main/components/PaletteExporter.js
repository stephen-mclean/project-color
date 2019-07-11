import React, { useContext } from "react";
import { saveAs } from "file-saver";

import { PaletteContext } from "../../../components/PaletteProvider/PaletteProvider";
import Button from "../../../components/Button/Button";

const paletteToScssString = palette => {
  return palette.colors.reduce((result, color) => {
    const { name: baseColorName, base, variants } = color;

    const baseColorComment = `// ${baseColorName}\n`;
    const baseVarName = `$${baseColorName}-base`;
    const baseVarValue = base.color;
    const baseVarDeclaration = `${baseVarName}: ${baseVarValue};\n`;

    return (
      result +
      baseColorComment +
      baseVarDeclaration +
      variants.reduce((variantResult, variant) => {
        const { name: variantName } = variant;
        const variantVarName = `$${baseColorName}-${variantName}`;
        const variantVarValue = `${variant.variantType}(${baseVarName}, ${
          variant.interval
        }%)`;
        const variantEndComment = `// ${variant.color}`;
        const variantVarDeclaration = `${variantVarName}: ${variantVarValue}; ${variantEndComment}\n`;

        return variantResult + variantVarDeclaration;
      }, "")
    );
  }, "");
};

const PaletteExporter = () => {
  const { palette } = useContext(PaletteContext);

  const exportSCSS = () => {
    const scssContent = paletteToScssString(palette);
    const fileContents = new Blob([scssContent], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(fileContents, "palette.scss");
  };

  return (
    <Button className="btn btn--primary btn--outline" onClick={exportSCSS}>
      Export SCSS
    </Button>
  );
};

export default PaletteExporter;
