import { Member, Area } from './lib/Util'
import { Member as MyMember, Area as MyArea } from './lib/Util'

var m = new Member('tk', 'y');
var m = new app.Member('tk', 'y');
var m = new MyMember('tk', 'y');

console.log(m.getName());
console.log(MyArea.getTriangle(10, 5));

