import * as lucide from 'lucide-react';
import fs from 'fs';

const available = Object.keys(lucide).filter(k => 
  ['Github', 'Linkedin', 'Mail', 'Discord', 'MessageSquare', 'Instagram', 'Twitter', 'X'].includes(k)
);

fs.writeFileSync('output.txt', JSON.stringify(available));
console.log('Done');
