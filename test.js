function foo() {
  doBar();
}

const doBar = () => {
  foo();
}

[1, 2, 3].map(x => x);

[1, 2, 3].map(x => { x.y; });
