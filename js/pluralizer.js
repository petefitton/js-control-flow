var thing = 'cat';
var count = 9;
var pluralQ = '';

if (count > 1 || count < 1) {pluralQ = "s"};
if (count == 1) {pluralQ = ''};

console.log(count + ' ' + thing + pluralQ);

count = 1;
thing = 'dog';

console.log(count + ' ' + thing + pluralQ);

count = -1;
thing = 'rat';

console.log(count + ' ' + thing + pluralQ);

count = 0;
thing = 'hamster';

console.log(count + ' ' + thing + pluralQ);

count = 3;
thing = 'bird'

console.log(count + ' ' + thing + pluralQ);
