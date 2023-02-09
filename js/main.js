const JSZip = require("jszip");
import {compileDatapack} from "./datapack.js";

export function main() {
  let trimData = {
    material: document.getElementById("trim-material").value,
    color: document.getElementById("rgb-tooltip").value,
    index: document.getElementById("model-index").value
  };

  console.log("Material: " + trimData.material);
  console.log("Color: " + trimData.color);
  console.log("Index: " + trimData.index);
  //alert("AGGA");

  let resourcepack = new JSZip();
  resourcepack.file("pack.mcmeta");
  let datapack = compileDatapack(trimData);
  datapack.generateAsync({type:"blob"}).then(function (blob) { // 1) generate the zip file
    saveAs(blob, `${trimData.material}_trim_datapack.zip`);                          // 2) trigger the download
  });
}