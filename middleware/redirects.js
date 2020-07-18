const map = [
  ['', '/projects'],
  ['résumé', '/resume'],
  ['github', 'https://github.com/ricardoboss'],
];

export default function ({ redirect, route }) {
  let path = route.path.substr(1);
  let match = map.find(v => v[0] === path);

  if (typeof match !== 'undefined' && match !== null) {
    redirect(match[1]);
  }
}
