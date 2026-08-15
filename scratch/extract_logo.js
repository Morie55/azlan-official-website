const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../azlan_official_website_ui/home_azlan_sl_limited_2/code.html');
const outputPath = path.join(__dirname, '../src/components/AZLANLogo.tsx');

const html = fs.readFileSync(htmlPath, 'utf8');
const match = html.match(/src="(data:image\/png;base64,[^"]+)"/);

if (match && match[1]) {
  const base64 = match[1];
  const componentContent = `import React from "react";

interface AZLANLogoProps {
  className?: string;
}

export const AZLANLogo: React.FC<AZLANLogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <img
      src="${base64}"
      alt="AZLAN (SL) LIMITED Logo"
      className={className}
    />
  );
};
`;
  
  // Ensure the directory exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, componentContent, 'utf8');
  console.log('Logo component extracted and written to:', outputPath);
} else {
  console.error('Could not find base64 logo image in code.html');
}
