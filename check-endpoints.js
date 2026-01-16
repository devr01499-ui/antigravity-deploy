const http = require('http');

const routes = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/careers',
    '/partner',
    '/terms',
    '/privacy',
    '/services/finance-accounting',
    '/services/recruitment-rpo',
    '/services/ai-data',
    '/services/sales-lead-generation',
    '/services/customer-support',
    '/services/back-office'
];

let completed = 0;
let errors = 0;

console.log('Starting health check...');

routes.forEach(route => {
    const req = http.get(`http://localhost:3000${route}`, (res) => {
        if (res.statusCode !== 200) {
            console.error(`❌ ${route}: ${res.statusCode}`);
            errors++;
        } else {
            console.log(`✅ ${route}: 200 OK`);
        }
        completed++;
        if (completed === routes.length) {
            if (errors === 0) {
                console.log('All routes passed.');
                process.exit(0);
            } else {
                console.error(`${errors} routes failed.`);
                process.exit(1);
            }
        }
    });

    req.on('error', (e) => {
        console.error(`❌ ${route}: Connection Error ${e.message}`);
        completed++;
        errors++;
        if (completed === routes.length) process.exit(1);
    });
});
