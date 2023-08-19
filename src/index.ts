export function helloWorld() {
  return 'Hello World!';
}

export function classNames(...args: any[]) {
  return args.filter(Boolean).join(' ');
}
