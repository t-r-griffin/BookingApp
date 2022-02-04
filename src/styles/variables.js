export const colors = {
  purpleByzantium: '#702963',
  primary: '#32cd32',
  primaryLight: '#0fff50',
  primaryDark: '#009e60',
  greyLight1: '#faf9f9',
  greyLight2: '#f4f2f2',
  greyLight3: '#f0eeee',
  greyLight4: '#ccc',
  greyDark1: '#333',
  greyDark2: '#777',
  greyDark3: '#999',
  shadowDark: '0 2rem 6rem rgba(0,0,0,.3)',
  shadowLight: '0 2rem 5rem rgba(0,0,0,.06)',
  get line() {
    return `1px solid ${this.greyLight2}`;
  },
};

export const fontVariables = {
  fontPrimary: 'Nunito, sans-serif',
  fontDisplay: 'Josefin Sans, sans-serif',
};

export const breakPoints = {
  bpLargest: '75em', // 1200px
  bpLarge: '62.5em', // 1000px
  bpMedium: '50em', // 800px;
  bpSmall: '37.5em', // 600px;
};
