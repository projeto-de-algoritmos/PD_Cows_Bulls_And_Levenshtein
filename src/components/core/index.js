export const generateRandomString = (n) => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  if (n > possible.length) {
    throw new Error("n is too large");
  }

  const maxN = Math.floor(Math.random() * (n - 1)) + 1;

  for (let i = 0; i < maxN; i++) {
    let newChar = possible.charAt(Math.floor(Math.random() * possible.length));
    while (text.includes(newChar)) {
      newChar = possible.charAt(Math.floor(Math.random() * possible.length));
    }
    text += newChar;
  }

  return text;
};

export const countBulls = (guess, secret) => {
  let bulls = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    }
  }
  return bulls;
};

export const countCows = (guess, secret) => {
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    for (let j = 0; j < secret.length; j++) {
      if (guess[i] === secret[j] && i !== j) {
        cows++;
      }
    }
  }
  return cows;
};

export const getLevenshteinDistance = (a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) +
          1;
      }
    }
  }

  return matrix[b.length][a.length];
};
