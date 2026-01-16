const icons = require('lucide-react');
const requiredHooks = [
    'FileText', 'CheckCircle', 'ArrowRight', 'Globe', 'Bot', 'Users',
    'Zap', 'Target', 'ShieldCheck', 'Clock', 'Activity', 'Database',
    'Cog', 'BarChart3', 'Layers', 'Upload'
];

requiredHooks.forEach(icon => {
    if (!icons[icon]) {
        console.error(`Missing icon: ${icon}`);
    } else {
        console.log(`Found icon: ${icon}`);
    }
});
