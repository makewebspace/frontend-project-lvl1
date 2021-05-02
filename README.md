# Brain Games
The collection of games for training your brain.

![Actions Status](https://github.com/makewebspace/frontend-project-lvl1/workflows/hexlet-check/badge.svg)
![Actions Status](https://github.com/makewebspace/frontend-project-lvl1/workflows/quality-check/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)

## Install
```
git clone https://github.com/makewebspace/frontend-project-lvl1.git
make install-local
```

## List of games
- [Is Even Number](#is-even-number)
- [Simple Calculator](#simple-calculator)
- [Greatest Common Divisor](#greatest-common-divisor)
- [Arithmetic Progression](#arithmetic-progression)
- [Is Prime Number](#is-prime-number)

### Is Even Number
```
brain-even
```
[![asciicast](https://asciinema.org/a/JbPlMmbPQPZpsDoU0Ssf9V4P7.png)](https://asciinema.org/a/JbPlMmbPQPZpsDoU0Ssf9V4P7?autoplay=1&loop=1)

### Simple Calculator
```
brain-calc
```
[![asciicast](https://asciinema.org/a/iOrtvfCxMaVVGqyB8WGHDssIP.png)](https://asciinema.org/a/iOrtvfCxMaVVGqyB8WGHDssIP?autoplay=1&loop=1&speed=2)

### Greatest Common Divisor
```
brain-gcd
```
[![asciicast](https://asciinema.org/a/7oHwblfWwDlL4LW1XrmRjkAvc.png)](https://asciinema.org/a/7oHwblfWwDlL4LW1XrmRjkAvc?autoplay=1&loop=1)

### Arithmetic Progression
```
brain-progression
```
[![asciicast](https://asciinema.org/a/LXCBmRZ1bLyyIVhb64VM34FVY.png)](https://asciinema.org/a/LXCBmRZ1bLyyIVhb64VM34FVY?autoplay=1&loop=1&speed=2)

### Is Prime Number
```
brain-prime
```
[![asciicast](https://asciinema.org/a/NjWvRcEIvhynhbhzE9DNdH5s6.png)](https://asciinema.org/a/NjWvRcEIvhynhbhzE9DNdH5s6?autoplay=1&loop=1&speed=2)

## Usage on your code
```javascript
import start from '@hexlet/code';
import evenGame from '@hexlet/code/games/even.js';

// You have to specify input function
// to input users data to game engine
// Also, you have to specify the output function
// to display messages from game engine
start(evenGame, input, output);

```
