const fs = require('fs');
const path = require('path');

const srcDir = `${__dirname}/../src`;

fs.readdir(srcDir, (err, files) => {
	const svgs = files.filter(el => path.extname(el) === '.svg');

	svgs.forEach((svg) => {
		const svgPath = path.join(srcDir, svg);
		const svgContent = fs.readFileSync(svgPath, 'utf8');
		const svgContentFixed = svgContent.replace(/fill="#\w+"/g, 'fill="currentColor"');
		fs.writeFileSync(svgPath, svgContentFixed);
	})
})
