export function takeAChance(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() <= 0.5
        ? resolve(`Hooray! You're so lucky, ${name}!`)
        : reject(new Error(`It's just bad luck, ${name}.`));
    }, 2000);
  });
}
// export means function will be used somewhere. normal function that takes a string in, returning a promise
// contrived promise
// codeblock for promise starts w set timeout function, and wait 2000 ms
// function math.random <= 0.5 (half the time)
// resolved half time
// reject half time
