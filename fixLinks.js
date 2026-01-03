const fs = require("fs");
const path = require("path");

// Dossier où se trouvent les docs
const docsDir = path.join(__dirname, "docs");

// Expression régulière pour matcher les liens Markdown sans https:// ou http://
const linkRegex = /\[([^\]]+)\]\((?!https?:\/\/)([^\)]+)\)/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let newContent = content.replace(linkRegex, (_, text, url) => {
    // On ignore les liens relatifs (commençant par /)
    if (url.startsWith("/")) return `[${text}](${url})`;
    // Ajouter https:// devant le lien
    return `[${text}](https://${url})`;
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log(`Corrigé : ${filePath}`);
  }
}

function traverseDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      traverseDir(fullPath);
    } else if (entry.isFile() && fullPath.endsWith(".md")) {
      processFile(fullPath);
    }
  }
}

traverseDir(docsDir);
console.log("Tous les liens externes corrigés !");
