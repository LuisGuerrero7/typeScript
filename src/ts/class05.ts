type UserId =  number;
type UserName = string;
type UserActive = boolean;
type Point = {x: number ; y: string};

interface Person {id: number, name: string, age: number};
interface Admin extends Person {role: "Admin"};
interface Student extends Person {student: true};


type Status = 'idle'|'loading'|'success'|'error';
function setStatus(s: Status) { /* ... */ }
// Narrowing
function fmtLen(x: string | number) {
  if (typeof x === 'string') return x.length;
  return x.toFixed(2);
}


type ScreenState =
| {type :'idle'}
| {type: 'loading'}
| {type: 'error' ; message: string}
| {type: 'ready' ; data: string[]}

function render(s: ScreenState){
    switch (s.type){
        case 'ready' : return s.data.join(', ');
        case 'error' : return `Oops, ${s.message}`
        default: return "..."
    }
}



function first<T>(arr: T[]) : T | undefined {return arr[0];}

type User2 = {name: string, age: number, password: string};
type PublicUser = Omit<User2, 'password'>

const routes = {
    Home: '/',
    Details: '/details'
} as const satisfies Record<string,string>