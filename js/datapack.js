const JSZip = require("jszip");

export function compileDatapack(data) {
  let out = new JSZip(data);
  let packSpec = {
    "pack":{
      "description": `Adds support for ${data.material} trim colors. Pack generated from http://lunapixu.github.io/minecraft-trim-tool/`,
      "pack_format": 11
    }
  }
  out.file("pack.mcmeta",JSON.stringify(packSpec, null, "\t"));
  return out;
}